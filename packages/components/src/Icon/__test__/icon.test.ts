import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import PotIcon from '../src/icon.vue'

describe('PotIcon', () => {
  it('renders correctly with given iconClass prop', () => {
    const wrapper = mount(PotIcon, {
      props: {
        iconClass: 'play',
      },
    })
    expect(wrapper.html()).toContain('#icon-play')
  })

  it('applies the correct class to the svg element', () => {
    const wrapper = mount(PotIcon)
    expect(wrapper.find('svg').classes()).toContain('pot-icon')
  })
})
