import {
  d as m,
  c as $,
  o as a,
  a as l,
  r as u,
  n as L,
  b as A,
  t as P,
  e as d,
  i as J,
  u as i,
  p as me,
  f as S,
  g as U,
  h as k,
  w as h,
  j as et,
  v as tt,
  k as f,
  l as Be,
  T as se,
  m as ot,
  q as ge,
  s as He,
  x as _,
  _ as g,
  y as st,
  z as nt,
  A as at,
  B as $e,
  C as W,
  D as E,
  E as F,
  F as G,
  G as de,
  H as R,
  I as ne,
  J as be,
  K as Ae,
  L as rt,
  M as it,
  N as q,
  O as I,
  P as H,
  Q as ze,
  R as ae,
  S as j,
  U as Ee,
  V as re,
  W as ee,
  X as lt,
  Y as ct,
  Z as Fe,
  $ as ut,
  a0 as dt,
  a1 as De,
  a2 as vt,
  a3 as ht,
  a4 as pt,
  a5 as ft,
} from './framework.D7pjZlIy.js'
const Z = (o, e) => {
    if (
      ((o.install = (t) => {
        for (const s of [o, ...Object.values(e ?? {})]) t.component(s.name, s)
      }),
      e)
    )
      for (const [t, s] of Object.entries(e)) o[t] = s
    return o
  },
  _t = (o = []) => ({
    install: (e) => {
      o.forEach((t) => e.use(t))
    },
  }),
  mt = (o, e) => (
    (o.install = (t) => {
      ;(o._context = t._context), (t.config.globalProperties[e] = o)
    }),
    o
  ),
  gt = m({
    name: 'PotButton',
    __name: 'button',
    props: { type: { default: void 0 } },
    setup(o) {
      const e = o,
        t = $(() => ({ [`pot-button--${e.type}`]: e.type })),
        s = $(() =>
          e.type
            ? e.type.replace(e.type.charAt(0), e.type.charAt(0).toUpperCase())
            : 'Default',
        )
      return (n, r) => (
        a(),
        l(
          'button',
          { ref: 'buttonRef', class: L(['pot-button', t.value]) },
          [u(n.$slots, 'default', {}, () => [A(P(s.value), 1)])],
          2,
        )
      )
    },
  }),
  $t = Z(gt),
  bt = { class: 'pot-icon' },
  kt = ['xlink:href'],
  yt = m({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(o) {
      const e = o,
        t = $(() => `#icon-${e.iconClass}`)
      return (s, n) => (
        a(), l('svg', bt, [d('use', { 'xlink:href': t.value }, null, 8, kt)])
      )
    },
  }),
  xe = Z(yt),
  Oe = Symbol('radio-group')
function wt(o, e) {
  const t = J(o, e)
  if (!t) throw new Error('该组件的上游组件需注入正确的值')
  return t
}
const Vt = ['name', 'value'],
  Pt = m({
    name: 'PotRadio',
    __name: 'radio',
    props: { value: { default: '' } },
    setup(o) {
      const e = o,
        t = wt(Oe)
      function s(n) {
        const r = n.target
        t.changeRadioValue(r.value)
      }
      return (n, r) => (
        a(),
        l(
          'label',
          {
            class: L([
              'pot-radio',
              { 'pot-radio_checked': e.value === i(t).checkedValue.value },
            ]),
          },
          [
            d(
              'input',
              { type: 'radio', name: i(t).name, value: e.value, onFocus: s },
              null,
              40,
              Vt,
            ),
            u(n.$slots, 'default'),
          ],
          2,
        )
      )
    },
  }),
  Ce = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function Lt(o) {
  return `${o}-${Ce.prefix}-${Ce.current++}`
}
const St = { class: 'pot-radio-group' },
  Mt = m({
    name: 'PotRadioGroup',
    __name: 'radio-group',
    props: { modelValue: { default: '' } },
    emits: ['update:modelValue'],
    setup(o, { emit: e }) {
      const t = o,
        s = e,
        n = $(() => t.modelValue)
      return (
        me(Oe, {
          name: Lt('radio-group-name'),
          changeRadioValue: (r) => {
            s('update:modelValue', r)
          },
          checkedValue: n,
        }),
        (r, c) => (a(), l('div', St, [u(r.$slots, 'default')]))
      )
    },
  }),
  Ct = Z(Pt),
  Tt = Z(Mt),
  It = m({
    name: 'PotSwitch',
    __name: 'switch',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(o, { emit: e }) {
      const t = o,
        s = e
      function n() {
        s('update:modelValue', !t.modelValue)
      }
      return (r, c) => (
        a(),
        l(
          'div',
          {
            class: L([
              'pot-switch',
              [t.modelValue ? 'pot-switch_on' : 'pot-switch_off'],
            ]),
            onClick: n,
          },
          [
            d(
              'div',
              {
                class: L([
                  'pot-switch--core',
                  [
                    t.modelValue
                      ? 'pot-switch--core_on'
                      : 'pot-switch--core_off',
                  ],
                ]),
              },
              null,
              2,
            ),
          ],
          2,
        )
      )
    },
  }),
  Nt = Z(It),
  Bt = ['id'],
  Ht = m({
    name: 'PotMessage',
    __name: 'message',
    props: {
      id: {},
      type: { default: 'info' },
      message: { default: 'message content' },
      duration: { default: 3e3 },
    },
    setup(o, { expose: e }) {
      const t = o,
        s = S(!1),
        n = $(() => 30 + 50 * Y.findIndex((w) => w.id == t.id))
      let r
      const c = $(() => ['pot-message', `pot-message--${t.type}`]),
        p = $(() => ({ '--pot-message-top': `${n.value}px` }))
      U(() => {
        ;(s.value = !0), b()
      }),
        e({ close: v })
      function v() {
        ;(s.value = !1), Kt(t.id), y()
      }
      function b() {
        t.duration != 0 && (r = window.setTimeout(v, t.duration))
      }
      function y() {
        window.clearTimeout(r)
      }
      return (w, M) => (
        a(),
        k(
          se,
          { name: 'pot-message-fade' },
          {
            default: h(() => [
              et(
                d(
                  'div',
                  { id: t.id, class: L(c.value), style: Be(p.value) },
                  [
                    f(
                      i(xe),
                      {
                        'icon-class': t.type,
                        style: { 'margin-right': '5px' },
                      },
                      null,
                      8,
                      ['icon-class'],
                    ),
                    A(' ' + P(t.message), 1),
                  ],
                  14,
                  Bt,
                ),
                [[tt, s.value]],
              ),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  At = (o, e) => {
    const t = o.__vccOpts || o
    for (const [s, n] of e) t[s] = n
    return t
  },
  zt = {},
  Et = {
    t: '1717377933823',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '9844',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    style: { position: 'absolute', width: '0px', height: '0px' },
  },
  Ft = d(
    'symbol',
    { id: 'icon-success', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      d('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m234.057143-512.585143L469.333333 681.447619l-148.723809-148.723809 41.447619-41.496381 107.27619 107.27619 235.276191-235.27619 41.447619 41.496381z',
        'p-id': '9845',
      }),
    ],
    -1,
  ),
  Dt = d(
    'symbol',
    { id: 'icon-info', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      d('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m-29.330286-547.206095v-60.781714h58.660572v60.781714h-58.660572z m0 344.551619v-304.030476h58.660572v304.030476h-58.660572z',
        'p-id': '10331',
      }),
    ],
    -1,
  ),
  xt = d(
    'symbol',
    { id: 'icon-error', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      d('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m-170.081524-276.723809L470.552381 512l-128.609524-128.585143 41.496381-41.496381L512 470.552381l128.585143-128.609524 41.496381 41.496381L553.496381 512l128.585143 128.585143-41.496381 41.496381L512 553.496381l-128.585143 128.585143-41.496381-41.496381z',
        'p-id': '10007',
      }),
    ],
    -1,
  ),
  Ot = d(
    'symbol',
    { id: 'icon-warning', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      d('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m29.330286-608.01219v304.030476h-58.660572v-304.030476h58.660572z m0 344.551619v60.806095h-58.660572v-60.806095h58.660572z',
        'p-id': '10169',
      }),
    ],
    -1,
  ),
  Ut = [Ft, Dt, xt, Ot]
function jt(o, e) {
  return a(), l('svg', Et, Ut)
}
const Gt = At(zt, [['render', jt]]),
  Y = ot([])
let Rt = 1,
  ve = !1
function qt() {
  if (ve) return
  ve = !0
  const o = f(Gt),
    e = document.createElement('div')
  ge(o, e), document.body.appendChild(e.firstElementChild)
}
function Kt(o) {
  setTimeout(() => {
    const e = Y.findIndex((t) => t.id == o)
    ge(null, Y[e].container), Y.splice(e, 1)
  }, 600)
}
function Wt(o) {
  const e = `message_${Rt++}`,
    t = document.createElement('div'),
    s = { ...o, id: e },
    n = f(Ht, s)
  ge(n, t), document.body.appendChild(t.firstElementChild)
  const r = n.component
  return {
    id: e,
    container: t,
    handler: {
      close: () => {
        r.exposed.close()
      },
    },
  }
}
function Yt(o) {
  !ve && qt()
  const e = Wt(o)
  return Y.push(e), e.handler
}
const Jt = mt(Yt, '$message')
function Zt(o, e) {
  throw new ElementPlusError(`[${o}] ${e}`)
}
function Te(o, e) {
  let t = null
  return function (...s) {
    t ||
      (t = setTimeout(() => {
        o.apply(this, s), (t = null)
      }, e))
  }
}
const Qt = typeof window < 'u' && typeof document < 'u'
function Xt(o) {
  const e = Object.create(null)
  return (t) => e[t] || (e[t] = o(t))
}
const eo = /-(\w)/g,
  to = Xt((o) => o.replace(eo, (e, t) => (t ? t.toUpperCase() : ''))),
  oo = (o, e) => {
    var t
    if (!o || !e) return ''
    let s = to(e)
    s === 'float' && (s = 'cssFloat')
    try {
      const n = o.style[s]
      if (n) return n
      const r =
        (t = document.defaultView) == null ? void 0 : t.getComputedStyle(o, '')
      return r ? r[s] : ''
    } catch {
      return o.style[s]
    }
  },
  so = (o, e) => {
    if (!Qt) return !1
    const t = {
        undefined: 'overflow',
        true: 'overflow-y',
        false: 'overflow-x',
      }[String(e)],
      s = oo(o, t)
    return ['scroll', 'auto', 'overlay'].some((n) => s.includes(n))
  },
  O = 'PotInfiniteScroll',
  no = 50,
  ao = 200,
  ro = 0,
  io = {
    delay: { type: Number, default: ao },
    distance: { type: Number, default: ro },
    disabled: { type: Boolean, default: !1 },
    immediate: { type: Boolean, default: !0 },
  },
  ke = (o) =>
    Object.entries(io).reduce((e, [t, s]) => {
      const { type: n, default: r } = s
      let c = o.getAttribute(`infinite-scroll-${t}`) ?? r
      return (
        (c = c === 'false' ? !1 : c),
        (c = n(c)),
        (e[t] = Number.isNaN(c) ? r : c),
        e
      )
    }, {}),
  lo = (o, e) => {
    const { observer: t, lastScrollTop: s } = o[O],
      { disabled: n, distance: r } = ke(o),
      { clientHeight: c, scrollHeight: p, scrollTop: v } = o,
      b = v - s
    ;(o[O].lastScrollTop = v), !(t || n || b < 0) && p - (c + v) <= r && e()
  },
  Ue = (o) => {
    const { observer: e } = o[O]
    e && (e.disconnect(), delete o[O].observer)
  }
function Ie(o, e) {
  const { disabled: t } = ke(o)
  t || o.clientHeight === 0 || (o.scrollHeight <= o.clientHeight ? e() : Ue(o))
}
const co = {
    async mounted(o, e) {
      if (!so(o)) throw '绑定的元素不具有滚动机制'
      const t = e.value
      typeof t != 'function' &&
        Zt(O, "'v-infinite-scroll' binding value must be a function"),
        await He()
      const { delay: s, immediate: n } = ke(o),
        r = Te(lo.bind(null, o, t), s)
      if (((o[O] = { lastScrollTop: o.scrollTop, cb: t, onScroll: r }), n)) {
        const c = new MutationObserver(Te(Ie.bind(null, o, t), no))
        ;(o[O].observer = c),
          c.observe(o, { childList: !0, subtree: !0 }),
          Ie(o, t)
      }
      o.addEventListener('scroll', r)
    },
    unmounted(o) {
      const { onScroll: e } = o[O]
      o.removeEventListener('scroll', e), Ue(o)
    },
  },
  he = co
he.install = (o) => {
  o.directive('InfiniteScroll', he)
}
const uo = he,
  vo = [$t, xe, Ct, Tt, Nt, Jt, uo],
  ho = _t(vo),
  po = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(),
        l(
          'span',
          { class: L(['VPBadge', e.type]) },
          [u(e.$slots, 'default', {}, () => [A(P(e.text), 1)])],
          2,
        )
      )
    },
  }),
  fo = { key: 0, class: 'VPBackdrop' },
  _o = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          se,
          { name: 'fade' },
          {
            default: h(() => [e.show ? (a(), l('div', fo)) : _('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  mo = g(_o, [['__scopeId', 'data-v-59bf151a']]),
  V = st
function go(o, e) {
  let t,
    s = !1
  return () => {
    t && clearTimeout(t),
      s
        ? (t = setTimeout(o, e))
        : (o(), (s = !0) && setTimeout(() => (s = !1), e))
  }
}
function pe(o) {
  return /^\//.test(o) ? o : `/${o}`
}
function ye(o) {
  const {
    pathname: e,
    search: t,
    hash: s,
    protocol: n,
  } = new URL(o, 'http://a.com')
  if (nt(o) || o.startsWith('#') || !n.startsWith('http') || !at(e)) return o
  const { site: r } = V(),
    c =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(
              /(\.md)?$/,
              r.value.cleanUrls ? '' : '.html',
            )}${t}${s}`,
          )
  return $e(c)
}
const we = S(W ? location.hash : '')
W &&
  window.addEventListener('hashchange', () => {
    we.value = location.hash
  })
function Q({ removeCurrent: o = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: s, page: n, theme: r } = V(),
    c = $(() => {
      var v, b
      return {
        label: (v = t.value.locales[s.value]) == null ? void 0 : v.label,
        link:
          ((b = t.value.locales[s.value]) == null ? void 0 : b.link) ||
          (s.value === 'root' ? '/' : `/${s.value}/`),
      }
    })
  return {
    localeLinks: $(() =>
      Object.entries(t.value.locales).flatMap(([v, b]) =>
        o && c.value.label === b.label
          ? []
          : {
              text: b.label,
              link:
                $o(
                  b.link || (v === 'root' ? '/' : `/${v}/`),
                  r.value.i18nRouting !== !1 && e,
                  n.value.relativePath.slice(c.value.link.length - 1),
                  !t.value.cleanUrls,
                ) + we.value,
            },
      ),
    ),
    currentLang: c,
  }
}
function $o(o, e, t, s) {
  return e
    ? o.replace(/\/$/, '') +
        pe(
          t
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, s ? '.html' : ''),
        )
    : o
}
const bo = (o) => (E('data-v-07f75c55'), (o = o()), F(), o),
  ko = { class: 'NotFound' },
  yo = { class: 'code' },
  wo = { class: 'title' },
  Vo = bo(() => d('div', { class: 'divider' }, null, -1)),
  Po = { class: 'quote' },
  Lo = { class: 'action' },
  So = ['href', 'aria-label'],
  Mo = m({
    __name: 'NotFound',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s } = Q({ removeCurrent: !1 }),
        n = S('/')
      return (
        U(() => {
          var c
          const r = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          s.value.length &&
            (n.value =
              ((c = s.value.find(({ link: p }) => p.startsWith(r))) == null
                ? void 0
                : c.link) || s.value[0].link)
        }),
        (r, c) => {
          var p, v, b, y, w
          return (
            a(),
            l('div', ko, [
              d(
                'p',
                yo,
                P(((p = i(t).notFound) == null ? void 0 : p.code) ?? '404'),
                1,
              ),
              d(
                'h1',
                wo,
                P(
                  ((v = i(t).notFound) == null ? void 0 : v.title) ??
                    'PAGE NOT FOUND',
                ),
                1,
              ),
              Vo,
              d(
                'blockquote',
                Po,
                P(
                  ((b = i(t).notFound) == null ? void 0 : b.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              d('div', Lo, [
                d(
                  'a',
                  {
                    class: 'link',
                    href: i($e)(n.value),
                    'aria-label':
                      ((y = i(t).notFound) == null ? void 0 : y.linkLabel) ??
                      'go to home',
                  },
                  P(
                    ((w = i(t).notFound) == null ? void 0 : w.linkText) ??
                      'Take me home',
                  ),
                  9,
                  So,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  Co = g(Mo, [['__scopeId', 'data-v-07f75c55']])
function je(o, e) {
  if (Array.isArray(o)) return te(o)
  if (o == null) return []
  e = pe(e)
  const t = Object.keys(o)
      .sort((n, r) => r.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(pe(n))),
    s = t ? o[t] : []
  return Array.isArray(s) ? te(s) : te(s.items, s.base)
}
function To(o) {
  const e = []
  let t = 0
  for (const s in o) {
    const n = o[s]
    if (n.items) {
      t = e.push(n)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n)
  }
  return e
}
function Io(o) {
  const e = []
  function t(s) {
    for (const n of s)
      n.text &&
        n.link &&
        e.push({ text: n.text, link: n.link, docFooterText: n.docFooterText }),
        n.items && t(n.items)
  }
  return t(o), e
}
function fe(o, e) {
  return Array.isArray(e)
    ? e.some((t) => fe(o, t))
    : G(o, e.link)
    ? !0
    : e.items
    ? fe(o, e.items)
    : !1
}
function te(o, e) {
  return [...o].map((t) => {
    const s = { ...t },
      n = s.base || e
    return (
      n && s.link && (s.link = n + s.link),
      s.items && (s.items = te(s.items, n)),
      s
    )
  })
}
function D() {
  const { frontmatter: o, page: e, theme: t } = V(),
    s = de('(min-width: 960px)'),
    n = S(!1),
    r = $(() => {
      const B = t.value.sidebar,
        C = e.value.relativePath
      return B ? je(B, C) : []
    }),
    c = S(r.value)
  R(r, (B, C) => {
    JSON.stringify(B) !== JSON.stringify(C) && (c.value = r.value)
  })
  const p = $(
      () =>
        o.value.sidebar !== !1 &&
        c.value.length > 0 &&
        o.value.layout !== 'home',
    ),
    v = $(() =>
      b
        ? o.value.aside == null
          ? t.value.aside === 'left'
          : o.value.aside === 'left'
        : !1,
    ),
    b = $(() =>
      o.value.layout === 'home'
        ? !1
        : o.value.aside != null
        ? !!o.value.aside
        : t.value.aside !== !1,
    ),
    y = $(() => p.value && s.value),
    w = $(() => (p.value ? To(c.value) : []))
  function M() {
    n.value = !0
  }
  function T() {
    n.value = !1
  }
  function N() {
    n.value ? T() : M()
  }
  return {
    isOpen: n,
    sidebar: c,
    sidebarGroups: w,
    hasSidebar: p,
    hasAside: b,
    leftAside: v,
    isSidebarEnabled: y,
    open: M,
    close: T,
    toggle: N,
  }
}
function No(o, e) {
  let t
  ne(() => {
    t = o.value ? document.activeElement : void 0
  }),
    U(() => {
      window.addEventListener('keyup', s)
    }),
    be(() => {
      window.removeEventListener('keyup', s)
    })
  function s(n) {
    n.key === 'Escape' && o.value && (e(), t == null || t.focus())
  }
}
function Bo(o) {
  const { page: e } = V(),
    t = S(!1),
    s = $(() => o.value.collapsed != null),
    n = $(() => !!o.value.link),
    r = S(!1),
    c = () => {
      r.value = G(e.value.relativePath, o.value.link)
    }
  R([e, o, we], c), U(c)
  const p = $(() =>
      r.value
        ? !0
        : o.value.items
        ? fe(e.value.relativePath, o.value.items)
        : !1,
    ),
    v = $(() => !!(o.value.items && o.value.items.length))
  ne(() => {
    t.value = !!(s.value && o.value.collapsed)
  }),
    Ae(() => {
      ;(r.value || p.value) && (t.value = !1)
    })
  function b() {
    s.value && (t.value = !t.value)
  }
  return {
    collapsed: t,
    collapsible: s,
    isLink: n,
    isActiveLink: r,
    hasActiveLink: p,
    hasChildren: v,
    toggle: b,
  }
}
function Ho() {
  const { hasSidebar: o } = D(),
    e = de('(min-width: 960px)'),
    t = de('(min-width: 1280px)')
  return {
    isAsideEnabled: $(() =>
      !t.value && !e.value ? !1 : o.value ? t.value : e.value,
    ),
  }
}
const _e = []
function Ge(o) {
  return (
    (typeof o.outline == 'object' &&
      !Array.isArray(o.outline) &&
      o.outline.label) ||
    o.outlineTitle ||
    'On this page'
  )
}
function Ve(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const s = Number(t.tagName[1])
      return { element: t, title: Ao(t), link: '#' + t.id, level: s }
    })
  return zo(e, o)
}
function Ao(o) {
  let e = ''
  for (const t of o.childNodes)
    if (t.nodeType === 1) {
      if (
        t.classList.contains('VPBadge') ||
        t.classList.contains('header-anchor') ||
        t.classList.contains('ignore-header')
      )
        continue
      e += t.textContent
    } else t.nodeType === 3 && (e += t.textContent)
  return e.trim()
}
function zo(o, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [s, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(o = o.filter((c) => c.level >= s && c.level <= n)), (_e.length = 0)
  for (const { element: c, link: p } of o) _e.push({ element: c, link: p })
  const r = []
  e: for (let c = 0; c < o.length; c++) {
    const p = o[c]
    if (c === 0) r.push(p)
    else {
      for (let v = c - 1; v >= 0; v--) {
        const b = o[v]
        if (b.level < p.level) {
          ;(b.children || (b.children = [])).push(p)
          continue e
        }
      }
      r.push(p)
    }
  }
  return r
}
function Eo(o, e) {
  const { isAsideEnabled: t } = Ho(),
    s = go(r, 100)
  let n = null
  U(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', s)
  }),
    rt(() => {
      c(location.hash)
    }),
    be(() => {
      window.removeEventListener('scroll', s)
    })
  function r() {
    if (!t.value) return
    const p = window.scrollY,
      v = window.innerHeight,
      b = document.body.offsetHeight,
      y = Math.abs(p + v - b) < 1,
      w = _e
        .map(({ element: T, link: N }) => ({ link: N, top: Fo(T) }))
        .filter(({ top: T }) => !Number.isNaN(T))
        .sort((T, N) => T.top - N.top)
    if (!w.length) {
      c(null)
      return
    }
    if (p < 1) {
      c(null)
      return
    }
    if (y) {
      c(w[w.length - 1].link)
      return
    }
    let M = null
    for (const { link: T, top: N } of w) {
      if (N > p + it() + 4) break
      M = T
    }
    c(M)
  }
  function c(p) {
    n && n.classList.remove('active'),
      p == null
        ? (n = null)
        : (n = o.value.querySelector(`a[href="${decodeURIComponent(p)}"]`))
    const v = n
    v
      ? (v.classList.add('active'),
        (e.value.style.top = v.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'))
  }
}
function Fo(o) {
  let e = 0
  for (; o !== document.body; ) {
    if (o === null) return NaN
    ;(e += o.offsetTop), (o = o.offsetParent)
  }
  return e
}
const Do = ['href', 'title'],
  xo = m({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const s = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(s))
        n == null || n.focus({ preventScroll: !0 })
      }
      return (t, s) => {
        const n = q('VPDocOutlineItem', !0)
        return (
          a(),
          l(
            'ul',
            { class: L(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              l(
                I,
                null,
                H(
                  t.headers,
                  ({ children: r, link: c, title: p }) => (
                    a(),
                    l('li', null, [
                      d(
                        'a',
                        {
                          class: 'outline-link',
                          href: c,
                          onClick: e,
                          title: p,
                        },
                        P(p),
                        9,
                        Do,
                      ),
                      r != null && r.length
                        ? (a(),
                          k(n, { key: 0, headers: r }, null, 8, ['headers']))
                        : _('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        )
      }
    },
  }),
  Re = g(xo, [['__scopeId', 'data-v-1d718f80']]),
  Oo = (o) => (E('data-v-860eb583'), (o = o()), F(), o),
  Uo = { class: 'content' },
  jo = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  Go = { 'aria-labelledby': 'doc-outline-aria-label' },
  Ro = Oo(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  qo = m({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = V(),
        s = ze([])
      ae(() => {
        s.value = Ve(e.value.outline ?? t.value.outline)
      })
      const n = S(),
        r = S()
      return (
        Eo(n, r),
        (c, p) => (
          a(),
          l(
            'div',
            {
              class: L([
                'VPDocAsideOutline',
                { 'has-outline': s.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: n,
              role: 'navigation',
            },
            [
              d('div', Uo, [
                d(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: r },
                  null,
                  512,
                ),
                d('div', jo, P(i(Ge)(i(t))), 1),
                d('nav', Go, [
                  Ro,
                  f(Re, { headers: s.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  Ko = g(qo, [['__scopeId', 'data-v-860eb583']]),
  Wo = { class: 'VPDocAsideCarbonAds' },
  Yo = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null
      return (t, s) => (
        a(),
        l('div', Wo, [
          f(i(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  Jo = (o) => (E('data-v-be2aafe6'), (o = o()), F(), o),
  Zo = { class: 'VPDocAside' },
  Qo = Jo(() => d('div', { class: 'spacer' }, null, -1)),
  Xo = m({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = V()
      return (t, s) => (
        a(),
        l('div', Zo, [
          u(t.$slots, 'aside-top', {}, void 0, !0),
          u(t.$slots, 'aside-outline-before', {}, void 0, !0),
          f(Ko),
          u(t.$slots, 'aside-outline-after', {}, void 0, !0),
          Qo,
          u(t.$slots, 'aside-ads-before', {}, void 0, !0),
          i(e).carbonAds
            ? (a(),
              k(Yo, { key: 0, 'carbon-ads': i(e).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : _('', !0),
          u(t.$slots, 'aside-ads-after', {}, void 0, !0),
          u(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  es = g(Xo, [['__scopeId', 'data-v-be2aafe6']])
function ts() {
  const { theme: o, page: e } = V()
  return $(() => {
    const { text: t = 'Edit this page', pattern: s = '' } =
      o.value.editLink || {}
    let n
    return (
      typeof s == 'function'
        ? (n = s(e.value))
        : (n = s.replace(/:path/g, e.value.filePath)),
      { url: n, text: t }
    )
  })
}
function os() {
  const { page: o, theme: e, frontmatter: t } = V()
  return $(() => {
    var v, b, y, w, M, T, N, B
    const s = je(e.value.sidebar, o.value.relativePath),
      n = Io(s),
      r = n.findIndex((C) => G(o.value.relativePath, C.link)),
      c =
        (((v = e.value.docFooter) == null ? void 0 : v.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((b = e.value.docFooter) == null ? void 0 : b.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1
    return {
      prev: c
        ? void 0
        : {
            text:
              (typeof t.value.prev == 'string'
                ? t.value.prev
                : typeof t.value.prev == 'object'
                ? t.value.prev.text
                : void 0) ??
              ((y = n[r - 1]) == null ? void 0 : y.docFooterText) ??
              ((w = n[r - 1]) == null ? void 0 : w.text),
            link:
              (typeof t.value.prev == 'object' ? t.value.prev.link : void 0) ??
              ((M = n[r - 1]) == null ? void 0 : M.link),
          },
      next: p
        ? void 0
        : {
            text:
              (typeof t.value.next == 'string'
                ? t.value.next
                : typeof t.value.next == 'object'
                ? t.value.next.text
                : void 0) ??
              ((T = n[r + 1]) == null ? void 0 : T.docFooterText) ??
              ((N = n[r + 1]) == null ? void 0 : N.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((B = n[r + 1]) == null ? void 0 : B.link),
          },
    }
  })
}
const ss = {},
  ns = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  as = d(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  rs = d(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  is = [as, rs]
function ls(o, e) {
  return a(), l('svg', ns, is)
}
const cs = g(ss, [['render', ls]]),
  z = m({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(o) {
      const e = o,
        t = $(() => e.tag ?? (e.href ? 'a' : 'span')),
        s = $(() => e.href && Ee.test(e.href))
      return (n, r) => (
        a(),
        k(
          j(t.value),
          {
            class: L([
              'VPLink',
              {
                link: n.href,
                'vp-external-link-icon': s.value,
                'no-icon': n.noIcon,
              },
            ]),
            href: n.href ? i(ye)(n.href) : void 0,
            target: n.target ?? (s.value ? '_blank' : void 0),
            rel: n.rel ?? (s.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [u(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  us = { class: 'VPLastUpdated' },
  ds = ['datetime'],
  vs = m({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, frontmatter: s, lang: n } = V(),
        r = $(() => new Date(s.value.lastUpdated ?? t.value.lastUpdated)),
        c = $(() => r.value.toISOString()),
        p = S('')
      return (
        U(() => {
          ne(() => {
            var v, b, y
            p.value = new Intl.DateTimeFormat(
              (b =
                (v = e.value.lastUpdated) == null ? void 0 : v.formatOptions) !=
                null && b.forceLocale
                ? n.value
                : void 0,
              ((y = e.value.lastUpdated) == null
                ? void 0
                : y.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(r.value)
          })
        }),
        (v, b) => {
          var y
          return (
            a(),
            l('p', us, [
              A(
                P(
                  ((y = i(e).lastUpdated) == null ? void 0 : y.text) ||
                    i(e).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              d('time', { datetime: c.value }, P(p.value), 9, ds),
            ])
          )
        }
      )
    },
  }),
  hs = g(vs, [['__scopeId', 'data-v-4ba3d317']]),
  ps = { key: 0, class: 'VPDocFooter' },
  fs = { key: 0, class: 'edit-info' },
  _s = { key: 0, class: 'edit-link' },
  ms = { key: 1, class: 'last-updated' },
  gs = { key: 1, class: 'prev-next' },
  $s = { class: 'pager' },
  bs = ['innerHTML'],
  ks = ['innerHTML'],
  ys = { class: 'pager' },
  ws = ['innerHTML'],
  Vs = ['innerHTML'],
  Ps = m({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: s } = V(),
        n = ts(),
        r = os(),
        c = $(() => e.value.editLink && s.value.editLink !== !1),
        p = $(() => t.value.lastUpdated && s.value.lastUpdated !== !1),
        v = $(() => c.value || p.value || r.value.prev || r.value.next)
      return (b, y) => {
        var w, M, T, N
        return v.value
          ? (a(),
            l('footer', ps, [
              u(b.$slots, 'doc-footer-before', {}, void 0, !0),
              c.value || p.value
                ? (a(),
                  l('div', fs, [
                    c.value
                      ? (a(),
                        l('div', _s, [
                          f(
                            z,
                            {
                              class: 'edit-link-button',
                              href: i(n).url,
                              'no-icon': !0,
                            },
                            {
                              default: h(() => [
                                f(cs, {
                                  class: 'edit-link-icon',
                                  'aria-label': 'edit icon',
                                }),
                                A(' ' + P(i(n).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : _('', !0),
                    p.value ? (a(), l('div', ms, [f(hs)])) : _('', !0),
                  ]))
                : _('', !0),
              ((w = i(r).prev) != null && w.link) ||
              ((M = i(r).next) != null && M.link)
                ? (a(),
                  l('nav', gs, [
                    d('div', $s, [
                      (T = i(r).prev) != null && T.link
                        ? (a(),
                          k(
                            z,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: i(r).prev.link,
                            },
                            {
                              default: h(() => {
                                var B
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = i(e).docFooter) == null
                                          ? void 0
                                          : B.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    bs,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).prev.text,
                                    },
                                    null,
                                    8,
                                    ks,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : _('', !0),
                    ]),
                    d('div', ys, [
                      (N = i(r).next) != null && N.link
                        ? (a(),
                          k(
                            z,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: i(r).next.link,
                            },
                            {
                              default: h(() => {
                                var B
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((B = i(e).docFooter) == null
                                          ? void 0
                                          : B.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    ws,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).next.text,
                                    },
                                    null,
                                    8,
                                    Vs,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : _('', !0),
                    ]),
                  ]))
                : _('', !0),
            ]))
          : _('', !0)
      }
    },
  }),
  Ls = g(Ps, [['__scopeId', 'data-v-39b90627']]),
  Ss = (o) => (E('data-v-3fe17779'), (o = o()), F(), o),
  Ms = { class: 'container' },
  Cs = Ss(() => d('div', { class: 'aside-curtain' }, null, -1)),
  Ts = { class: 'aside-container' },
  Is = { class: 'aside-content' },
  Ns = { class: 'content' },
  Bs = { class: 'content-container' },
  Hs = { class: 'main' },
  As = m({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = V(),
        t = re(),
        { hasSidebar: s, hasAside: n, leftAside: r } = D(),
        c = $(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (p, v) => {
        const b = q('Content')
        return (
          a(),
          l(
            'div',
            { class: L(['VPDoc', { 'has-sidebar': i(s), 'has-aside': i(n) }]) },
            [
              u(p.$slots, 'doc-top', {}, void 0, !0),
              d('div', Ms, [
                i(n)
                  ? (a(),
                    l(
                      'div',
                      { key: 0, class: L(['aside', { 'left-aside': i(r) }]) },
                      [
                        Cs,
                        d('div', Ts, [
                          d('div', Is, [
                            f(es, null, {
                              'aside-top': h(() => [
                                u(p.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': h(() => [
                                u(p.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': h(() => [
                                u(
                                  p.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': h(() => [
                                u(
                                  p.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': h(() => [
                                u(p.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': h(() => [
                                u(p.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : _('', !0),
                d('div', Ns, [
                  d('div', Bs, [
                    u(p.$slots, 'doc-before', {}, void 0, !0),
                    d('main', Hs, [
                      f(
                        b,
                        {
                          class: L([
                            'vp-doc',
                            [
                              c.value,
                              i(e).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    f(Ls, null, {
                      'doc-footer-before': h(() => [
                        u(p.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    u(p.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              u(p.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  zs = g(As, [['__scopeId', 'data-v-3fe17779']]),
  Es = m({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(o) {
      const e = o,
        t = $(() => e.href && Ee.test(e.href)),
        s = $(() => (e.tag || e.href ? 'a' : 'button'))
      return (n, r) => (
        a(),
        k(
          j(s.value),
          {
            class: L(['VPButton', [n.size, n.theme]]),
            href: n.href ? i(ye)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [A(P(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Fs = g(Es, [['__scopeId', 'data-v-a9f690c4']]),
  Ds = ['src', 'alt'],
  xs = m({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const s = q('VPImage', !0)
        return e.image
          ? (a(),
            l(
              I,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    l(
                      'img',
                      ee(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: i($e)(
                            typeof e.image == 'string' ? e.image : e.image.src,
                          ),
                          alt:
                            e.alt ??
                            (typeof e.image == 'string'
                              ? ''
                              : e.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      Ds,
                    ))
                  : (a(),
                    l(
                      I,
                      { key: 1 },
                      [
                        f(
                          s,
                          ee(
                            {
                              class: 'dark',
                              image: e.image.dark,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        f(
                          s,
                          ee(
                            {
                              class: 'light',
                              image: e.image.light,
                              alt: e.image.alt,
                            },
                            e.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : _('', !0)
      }
    },
  }),
  oe = g(xs, [['__scopeId', 'data-v-221709f0']]),
  Os = (o) => (E('data-v-971af588'), (o = o()), F(), o),
  Us = { class: 'container' },
  js = { class: 'main' },
  Gs = { key: 0, class: 'name' },
  Rs = ['innerHTML'],
  qs = ['innerHTML'],
  Ks = ['innerHTML'],
  Ws = { key: 0, class: 'actions' },
  Ys = { key: 0, class: 'image' },
  Js = { class: 'image-container' },
  Zs = Os(() => d('div', { class: 'image-bg' }, null, -1)),
  Qs = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = J('hero-image-slot-exists')
      return (t, s) => (
        a(),
        l(
          'div',
          { class: L(['VPHero', { 'has-image': t.image || i(e) }]) },
          [
            d('div', Us, [
              d('div', js, [
                u(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                u(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(),
                        l('h1', Gs, [
                          d(
                            'span',
                            { innerHTML: t.name, class: 'clip' },
                            null,
                            8,
                            Rs,
                          ),
                        ]))
                      : _('', !0),
                    t.text
                      ? (a(),
                        l(
                          'p',
                          { key: 1, innerHTML: t.text, class: 'text' },
                          null,
                          8,
                          qs,
                        ))
                      : _('', !0),
                    t.tagline
                      ? (a(),
                        l(
                          'p',
                          { key: 2, innerHTML: t.tagline, class: 'tagline' },
                          null,
                          8,
                          Ks,
                        ))
                      : _('', !0),
                  ],
                  !0,
                ),
                u(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    l('div', Ws, [
                      (a(!0),
                      l(
                        I,
                        null,
                        H(
                          t.actions,
                          (n) => (
                            a(),
                            l('div', { key: n.link, class: 'action' }, [
                              f(
                                Fs,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: n.theme,
                                  text: n.text,
                                  href: n.link,
                                  target: n.target,
                                  rel: n.rel,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : _('', !0),
                u(t.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              t.image || i(e)
                ? (a(),
                  l('div', Ys, [
                    d('div', Js, [
                      Zs,
                      u(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              k(
                                oe,
                                { key: 0, class: 'image-src', image: t.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : _('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : _('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  Xs = g(Qs, [['__scopeId', 'data-v-971af588']]),
  en = m({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).hero
          ? (a(),
            k(
              Xs,
              {
                key: 0,
                class: 'VPHomeHero',
                name: i(e).hero.name,
                text: i(e).hero.text,
                tagline: i(e).hero.tagline,
                image: i(e).hero.image,
                actions: i(e).hero.actions,
              },
              {
                'home-hero-info-before': h(() => [
                  u(t.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': h(() => [u(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': h(() => [
                  u(t.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': h(() => [
                  u(t.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': h(() => [u(t.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : _('', !0)
    },
  }),
  tn = {},
  on = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  sn = d(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  nn = [sn]
function an(o, e) {
  return a(), l('svg', on, nn)
}
const rn = g(tn, [['render', an]]),
  ln = { class: 'box' },
  cn = { key: 0, class: 'icon' },
  un = ['innerHTML'],
  dn = ['innerHTML'],
  vn = ['innerHTML'],
  hn = { key: 4, class: 'link-text' },
  pn = { class: 'link-text-value' },
  fn = m({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          z,
          {
            class: 'VPFeature',
            href: e.link,
            rel: e.rel,
            target: e.target,
            'no-icon': !0,
            tag: e.link ? 'a' : 'div',
          },
          {
            default: h(() => [
              d('article', ln, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    l('div', cn, [
                      f(
                        oe,
                        {
                          image: e.icon,
                          alt: e.icon.alt,
                          height: e.icon.height || 48,
                          width: e.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof e.icon == 'object'
                  ? (a(),
                    k(
                      oe,
                      {
                        key: 1,
                        image: e.icon,
                        alt: e.icon.alt,
                        height: e.icon.height || 48,
                        width: e.icon.width || 48,
                      },
                      null,
                      8,
                      ['image', 'alt', 'height', 'width'],
                    ))
                  : e.icon
                  ? (a(),
                    l(
                      'div',
                      { key: 2, class: 'icon', innerHTML: e.icon },
                      null,
                      8,
                      un,
                    ))
                  : _('', !0),
                d('h2', { class: 'title', innerHTML: e.title }, null, 8, dn),
                e.details
                  ? (a(),
                    l(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      vn,
                    ))
                  : _('', !0),
                e.linkText
                  ? (a(),
                    l('div', hn, [
                      d('p', pn, [
                        A(P(e.linkText) + ' ', 1),
                        f(rn, { class: 'link-text-icon' }),
                      ]),
                    ]))
                  : _('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag'],
        )
      )
    },
  }),
  _n = g(fn, [['__scopeId', 'data-v-7073c63f']]),
  mn = { key: 0, class: 'VPFeatures' },
  gn = { class: 'container' },
  $n = { class: 'items' },
  bn = m({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(o) {
      const e = o,
        t = $(() => {
          const s = e.features.length
          if (s) {
            if (s === 2) return 'grid-2'
            if (s === 3) return 'grid-3'
            if (s % 3 === 0) return 'grid-6'
            if (s > 3) return 'grid-4'
          } else return
        })
      return (s, n) =>
        s.features
          ? (a(),
            l('div', mn, [
              d('div', gn, [
                d('div', $n, [
                  (a(!0),
                  l(
                    I,
                    null,
                    H(
                      s.features,
                      (r) => (
                        a(),
                        l(
                          'div',
                          { key: r.title, class: L(['item', [t.value]]) },
                          [
                            f(
                              _n,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                'link-text': r.linkText,
                                rel: r.rel,
                                target: r.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : _('', !0)
    },
  }),
  kn = g(bn, [['__scopeId', 'data-v-f3fa1aba']]),
  yn = m({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).features
          ? (a(),
            k(
              kn,
              { key: 0, class: 'VPHomeFeatures', features: i(e).features },
              null,
              8,
              ['features'],
            ))
          : _('', !0)
    },
  }),
  wn = { class: 'VPHome' },
  Vn = m({
    __name: 'VPHome',
    setup(o) {
      return (e, t) => {
        const s = q('Content')
        return (
          a(),
          l('div', wn, [
            u(e.$slots, 'home-hero-before', {}, void 0, !0),
            f(en, null, {
              'home-hero-info-before': h(() => [
                u(e.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': h(() => [
                u(e.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': h(() => [
                u(e.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': h(() => [
                u(e.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': h(() => [
                u(e.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            u(e.$slots, 'home-hero-after', {}, void 0, !0),
            u(e.$slots, 'home-features-before', {}, void 0, !0),
            f(yn),
            u(e.$slots, 'home-features-after', {}, void 0, !0),
            f(s),
          ])
        )
      }
    },
  }),
  Pn = g(Vn, [['__scopeId', 'data-v-d2f3eedd']]),
  Ln = {},
  Sn = { class: 'VPPage' }
function Mn(o, e) {
  const t = q('Content')
  return (
    a(),
    l('div', Sn, [u(o.$slots, 'page-top'), f(t), u(o.$slots, 'page-bottom')])
  )
}
const Cn = g(Ln, [['render', Mn]]),
  Tn = m({
    __name: 'VPContent',
    setup(o) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: s } = D()
      return (n, r) => (
        a(),
        l(
          'div',
          {
            class: L([
              'VPContent',
              { 'has-sidebar': i(s), 'is-home': i(t).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            i(e).isNotFound
              ? u(n.$slots, 'not-found', { key: 0 }, () => [f(Co)], !0)
              : i(t).layout === 'page'
              ? (a(),
                k(
                  Cn,
                  { key: 1 },
                  {
                    'page-top': h(() => [
                      u(n.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': h(() => [
                      u(n.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : i(t).layout === 'home'
              ? (a(),
                k(
                  Pn,
                  { key: 2 },
                  {
                    'home-hero-before': h(() => [
                      u(n.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': h(() => [
                      u(n.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': h(() => [
                      u(n.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': h(() => [
                      u(n.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': h(() => [
                      u(n.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': h(() => [
                      u(n.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': h(() => [
                      u(n.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': h(() => [
                      u(n.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': h(() => [
                      u(n.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : i(t).layout && i(t).layout !== 'doc'
              ? (a(), k(j(i(t).layout), { key: 3 }))
              : (a(),
                k(
                  zs,
                  { key: 4 },
                  {
                    'doc-top': h(() => [
                      u(n.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': h(() => [
                      u(n.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'doc-footer-before': h(() => [
                      u(n.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': h(() => [
                      u(n.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': h(() => [
                      u(n.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'aside-top': h(() => [
                      u(n.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-outline-before': h(() => [
                      u(n.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': h(() => [
                      u(n.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': h(() => [
                      u(n.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': h(() => [
                      u(n.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    'aside-bottom': h(() => [
                      u(n.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                )),
          ],
          2,
        )
      )
    },
  }),
  In = g(Tn, [['__scopeId', 'data-v-e8d52db2']]),
  Nn = { class: 'container' },
  Bn = ['innerHTML'],
  Hn = ['innerHTML'],
  An = m({
    __name: 'VPFooter',
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = D()
      return (n, r) =>
        i(e).footer && i(t).footer !== !1
          ? (a(),
            l(
              'footer',
              { key: 0, class: L(['VPFooter', { 'has-sidebar': i(s) }]) },
              [
                d('div', Nn, [
                  i(e).footer.message
                    ? (a(),
                      l(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: i(e).footer.message,
                        },
                        null,
                        8,
                        Bn,
                      ))
                    : _('', !0),
                  i(e).footer.copyright
                    ? (a(),
                      l(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: i(e).footer.copyright,
                        },
                        null,
                        8,
                        Hn,
                      ))
                    : _('', !0),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  zn = g(An, [['__scopeId', 'data-v-f5761f20']])
function qe() {
  const { theme: o, frontmatter: e } = V(),
    t = ze([]),
    s = $(() => t.value.length > 0)
  return (
    ae(() => {
      t.value = Ve(e.value.outline ?? o.value.outline)
    }),
    { headers: t, hasLocalNav: s }
  )
}
const En = {},
  Fn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Dn = d(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1,
  ),
  xn = [Dn]
function On(o, e) {
  return a(), l('svg', Fn, xn)
}
const Ke = g(En, [['render', On]]),
  Un = { class: 'header' },
  jn = { class: 'outline' },
  Gn = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = V(),
        s = S(!1),
        n = S(0),
        r = S(),
        c = S()
      lt(r, () => {
        s.value = !1
      }),
        ct('Escape', () => {
          s.value = !1
        }),
        ae(() => {
          s.value = !1
        })
      function p() {
        ;(s.value = !s.value),
          (n.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (c.value && (c.value.style.transition = 'none'),
          He(() => {
            s.value = !1
          }))
      }
      function b() {
        ;(s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (y, w) => (
        a(),
        l(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: Be({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: r,
          },
          [
            y.headers.length > 0
              ? (a(),
                l(
                  'button',
                  { key: 0, onClick: p, class: L({ open: s.value }) },
                  [A(P(i(Ge)(i(t))) + ' ', 1), f(Ke, { class: 'icon' })],
                  2,
                ))
              : (a(),
                l(
                  'button',
                  { key: 1, onClick: b },
                  P(i(t).returnToTopLabel || 'Return to top'),
                  1,
                )),
            f(
              se,
              { name: 'flyout' },
              {
                default: h(() => [
                  s.value
                    ? (a(),
                      l(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: c,
                          class: 'items',
                          onClick: v,
                        },
                        [
                          d('div', Un, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: b },
                              P(i(t).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          d('div', jn, [
                            f(Re, { headers: y.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512,
                      ))
                    : _('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      )
    },
  }),
  Rn = g(Gn, [['__scopeId', 'data-v-d62082ce']]),
  qn = {},
  Kn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Wn = d(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  Yn = d(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  Jn = d(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  Zn = d(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  Qn = [Wn, Yn, Jn, Zn]
function Xn(o, e) {
  return a(), l('svg', Kn, Qn)
}
const ea = g(qn, [['render', Xn]]),
  ta = { class: 'container' },
  oa = ['aria-expanded'],
  sa = { class: 'menu-text' },
  na = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = D(),
        { headers: n } = qe(),
        { y: r } = Fe(),
        c = S(0)
      U(() => {
        c.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        ae(() => {
          n.value = Ve(t.value.outline ?? e.value.outline)
        })
      const p = $(() => n.value.length === 0),
        v = $(() => p.value && !s.value),
        b = $(() => ({
          VPLocalNav: !0,
          'has-sidebar': s.value,
          empty: p.value,
          fixed: v.value,
        }))
      return (y, w) =>
        i(t).layout !== 'home' && (!v.value || i(r) >= c.value)
          ? (a(),
            l(
              'div',
              { key: 0, class: L(b.value) },
              [
                d('div', ta, [
                  i(s)
                    ? (a(),
                      l(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': y.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: w[0] || (w[0] = (M) => y.$emit('open-menu')),
                        },
                        [
                          f(ea, { class: 'menu-icon' }),
                          d('span', sa, P(i(e).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        oa,
                      ))
                    : _('', !0),
                  f(Rn, { headers: i(n), navHeight: c.value }, null, 8, [
                    'headers',
                    'navHeight',
                  ]),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  aa = g(na, [['__scopeId', 'data-v-a1abf90f']])
function ra() {
  const o = S(!1)
  function e() {
    ;(o.value = !0), window.addEventListener('resize', n)
  }
  function t() {
    ;(o.value = !1), window.removeEventListener('resize', n)
  }
  function s() {
    o.value ? t() : e()
  }
  function n() {
    window.outerWidth >= 768 && t()
  }
  const r = re()
  return (
    R(() => r.path, t),
    { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: s }
  )
}
const ia = {},
  la = { class: 'VPSwitch', type: 'button', role: 'switch' },
  ca = { class: 'check' },
  ua = { key: 0, class: 'icon' }
function da(o, e) {
  return (
    a(),
    l('button', la, [
      d('span', ca, [
        o.$slots.default
          ? (a(), l('span', ua, [u(o.$slots, 'default', {}, void 0, !0)]))
          : _('', !0),
      ]),
    ])
  )
}
const va = g(ia, [
    ['render', da],
    ['__scopeId', 'data-v-2acdc7fc'],
  ]),
  ha = {},
  pa = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  fa = d(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  _a = [fa]
function ma(o, e) {
  return a(), l('svg', pa, _a)
}
const ga = g(ha, [['render', ma]]),
  $a = {},
  ba = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  ka = ut(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  ya = [ka]
function wa(o, e) {
  return a(), l('svg', ba, ya)
}
const Va = g($a, [['render', wa]]),
  Pa = m({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = V(),
        s = J('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = $(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (r, c) => (
        a(),
        k(
          va,
          {
            title: n.value,
            class: 'VPSwitchAppearance',
            'aria-checked': i(e),
            onClick: i(s),
          },
          {
            default: h(() => [
              f(Va, { class: 'sun' }),
              f(ga, { class: 'moon' }),
            ]),
            _: 1,
          },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  Pe = g(Pa, [['__scopeId', 'data-v-f92d2f72']]),
  La = { key: 0, class: 'VPNavBarAppearance' },
  Sa = m({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = V()
      return (t, s) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(), l('div', La, [f(Pe)]))
          : _('', !0)
    },
  }),
  Ma = g(Sa, [['__scopeId', 'data-v-39301be8']]),
  Le = S()
let We = !1,
  ue = 0
function Ca(o) {
  const e = S(!1)
  if (W) {
    !We && Ta(), ue++
    const t = R(Le, (s) => {
      var n, r, c
      s === o.el.value || ((n = o.el.value) != null && n.contains(s))
        ? ((e.value = !0), (r = o.onFocus) == null || r.call(o))
        : ((e.value = !1), (c = o.onBlur) == null || c.call(o))
    })
    be(() => {
      t(), ue--, ue || Ia()
    })
  }
  return dt(e)
}
function Ta() {
  document.addEventListener('focusin', Ye),
    (We = !0),
    (Le.value = document.activeElement)
}
function Ia() {
  document.removeEventListener('focusin', Ye)
}
function Ye() {
  Le.value = document.activeElement
}
const Na = {},
  Ba = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ha = d(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  Aa = [Ha]
function za(o, e) {
  return a(), l('svg', Ba, Aa)
}
const Je = g(Na, [['render', za]]),
  Ea = {},
  Fa = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Da = d('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  xa = d('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Oa = d('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  Ua = [Da, xa, Oa]
function ja(o, e) {
  return a(), l('svg', Fa, Ua)
}
const Ga = g(Ea, [['render', ja]]),
  Ra = { class: 'VPMenuLink' },
  qa = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, s) => (
        a(),
        l('div', Ra, [
          f(
            z,
            {
              class: L({
                active: i(G)(
                  i(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch,
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: h(() => [A(P(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      )
    },
  }),
  ie = g(qa, [['__scopeId', 'data-v-cba6f3f4']]),
  Ka = { class: 'VPMenuGroup' },
  Wa = { key: 0, class: 'title' },
  Ya = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Ka, [
          e.text ? (a(), l('p', Wa, P(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            I,
            null,
            H(
              e.items,
              (s) => (
                a(),
                l(
                  I,
                  null,
                  [
                    'link' in s
                      ? (a(), k(ie, { key: 0, item: s }, null, 8, ['item']))
                      : _('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      )
    },
  }),
  Ja = g(Ya, [['__scopeId', 'data-v-ab7b8d91']]),
  Za = { class: 'VPMenu' },
  Qa = { key: 0, class: 'items' },
  Xa = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Za, [
          e.items
            ? (a(),
              l('div', Qa, [
                (a(!0),
                l(
                  I,
                  null,
                  H(
                    e.items,
                    (s) => (
                      a(),
                      l(
                        I,
                        { key: s.text },
                        [
                          'link' in s
                            ? (a(),
                              k(ie, { key: 0, item: s }, null, 8, ['item']))
                            : (a(),
                              k(
                                Ja,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ['text', 'items'],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : _('', !0),
          u(e.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  er = g(Xa, [['__scopeId', 'data-v-fcdcccb7']]),
  tr = ['aria-expanded', 'aria-label'],
  or = { key: 0, class: 'text' },
  sr = ['innerHTML'],
  nr = { class: 'menu' },
  ar = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = S(!1),
        t = S()
      Ca({ el: t, onBlur: s })
      function s() {
        e.value = !1
      }
      return (n, r) => (
        a(),
        l(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: t,
            onMouseenter: r[1] || (r[1] = (c) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (c) => (e.value = !1)),
          },
          [
            d(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': n.label,
                onClick: r[0] || (r[0] = (c) => (e.value = !e.value)),
              },
              [
                n.button || n.icon
                  ? (a(),
                    l('span', or, [
                      n.icon
                        ? (a(), k(j(n.icon), { key: 0, class: 'option-icon' }))
                        : _('', !0),
                      n.button
                        ? (a(),
                          l(
                            'span',
                            { key: 1, innerHTML: n.button },
                            null,
                            8,
                            sr,
                          ))
                        : _('', !0),
                      f(Je, { class: 'text-icon' }),
                    ]))
                  : (a(), k(Ga, { key: 1, class: 'icon' })),
              ],
              8,
              tr,
            ),
            d('div', nr, [
              f(
                er,
                { items: n.items },
                {
                  default: h(() => [u(n.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      )
    },
  }),
  Se = g(ar, [['__scopeId', 'data-v-656060c7']]),
  rr = {
    discord:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    facebook:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    github:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    instagram:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    linkedin:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    npm: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>',
    slack:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
    twitter:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
    x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
    youtube:
      '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
  ir = ['href', 'aria-label', 'innerHTML'],
  lr = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = $(() => (typeof e.icon == 'object' ? e.icon.svg : rr[e.icon]))
      return (s, n) => (
        a(),
        l(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: s.link,
            'aria-label':
              s.ariaLabel ?? (typeof s.icon == 'string' ? s.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value,
          },
          null,
          8,
          ir,
        )
      )
    },
  }),
  cr = g(lr, [['__scopeId', 'data-v-ea70026e']]),
  ur = { class: 'VPSocialLinks' },
  dr = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', ur, [
          (a(!0),
          l(
            I,
            null,
            H(
              e.links,
              ({ link: s, icon: n, ariaLabel: r }) => (
                a(),
                k(cr, { key: s, icon: n, link: s, ariaLabel: r }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel',
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Me = g(dr, [['__scopeId', 'data-v-cc55c76b']]),
  vr = { key: 0, class: 'group translations' },
  hr = { class: 'trans-title' },
  pr = { key: 1, class: 'group' },
  fr = { class: 'item appearance' },
  _r = { class: 'label' },
  mr = { class: 'appearance-action' },
  gr = { key: 2, class: 'group' },
  $r = { class: 'item social-links' },
  br = m({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s, currentLang: n } = Q({ correspondingLink: !0 }),
        r = $(
          () =>
            (s.value.length && n.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        )
      return (c, p) =>
        r.value
          ? (a(),
            k(
              Se,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: h(() => [
                  i(s).length && i(n).label
                    ? (a(),
                      l('div', vr, [
                        d('p', hr, P(i(n).label), 1),
                        (a(!0),
                        l(
                          I,
                          null,
                          H(
                            i(s),
                            (v) => (
                              a(),
                              k(ie, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : _('', !0),
                  i(e).appearance && i(e).appearance !== 'force-dark'
                    ? (a(),
                      l('div', pr, [
                        d('div', fr, [
                          d(
                            'p',
                            _r,
                            P(i(t).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          d('div', mr, [f(Pe)]),
                        ]),
                      ]))
                    : _('', !0),
                  i(t).socialLinks
                    ? (a(),
                      l('div', gr, [
                        d('div', $r, [
                          f(
                            Me,
                            {
                              class: 'social-links-list',
                              links: i(t).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : _('', !0),
                ]),
                _: 1,
              },
            ))
          : _('', !0)
    },
  }),
  kr = g(br, [['__scopeId', 'data-v-ab9782f9']]),
  yr = (o) => (E('data-v-464329f9'), (o = o()), F(), o),
  wr = ['aria-expanded'],
  Vr = yr(() =>
    d(
      'span',
      { class: 'container' },
      [
        d('span', { class: 'top' }),
        d('span', { class: 'middle' }),
        d('span', { class: 'bottom' }),
      ],
      -1,
    ),
  ),
  Pr = [Vr],
  Lr = m({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(o) {
      return (e, t) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: L(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (s) => e.$emit('click')),
          },
          Pr,
          10,
          wr,
        )
      )
    },
  }),
  Sr = g(Lr, [['__scopeId', 'data-v-464329f9']]),
  Mr = ['innerHTML'],
  Cr = m({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, s) => (
        a(),
        k(
          z,
          {
            class: L({
              VPNavBarMenuLink: !0,
              active: i(G)(
                i(e).relativePath,
                t.item.activeMatch || t.item.link,
                !!t.item.activeMatch,
              ),
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            tabindex: '0',
          },
          {
            default: h(() => [
              d('span', { innerHTML: t.item.text }, null, 8, Mr),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Tr = g(Cr, [['__scopeId', 'data-v-922d1c9b']]),
  Ir = m({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(o) {
      const e = o,
        { page: t } = V(),
        s = (r) =>
          'link' in r
            ? G(t.value.relativePath, r.link, !!e.item.activeMatch)
            : r.items.some(s),
        n = $(() => s(e.item))
      return (r, c) => (
        a(),
        k(
          Se,
          {
            class: L({
              VPNavBarMenuGroup: !0,
              active:
                i(G)(
                  i(t).relativePath,
                  r.item.activeMatch,
                  !!r.item.activeMatch,
                ) || n.value,
            }),
            button: r.item.text,
            items: r.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      )
    },
  }),
  Nr = (o) => (E('data-v-85770335'), (o = o()), F(), o),
  Br = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  Hr = Nr(() =>
    d(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  Ar = m({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', Br, [
              Hr,
              (a(!0),
              l(
                I,
                null,
                H(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      I,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), k(Tr, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(Ir, { key: 1, item: n }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : _('', !0)
    },
  }),
  zr = g(Ar, [['__scopeId', 'data-v-85770335']])
function Er(o) {
  const { localeIndex: e, theme: t } = V()
  function s(n) {
    var N, B, C
    const r = n.split('.'),
      c = (N = t.value.search) == null ? void 0 : N.options,
      p = c && typeof c == 'object',
      v =
        (p &&
          ((C = (B = c.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : C.translations)) ||
        null,
      b = (p && c.translations) || null
    let y = v,
      w = b,
      M = o
    const T = r.pop()
    for (const X of r) {
      let x = null
      const K = M == null ? void 0 : M[X]
      K && (x = M = K)
      const le = w == null ? void 0 : w[X]
      le && (x = w = le)
      const ce = y == null ? void 0 : y[X]
      ce && (x = y = ce), K || (M = x), le || (w = x), ce || (y = x)
    }
    return (
      (y == null ? void 0 : y[T]) ??
      (w == null ? void 0 : w[T]) ??
      (M == null ? void 0 : M[T]) ??
      ''
    )
  }
  return s
}
const Fr = ['aria-label'],
  Dr = { class: 'DocSearch-Button-Container' },
  xr = d(
    'svg',
    {
      class: 'DocSearch-Search-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      'aria-label': 'search icon',
    },
    [
      d('path', {
        d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
        stroke: 'currentColor',
        fill: 'none',
        'fill-rule': 'evenodd',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
    -1,
  ),
  Or = { class: 'DocSearch-Button-Placeholder' },
  Ur = d(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      d('kbd', { class: 'DocSearch-Button-Key' }),
      d('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  Ne = m({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = Er({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (s, n) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': i(t)('button.buttonAriaLabel'),
          },
          [
            d('span', Dr, [xr, d('span', Or, P(i(t)('button.buttonText')), 1)]),
            Ur,
          ],
          8,
          Fr,
        )
      )
    },
  }),
  jr = { class: 'VPNavBarSearch' },
  Gr = { id: 'local-search' },
  Rr = { key: 1, id: 'docsearch' },
  qr = m({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: s } = V(),
        n = S(!1),
        r = S(!1)
      U(() => {})
      function c() {
        n.value || ((n.value = !0), setTimeout(p, 16))
      }
      function p() {
        const y = new Event('keydown')
        ;(y.key = 'k'),
          (y.metaKey = !0),
          window.dispatchEvent(y),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || p()
          }, 16)
      }
      const v = S(!1),
        b = ''
      return (y, w) => {
        var M
        return (
          a(),
          l('div', jr, [
            i(b) === 'local'
              ? (a(),
                l(
                  I,
                  { key: 0 },
                  [
                    v.value
                      ? (a(),
                        k(i(e), {
                          key: 0,
                          onClose: w[0] || (w[0] = (T) => (v.value = !1)),
                        }))
                      : _('', !0),
                    d('div', Gr, [
                      f(Ne, {
                        onClick: w[1] || (w[1] = (T) => (v.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : i(b) === 'algolia'
              ? (a(),
                l(
                  I,
                  { key: 1 },
                  [
                    n.value
                      ? (a(),
                        k(
                          i(t),
                          {
                            key: 0,
                            algolia:
                              ((M = i(s).search) == null
                                ? void 0
                                : M.options) ?? i(s).algolia,
                            onVnodeBeforeMount:
                              w[2] || (w[2] = (T) => (r.value = !0)),
                          },
                          null,
                          8,
                          ['algolia'],
                        ))
                      : _('', !0),
                    r.value
                      ? _('', !0)
                      : (a(), l('div', Rr, [f(Ne, { onClick: c })])),
                  ],
                  64,
                ))
              : _('', !0),
          ])
        )
      }
    },
  }),
  Kr = m({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              Me,
              { key: 0, class: 'VPNavBarSocialLinks', links: i(e).socialLinks },
              null,
              8,
              ['links'],
            ))
          : _('', !0)
    },
  }),
  Wr = g(Kr, [['__scopeId', 'data-v-970392df']]),
  Yr = ['href', 'rel', 'target'],
  Jr = { key: 1 },
  Zr = { key: 2 },
  Qr = m({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = V(),
        { hasSidebar: s } = D(),
        { currentLang: n } = Q(),
        r = $(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
            ? void 0
            : v.link
        }),
        c = $(() => {
          var v
          return typeof t.value.logoLink == 'string' ||
            (v = t.value.logoLink) == null
            ? void 0
            : v.rel
        }),
        p = $(() => {
          var v
          return typeof t.value.logoLink == 'string' ||
            (v = t.value.logoLink) == null
            ? void 0
            : v.target
        })
      return (v, b) => (
        a(),
        l(
          'div',
          { class: L(['VPNavBarTitle', { 'has-sidebar': i(s) }]) },
          [
            d(
              'a',
              {
                class: 'title',
                href: r.value ?? i(ye)(i(n).link),
                rel: c.value,
                target: p.value,
              },
              [
                u(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                i(t).logo
                  ? (a(),
                    k(
                      oe,
                      { key: 0, class: 'logo', image: i(t).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : _('', !0),
                i(t).siteTitle
                  ? (a(), l('span', Jr, P(i(t).siteTitle), 1))
                  : i(t).siteTitle === void 0
                  ? (a(), l('span', Zr, P(i(e).title), 1))
                  : _('', !0),
                u(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              Yr,
            ),
          ],
          2,
        )
      )
    },
  }),
  Xr = g(Qr, [['__scopeId', 'data-v-d30acd41']]),
  ei = {},
  ti = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  oi = d('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  si = d(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  ni = [oi, si]
function ai(o, e) {
  return a(), l('svg', ti, ni)
}
const Ze = g(ei, [['render', ai]]),
  ri = { class: 'items' },
  ii = { class: 'title' },
  li = m({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: s } = Q({ correspondingLink: !0 })
      return (n, r) =>
        i(t).length && i(s).label
          ? (a(),
            k(
              Se,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: Ze,
                label: i(e).langMenuLabel || 'Change language',
              },
              {
                default: h(() => [
                  d('div', ri, [
                    d('p', ii, P(i(s).label), 1),
                    (a(!0),
                    l(
                      I,
                      null,
                      H(
                        i(t),
                        (c) => (
                          a(),
                          k(ie, { key: c.link, item: c }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : _('', !0)
    },
  }),
  ci = g(li, [['__scopeId', 'data-v-6f037d1c']]),
  ui = (o) => (E('data-v-e2d4d38c'), (o = o()), F(), o),
  di = { class: 'wrapper' },
  vi = { class: 'container' },
  hi = { class: 'title' },
  pi = { class: 'content' },
  fi = { class: 'content-body' },
  _i = ui(() =>
    d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1),
  ),
  mi = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const { y: e } = Fe(),
        { hasSidebar: t } = D(),
        { hasLocalNav: s } = qe(),
        { frontmatter: n } = V(),
        r = S({})
      return (
        Ae(() => {
          r.value = {
            'has-sidebar': t.value,
            'has-local-nav': s.value,
            top: n.value.layout === 'home' && e.value === 0,
          }
        }),
        (c, p) => (
          a(),
          l(
            'div',
            { class: L(['VPNavBar', r.value]) },
            [
              d('div', di, [
                d('div', vi, [
                  d('div', hi, [
                    f(Xr, null, {
                      'nav-bar-title-before': h(() => [
                        u(c.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': h(() => [
                        u(c.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  d('div', pi, [
                    d('div', fi, [
                      u(c.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      f(qr, { class: 'search' }),
                      f(zr, { class: 'menu' }),
                      f(ci, { class: 'translations' }),
                      f(Ma, { class: 'appearance' }),
                      f(Wr, { class: 'social-links' }),
                      f(kr, { class: 'extra' }),
                      u(c.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      f(
                        Sr,
                        {
                          class: 'hamburger',
                          active: c.isScreenOpen,
                          onClick:
                            p[0] || (p[0] = (v) => c.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              _i,
            ],
            2,
          )
        )
      )
    },
  }),
  gi = g(mi, [['__scopeId', 'data-v-e2d4d38c']]),
  $i = { key: 0, class: 'VPNavScreenAppearance' },
  bi = { class: 'text' },
  ki = m({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = V()
      return (s, n) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(),
            l('div', $i, [
              d('p', bi, P(i(t).darkModeSwitchLabel || 'Appearance'), 1),
              f(Pe),
            ]))
          : _('', !0)
    },
  }),
  yi = g(ki, [['__scopeId', 'data-v-83332725']]),
  wi = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = J('close-screen')
      return (t, s) => (
        a(),
        k(
          z,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: i(e),
          },
          { default: h(() => [A(P(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Vi = g(wi, [['__scopeId', 'data-v-4760ddb3']]),
  Pi = {},
  Li = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Si = d(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  Mi = [Si]
function Ci(o, e) {
  return a(), l('svg', Li, Mi)
}
const Ti = g(Pi, [['render', Ci]]),
  Ii = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = J('close-screen')
      return (t, s) => (
        a(),
        k(
          z,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: i(e),
          },
          { default: h(() => [A(P(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Qe = g(Ii, [['__scopeId', 'data-v-b7e806a3']]),
  Ni = { class: 'VPNavScreenMenuGroupSection' },
  Bi = { key: 0, class: 'title' },
  Hi = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Ni, [
          e.text ? (a(), l('p', Bi, P(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            I,
            null,
            H(
              e.items,
              (s) => (a(), k(Qe, { key: s.text, item: s }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Ai = g(Hi, [['__scopeId', 'data-v-8a97d36f']]),
  zi = ['aria-controls', 'aria-expanded'],
  Ei = ['innerHTML'],
  Fi = ['id'],
  Di = { key: 1, class: 'group' },
  xi = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = S(!1),
        s = $(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function n() {
        t.value = !t.value
      }
      return (r, c) => (
        a(),
        l(
          'div',
          { class: L(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            d(
              'button',
              {
                class: 'button',
                'aria-controls': s.value,
                'aria-expanded': t.value,
                onClick: n,
              },
              [
                d(
                  'span',
                  { class: 'button-text', innerHTML: r.text },
                  null,
                  8,
                  Ei,
                ),
                f(Ti, { class: 'button-icon' }),
              ],
              8,
              zi,
            ),
            d(
              'div',
              { id: s.value, class: 'items' },
              [
                (a(!0),
                l(
                  I,
                  null,
                  H(
                    r.items,
                    (p) => (
                      a(),
                      l(
                        I,
                        { key: p.text },
                        [
                          'link' in p
                            ? (a(),
                              l('div', { key: p.text, class: 'item' }, [
                                f(Qe, { item: p }, null, 8, ['item']),
                              ]))
                            : (a(),
                              l('div', Di, [
                                f(
                                  Ai,
                                  { text: p.text, items: p.items },
                                  null,
                                  8,
                                  ['text', 'items'],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              Fi,
            ),
          ],
          2,
        )
      )
    },
  }),
  Oi = g(xi, [['__scopeId', 'data-v-66bd100f']]),
  Ui = { key: 0, class: 'VPNavScreenMenu' },
  ji = m({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', Ui, [
              (a(!0),
              l(
                I,
                null,
                H(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      I,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), k(Vi, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(
                              Oi,
                              { key: 1, text: n.text || '', items: n.items },
                              null,
                              8,
                              ['text', 'items'],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : _('', !0)
    },
  }),
  Gi = m({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              Me,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: i(e).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : _('', !0)
    },
  }),
  Ri = { class: 'list' },
  qi = m({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = Q({ correspondingLink: !0 }),
        s = S(!1)
      function n() {
        s.value = !s.value
      }
      return (r, c) =>
        i(e).length && i(t).label
          ? (a(),
            l(
              'div',
              {
                key: 0,
                class: L(['VPNavScreenTranslations', { open: s.value }]),
              },
              [
                d('button', { class: 'title', onClick: n }, [
                  f(Ze, { class: 'icon lang' }),
                  A(' ' + P(i(t).label) + ' ', 1),
                  f(Je, { class: 'icon chevron' }),
                ]),
                d('ul', Ri, [
                  (a(!0),
                  l(
                    I,
                    null,
                    H(
                      i(e),
                      (p) => (
                        a(),
                        l('li', { key: p.link, class: 'item' }, [
                          f(
                            z,
                            { class: 'link', href: p.link },
                            { default: h(() => [A(P(p.text), 1)]), _: 2 },
                            1032,
                            ['href'],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  Ki = g(qi, [['__scopeId', 'data-v-230aa62c']]),
  Wi = { class: 'container' },
  Yi = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = S(null),
        t = De(W ? document.body : null)
      return (s, n) => (
        a(),
        k(
          se,
          {
            name: 'fade',
            onEnter: n[0] || (n[0] = (r) => (t.value = !0)),
            onAfterLeave: n[1] || (n[1] = (r) => (t.value = !1)),
          },
          {
            default: h(() => [
              s.open
                ? (a(),
                  l(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: e,
                      id: 'VPNavScreen',
                    },
                    [
                      d('div', Wi, [
                        u(
                          s.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        f(ji, { class: 'menu' }),
                        f(Ki, { class: 'translations' }),
                        f(yi, { class: 'appearance' }),
                        f(Gi, { class: 'social-links' }),
                        u(s.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : _('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  Ji = g(Yi, [['__scopeId', 'data-v-62af7f20']]),
  Zi = { key: 0, class: 'VPNav' },
  Qi = m({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = ra(),
        { frontmatter: n } = V(),
        r = $(() => n.value.navbar !== !1)
      return (
        me('close-screen', t),
        ne(() => {
          W && document.documentElement.classList.toggle('hide-nav', !r.value)
        }),
        (c, p) =>
          r.value
            ? (a(),
              l('header', Zi, [
                f(
                  gi,
                  { 'is-screen-open': i(e), onToggleScreen: i(s) },
                  {
                    'nav-bar-title-before': h(() => [
                      u(c.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': h(() => [
                      u(c.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': h(() => [
                      u(c.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': h(() => [
                      u(c.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                f(
                  Ji,
                  { open: i(e) },
                  {
                    'nav-screen-content-before': h(() => [
                      u(c.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': h(() => [
                      u(c.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : _('', !0)
      )
    },
  }),
  Xi = g(Qi, [['__scopeId', 'data-v-86036eb2']]),
  el = (o) => (E('data-v-2d8c65e0'), (o = o()), F(), o),
  tl = ['role', 'tabindex'],
  ol = el(() => d('div', { class: 'indicator' }, null, -1)),
  sl = { key: 1, class: 'items' },
  nl = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: s,
          isLink: n,
          isActiveLink: r,
          hasActiveLink: c,
          hasChildren: p,
          toggle: v,
        } = Bo($(() => e.item)),
        b = $(() => (p.value ? 'section' : 'div')),
        y = $(() => (n.value ? 'a' : 'div')),
        w = $(() =>
          p.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p',
        ),
        M = $(() => (n.value ? void 0 : 'button')),
        T = $(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': r.value },
          { 'has-active': c.value },
        ])
      function N(C) {
        ;('key' in C && C.key !== 'Enter') || (!e.item.link && v())
      }
      function B() {
        e.item.link && v()
      }
      return (C, X) => {
        const x = q('VPSidebarItem', !0)
        return (
          a(),
          k(
            j(b.value),
            { class: L(['VPSidebarItem', T.value]) },
            {
              default: h(() => [
                C.item.text
                  ? (a(),
                    l(
                      'div',
                      ee(
                        { key: 0, class: 'item', role: M.value },
                        ht(C.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: C.item.items && 0 },
                      ),
                      [
                        ol,
                        C.item.link
                          ? (a(),
                            k(
                              z,
                              {
                                key: 0,
                                tag: y.value,
                                class: 'link',
                                href: C.item.link,
                                rel: C.item.rel,
                                target: C.item.target,
                              },
                              {
                                default: h(() => [
                                  (a(),
                                  k(
                                    j(w.value),
                                    { class: 'text', innerHTML: C.item.text },
                                    null,
                                    8,
                                    ['innerHTML'],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target'],
                            ))
                          : (a(),
                            k(
                              j(w.value),
                              { key: 1, class: 'text', innerHTML: C.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        C.item.collapsed != null
                          ? (a(),
                            l(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: B,
                                onKeydown: vt(B, ['enter']),
                                tabindex: '0',
                              },
                              [f(Ke, { class: 'caret-icon' })],
                              32,
                            ))
                          : _('', !0),
                      ],
                      16,
                      tl,
                    ))
                  : _('', !0),
                C.item.items && C.item.items.length
                  ? (a(),
                    l('div', sl, [
                      C.depth < 5
                        ? (a(!0),
                          l(
                            I,
                            { key: 0 },
                            H(
                              C.item.items,
                              (K) => (
                                a(),
                                k(
                                  x,
                                  { key: K.text, item: K, depth: C.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth'],
                                )
                              ),
                            ),
                            128,
                          ))
                        : _('', !0),
                    ]))
                  : _('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        )
      }
    },
  }),
  al = g(nl, [['__scopeId', 'data-v-2d8c65e0']]),
  Xe = (o) => (E('data-v-875a24b2'), (o = o()), F(), o),
  rl = Xe(() => d('div', { class: 'curtain' }, null, -1)),
  il = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  ll = Xe(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  cl = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = D(),
        s = o,
        n = S(null),
        r = De(W ? document.body : null)
      return (
        R(
          [s, n],
          () => {
            var c
            s.open
              ? ((r.value = !0), (c = n.value) == null || c.focus())
              : (r.value = !1)
          },
          { immediate: !0, flush: 'post' },
        ),
        (c, p) =>
          i(t)
            ? (a(),
              l(
                'aside',
                {
                  key: 0,
                  class: L(['VPSidebar', { open: c.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: p[0] || (p[0] = pt(() => {}, ['stop'])),
                },
                [
                  rl,
                  d('nav', il, [
                    ll,
                    u(c.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    l(
                      I,
                      null,
                      H(
                        i(e),
                        (v) => (
                          a(),
                          l('div', { key: v.text, class: 'group' }, [
                            f(al, { item: v, depth: 0 }, null, 8, ['item']),
                          ])
                        ),
                      ),
                      128,
                    )),
                    u(c.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : _('', !0)
      )
    },
  }),
  ul = g(cl, [['__scopeId', 'data-v-875a24b2']]),
  dl = m({
    __name: 'VPSkipLink',
    setup(o) {
      const e = re(),
        t = S()
      R(
        () => e.path,
        () => t.value.focus(),
      )
      function s({ target: n }) {
        const r = document.getElementById(decodeURIComponent(n.hash).slice(1))
        if (r) {
          const c = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', c)
          }
          r.setAttribute('tabindex', '-1'),
            r.addEventListener('blur', c),
            r.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (n, r) => (
        a(),
        l(
          I,
          null,
          [
            d(
              'span',
              { ref_key: 'backToTop', ref: t, tabindex: '-1' },
              null,
              512,
            ),
            d(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: s,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  vl = g(dl, [['__scopeId', 'data-v-bc7e97a6']]),
  hl = m({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: s } = D(),
        n = re()
      R(() => n.path, s), No(e, s)
      const { frontmatter: r } = V(),
        c = ft(),
        p = $(() => !!c['home-hero-image'])
      return (
        me('hero-image-slot-exists', p),
        (v, b) => {
          const y = q('Content')
          return i(r).layout !== !1
            ? (a(),
              l(
                'div',
                { key: 0, class: L(['Layout', i(r).pageClass]) },
                [
                  u(v.$slots, 'layout-top', {}, void 0, !0),
                  f(vl),
                  f(
                    mo,
                    { class: 'backdrop', show: i(e), onClick: i(s) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  f(Xi, null, {
                    'nav-bar-title-before': h(() => [
                      u(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': h(() => [
                      u(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': h(() => [
                      u(v.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': h(() => [
                      u(v.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': h(() => [
                      u(v.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': h(() => [
                      u(v.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  f(aa, { open: i(e), onOpenMenu: i(t) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  f(
                    ul,
                    { open: i(e) },
                    {
                      'sidebar-nav-before': h(() => [
                        u(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': h(() => [
                        u(v.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  f(In, null, {
                    'page-top': h(() => [
                      u(v.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': h(() => [
                      u(v.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': h(() => [
                      u(v.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': h(() => [
                      u(v.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': h(() => [
                      u(v.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': h(() => [
                      u(v.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': h(() => [
                      u(v.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': h(() => [
                      u(v.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': h(() => [
                      u(v.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': h(() => [
                      u(v.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': h(() => [
                      u(v.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': h(() => [
                      u(v.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': h(() => [
                      u(v.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': h(() => [
                      u(v.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': h(() => [
                      u(v.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': h(() => [
                      u(v.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': h(() => [
                      u(v.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': h(() => [
                      u(v.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': h(() => [
                      u(v.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': h(() => [
                      u(v.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': h(() => [
                      u(v.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': h(() => [
                      u(v.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': h(() => [
                      u(v.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  f(zn),
                  u(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), k(y, { key: 1 }))
        }
      )
    },
  }),
  pl = g(hl, [['__scopeId', 'data-v-066deec2']]),
  fl = {
    Layout: pl,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', po)
    },
  },
  ml = {
    ...fl,
    enhanceApp({ app: o }) {
      o.use(ho)
    },
  }
export { ml as R, Jt as a }
