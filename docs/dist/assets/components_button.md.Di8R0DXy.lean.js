import {
  _ as o,
  M as p,
  o as e,
  a as n,
  k as i,
  e as t,
  b as s,
  $ as d,
} from './chunks/framework.CD4fBMdo.js'
const r = {}
function k(l, h) {
  const a = p('PotButton')
  return e(), n('div', null, [i(a), i(a, { type: 'yellow' })])
}
const c = o(r, [['render', k]]),
  E = t(
    'h1',
    { id: 'button-按钮', tabindex: '-1' },
    [
      s('Button 按钮 '),
      t(
        'a',
        {
          class: 'header-anchor',
          href: '#button-按钮',
          'aria-label': 'Permalink to "Button 按钮"',
        },
        '​',
      ),
    ],
    -1,
  ),
  _ = t('p', null, '常用的操作按钮。', -1),
  u = t(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      s('基础用法 '),
      t(
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
  g = t(
    'p',
    null,
    [
      s('按钮可以根据 '),
      t('code', null, 'type'),
      s(' 来设置不同的颜色，如'),
      t('code', null, 'yellow'),
    ],
    -1,
  ),
  y = d('', 4),
  P = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}',
  ),
  m = { name: 'components/button.md' },
  f = Object.assign(m, {
    setup(l) {
      return (h, a) => (e(), n('div', null, [E, _, u, g, i(c), y]))
    },
  })
export { P as __pageData, f as default }
