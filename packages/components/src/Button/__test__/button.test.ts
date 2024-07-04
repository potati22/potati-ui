import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PotButton from '../src/button.vue'

describe('PotButton', () => {
  it('renders default slot content when no type is provided', () => {
    const wrapper = mount(PotButton)
    expect(wrapper.text()).toBe('Default')
  })

  it('renders slot content based on type prop', () => {
    const wrapper = mount(PotButton, {
      props: {
        type: 'yellow',
      },
    })
    expect(wrapper.text()).toBe('Yellow')
  })

  it('applies correct class based on type prop', () => {
    const wrapper = mount(PotButton, {
      props: {
        type: 'yellow',
      },
    })
    expect(wrapper.classes()).toContain('pot-button--yellow')
  })

  it('has the correct default class', () => {
    const wrapper = mount(PotButton)
    expect(wrapper.classes()).toContain('pot-button')
  })

  it('renders custom slot content', () => {
    const wrapper = mount(PotButton, {
      slots: {
        default: 'Custom Button',
      },
    })
    expect(wrapper.text()).toBe('Custom Button')
  })
})
