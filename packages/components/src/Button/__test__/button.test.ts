import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import button from '../src/button.vue'

describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'PotButton',
      },
    })

    expect(wrapper.html()).toContain('PotButton')
  })

  it('should have class and default slot', () => {
    const wrapper = mount(button, {
      props: {
        type: 'yellow',
      },
    })

    expect(wrapper.classes()).toContain('pot-button--yellow')
    expect(wrapper.html()).toContain('Yellow')
  })
})
