import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import PotMessage from '../src/message.vue'
import { instances } from '../src/method'
import message from '../src/method'

describe('PotMessage', () => {
  beforeEach(() => {
    // 清除之前的实例
    instances.splice(0, instances.length)
  })

  it('renders with correct props', () => {
    const wrapper = mount(PotMessage, {
      props: {
        id: 'test-id',
        type: 'success',
        message: 'This is a success message',
      },
    })
    expect(wrapper.find('.pot-message--success').exists()).toBe(true)
    expect(wrapper.text()).toContain('This is a success message')
  })

  it('displays and hides the message after duration', async () => {
    vi.useFakeTimers()

    const wrapper = mount(PotMessage, {
      props: {
        id: 'test-id',
        type: 'success',
        message: 'This is a success message',
        duration: 3000,
      },
    })

    type VM = typeof wrapper.vm
    type PotMessageInstance = VM & {
      visible?: boolean
    }
    const vm: PotMessageInstance = wrapper.vm

    expect(vm.visible).toBe(true)
    vi.advanceTimersByTime(3000)
    await vm.$nextTick()

    expect(vm.visible).toBe(false)

    vi.useRealTimers()
  })

  it('closes the message when close is called', async () => {
    const wrapper = mount(PotMessage, {
      props: {
        id: 'test-id',
        type: 'success',
        message: 'This is a success message',
      },
    })

    type VM = typeof wrapper.vm
    type PotMessageInstance = VM & {
      visible?: boolean
    }
    const vm: PotMessageInstance = wrapper.vm

    vm.visible = false
    await vm.$nextTick()

    expect(vm.visible).toBe(false)
  })

  it('message function creates and displays a message', () => {
    message({
      type: 'success',
      message: 'This is a success message',
    })

    expect(instances.length).toBe(1)
    const instance = instances[0]
    expect(document.body.innerHTML).toContain('This is a success message')
    expect(instance.handler).toBeDefined()
  })

  it('message function closes the message correctly', async () => {
    const handler = message({
      type: 'success',
      message: 'This is a success message',
    })

    expect(instances.length).toBe(1)
    handler.close()
    await new Promise((resolve) => setTimeout(resolve, 600))
    expect(instances.length).toBe(0)
  })
})
