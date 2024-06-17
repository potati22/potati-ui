type FnType = (...args: unknown[]) => void

export function throttle(fn: FnType, ms: number) {
  let timer: NodeJS.Timeout | null = null

  return function (...args: unknown[]) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, ms)
  }
}
