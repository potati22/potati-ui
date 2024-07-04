import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PotSwitch from '../src/switch.vue'

describe('PotSwitch', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(PotSwitch)
    expect(wrapper.classes()).toContain('pot-switch')
    expect(wrapper.classes()).toContain('pot-switch_off')
    expect(wrapper.find('.pot-switch--core').classes()).toContain(
      'pot-switch--core_off',
    )
  })

  it('renders correctly with modelValue true', () => {
    const wrapper = mount(PotSwitch, {
      props: {
        modelValue: true,
      },
    })
    expect(wrapper.classes()).toContain('pot-switch')
    expect(wrapper.classes()).toContain('pot-switch_on')
    expect(wrapper.find('.pot-switch--core').classes()).toContain(
      'pot-switch--core_on',
    )
  })

  it('emits update:modelValue with correct value on click', async () => {
    const wrapper = mount(PotSwitch, {
      props: {
        modelValue: false,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  it('toggles modelValue on click', async () => {
    const wrapper = mount(PotSwitch, {
      props: {
        modelValue: false,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
    await wrapper.setProps({ modelValue: true })
    await wrapper.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false])
  })
})
