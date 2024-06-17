import {
  d as y,
  f as p,
  a6 as c,
  j as e,
  o as s,
  a as i,
  O as F,
  P as u,
  t as C,
  _,
  c as g,
  e as n,
  v as D,
  x as f,
  k as o,
  b as B,
  $ as m,
} from './chunks/framework.D7pjZlIy.js'
const v = { class: 'list', 'infinite-scroll-distance': 50 },
  b = y({
    __name: 'basic',
    setup(E) {
      const a = p(5),
        t = () => {
          setTimeout(() => {
            a.value += 5
          }, 2e3)
        }
      return (l, d) => {
        const h = c('infinite-scroll')
        return e(
          (s(),
          i('ul', v, [
            (s(!0),
            i(
              F,
              null,
              u(
                a.value,
                (k) => (s(), i('li', { key: k, class: 'list-item' }, C(k), 1)),
              ),
              128,
            )),
          ])),
          [[h, t]],
        )
      }
    },
  }),
  q = _(b, [['__scopeId', 'data-v-4897994a']]),
  T = ['infinite-scroll-disabled'],
  P = { key: 0 },
  x = y({
    __name: 'disable',
    setup(E) {
      const a = p(5),
        t = p(!1),
        l = g(() => a.value >= 20),
        d = g(() => t.value || l.value),
        h = () => {
          ;(t.value = !0),
            setTimeout(() => {
              ;(a.value += 5), (t.value = !1)
            }, 2e3)
        }
      return (k, j) => {
        const A = c('infinite-scroll')
        return e(
          (s(),
          i(
            'ul',
            { class: 'list', 'infinite-scroll-disabled': d.value },
            [
              (s(!0),
              i(
                F,
                null,
                u(
                  a.value,
                  (r) => (
                    s(), i('li', { key: r, class: 'list-item' }, C(r), 1)
                  ),
                ),
                128,
              )),
              e(n('div', null, 'loading ...', 512), [[D, t.value]]),
              l.value ? (s(), i('div', P, 'no more')) : f('', !0),
            ],
            8,
            T,
          )),
          [[A, h]],
        )
      }
    },
  }),
  S = _(x, [['__scopeId', 'data-v-e7f5eaff']]),
  I = n(
    'h1',
    { id: 'infinite-scroll-无限滚动', tabindex: '-1' },
    [
      B('Infinite Scroll 无限滚动 '),
      n(
        'a',
        {
          class: 'header-anchor',
          href: '#infinite-scroll-无限滚动',
          'aria-label': 'Permalink to "Infinite Scroll 无限滚动"',
        },
        '​',
      ),
    ],
    -1,
  ),
  V = n('p', null, '滚动至底部时，加载更多数据。', -1),
  N = n(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      B('基础用法 '),
      n(
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
  $ = n(
    'p',
    null,
    '在要实现滚动加载的列表上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法',
    -1,
  ),
  M = m('', 2),
  w = m('', 4),
  J = JSON.parse(
    '{"title":"Infinite Scroll 无限滚动","description":"","frontmatter":{},"headers":[],"relativePath":"components/infinite-scroll.md","filePath":"components/infinite-scroll.md"}',
  ),
  O = { name: 'components/infinite-scroll.md' },
  L = Object.assign(O, {
    setup(E) {
      return (a, t) => (s(), i('div', null, [I, V, N, $, o(q), M, o(S), w]))
    },
  })
export { J as __pageData, L as default }
