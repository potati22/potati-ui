import {
  d as m,
  c as $,
  o as a,
  a as l,
  r as c,
  n as L,
  b as H,
  t as P,
  e as u,
  i as Y,
  u as i,
  p as fe,
  f as S,
  g as O,
  h as k,
  w as h,
  j as Ke,
  v as We,
  k as f,
  l as Me,
  T as oe,
  m as Ye,
  q as _e,
  s as _,
  _ as g,
  x as Je,
  y as Ze,
  z as Qe,
  A as me,
  B as K,
  C as E,
  D as F,
  E as G,
  F as ue,
  G as j,
  H as se,
  I as ge,
  J as Ce,
  K as Xe,
  L as et,
  M as R,
  N as T,
  O as A,
  P as Ie,
  Q as ne,
  R as U,
  S as Te,
  U as ae,
  V as X,
  W as tt,
  X as ot,
  Y as st,
  Z as Ne,
  $ as nt,
  a0 as at,
  a1 as Be,
  a2 as rt,
  a3 as it,
  a4 as lt,
  a5 as ct,
} from './framework.CD4fBMdo.js'
const J = (o, e) => {
    if (
      ((o.install = (t) => {
        for (const s of [o, ...Object.values(e ?? {})]) t.component(s.name, s)
      }),
      e)
    )
      for (const [t, s] of Object.entries(e)) o[t] = s
    return o
  },
  ut = (o = []) => ({
    install: (e) => {
      o.forEach((t) => e.use(t))
    },
  }),
  dt = (o, e) => (
    (o.install = (t) => {
      ;(o._context = t._context), (t.config.globalProperties[e] = o)
    }),
    o
  ),
  vt = m({
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
          [c(n.$slots, 'default', {}, () => [H(P(s.value), 1)])],
          2,
        )
      )
    },
  }),
  ht = J(vt),
  pt = { class: 'pot-icon' },
  ft = ['xlink:href'],
  _t = m({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(o) {
      const e = o,
        t = $(() => `#icon-${e.iconClass}`)
      return (s, n) => (
        a(), l('svg', pt, [u('use', { 'xlink:href': t.value }, null, 8, ft)])
      )
    },
  }),
  Ae = J(_t),
  He = Symbol('radio-group')
function mt(o, e) {
  const t = Y(o, e)
  if (!t) throw new Error('该组件的上游组件需注入正确的值')
  return t
}
const gt = ['name', 'value'],
  $t = m({
    name: 'PotRadio',
    __name: 'radio',
    props: { value: { default: '' } },
    setup(o) {
      const e = o,
        t = mt(He)
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
            u(
              'input',
              { type: 'radio', name: i(t).name, value: e.value, onFocus: s },
              null,
              40,
              gt,
            ),
            c(n.$slots, 'default'),
          ],
          2,
        )
      )
    },
  }),
  Le = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function kt(o) {
  return `${o}-${Le.prefix}-${Le.current++}`
}
const bt = { class: 'pot-radio-group' },
  yt = m({
    name: 'PotRadioGroup',
    __name: 'radio-group',
    props: { modelValue: { default: '' } },
    emits: ['update:modelValue'],
    setup(o, { emit: e }) {
      const t = o,
        s = e,
        n = $(() => t.modelValue)
      return (
        fe(He, {
          name: kt('radio-group-name'),
          changeRadioValue: (r) => {
            s('update:modelValue', r)
          },
          checkedValue: n,
        }),
        (r, d) => (a(), l('div', bt, [c(r.$slots, 'default')]))
      )
    },
  }),
  wt = J($t),
  Vt = J(yt),
  Pt = m({
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
      return (r, d) => (
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
            u(
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
  Lt = J(Pt),
  St = ['id'],
  Mt = m({
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
        n = $(() => 30 + 50 * W.findIndex((w) => w.id == t.id))
      let r
      const d = $(() => ['pot-message', `pot-message--${t.type}`]),
        p = $(() => ({ '--pot-message-top': `${n.value}px` }))
      O(() => {
        ;(s.value = !0), b()
      }),
        e({ close: v })
      function v() {
        ;(s.value = !1), Ot(t.id), y()
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
          oe,
          { name: 'pot-message-fade' },
          {
            default: h(() => [
              Ke(
                u(
                  'div',
                  { id: t.id, class: L(d.value), style: Me(p.value) },
                  [
                    f(
                      i(Ae),
                      {
                        'icon-class': t.type,
                        style: { 'margin-right': '5px' },
                      },
                      null,
                      8,
                      ['icon-class'],
                    ),
                    H(' ' + P(t.message), 1),
                  ],
                  14,
                  St,
                ),
                [[We, s.value]],
              ),
            ]),
            _: 1,
          },
        )
      )
    },
  }),
  Ct = (o, e) => {
    const t = o.__vccOpts || o
    for (const [s, n] of e) t[s] = n
    return t
  },
  It = {},
  Tt = {
    t: '1717377933823',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '9844',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    style: { position: 'absolute', width: '0px', height: '0px' },
  },
  Nt = u(
    'symbol',
    { id: 'icon-success', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      u('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m234.057143-512.585143L469.333333 681.447619l-148.723809-148.723809 41.447619-41.496381 107.27619 107.27619 235.276191-235.27619 41.447619 41.496381z',
        'p-id': '9845',
      }),
    ],
    -1,
  ),
  Bt = u(
    'symbol',
    { id: 'icon-info', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      u('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m-29.330286-547.206095v-60.781714h58.660572v60.781714h-58.660572z m0 344.551619v-304.030476h58.660572v304.030476h-58.660572z',
        'p-id': '10331',
      }),
    ],
    -1,
  ),
  At = u(
    'symbol',
    { id: 'icon-error', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      u('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m-170.081524-276.723809L470.552381 512l-128.609524-128.585143 41.496381-41.496381L512 470.552381l128.585143-128.609524 41.496381 41.496381L553.496381 512l128.585143 128.585143-41.496381 41.496381L512 553.496381l-128.585143 128.585143-41.496381-41.496381z',
        'p-id': '10007',
      }),
    ],
    -1,
  ),
  Ht = u(
    'symbol',
    { id: 'icon-warning', class: 'icon', viewBox: '0 0 1024 1024' },
    [
      u('path', {
        d: 'M512 917.333333c223.865905 0 405.333333-181.467429 405.333333-405.333333S735.865905 106.666667 512 106.666667 106.666667 288.134095 106.666667 512 288.134095 917.333333 512 917.333333z m29.330286-608.01219v304.030476h-58.660572v-304.030476h58.660572z m0 344.551619v60.806095h-58.660572v-60.806095h58.660572z',
        'p-id': '10169',
      }),
    ],
    -1,
  ),
  zt = [Nt, Bt, At, Ht]
function Et(o, e) {
  return a(), l('svg', Tt, zt)
}
const Ft = Ct(It, [['render', Et]]),
  W = Ye([])
let Dt = 1,
  de = !1
function xt() {
  if (de) return
  de = !0
  const o = f(Ft),
    e = document.createElement('div')
  _e(o, e), document.body.appendChild(e.firstElementChild)
}
function Ot(o) {
  setTimeout(() => {
    const e = W.findIndex((t) => t.id == o)
    _e(null, W[e].container), W.splice(e, 1)
  }, 600)
}
function Ut(o) {
  const e = `message_${Dt++}`,
    t = document.createElement('div'),
    s = { ...o, id: e },
    n = f(Mt, s)
  _e(n, t), document.body.appendChild(t.firstElementChild)
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
function Gt(o) {
  !de && xt()
  const e = Ut(o)
  return W.push(e), e.handler
}
const jt = dt(Gt, '$message'),
  Rt = [ht, Ae, wt, Vt, Lt, jt],
  qt = ut(Rt),
  Kt = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(),
        l(
          'span',
          { class: L(['VPBadge', e.type]) },
          [c(e.$slots, 'default', {}, () => [H(P(e.text), 1)])],
          2,
        )
      )
    },
  }),
  Wt = { key: 0, class: 'VPBackdrop' },
  Yt = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          oe,
          { name: 'fade' },
          {
            default: h(() => [e.show ? (a(), l('div', Wt)) : _('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  Jt = g(Yt, [['__scopeId', 'data-v-59bf151a']]),
  V = Je
function Zt(o, e) {
  let t,
    s = !1
  return () => {
    t && clearTimeout(t),
      s
        ? (t = setTimeout(o, e))
        : (o(), (s = !0) && setTimeout(() => (s = !1), e))
  }
}
function ve(o) {
  return /^\//.test(o) ? o : `/${o}`
}
function $e(o) {
  const {
    pathname: e,
    search: t,
    hash: s,
    protocol: n,
  } = new URL(o, 'http://a.com')
  if (Ze(o) || o.startsWith('#') || !n.startsWith('http') || !Qe(e)) return o
  const { site: r } = V(),
    d =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(
              /(\.md)?$/,
              r.value.cleanUrls ? '' : '.html',
            )}${t}${s}`,
          )
  return me(d)
}
const ke = S(K ? location.hash : '')
K &&
  window.addEventListener('hashchange', () => {
    ke.value = location.hash
  })
function Z({ removeCurrent: o = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: s, page: n, theme: r } = V(),
    d = $(() => {
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
        o && d.value.label === b.label
          ? []
          : {
              text: b.label,
              link:
                Qt(
                  b.link || (v === 'root' ? '/' : `/${v}/`),
                  r.value.i18nRouting !== !1 && e,
                  n.value.relativePath.slice(d.value.link.length - 1),
                  !t.value.cleanUrls,
                ) + ke.value,
            },
      ),
    ),
    currentLang: d,
  }
}
function Qt(o, e, t, s) {
  return e
    ? o.replace(/\/$/, '') +
        ve(
          t
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, s ? '.html' : ''),
        )
    : o
}
const Xt = (o) => (E('data-v-07f75c55'), (o = o()), F(), o),
  eo = { class: 'NotFound' },
  to = { class: 'code' },
  oo = { class: 'title' },
  so = Xt(() => u('div', { class: 'divider' }, null, -1)),
  no = { class: 'quote' },
  ao = { class: 'action' },
  ro = ['href', 'aria-label'],
  io = m({
    __name: 'NotFound',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s } = Z({ removeCurrent: !1 }),
        n = S('/')
      return (
        O(() => {
          var d
          const r = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          s.value.length &&
            (n.value =
              ((d = s.value.find(({ link: p }) => p.startsWith(r))) == null
                ? void 0
                : d.link) || s.value[0].link)
        }),
        (r, d) => {
          var p, v, b, y, w
          return (
            a(),
            l('div', eo, [
              u(
                'p',
                to,
                P(((p = i(t).notFound) == null ? void 0 : p.code) ?? '404'),
                1,
              ),
              u(
                'h1',
                oo,
                P(
                  ((v = i(t).notFound) == null ? void 0 : v.title) ??
                    'PAGE NOT FOUND',
                ),
                1,
              ),
              so,
              u(
                'blockquote',
                no,
                P(
                  ((b = i(t).notFound) == null ? void 0 : b.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              u('div', ao, [
                u(
                  'a',
                  {
                    class: 'link',
                    href: i(me)(n.value),
                    'aria-label':
                      ((y = i(t).notFound) == null ? void 0 : y.linkLabel) ??
                      'go to home',
                  },
                  P(
                    ((w = i(t).notFound) == null ? void 0 : w.linkText) ??
                      'Take me home',
                  ),
                  9,
                  ro,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  lo = g(io, [['__scopeId', 'data-v-07f75c55']])
function ze(o, e) {
  if (Array.isArray(o)) return ee(o)
  if (o == null) return []
  e = ve(e)
  const t = Object.keys(o)
      .sort((n, r) => r.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(ve(n))),
    s = t ? o[t] : []
  return Array.isArray(s) ? ee(s) : ee(s.items, s.base)
}
function co(o) {
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
function uo(o) {
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
function he(o, e) {
  return Array.isArray(e)
    ? e.some((t) => he(o, t))
    : G(o, e.link)
    ? !0
    : e.items
    ? he(o, e.items)
    : !1
}
function ee(o, e) {
  return [...o].map((t) => {
    const s = { ...t },
      n = s.base || e
    return (
      n && s.link && (s.link = n + s.link),
      s.items && (s.items = ee(s.items, n)),
      s
    )
  })
}
function D() {
  const { frontmatter: o, page: e, theme: t } = V(),
    s = ue('(min-width: 960px)'),
    n = S(!1),
    r = $(() => {
      const B = t.value.sidebar,
        C = e.value.relativePath
      return B ? ze(B, C) : []
    }),
    d = S(r.value)
  j(r, (B, C) => {
    JSON.stringify(B) !== JSON.stringify(C) && (d.value = r.value)
  })
  const p = $(
      () =>
        o.value.sidebar !== !1 &&
        d.value.length > 0 &&
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
    w = $(() => (p.value ? co(d.value) : []))
  function M() {
    n.value = !0
  }
  function I() {
    n.value = !1
  }
  function N() {
    n.value ? I() : M()
  }
  return {
    isOpen: n,
    sidebar: d,
    sidebarGroups: w,
    hasSidebar: p,
    hasAside: b,
    leftAside: v,
    isSidebarEnabled: y,
    open: M,
    close: I,
    toggle: N,
  }
}
function vo(o, e) {
  let t
  se(() => {
    t = o.value ? document.activeElement : void 0
  }),
    O(() => {
      window.addEventListener('keyup', s)
    }),
    ge(() => {
      window.removeEventListener('keyup', s)
    })
  function s(n) {
    n.key === 'Escape' && o.value && (e(), t == null || t.focus())
  }
}
function ho(o) {
  const { page: e } = V(),
    t = S(!1),
    s = $(() => o.value.collapsed != null),
    n = $(() => !!o.value.link),
    r = S(!1),
    d = () => {
      r.value = G(e.value.relativePath, o.value.link)
    }
  j([e, o, ke], d), O(d)
  const p = $(() =>
      r.value
        ? !0
        : o.value.items
        ? he(e.value.relativePath, o.value.items)
        : !1,
    ),
    v = $(() => !!(o.value.items && o.value.items.length))
  se(() => {
    t.value = !!(s.value && o.value.collapsed)
  }),
    Ce(() => {
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
function po() {
  const { hasSidebar: o } = D(),
    e = ue('(min-width: 960px)'),
    t = ue('(min-width: 1280px)')
  return {
    isAsideEnabled: $(() =>
      !t.value && !e.value ? !1 : o.value ? t.value : e.value,
    ),
  }
}
const pe = []
function Ee(o) {
  return (
    (typeof o.outline == 'object' &&
      !Array.isArray(o.outline) &&
      o.outline.label) ||
    o.outlineTitle ||
    'On this page'
  )
}
function be(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const s = Number(t.tagName[1])
      return { element: t, title: fo(t), link: '#' + t.id, level: s }
    })
  return _o(e, o)
}
function fo(o) {
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
function _o(o, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [s, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(o = o.filter((d) => d.level >= s && d.level <= n)), (pe.length = 0)
  for (const { element: d, link: p } of o) pe.push({ element: d, link: p })
  const r = []
  e: for (let d = 0; d < o.length; d++) {
    const p = o[d]
    if (d === 0) r.push(p)
    else {
      for (let v = d - 1; v >= 0; v--) {
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
function mo(o, e) {
  const { isAsideEnabled: t } = po(),
    s = Zt(r, 100)
  let n = null
  O(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', s)
  }),
    Xe(() => {
      d(location.hash)
    }),
    ge(() => {
      window.removeEventListener('scroll', s)
    })
  function r() {
    if (!t.value) return
    const p = window.scrollY,
      v = window.innerHeight,
      b = document.body.offsetHeight,
      y = Math.abs(p + v - b) < 1,
      w = pe
        .map(({ element: I, link: N }) => ({ link: N, top: go(I) }))
        .filter(({ top: I }) => !Number.isNaN(I))
        .sort((I, N) => I.top - N.top)
    if (!w.length) {
      d(null)
      return
    }
    if (p < 1) {
      d(null)
      return
    }
    if (y) {
      d(w[w.length - 1].link)
      return
    }
    let M = null
    for (const { link: I, top: N } of w) {
      if (N > p + et() + 4) break
      M = I
    }
    d(M)
  }
  function d(p) {
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
function go(o) {
  let e = 0
  for (; o !== document.body; ) {
    if (o === null) return NaN
    ;(e += o.offsetTop), (o = o.offsetParent)
  }
  return e
}
const $o = ['href', 'title'],
  ko = m({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(o) {
      function e({ target: t }) {
        const s = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(s))
        n == null || n.focus({ preventScroll: !0 })
      }
      return (t, s) => {
        const n = R('VPDocOutlineItem', !0)
        return (
          a(),
          l(
            'ul',
            { class: L(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              l(
                T,
                null,
                A(
                  t.headers,
                  ({ children: r, link: d, title: p }) => (
                    a(),
                    l('li', null, [
                      u(
                        'a',
                        {
                          class: 'outline-link',
                          href: d,
                          onClick: e,
                          title: p,
                        },
                        P(p),
                        9,
                        $o,
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
  Fe = g(ko, [['__scopeId', 'data-v-1d718f80']]),
  bo = (o) => (E('data-v-860eb583'), (o = o()), F(), o),
  yo = { class: 'content' },
  wo = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  Vo = { 'aria-labelledby': 'doc-outline-aria-label' },
  Po = bo(() =>
    u(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  Lo = m({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = V(),
        s = Ie([])
      ne(() => {
        s.value = be(e.value.outline ?? t.value.outline)
      })
      const n = S(),
        r = S()
      return (
        mo(n, r),
        (d, p) => (
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
              u('div', yo, [
                u(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: r },
                  null,
                  512,
                ),
                u('div', wo, P(i(Ee)(i(t))), 1),
                u('nav', Vo, [
                  Po,
                  f(Fe, { headers: s.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  So = g(Lo, [['__scopeId', 'data-v-860eb583']]),
  Mo = { class: 'VPDocAsideCarbonAds' },
  Co = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null
      return (t, s) => (
        a(),
        l('div', Mo, [
          f(i(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  Io = (o) => (E('data-v-be2aafe6'), (o = o()), F(), o),
  To = { class: 'VPDocAside' },
  No = Io(() => u('div', { class: 'spacer' }, null, -1)),
  Bo = m({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = V()
      return (t, s) => (
        a(),
        l('div', To, [
          c(t.$slots, 'aside-top', {}, void 0, !0),
          c(t.$slots, 'aside-outline-before', {}, void 0, !0),
          f(So),
          c(t.$slots, 'aside-outline-after', {}, void 0, !0),
          No,
          c(t.$slots, 'aside-ads-before', {}, void 0, !0),
          i(e).carbonAds
            ? (a(),
              k(Co, { key: 0, 'carbon-ads': i(e).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : _('', !0),
          c(t.$slots, 'aside-ads-after', {}, void 0, !0),
          c(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  Ao = g(Bo, [['__scopeId', 'data-v-be2aafe6']])
function Ho() {
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
function zo() {
  const { page: o, theme: e, frontmatter: t } = V()
  return $(() => {
    var v, b, y, w, M, I, N, B
    const s = ze(e.value.sidebar, o.value.relativePath),
      n = uo(s),
      r = n.findIndex((C) => G(o.value.relativePath, C.link)),
      d =
        (((v = e.value.docFooter) == null ? void 0 : v.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((b = e.value.docFooter) == null ? void 0 : b.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1
    return {
      prev: d
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
              ((I = n[r + 1]) == null ? void 0 : I.docFooterText) ??
              ((N = n[r + 1]) == null ? void 0 : N.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((B = n[r + 1]) == null ? void 0 : B.link),
          },
    }
  })
}
const Eo = {},
  Fo = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Do = u(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  xo = u(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  Oo = [Do, xo]
function Uo(o, e) {
  return a(), l('svg', Fo, Oo)
}
const Go = g(Eo, [['render', Uo]]),
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
        s = $(() => e.href && Te.test(e.href))
      return (n, r) => (
        a(),
        k(
          U(t.value),
          {
            class: L([
              'VPLink',
              {
                link: n.href,
                'vp-external-link-icon': s.value,
                'no-icon': n.noIcon,
              },
            ]),
            href: n.href ? i($e)(n.href) : void 0,
            target: n.target ?? (s.value ? '_blank' : void 0),
            rel: n.rel ?? (s.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [c(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  jo = { class: 'VPLastUpdated' },
  Ro = ['datetime'],
  qo = m({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, frontmatter: s, lang: n } = V(),
        r = $(() => new Date(s.value.lastUpdated ?? t.value.lastUpdated)),
        d = $(() => r.value.toISOString()),
        p = S('')
      return (
        O(() => {
          se(() => {
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
            l('p', jo, [
              H(
                P(
                  ((y = i(e).lastUpdated) == null ? void 0 : y.text) ||
                    i(e).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              u('time', { datetime: d.value }, P(p.value), 9, Ro),
            ])
          )
        }
      )
    },
  }),
  Ko = g(qo, [['__scopeId', 'data-v-4ba3d317']]),
  Wo = { key: 0, class: 'VPDocFooter' },
  Yo = { key: 0, class: 'edit-info' },
  Jo = { key: 0, class: 'edit-link' },
  Zo = { key: 1, class: 'last-updated' },
  Qo = { key: 1, class: 'prev-next' },
  Xo = { class: 'pager' },
  es = ['innerHTML'],
  ts = ['innerHTML'],
  os = { class: 'pager' },
  ss = ['innerHTML'],
  ns = ['innerHTML'],
  as = m({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: s } = V(),
        n = Ho(),
        r = zo(),
        d = $(() => e.value.editLink && s.value.editLink !== !1),
        p = $(() => t.value.lastUpdated && s.value.lastUpdated !== !1),
        v = $(() => d.value || p.value || r.value.prev || r.value.next)
      return (b, y) => {
        var w, M, I, N
        return v.value
          ? (a(),
            l('footer', Wo, [
              c(b.$slots, 'doc-footer-before', {}, void 0, !0),
              d.value || p.value
                ? (a(),
                  l('div', Yo, [
                    d.value
                      ? (a(),
                        l('div', Jo, [
                          f(
                            z,
                            {
                              class: 'edit-link-button',
                              href: i(n).url,
                              'no-icon': !0,
                            },
                            {
                              default: h(() => [
                                f(Go, {
                                  class: 'edit-link-icon',
                                  'aria-label': 'edit icon',
                                }),
                                H(' ' + P(i(n).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : _('', !0),
                    p.value ? (a(), l('div', Zo, [f(Ko)])) : _('', !0),
                  ]))
                : _('', !0),
              ((w = i(r).prev) != null && w.link) ||
              ((M = i(r).next) != null && M.link)
                ? (a(),
                  l('nav', Qo, [
                    u('div', Xo, [
                      (I = i(r).prev) != null && I.link
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
                                  u(
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
                                    es,
                                  ),
                                  u(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).prev.text,
                                    },
                                    null,
                                    8,
                                    ts,
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
                    u('div', os, [
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
                                  u(
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
                                    ss,
                                  ),
                                  u(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).next.text,
                                    },
                                    null,
                                    8,
                                    ns,
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
  rs = g(as, [['__scopeId', 'data-v-39b90627']]),
  is = (o) => (E('data-v-3fe17779'), (o = o()), F(), o),
  ls = { class: 'container' },
  cs = is(() => u('div', { class: 'aside-curtain' }, null, -1)),
  us = { class: 'aside-container' },
  ds = { class: 'aside-content' },
  vs = { class: 'content' },
  hs = { class: 'content-container' },
  ps = { class: 'main' },
  fs = m({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = V(),
        t = ae(),
        { hasSidebar: s, hasAside: n, leftAside: r } = D(),
        d = $(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (p, v) => {
        const b = R('Content')
        return (
          a(),
          l(
            'div',
            { class: L(['VPDoc', { 'has-sidebar': i(s), 'has-aside': i(n) }]) },
            [
              c(p.$slots, 'doc-top', {}, void 0, !0),
              u('div', ls, [
                i(n)
                  ? (a(),
                    l(
                      'div',
                      { key: 0, class: L(['aside', { 'left-aside': i(r) }]) },
                      [
                        cs,
                        u('div', us, [
                          u('div', ds, [
                            f(Ao, null, {
                              'aside-top': h(() => [
                                c(p.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': h(() => [
                                c(p.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': h(() => [
                                c(
                                  p.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': h(() => [
                                c(
                                  p.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': h(() => [
                                c(p.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': h(() => [
                                c(p.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : _('', !0),
                u('div', vs, [
                  u('div', hs, [
                    c(p.$slots, 'doc-before', {}, void 0, !0),
                    u('main', ps, [
                      f(
                        b,
                        {
                          class: L([
                            'vp-doc',
                            [
                              d.value,
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
                    f(rs, null, {
                      'doc-footer-before': h(() => [
                        c(p.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    c(p.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              c(p.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  _s = g(fs, [['__scopeId', 'data-v-3fe17779']]),
  ms = m({
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
        t = $(() => e.href && Te.test(e.href)),
        s = $(() => (e.tag || e.href ? 'a' : 'button'))
      return (n, r) => (
        a(),
        k(
          U(s.value),
          {
            class: L(['VPButton', [n.size, n.theme]]),
            href: n.href ? i($e)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [H(P(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  gs = g(ms, [['__scopeId', 'data-v-a9f690c4']]),
  $s = ['src', 'alt'],
  ks = m({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(o) {
      return (e, t) => {
        const s = R('VPImage', !0)
        return e.image
          ? (a(),
            l(
              T,
              { key: 0 },
              [
                typeof e.image == 'string' || 'src' in e.image
                  ? (a(),
                    l(
                      'img',
                      X(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: i(me)(
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
                      $s,
                    ))
                  : (a(),
                    l(
                      T,
                      { key: 1 },
                      [
                        f(
                          s,
                          X(
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
                          X(
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
  te = g(ks, [['__scopeId', 'data-v-221709f0']]),
  bs = (o) => (E('data-v-971af588'), (o = o()), F(), o),
  ys = { class: 'container' },
  ws = { class: 'main' },
  Vs = { key: 0, class: 'name' },
  Ps = ['innerHTML'],
  Ls = ['innerHTML'],
  Ss = ['innerHTML'],
  Ms = { key: 0, class: 'actions' },
  Cs = { key: 0, class: 'image' },
  Is = { class: 'image-container' },
  Ts = bs(() => u('div', { class: 'image-bg' }, null, -1)),
  Ns = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = Y('hero-image-slot-exists')
      return (t, s) => (
        a(),
        l(
          'div',
          { class: L(['VPHero', { 'has-image': t.image || i(e) }]) },
          [
            u('div', ys, [
              u('div', ws, [
                c(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                c(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(),
                        l('h1', Vs, [
                          u(
                            'span',
                            { innerHTML: t.name, class: 'clip' },
                            null,
                            8,
                            Ps,
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
                          Ls,
                        ))
                      : _('', !0),
                    t.tagline
                      ? (a(),
                        l(
                          'p',
                          { key: 2, innerHTML: t.tagline, class: 'tagline' },
                          null,
                          8,
                          Ss,
                        ))
                      : _('', !0),
                  ],
                  !0,
                ),
                c(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    l('div', Ms, [
                      (a(!0),
                      l(
                        T,
                        null,
                        A(
                          t.actions,
                          (n) => (
                            a(),
                            l('div', { key: n.link, class: 'action' }, [
                              f(
                                gs,
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
                c(t.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              t.image || i(e)
                ? (a(),
                  l('div', Cs, [
                    u('div', Is, [
                      Ts,
                      c(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              k(
                                te,
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
  Bs = g(Ns, [['__scopeId', 'data-v-971af588']]),
  As = m({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).hero
          ? (a(),
            k(
              Bs,
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
                  c(t.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': h(() => [c(t.$slots, 'home-hero-info')]),
                'home-hero-info-after': h(() => [
                  c(t.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': h(() => [
                  c(t.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': h(() => [c(t.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : _('', !0)
    },
  }),
  Hs = {},
  zs = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Es = u(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  Fs = [Es]
function Ds(o, e) {
  return a(), l('svg', zs, Fs)
}
const xs = g(Hs, [['render', Ds]]),
  Os = { class: 'box' },
  Us = { key: 0, class: 'icon' },
  Gs = ['innerHTML'],
  js = ['innerHTML'],
  Rs = ['innerHTML'],
  qs = { key: 4, class: 'link-text' },
  Ks = { class: 'link-text-value' },
  Ws = m({
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
              u('article', Os, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    l('div', Us, [
                      f(
                        te,
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
                      te,
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
                      Gs,
                    ))
                  : _('', !0),
                u('h2', { class: 'title', innerHTML: e.title }, null, 8, js),
                e.details
                  ? (a(),
                    l(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      Rs,
                    ))
                  : _('', !0),
                e.linkText
                  ? (a(),
                    l('div', qs, [
                      u('p', Ks, [
                        H(P(e.linkText) + ' ', 1),
                        f(xs, { class: 'link-text-icon' }),
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
  Ys = g(Ws, [['__scopeId', 'data-v-7073c63f']]),
  Js = { key: 0, class: 'VPFeatures' },
  Zs = { class: 'container' },
  Qs = { class: 'items' },
  Xs = m({
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
            l('div', Js, [
              u('div', Zs, [
                u('div', Qs, [
                  (a(!0),
                  l(
                    T,
                    null,
                    A(
                      s.features,
                      (r) => (
                        a(),
                        l(
                          'div',
                          { key: r.title, class: L(['item', [t.value]]) },
                          [
                            f(
                              Ys,
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
  en = g(Xs, [['__scopeId', 'data-v-f3fa1aba']]),
  tn = m({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).features
          ? (a(),
            k(
              en,
              { key: 0, class: 'VPHomeFeatures', features: i(e).features },
              null,
              8,
              ['features'],
            ))
          : _('', !0)
    },
  }),
  on = { class: 'VPHome' },
  sn = m({
    __name: 'VPHome',
    setup(o) {
      return (e, t) => {
        const s = R('Content')
        return (
          a(),
          l('div', on, [
            c(e.$slots, 'home-hero-before', {}, void 0, !0),
            f(As, null, {
              'home-hero-info-before': h(() => [
                c(e.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': h(() => [
                c(e.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': h(() => [
                c(e.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': h(() => [
                c(e.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': h(() => [
                c(e.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            c(e.$slots, 'home-hero-after', {}, void 0, !0),
            c(e.$slots, 'home-features-before', {}, void 0, !0),
            f(tn),
            c(e.$slots, 'home-features-after', {}, void 0, !0),
            f(s),
          ])
        )
      }
    },
  }),
  nn = g(sn, [['__scopeId', 'data-v-d2f3eedd']]),
  an = {},
  rn = { class: 'VPPage' }
function ln(o, e) {
  const t = R('Content')
  return (
    a(),
    l('div', rn, [c(o.$slots, 'page-top'), f(t), c(o.$slots, 'page-bottom')])
  )
}
const cn = g(an, [['render', ln]]),
  un = m({
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
              ? c(n.$slots, 'not-found', { key: 0 }, () => [f(lo)], !0)
              : i(t).layout === 'page'
              ? (a(),
                k(
                  cn,
                  { key: 1 },
                  {
                    'page-top': h(() => [
                      c(n.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': h(() => [
                      c(n.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : i(t).layout === 'home'
              ? (a(),
                k(
                  nn,
                  { key: 2 },
                  {
                    'home-hero-before': h(() => [
                      c(n.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': h(() => [
                      c(n.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': h(() => [
                      c(n.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': h(() => [
                      c(n.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': h(() => [
                      c(n.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': h(() => [
                      c(n.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': h(() => [
                      c(n.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': h(() => [
                      c(n.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': h(() => [
                      c(n.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                ))
              : i(t).layout && i(t).layout !== 'doc'
              ? (a(), k(U(i(t).layout), { key: 3 }))
              : (a(),
                k(
                  _s,
                  { key: 4 },
                  {
                    'doc-top': h(() => [
                      c(n.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': h(() => [
                      c(n.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'doc-footer-before': h(() => [
                      c(n.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': h(() => [
                      c(n.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': h(() => [
                      c(n.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'aside-top': h(() => [
                      c(n.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-outline-before': h(() => [
                      c(n.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': h(() => [
                      c(n.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': h(() => [
                      c(n.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': h(() => [
                      c(n.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    'aside-bottom': h(() => [
                      c(n.$slots, 'aside-bottom', {}, void 0, !0),
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
  dn = g(un, [['__scopeId', 'data-v-e8d52db2']]),
  vn = { class: 'container' },
  hn = ['innerHTML'],
  pn = ['innerHTML'],
  fn = m({
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
                u('div', vn, [
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
                        hn,
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
                        pn,
                      ))
                    : _('', !0),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  _n = g(fn, [['__scopeId', 'data-v-f5761f20']])
function De() {
  const { theme: o, frontmatter: e } = V(),
    t = Ie([]),
    s = $(() => t.value.length > 0)
  return (
    ne(() => {
      t.value = be(e.value.outline ?? o.value.outline)
    }),
    { headers: t, hasLocalNav: s }
  )
}
const mn = {},
  gn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  $n = u(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1,
  ),
  kn = [$n]
function bn(o, e) {
  return a(), l('svg', gn, kn)
}
const xe = g(mn, [['render', bn]]),
  yn = { class: 'header' },
  wn = { class: 'outline' },
  Vn = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = V(),
        s = S(!1),
        n = S(0),
        r = S(),
        d = S()
      tt(r, () => {
        s.value = !1
      }),
        ot('Escape', () => {
          s.value = !1
        }),
        ne(() => {
          s.value = !1
        })
      function p() {
        ;(s.value = !s.value),
          (n.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (d.value && (d.value.style.transition = 'none'),
          st(() => {
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
            style: Me({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: r,
          },
          [
            y.headers.length > 0
              ? (a(),
                l(
                  'button',
                  { key: 0, onClick: p, class: L({ open: s.value }) },
                  [H(P(i(Ee)(i(t))) + ' ', 1), f(xe, { class: 'icon' })],
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
              oe,
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
                          ref: d,
                          class: 'items',
                          onClick: v,
                        },
                        [
                          u('div', yn, [
                            u(
                              'a',
                              { class: 'top-link', href: '#', onClick: b },
                              P(i(t).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          u('div', wn, [
                            f(Fe, { headers: y.headers }, null, 8, ['headers']),
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
  Pn = g(Vn, [['__scopeId', 'data-v-d62082ce']]),
  Ln = {},
  Sn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Mn = u(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  Cn = u(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  In = u(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  Tn = u(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  Nn = [Mn, Cn, In, Tn]
function Bn(o, e) {
  return a(), l('svg', Sn, Nn)
}
const An = g(Ln, [['render', Bn]]),
  Hn = { class: 'container' },
  zn = ['aria-expanded'],
  En = { class: 'menu-text' },
  Fn = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = D(),
        { headers: n } = De(),
        { y: r } = Ne(),
        d = S(0)
      O(() => {
        d.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        ne(() => {
          n.value = be(t.value.outline ?? e.value.outline)
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
        i(t).layout !== 'home' && (!v.value || i(r) >= d.value)
          ? (a(),
            l(
              'div',
              { key: 0, class: L(b.value) },
              [
                u('div', Hn, [
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
                          f(An, { class: 'menu-icon' }),
                          u('span', En, P(i(e).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        zn,
                      ))
                    : _('', !0),
                  f(Pn, { headers: i(n), navHeight: d.value }, null, 8, [
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
  Dn = g(Fn, [['__scopeId', 'data-v-a1abf90f']])
function xn() {
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
  const r = ae()
  return (
    j(() => r.path, t),
    { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: s }
  )
}
const On = {},
  Un = { class: 'VPSwitch', type: 'button', role: 'switch' },
  Gn = { class: 'check' },
  jn = { key: 0, class: 'icon' }
function Rn(o, e) {
  return (
    a(),
    l('button', Un, [
      u('span', Gn, [
        o.$slots.default
          ? (a(), l('span', jn, [c(o.$slots, 'default', {}, void 0, !0)]))
          : _('', !0),
      ]),
    ])
  )
}
const qn = g(On, [
    ['render', Rn],
    ['__scopeId', 'data-v-2acdc7fc'],
  ]),
  Kn = {},
  Wn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Yn = u(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  Jn = [Yn]
function Zn(o, e) {
  return a(), l('svg', Wn, Jn)
}
const Qn = g(Kn, [['render', Zn]]),
  Xn = {},
  ea = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  ta = nt(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  oa = [ta]
function sa(o, e) {
  return a(), l('svg', ea, oa)
}
const na = g(Xn, [['render', sa]]),
  aa = m({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = V(),
        s = Y('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = $(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (r, d) => (
        a(),
        k(
          qn,
          {
            title: n.value,
            class: 'VPSwitchAppearance',
            'aria-checked': i(e),
            onClick: i(s),
          },
          {
            default: h(() => [
              f(na, { class: 'sun' }),
              f(Qn, { class: 'moon' }),
            ]),
            _: 1,
          },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  ye = g(aa, [['__scopeId', 'data-v-f92d2f72']]),
  ra = { key: 0, class: 'VPNavBarAppearance' },
  ia = m({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = V()
      return (t, s) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(), l('div', ra, [f(ye)]))
          : _('', !0)
    },
  }),
  la = g(ia, [['__scopeId', 'data-v-39301be8']]),
  we = S()
let Oe = !1,
  ce = 0
function ca(o) {
  const e = S(!1)
  if (K) {
    !Oe && ua(), ce++
    const t = j(we, (s) => {
      var n, r, d
      s === o.el.value || ((n = o.el.value) != null && n.contains(s))
        ? ((e.value = !0), (r = o.onFocus) == null || r.call(o))
        : ((e.value = !1), (d = o.onBlur) == null || d.call(o))
    })
    ge(() => {
      t(), ce--, ce || da()
    })
  }
  return at(e)
}
function ua() {
  document.addEventListener('focusin', Ue),
    (Oe = !0),
    (we.value = document.activeElement)
}
function da() {
  document.removeEventListener('focusin', Ue)
}
function Ue() {
  we.value = document.activeElement
}
const va = {},
  ha = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  pa = u(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  fa = [pa]
function _a(o, e) {
  return a(), l('svg', ha, fa)
}
const Ge = g(va, [['render', _a]]),
  ma = {},
  ga = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  $a = u('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  ka = u('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  ba = u('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  ya = [$a, ka, ba]
function wa(o, e) {
  return a(), l('svg', ga, ya)
}
const Va = g(ma, [['render', wa]]),
  Pa = { class: 'VPMenuLink' },
  La = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, s) => (
        a(),
        l('div', Pa, [
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
            { default: h(() => [H(P(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      )
    },
  }),
  re = g(La, [['__scopeId', 'data-v-cba6f3f4']]),
  Sa = { class: 'VPMenuGroup' },
  Ma = { key: 0, class: 'title' },
  Ca = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Sa, [
          e.text ? (a(), l('p', Ma, P(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            T,
            null,
            A(
              e.items,
              (s) => (
                a(),
                l(
                  T,
                  null,
                  [
                    'link' in s
                      ? (a(), k(re, { key: 0, item: s }, null, 8, ['item']))
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
  Ia = g(Ca, [['__scopeId', 'data-v-ab7b8d91']]),
  Ta = { class: 'VPMenu' },
  Na = { key: 0, class: 'items' },
  Ba = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Ta, [
          e.items
            ? (a(),
              l('div', Na, [
                (a(!0),
                l(
                  T,
                  null,
                  A(
                    e.items,
                    (s) => (
                      a(),
                      l(
                        T,
                        { key: s.text },
                        [
                          'link' in s
                            ? (a(),
                              k(re, { key: 0, item: s }, null, 8, ['item']))
                            : (a(),
                              k(
                                Ia,
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
          c(e.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  Aa = g(Ba, [['__scopeId', 'data-v-fcdcccb7']]),
  Ha = ['aria-expanded', 'aria-label'],
  za = { key: 0, class: 'text' },
  Ea = ['innerHTML'],
  Fa = { class: 'menu' },
  Da = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = S(!1),
        t = S()
      ca({ el: t, onBlur: s })
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
            onMouseenter: r[1] || (r[1] = (d) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (d) => (e.value = !1)),
          },
          [
            u(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': e.value,
                'aria-label': n.label,
                onClick: r[0] || (r[0] = (d) => (e.value = !e.value)),
              },
              [
                n.button || n.icon
                  ? (a(),
                    l('span', za, [
                      n.icon
                        ? (a(), k(U(n.icon), { key: 0, class: 'option-icon' }))
                        : _('', !0),
                      n.button
                        ? (a(),
                          l(
                            'span',
                            { key: 1, innerHTML: n.button },
                            null,
                            8,
                            Ea,
                          ))
                        : _('', !0),
                      f(Ge, { class: 'text-icon' }),
                    ]))
                  : (a(), k(Va, { key: 1, class: 'icon' })),
              ],
              8,
              Ha,
            ),
            u('div', Fa, [
              f(
                Aa,
                { items: n.items },
                {
                  default: h(() => [c(n.$slots, 'default', {}, void 0, !0)]),
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
  Ve = g(Da, [['__scopeId', 'data-v-656060c7']]),
  xa = {
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
  Oa = ['href', 'aria-label', 'innerHTML'],
  Ua = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = $(() => (typeof e.icon == 'object' ? e.icon.svg : xa[e.icon]))
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
          Oa,
        )
      )
    },
  }),
  Ga = g(Ua, [['__scopeId', 'data-v-ea70026e']]),
  ja = { class: 'VPSocialLinks' },
  Ra = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', ja, [
          (a(!0),
          l(
            T,
            null,
            A(
              e.links,
              ({ link: s, icon: n, ariaLabel: r }) => (
                a(),
                k(Ga, { key: s, icon: n, link: s, ariaLabel: r }, null, 8, [
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
  Pe = g(Ra, [['__scopeId', 'data-v-cc55c76b']]),
  qa = { key: 0, class: 'group translations' },
  Ka = { class: 'trans-title' },
  Wa = { key: 1, class: 'group' },
  Ya = { class: 'item appearance' },
  Ja = { class: 'label' },
  Za = { class: 'appearance-action' },
  Qa = { key: 2, class: 'group' },
  Xa = { class: 'item social-links' },
  er = m({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s, currentLang: n } = Z({ correspondingLink: !0 }),
        r = $(
          () =>
            (s.value.length && n.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        )
      return (d, p) =>
        r.value
          ? (a(),
            k(
              Ve,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: h(() => [
                  i(s).length && i(n).label
                    ? (a(),
                      l('div', qa, [
                        u('p', Ka, P(i(n).label), 1),
                        (a(!0),
                        l(
                          T,
                          null,
                          A(
                            i(s),
                            (v) => (
                              a(),
                              k(re, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : _('', !0),
                  i(e).appearance && i(e).appearance !== 'force-dark'
                    ? (a(),
                      l('div', Wa, [
                        u('div', Ya, [
                          u(
                            'p',
                            Ja,
                            P(i(t).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          u('div', Za, [f(ye)]),
                        ]),
                      ]))
                    : _('', !0),
                  i(t).socialLinks
                    ? (a(),
                      l('div', Qa, [
                        u('div', Xa, [
                          f(
                            Pe,
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
  tr = g(er, [['__scopeId', 'data-v-ab9782f9']]),
  or = (o) => (E('data-v-464329f9'), (o = o()), F(), o),
  sr = ['aria-expanded'],
  nr = or(() =>
    u(
      'span',
      { class: 'container' },
      [
        u('span', { class: 'top' }),
        u('span', { class: 'middle' }),
        u('span', { class: 'bottom' }),
      ],
      -1,
    ),
  ),
  ar = [nr],
  rr = m({
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
          ar,
          10,
          sr,
        )
      )
    },
  }),
  ir = g(rr, [['__scopeId', 'data-v-464329f9']]),
  lr = ['innerHTML'],
  cr = m({
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
              u('span', { innerHTML: t.item.text }, null, 8, lr),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  ur = g(cr, [['__scopeId', 'data-v-922d1c9b']]),
  dr = m({
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
      return (r, d) => (
        a(),
        k(
          Ve,
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
  vr = (o) => (E('data-v-85770335'), (o = o()), F(), o),
  hr = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  pr = vr(() =>
    u(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  fr = m({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', hr, [
              pr,
              (a(!0),
              l(
                T,
                null,
                A(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      T,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), k(ur, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(dr, { key: 1, item: n }, null, 8, ['item'])),
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
  _r = g(fr, [['__scopeId', 'data-v-85770335']])
function mr(o) {
  const { localeIndex: e, theme: t } = V()
  function s(n) {
    var N, B, C
    const r = n.split('.'),
      d = (N = t.value.search) == null ? void 0 : N.options,
      p = d && typeof d == 'object',
      v =
        (p &&
          ((C = (B = d.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : C.translations)) ||
        null,
      b = (p && d.translations) || null
    let y = v,
      w = b,
      M = o
    const I = r.pop()
    for (const Q of r) {
      let x = null
      const q = M == null ? void 0 : M[Q]
      q && (x = M = q)
      const ie = w == null ? void 0 : w[Q]
      ie && (x = w = ie)
      const le = y == null ? void 0 : y[Q]
      le && (x = y = le), q || (M = x), ie || (w = x), le || (y = x)
    }
    return (
      (y == null ? void 0 : y[I]) ??
      (w == null ? void 0 : w[I]) ??
      (M == null ? void 0 : M[I]) ??
      ''
    )
  }
  return s
}
const gr = ['aria-label'],
  $r = { class: 'DocSearch-Button-Container' },
  kr = u(
    'svg',
    {
      class: 'DocSearch-Search-Icon',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      'aria-label': 'search icon',
    },
    [
      u('path', {
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
  br = { class: 'DocSearch-Button-Placeholder' },
  yr = u(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      u('kbd', { class: 'DocSearch-Button-Key' }),
      u('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  Se = m({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = mr({
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
            u('span', $r, [kr, u('span', br, P(i(t)('button.buttonText')), 1)]),
            yr,
          ],
          8,
          gr,
        )
      )
    },
  }),
  wr = { class: 'VPNavBarSearch' },
  Vr = { id: 'local-search' },
  Pr = { key: 1, id: 'docsearch' },
  Lr = m({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: s } = V(),
        n = S(!1),
        r = S(!1)
      O(() => {})
      function d() {
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
          l('div', wr, [
            i(b) === 'local'
              ? (a(),
                l(
                  T,
                  { key: 0 },
                  [
                    v.value
                      ? (a(),
                        k(i(e), {
                          key: 0,
                          onClose: w[0] || (w[0] = (I) => (v.value = !1)),
                        }))
                      : _('', !0),
                    u('div', Vr, [
                      f(Se, {
                        onClick: w[1] || (w[1] = (I) => (v.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : i(b) === 'algolia'
              ? (a(),
                l(
                  T,
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
                              w[2] || (w[2] = (I) => (r.value = !0)),
                          },
                          null,
                          8,
                          ['algolia'],
                        ))
                      : _('', !0),
                    r.value
                      ? _('', !0)
                      : (a(), l('div', Pr, [f(Se, { onClick: d })])),
                  ],
                  64,
                ))
              : _('', !0),
          ])
        )
      }
    },
  }),
  Sr = m({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              Pe,
              { key: 0, class: 'VPNavBarSocialLinks', links: i(e).socialLinks },
              null,
              8,
              ['links'],
            ))
          : _('', !0)
    },
  }),
  Mr = g(Sr, [['__scopeId', 'data-v-970392df']]),
  Cr = ['href', 'rel', 'target'],
  Ir = { key: 1 },
  Tr = { key: 2 },
  Nr = m({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = V(),
        { hasSidebar: s } = D(),
        { currentLang: n } = Z(),
        r = $(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
            ? void 0
            : v.link
        }),
        d = $(() => {
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
            u(
              'a',
              {
                class: 'title',
                href: r.value ?? i($e)(i(n).link),
                rel: d.value,
                target: p.value,
              },
              [
                c(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                i(t).logo
                  ? (a(),
                    k(
                      te,
                      { key: 0, class: 'logo', image: i(t).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : _('', !0),
                i(t).siteTitle
                  ? (a(), l('span', Ir, P(i(t).siteTitle), 1))
                  : i(t).siteTitle === void 0
                  ? (a(), l('span', Tr, P(i(e).title), 1))
                  : _('', !0),
                c(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              Cr,
            ),
          ],
          2,
        )
      )
    },
  }),
  Br = g(Nr, [['__scopeId', 'data-v-d30acd41']]),
  Ar = {},
  Hr = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  zr = u('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  Er = u(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  Fr = [zr, Er]
function Dr(o, e) {
  return a(), l('svg', Hr, Fr)
}
const je = g(Ar, [['render', Dr]]),
  xr = { class: 'items' },
  Or = { class: 'title' },
  Ur = m({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: s } = Z({ correspondingLink: !0 })
      return (n, r) =>
        i(t).length && i(s).label
          ? (a(),
            k(
              Ve,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: je,
                label: i(e).langMenuLabel || 'Change language',
              },
              {
                default: h(() => [
                  u('div', xr, [
                    u('p', Or, P(i(s).label), 1),
                    (a(!0),
                    l(
                      T,
                      null,
                      A(
                        i(t),
                        (d) => (
                          a(),
                          k(re, { key: d.link, item: d }, null, 8, ['item'])
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
  Gr = g(Ur, [['__scopeId', 'data-v-6f037d1c']]),
  jr = (o) => (E('data-v-e2d4d38c'), (o = o()), F(), o),
  Rr = { class: 'wrapper' },
  qr = { class: 'container' },
  Kr = { class: 'title' },
  Wr = { class: 'content' },
  Yr = { class: 'content-body' },
  Jr = jr(() =>
    u('div', { class: 'divider' }, [u('div', { class: 'divider-line' })], -1),
  ),
  Zr = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const { y: e } = Ne(),
        { hasSidebar: t } = D(),
        { hasLocalNav: s } = De(),
        { frontmatter: n } = V(),
        r = S({})
      return (
        Ce(() => {
          r.value = {
            'has-sidebar': t.value,
            'has-local-nav': s.value,
            top: n.value.layout === 'home' && e.value === 0,
          }
        }),
        (d, p) => (
          a(),
          l(
            'div',
            { class: L(['VPNavBar', r.value]) },
            [
              u('div', Rr, [
                u('div', qr, [
                  u('div', Kr, [
                    f(Br, null, {
                      'nav-bar-title-before': h(() => [
                        c(d.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': h(() => [
                        c(d.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  u('div', Wr, [
                    u('div', Yr, [
                      c(d.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      f(Lr, { class: 'search' }),
                      f(_r, { class: 'menu' }),
                      f(Gr, { class: 'translations' }),
                      f(la, { class: 'appearance' }),
                      f(Mr, { class: 'social-links' }),
                      f(tr, { class: 'extra' }),
                      c(d.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      f(
                        ir,
                        {
                          class: 'hamburger',
                          active: d.isScreenOpen,
                          onClick:
                            p[0] || (p[0] = (v) => d.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              Jr,
            ],
            2,
          )
        )
      )
    },
  }),
  Qr = g(Zr, [['__scopeId', 'data-v-e2d4d38c']]),
  Xr = { key: 0, class: 'VPNavScreenAppearance' },
  ei = { class: 'text' },
  ti = m({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = V()
      return (s, n) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(),
            l('div', Xr, [
              u('p', ei, P(i(t).darkModeSwitchLabel || 'Appearance'), 1),
              f(ye),
            ]))
          : _('', !0)
    },
  }),
  oi = g(ti, [['__scopeId', 'data-v-83332725']]),
  si = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = Y('close-screen')
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
          { default: h(() => [H(P(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  ni = g(si, [['__scopeId', 'data-v-4760ddb3']]),
  ai = {},
  ri = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  ii = u(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  li = [ii]
function ci(o, e) {
  return a(), l('svg', ri, li)
}
const ui = g(ai, [['render', ci]]),
  di = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = Y('close-screen')
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
          { default: h(() => [H(P(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Re = g(di, [['__scopeId', 'data-v-b7e806a3']]),
  vi = { class: 'VPNavScreenMenuGroupSection' },
  hi = { key: 0, class: 'title' },
  pi = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', vi, [
          e.text ? (a(), l('p', hi, P(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            T,
            null,
            A(
              e.items,
              (s) => (a(), k(Re, { key: s.text, item: s }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  fi = g(pi, [['__scopeId', 'data-v-8a97d36f']]),
  _i = ['aria-controls', 'aria-expanded'],
  mi = ['innerHTML'],
  gi = ['id'],
  $i = { key: 1, class: 'group' },
  ki = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = S(!1),
        s = $(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function n() {
        t.value = !t.value
      }
      return (r, d) => (
        a(),
        l(
          'div',
          { class: L(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            u(
              'button',
              {
                class: 'button',
                'aria-controls': s.value,
                'aria-expanded': t.value,
                onClick: n,
              },
              [
                u(
                  'span',
                  { class: 'button-text', innerHTML: r.text },
                  null,
                  8,
                  mi,
                ),
                f(ui, { class: 'button-icon' }),
              ],
              8,
              _i,
            ),
            u(
              'div',
              { id: s.value, class: 'items' },
              [
                (a(!0),
                l(
                  T,
                  null,
                  A(
                    r.items,
                    (p) => (
                      a(),
                      l(
                        T,
                        { key: p.text },
                        [
                          'link' in p
                            ? (a(),
                              l('div', { key: p.text, class: 'item' }, [
                                f(Re, { item: p }, null, 8, ['item']),
                              ]))
                            : (a(),
                              l('div', $i, [
                                f(
                                  fi,
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
              gi,
            ),
          ],
          2,
        )
      )
    },
  }),
  bi = g(ki, [['__scopeId', 'data-v-66bd100f']]),
  yi = { key: 0, class: 'VPNavScreenMenu' },
  wi = m({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', yi, [
              (a(!0),
              l(
                T,
                null,
                A(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      T,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), k(ni, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(
                              bi,
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
  Vi = m({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              Pe,
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
  Pi = { class: 'list' },
  Li = m({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = Z({ correspondingLink: !0 }),
        s = S(!1)
      function n() {
        s.value = !s.value
      }
      return (r, d) =>
        i(e).length && i(t).label
          ? (a(),
            l(
              'div',
              {
                key: 0,
                class: L(['VPNavScreenTranslations', { open: s.value }]),
              },
              [
                u('button', { class: 'title', onClick: n }, [
                  f(je, { class: 'icon lang' }),
                  H(' ' + P(i(t).label) + ' ', 1),
                  f(Ge, { class: 'icon chevron' }),
                ]),
                u('ul', Pi, [
                  (a(!0),
                  l(
                    T,
                    null,
                    A(
                      i(e),
                      (p) => (
                        a(),
                        l('li', { key: p.link, class: 'item' }, [
                          f(
                            z,
                            { class: 'link', href: p.link },
                            { default: h(() => [H(P(p.text), 1)]), _: 2 },
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
  Si = g(Li, [['__scopeId', 'data-v-230aa62c']]),
  Mi = { class: 'container' },
  Ci = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = S(null),
        t = Be(K ? document.body : null)
      return (s, n) => (
        a(),
        k(
          oe,
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
                      u('div', Mi, [
                        c(
                          s.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        f(wi, { class: 'menu' }),
                        f(Si, { class: 'translations' }),
                        f(oi, { class: 'appearance' }),
                        f(Vi, { class: 'social-links' }),
                        c(s.$slots, 'nav-screen-content-after', {}, void 0, !0),
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
  Ii = g(Ci, [['__scopeId', 'data-v-62af7f20']]),
  Ti = { key: 0, class: 'VPNav' },
  Ni = m({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = xn(),
        { frontmatter: n } = V(),
        r = $(() => n.value.navbar !== !1)
      return (
        fe('close-screen', t),
        se(() => {
          K && document.documentElement.classList.toggle('hide-nav', !r.value)
        }),
        (d, p) =>
          r.value
            ? (a(),
              l('header', Ti, [
                f(
                  Qr,
                  { 'is-screen-open': i(e), onToggleScreen: i(s) },
                  {
                    'nav-bar-title-before': h(() => [
                      c(d.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': h(() => [
                      c(d.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': h(() => [
                      c(d.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': h(() => [
                      c(d.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                f(
                  Ii,
                  { open: i(e) },
                  {
                    'nav-screen-content-before': h(() => [
                      c(d.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': h(() => [
                      c(d.$slots, 'nav-screen-content-after', {}, void 0, !0),
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
  Bi = g(Ni, [['__scopeId', 'data-v-86036eb2']]),
  Ai = (o) => (E('data-v-2d8c65e0'), (o = o()), F(), o),
  Hi = ['role', 'tabindex'],
  zi = Ai(() => u('div', { class: 'indicator' }, null, -1)),
  Ei = { key: 1, class: 'items' },
  Fi = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: s,
          isLink: n,
          isActiveLink: r,
          hasActiveLink: d,
          hasChildren: p,
          toggle: v,
        } = ho($(() => e.item)),
        b = $(() => (p.value ? 'section' : 'div')),
        y = $(() => (n.value ? 'a' : 'div')),
        w = $(() =>
          p.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p',
        ),
        M = $(() => (n.value ? void 0 : 'button')),
        I = $(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': r.value },
          { 'has-active': d.value },
        ])
      function N(C) {
        ;('key' in C && C.key !== 'Enter') || (!e.item.link && v())
      }
      function B() {
        e.item.link && v()
      }
      return (C, Q) => {
        const x = R('VPSidebarItem', !0)
        return (
          a(),
          k(
            U(b.value),
            { class: L(['VPSidebarItem', I.value]) },
            {
              default: h(() => [
                C.item.text
                  ? (a(),
                    l(
                      'div',
                      X(
                        { key: 0, class: 'item', role: M.value },
                        it(C.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: C.item.items && 0 },
                      ),
                      [
                        zi,
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
                                    U(w.value),
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
                              U(w.value),
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
                                onKeydown: rt(B, ['enter']),
                                tabindex: '0',
                              },
                              [f(xe, { class: 'caret-icon' })],
                              32,
                            ))
                          : _('', !0),
                      ],
                      16,
                      Hi,
                    ))
                  : _('', !0),
                C.item.items && C.item.items.length
                  ? (a(),
                    l('div', Ei, [
                      C.depth < 5
                        ? (a(!0),
                          l(
                            T,
                            { key: 0 },
                            A(
                              C.item.items,
                              (q) => (
                                a(),
                                k(
                                  x,
                                  { key: q.text, item: q, depth: C.depth + 1 },
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
  Di = g(Fi, [['__scopeId', 'data-v-2d8c65e0']]),
  qe = (o) => (E('data-v-875a24b2'), (o = o()), F(), o),
  xi = qe(() => u('div', { class: 'curtain' }, null, -1)),
  Oi = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  Ui = qe(() =>
    u(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  Gi = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = D(),
        s = o,
        n = S(null),
        r = Be(K ? document.body : null)
      return (
        j(
          [s, n],
          () => {
            var d
            s.open
              ? ((r.value = !0), (d = n.value) == null || d.focus())
              : (r.value = !1)
          },
          { immediate: !0, flush: 'post' },
        ),
        (d, p) =>
          i(t)
            ? (a(),
              l(
                'aside',
                {
                  key: 0,
                  class: L(['VPSidebar', { open: d.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: p[0] || (p[0] = lt(() => {}, ['stop'])),
                },
                [
                  xi,
                  u('nav', Oi, [
                    Ui,
                    c(d.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    l(
                      T,
                      null,
                      A(
                        i(e),
                        (v) => (
                          a(),
                          l('div', { key: v.text, class: 'group' }, [
                            f(Di, { item: v, depth: 0 }, null, 8, ['item']),
                          ])
                        ),
                      ),
                      128,
                    )),
                    c(d.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : _('', !0)
      )
    },
  }),
  ji = g(Gi, [['__scopeId', 'data-v-875a24b2']]),
  Ri = m({
    __name: 'VPSkipLink',
    setup(o) {
      const e = ae(),
        t = S()
      j(
        () => e.path,
        () => t.value.focus(),
      )
      function s({ target: n }) {
        const r = document.getElementById(decodeURIComponent(n.hash).slice(1))
        if (r) {
          const d = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', d)
          }
          r.setAttribute('tabindex', '-1'),
            r.addEventListener('blur', d),
            r.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (n, r) => (
        a(),
        l(
          T,
          null,
          [
            u(
              'span',
              { ref_key: 'backToTop', ref: t, tabindex: '-1' },
              null,
              512,
            ),
            u(
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
  qi = g(Ri, [['__scopeId', 'data-v-bc7e97a6']]),
  Ki = m({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: s } = D(),
        n = ae()
      j(() => n.path, s), vo(e, s)
      const { frontmatter: r } = V(),
        d = ct(),
        p = $(() => !!d['home-hero-image'])
      return (
        fe('hero-image-slot-exists', p),
        (v, b) => {
          const y = R('Content')
          return i(r).layout !== !1
            ? (a(),
              l(
                'div',
                { key: 0, class: L(['Layout', i(r).pageClass]) },
                [
                  c(v.$slots, 'layout-top', {}, void 0, !0),
                  f(qi),
                  f(
                    Jt,
                    { class: 'backdrop', show: i(e), onClick: i(s) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  f(Bi, null, {
                    'nav-bar-title-before': h(() => [
                      c(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': h(() => [
                      c(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': h(() => [
                      c(v.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': h(() => [
                      c(v.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': h(() => [
                      c(v.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': h(() => [
                      c(v.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  f(Dn, { open: i(e), onOpenMenu: i(t) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  f(
                    ji,
                    { open: i(e) },
                    {
                      'sidebar-nav-before': h(() => [
                        c(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': h(() => [
                        c(v.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  f(dn, null, {
                    'page-top': h(() => [
                      c(v.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': h(() => [
                      c(v.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': h(() => [
                      c(v.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': h(() => [
                      c(v.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': h(() => [
                      c(v.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': h(() => [
                      c(v.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': h(() => [
                      c(v.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': h(() => [
                      c(v.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': h(() => [
                      c(v.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': h(() => [
                      c(v.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': h(() => [
                      c(v.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': h(() => [
                      c(v.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': h(() => [
                      c(v.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': h(() => [
                      c(v.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': h(() => [
                      c(v.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': h(() => [
                      c(v.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': h(() => [
                      c(v.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': h(() => [
                      c(v.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': h(() => [
                      c(v.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': h(() => [
                      c(v.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': h(() => [
                      c(v.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': h(() => [
                      c(v.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': h(() => [
                      c(v.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  f(_n),
                  c(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), k(y, { key: 1 }))
        }
      )
    },
  }),
  Wi = g(Ki, [['__scopeId', 'data-v-066deec2']]),
  Yi = {
    Layout: Wi,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', Kt)
    },
  },
  Zi = {
    ...Yi,
    enhanceApp({ app: o }) {
      o.use(qt)
    },
  }
export { Zi as R, jt as a }
