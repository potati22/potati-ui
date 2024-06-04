import {
  d as g,
  f as c,
  M as e,
  o as p,
  a as k,
  k as i,
  w as n,
  e as s,
  t as y,
  b as a,
  $ as u,
} from './chunks/framework.CD4fBMdo.js'
const _ = { style: { 'margin-top': '15px' } },
  F = g({
    __name: 'basic',
    setup(d) {
      const t = c('option1')
      return (o, l) => {
        const h = e('PotRadio'),
          r = e('PotRadioGroup')
        return (
          p(),
          k('div', null, [
            i(
              r,
              {
                modelValue: t.value,
                'onUpdate:modelValue': l[0] || (l[0] = (E) => (t.value = E)),
              },
              {
                default: n(() => [
                  i(
                    h,
                    { value: 'option1' },
                    { default: n(() => [a('选项一')]), _: 1 },
                  ),
                  i(
                    h,
                    { value: 'option2' },
                    { default: n(() => [a('选项二')]), _: 1 },
                  ),
                  i(
                    h,
                    { value: 'option3' },
                    { default: n(() => [a('选项三')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            s('div', _, '你的选择为：' + y(t.value), 1),
          ])
        )
      }
    },
  }),
  m = s(
    'h1',
    { id: 'radio-单选框', tabindex: '-1' },
    [
      a('Radio 单选框 '),
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
  b = s('p', null, '在一组备选项中进行单选', -1),
  P = s(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      a('基础用法 '),
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
  v = s(
    'p',
    null,
    '单选框不应该有太多的可选项， 如果你有很多的可选项，则应使用选择框',
    -1,
  ),
  C = u('', 7),
  R = JSON.parse(
    '{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}',
  ),
  f = { name: 'components/radio.md' },
  B = Object.assign(f, {
    setup(d) {
      return (t, o) => (p(), k('div', null, [m, b, P, v, i(F), C]))
    },
  })
export { R as __pageData, B as default }
