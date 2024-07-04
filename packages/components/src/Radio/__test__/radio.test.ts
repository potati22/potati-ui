import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PotRadioGroup from '../src/radio-group.vue'
import PotRadio from '../src/radio.vue'

describe('PotRadioGroup and PotRadio', () => {
  it('renders radio group and radio buttons correctly', () => {
    const wrapper = mount(PotRadioGroup, {
      slots: {
        default: `
          <PotRadio value="option1">Option 1</PotRadio>
          <PotRadio value="option2">Option 2</PotRadio>
        `,
      },
      global: {
        components: {
          PotRadio,
        },
      },
    })
    expect(wrapper.findAllComponents(PotRadio).length).toBe(2)
    expect(wrapper.findAll('label.pot-radio').length).toBe(2)
  })

  it('provides radio group data to radio buttons', () => {
    const wrapper = mount(PotRadioGroup, {
      slots: {
        default: `
          <PotRadio value="option1">Option 1</PotRadio>
          <PotRadio value="option2">Option 2</PotRadio>
        `,
      },
      props: {
        modelValue: 'option1',
      },
      global: {
        components: {
          PotRadio,
        },
      },
    })

    const radios = wrapper.findAllComponents(PotRadio)
    expect(radios[0].classes()).toContain('pot-radio_checked')
    expect(radios[1].classes()).not.toContain('pot-radio_checked')
  })

  it('updates modelValue correctly when radio button is clicked', async () => {
    const wrapper = mount(PotRadioGroup, {
      slots: {
        default: `
          <PotRadio value="option1">Option 1</PotRadio>
          <PotRadio value="option2">Option 2</PotRadio>
        `,
      },
      props: {
        modelValue: 'option1',
      },
      global: {
        components: {
          PotRadio,
        },
      },
    })

    const radios = wrapper.findAllComponents(PotRadio)
    await radios[1].find('input').trigger('focus')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['option2'])
  })

  it('radio buttons update their checked state based on modelValue', async () => {
    const wrapper = mount(PotRadioGroup, {
      slots: {
        default: `
          <PotRadio value="option1">Option 1</PotRadio>
          <PotRadio value="option2">Option 2</PotRadio>
        `,
      },
      props: {
        modelValue: 'option1',
      },
      global: {
        components: {
          PotRadio,
        },
      },
    })

    await wrapper.setProps({ modelValue: 'option2' })

    const radios = wrapper.findAllComponents(PotRadio)
    expect(radios[0].classes()).not.toContain('pot-radio_checked')
    expect(radios[1].classes()).toContain('pot-radio_checked')
  })
})
