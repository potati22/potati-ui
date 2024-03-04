import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import icon from '../src/icon.vue'

describe('test icon', () => {
  it('should have id', () => {
    const wrapper = mount(icon, {
      props: {
        iconClass: 'play',
      },
    })

    expect(wrapper.html()).toContain('#icon-play')
  })
})
