import { a as t } from './chunks/theme.CRhBkTXh.js'
import {
  d as o,
  L as c,
  o as p,
  a as k,
  k as a,
  w as e,
  b as s,
  e as i,
  Z as g,
} from './chunks/framework.DeWdQpWQ.js'
const y = o({
    __name: 'basic',
    setup(r) {
      function l() {
        t({ type: 'info', message: '这是一条Info类型的消息' })
      }
      function h() {
        t({ type: 'success', message: '这是一条Success类型的消息' })
      }
      function d() {
        t({ type: 'error', message: '这是一条Error类型的消息' })
      }
      function E() {
        t({ type: 'warning', message: '这是一条Warning类型的消息' })
      }
      return (b, B) => {
        const n = c('PotButton')
        return (
          p(),
          k('div', null, [
            a(n, { onClick: l }, { default: e(() => [s('info')]), _: 1 }),
            a(n, { onClick: h }, { default: e(() => [s('success')]), _: 1 }),
            a(n, { onClick: d }, { default: e(() => [s('error')]), _: 1 }),
            a(n, { onClick: E }, { default: e(() => [s('warning')]), _: 1 }),
          ])
        )
      }
    },
  }),
  u = i(
    'h1',
    { id: 'message-消息提示', tabindex: '-1' },
    [
      s('Message 消息提示 '),
      i(
        'a',
        {
          class: 'header-anchor',
          href: '#message-消息提示',
          'aria-label': 'Permalink to "Message 消息提示"',
        },
        '​',
      ),
    ],
    -1,
  ),
  F = i(
    'p',
    null,
    '常用于主动操作后的反馈提示，一共有四种状态「消息、成功、错误、警告」',
    -1,
  ),
  m = i(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      s('基础用法 '),
      i(
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
  _ = i(
    'p',
    null,
    [
      s('从顶部出现，默认只显示3秒（当参数'),
      i('code', null, 'duration'),
      s('设置为0时，提示框需要调用返回的'),
      i('code', null, 'close'),
      s('方法，才会消失）'),
    ],
    -1,
  ),
  f = g('', 7),
  v = JSON.parse(
    '{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}',
  ),
  C = { name: 'components/message.md' },
  M = Object.assign(C, {
    setup(r) {
      return (l, h) => (p(), k('div', null, [u, F, m, _, a(y), f]))
    },
  })
export { v as __pageData, M as default }
