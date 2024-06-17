import { nextTick } from 'vue'
import { throwError } from '../../utils/error'
import { throttle } from '../../utils/common'
import { isScroll } from '../../utils/dom/scroll'

import type { ObjectDirective } from 'vue'

export const SCOPE = 'PotInfiniteScroll'
export const CHECK_INTERVAL = 50
export const DEFAULT_DELAY = 200
export const DEFAULT_DISTANCE = 0

type InfiniteScrollCallback = () => void
type InfiniteScrollEl = HTMLElement & {
  [SCOPE]: {
    lastScrollTop: number
    cb: InfiniteScrollCallback
    onScroll: () => void
    observer?: MutationObserver
  }
}

const attributes = {
  delay: {
    type: Number,
    default: DEFAULT_DELAY,
  },
  distance: {
    type: Number,
    default: DEFAULT_DISTANCE,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
}
type Attrs = typeof attributes
type ScrollOptions = { [K in keyof Attrs]: Attrs[K]['default'] }

const getScrollOptions = (el: HTMLElement): ScrollOptions => {
  return Object.entries(attributes).reduce((acm, [key, option]) => {
    const { type, default: defaultValue } = option
    const attrVal = el.getAttribute(`infinite-scroll-${key}`)
    let value = attrVal ?? defaultValue
    value = value === 'false' ? false : value
    value = type(value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    acm[key] = Number.isNaN(value) ? defaultValue : value
    return acm
  }, {} as ScrollOptions)
}

const handleScroll = (el: InfiniteScrollEl, cb: InfiniteScrollCallback) => {
  const { observer, lastScrollTop } = el[SCOPE]

  const { disabled, distance } = getScrollOptions(el)
  const { clientHeight, scrollHeight, scrollTop } = el
  const delta = scrollTop - lastScrollTop

  el[SCOPE].lastScrollTop = scrollTop

  if (observer || disabled || delta < 0) return

  const shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance

  if (shouldTrigger) cb()
}

const destroyObserver = (el: InfiniteScrollEl) => {
  const { observer } = el[SCOPE]

  if (observer) {
    observer.disconnect()
    delete el[SCOPE].observer
  }
}

// 初始化容器子元素 让容器出现滚动条 帮助之后进行scroll事件的监听
function checkFull(el: InfiniteScrollEl, cb: InfiniteScrollCallback) {
  const { disabled } = getScrollOptions(el)

  if (disabled || el.clientHeight === 0) return

  if (el.scrollHeight <= el.clientHeight) {
    cb()
  } else {
    destroyObserver(el)
  }
}

const InfiniteScroll: ObjectDirective<
  InfiniteScrollEl,
  InfiniteScrollCallback
> = {
  async mounted(el, binding) {
    if (!isScroll(el)) throw '绑定的元素不具有滚动机制'

    const cb = binding.value

    if (typeof cb !== 'function') {
      throwError(SCOPE, "'v-infinite-scroll' binding value must be a function")
    }

    await nextTick() // ensure parentNode mounted

    const { delay, immediate } = getScrollOptions(el)
    const onScroll = throttle(handleScroll.bind(null, el, cb), delay)

    el[SCOPE] = {
      lastScrollTop: el.scrollTop,
      cb,
      onScroll,
    }

    if (immediate) {
      const observer = new MutationObserver(
        throttle(checkFull.bind(null, el, cb), CHECK_INTERVAL),
      )
      el[SCOPE].observer = observer
      observer.observe(el, { childList: true, subtree: true })
      checkFull(el, cb)
    }

    el.addEventListener('scroll', onScroll)
  },
  unmounted(el) {
    const { onScroll } = el[SCOPE]
    el.removeEventListener('scroll', onScroll)
    destroyObserver(el)
  },
}

export default InfiniteScroll
