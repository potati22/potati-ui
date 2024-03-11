import {
  d,
  h as r,
  E as o,
  o as t,
  c as l,
  J as h,
  m as s,
  a as p,
  V as g,
} from './chunks/framework.DzsyM-52.js'
const y = d({
    __name: 'basic',
    setup(k) {
      const i = r(''),
        a = [
          { label: 'option1', value: 'option1', id: 1 },
          { label: 'option2', value: 'option2', id: 2 },
          { label: 'option3', value: 'option3', id: 3 },
        ]
      return (B, n) => {
        const e = o('PotRadio')
        return (
          t(),
          l('div', null, [
            h(
              e,
              {
                modelValue: i.value,
                'onUpdate:modelValue': n[0] || (n[0] = (E) => (i.value = E)),
                name: 'example',
                options: a,
              },
              null,
              8,
              ['modelValue'],
            ),
          ])
        )
      }
    },
  }),
  c = s(
    'h1',
    { id: 'radio-单选框', tabindex: '-1' },
    [
      p('Radio 单选框 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#radio-单选框',
          'aria-label': 'Permalink to "Radio 单选框"',
        },
        '​',
      ),
    ],
    -1,
  ),
  F = s('p', null, '在一组备选项中进行单选', -1),
  u = s(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      p('基础用法 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#基础用法',
          'aria-label': 'Permalink to "基础用法"',
        },
        '​',
      ),
    ],
    -1,
  ),
  m = s(
    'p',
    null,
    '单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框',
    -1,
  ),
  C = g('', 4),
  A = JSON.parse(
    '{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}',
  ),
  _ = { name: 'components/radio.md' },
  v = Object.assign(_, {
    setup(k) {
      return (i, a) => (t(), l('div', null, [c, F, u, m, h(y), C]))
    },
  })
export { A as __pageData, v as default }
