import { createVNode, render, reactive } from 'vue'
import MessageConstructor from './message.vue'
import IconConstructor from './icon.vue'

import type { MessageOptions, MessageProps } from './message'

interface MessageInstance {
  id: string
  container: Element
  handler: {
    close: () => void
  }
}

export const instances: MessageInstance[] = reactive([])
let seed = 1
let iconInseted = false

// 将ICON图标挂载到页面，并只挂载一次
function insetIconJustOnce() {
  if (iconInseted) return
  iconInseted = true
  const vnode = createVNode(IconConstructor)
  const container = document.createElement('div')
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)
}

export function closeInstance(id: string) {
  setTimeout(() => {
    const idx = instances.findIndex((instance) => instance.id == id)
    render(null, instances[idx].container)
    instances.splice(idx, 1)
  }, 600) // 淡出动画结束后再卸载组件
}

function createMessage(options: MessageOptions) {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const props: MessageProps = {
    ...options,
    id,
  }

  const vnode = createVNode(MessageConstructor, props as Record<string, any>)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const handler = {
    close: () => {
      vm.exposed!.close()
    },
  }

  const instance: MessageInstance = {
    id,
    container,
    handler,
  }

  return instance
}

function message(options: MessageOptions) {
  !iconInseted && insetIconJustOnce()

  const instance = createMessage(options)
  instances.push(instance)

  return instance.handler
}

export default message
