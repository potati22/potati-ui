import {
  d as m,
  o as a,
  c as l,
  r as c,
  n as S,
  a as H,
  t as P,
  b as k,
  w as h,
  T as ve,
  e as _,
  _ as g,
  u as je,
  i as Re,
  f as qe,
  g as he,
  h as L,
  j as K,
  k as $,
  l as x,
  m as d,
  p as i,
  q as E,
  s as F,
  v as G,
  x as le,
  y as j,
  z as te,
  A as pe,
  B as Pe,
  C as Ke,
  D as We,
  E as R,
  F as T,
  G as A,
  H as Le,
  I as oe,
  J as f,
  K as U,
  L as Se,
  M as se,
  N as Q,
  O as W,
  P as Ye,
  Q as Je,
  R as Me,
  S as Ze,
  U as Ce,
  V as Qe,
  W as Xe,
  X as Ie,
  Y as fe,
  Z as et,
  $ as tt,
  a0 as ot,
  a1 as st,
} from './framework.DzsyM-52.js'
const nt = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(o) {
      return (e, t) => (
        a(),
        l(
          'span',
          { class: S(['VPBadge', e.type]) },
          [c(e.$slots, 'default', {}, () => [H(P(e.text), 1)])],
          2,
        )
      )
    },
  }),
  at = { key: 0, class: 'VPBackdrop' },
  rt = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(o) {
      return (e, t) => (
        a(),
        k(
          ve,
          { name: 'fade' },
          {
            default: h(() => [e.show ? (a(), l('div', at)) : _('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  it = g(rt, [['__scopeId', 'data-v-59bf151a']]),
  V = je
function lt(o, e) {
  let t,
    s = !1
  return () => {
    t && clearTimeout(t),
      s
        ? (t = setTimeout(o, e))
        : (o(), (s = !0) && setTimeout(() => (s = !1), e))
  }
}
function ce(o) {
  return /^\//.test(o) ? o : `/${o}`
}
function _e(o) {
  const {
    pathname: e,
    search: t,
    hash: s,
    protocol: n,
  } = new URL(o, 'http://a.com')
  if (Re(o) || o.startsWith('#') || !n.startsWith('http') || !qe(e)) return o
  const { site: r } = V(),
    u =
      e.endsWith('/') || e.endsWith('.html')
        ? o
        : o.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(
              /(\.md)?$/,
              r.value.cleanUrls ? '' : '.html',
            )}${t}${s}`,
          )
  return he(u)
}
const me = L(K ? location.hash : '')
K &&
  window.addEventListener('hashchange', () => {
    me.value = location.hash
  })
function Y({ removeCurrent: o = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: s, page: n, theme: r } = V(),
    u = $(() => {
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
        o && u.value.label === b.label
          ? []
          : {
              text: b.label,
              link:
                ct(
                  b.link || (v === 'root' ? '/' : `/${v}/`),
                  r.value.i18nRouting !== !1 && e,
                  n.value.relativePath.slice(u.value.link.length - 1),
                  !t.value.cleanUrls,
                ) + me.value,
            },
      ),
    ),
    currentLang: u,
  }
}
function ct(o, e, t, s) {
  return e
    ? o.replace(/\/$/, '') +
        ce(
          t
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, s ? '.html' : ''),
        )
    : o
}
const ut = (o) => (E('data-v-07f75c55'), (o = o()), F(), o),
  dt = { class: 'NotFound' },
  vt = { class: 'code' },
  ht = { class: 'title' },
  pt = ut(() => d('div', { class: 'divider' }, null, -1)),
  ft = { class: 'quote' },
  _t = { class: 'action' },
  mt = ['href', 'aria-label'],
  gt = m({
    __name: 'NotFound',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s } = Y({ removeCurrent: !1 }),
        n = L('/')
      return (
        x(() => {
          var u
          const r = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          s.value.length &&
            (n.value =
              ((u = s.value.find(({ link: p }) => p.startsWith(r))) == null
                ? void 0
                : u.link) || s.value[0].link)
        }),
        (r, u) => {
          var p, v, b, y, w
          return (
            a(),
            l('div', dt, [
              d(
                'p',
                vt,
                P(((p = i(t).notFound) == null ? void 0 : p.code) ?? '404'),
                1,
              ),
              d(
                'h1',
                ht,
                P(
                  ((v = i(t).notFound) == null ? void 0 : v.title) ??
                    'PAGE NOT FOUND',
                ),
                1,
              ),
              pt,
              d(
                'blockquote',
                ft,
                P(
                  ((b = i(t).notFound) == null ? void 0 : b.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              d('div', _t, [
                d(
                  'a',
                  {
                    class: 'link',
                    href: i(he)(n.value),
                    'aria-label':
                      ((y = i(t).notFound) == null ? void 0 : y.linkLabel) ??
                      'go to home',
                  },
                  P(
                    ((w = i(t).notFound) == null ? void 0 : w.linkText) ??
                      'Take me home',
                  ),
                  9,
                  mt,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  $t = g(gt, [['__scopeId', 'data-v-07f75c55']])
function Te(o, e) {
  if (Array.isArray(o)) return X(o)
  if (o == null) return []
  e = ce(e)
  const t = Object.keys(o)
      .sort((n, r) => r.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(ce(n))),
    s = t ? o[t] : []
  return Array.isArray(s) ? X(s) : X(s.items, s.base)
}
function kt(o) {
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
function bt(o) {
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
function ue(o, e) {
  return Array.isArray(e)
    ? e.some((t) => ue(o, t))
    : G(o, e.link)
    ? !0
    : e.items
    ? ue(o, e.items)
    : !1
}
function X(o, e) {
  return [...o].map((t) => {
    const s = { ...t },
      n = s.base || e
    return (
      n && s.link && (s.link = n + s.link),
      s.items && (s.items = X(s.items, n)),
      s
    )
  })
}
function D() {
  const { frontmatter: o, page: e, theme: t } = V(),
    s = le('(min-width: 960px)'),
    n = L(!1),
    r = $(() => {
      const B = t.value.sidebar,
        M = e.value.relativePath
      return B ? Te(B, M) : []
    }),
    u = L(r.value)
  j(r, (B, M) => {
    JSON.stringify(B) !== JSON.stringify(M) && (u.value = r.value)
  })
  const p = $(
      () =>
        o.value.sidebar !== !1 &&
        u.value.length > 0 &&
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
    w = $(() => (p.value ? kt(u.value) : []))
  function C() {
    n.value = !0
  }
  function I() {
    n.value = !1
  }
  function N() {
    n.value ? I() : C()
  }
  return {
    isOpen: n,
    sidebar: u,
    sidebarGroups: w,
    hasSidebar: p,
    hasAside: b,
    leftAside: v,
    isSidebarEnabled: y,
    open: C,
    close: I,
    toggle: N,
  }
}
function yt(o, e) {
  let t
  te(() => {
    t = o.value ? document.activeElement : void 0
  }),
    x(() => {
      window.addEventListener('keyup', s)
    }),
    pe(() => {
      window.removeEventListener('keyup', s)
    })
  function s(n) {
    n.key === 'Escape' && o.value && (e(), t == null || t.focus())
  }
}
function wt(o) {
  const { page: e } = V(),
    t = L(!1),
    s = $(() => o.value.collapsed != null),
    n = $(() => !!o.value.link),
    r = L(!1),
    u = () => {
      r.value = G(e.value.relativePath, o.value.link)
    }
  j([e, o, me], u), x(u)
  const p = $(() =>
      r.value
        ? !0
        : o.value.items
        ? ue(e.value.relativePath, o.value.items)
        : !1,
    ),
    v = $(() => !!(o.value.items && o.value.items.length))
  te(() => {
    t.value = !!(s.value && o.value.collapsed)
  }),
    Pe(() => {
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
function Vt() {
  const { hasSidebar: o } = D(),
    e = le('(min-width: 960px)'),
    t = le('(min-width: 1280px)')
  return {
    isAsideEnabled: $(() =>
      !t.value && !e.value ? !1 : o.value ? t.value : e.value,
    ),
  }
}
const de = []
function Ne(o) {
  return (
    (typeof o.outline == 'object' &&
      !Array.isArray(o.outline) &&
      o.outline.label) ||
    o.outlineTitle ||
    'On this page'
  )
}
function ge(o) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const s = Number(t.tagName[1])
      return { element: t, title: Pt(t), link: '#' + t.id, level: s }
    })
  return Lt(e, o)
}
function Pt(o) {
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
function Lt(o, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [s, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(o = o.filter((u) => u.level >= s && u.level <= n)), (de.length = 0)
  for (const { element: u, link: p } of o) de.push({ element: u, link: p })
  const r = []
  e: for (let u = 0; u < o.length; u++) {
    const p = o[u]
    if (u === 0) r.push(p)
    else {
      for (let v = u - 1; v >= 0; v--) {
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
function St(o, e) {
  const { isAsideEnabled: t } = Vt(),
    s = lt(r, 100)
  let n = null
  x(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', s)
  }),
    Ke(() => {
      u(location.hash)
    }),
    pe(() => {
      window.removeEventListener('scroll', s)
    })
  function r() {
    if (!t.value) return
    const p = window.scrollY,
      v = window.innerHeight,
      b = document.body.offsetHeight,
      y = Math.abs(p + v - b) < 1,
      w = de
        .map(({ element: I, link: N }) => ({ link: N, top: Mt(I) }))
        .filter(({ top: I }) => !Number.isNaN(I))
        .sort((I, N) => I.top - N.top)
    if (!w.length) {
      u(null)
      return
    }
    if (p < 1) {
      u(null)
      return
    }
    if (y) {
      u(w[w.length - 1].link)
      return
    }
    let C = null
    for (const { link: I, top: N } of w) {
      if (N > p + We() + 4) break
      C = I
    }
    u(C)
  }
  function u(p) {
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
function Mt(o) {
  let e = 0
  for (; o !== document.body; ) {
    if (o === null) return NaN
    ;(e += o.offsetTop), (o = o.offsetParent)
  }
  return e
}
const Ct = ['href', 'title'],
  It = m({
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
            { class: S(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              l(
                T,
                null,
                A(
                  t.headers,
                  ({ children: r, link: u, title: p }) => (
                    a(),
                    l('li', null, [
                      d(
                        'a',
                        {
                          class: 'outline-link',
                          href: u,
                          onClick: e,
                          title: p,
                        },
                        P(p),
                        9,
                        Ct,
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
  Be = g(It, [['__scopeId', 'data-v-1d718f80']]),
  Tt = (o) => (E('data-v-860eb583'), (o = o()), F(), o),
  Nt = { class: 'content' },
  Bt = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  At = { 'aria-labelledby': 'doc-outline-aria-label' },
  Ht = Tt(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  zt = m({
    __name: 'VPDocAsideOutline',
    setup(o) {
      const { frontmatter: e, theme: t } = V(),
        s = Le([])
      oe(() => {
        s.value = ge(e.value.outline ?? t.value.outline)
      })
      const n = L(),
        r = L()
      return (
        St(n, r),
        (u, p) => (
          a(),
          l(
            'div',
            {
              class: S([
                'VPDocAsideOutline',
                { 'has-outline': s.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: n,
              role: 'navigation',
            },
            [
              d('div', Nt, [
                d(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: r },
                  null,
                  512,
                ),
                d('div', Bt, P(i(Ne)(i(t))), 1),
                d('nav', At, [
                  Ht,
                  f(Be, { headers: s.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  Et = g(zt, [['__scopeId', 'data-v-860eb583']]),
  Ft = { class: 'VPDocAsideCarbonAds' },
  Dt = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(o) {
      const e = () => null
      return (t, s) => (
        a(),
        l('div', Ft, [
          f(i(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  Ot = (o) => (E('data-v-be2aafe6'), (o = o()), F(), o),
  xt = { class: 'VPDocAside' },
  Ut = Ot(() => d('div', { class: 'spacer' }, null, -1)),
  Gt = m({
    __name: 'VPDocAside',
    setup(o) {
      const { theme: e } = V()
      return (t, s) => (
        a(),
        l('div', xt, [
          c(t.$slots, 'aside-top', {}, void 0, !0),
          c(t.$slots, 'aside-outline-before', {}, void 0, !0),
          f(Et),
          c(t.$slots, 'aside-outline-after', {}, void 0, !0),
          Ut,
          c(t.$slots, 'aside-ads-before', {}, void 0, !0),
          i(e).carbonAds
            ? (a(),
              k(Dt, { key: 0, 'carbon-ads': i(e).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : _('', !0),
          c(t.$slots, 'aside-ads-after', {}, void 0, !0),
          c(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  jt = g(Gt, [['__scopeId', 'data-v-be2aafe6']])
function Rt() {
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
function qt() {
  const { page: o, theme: e, frontmatter: t } = V()
  return $(() => {
    var v, b, y, w, C, I, N, B
    const s = Te(e.value.sidebar, o.value.relativePath),
      n = bt(s),
      r = n.findIndex((M) => G(o.value.relativePath, M.link)),
      u =
        (((v = e.value.docFooter) == null ? void 0 : v.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        (((b = e.value.docFooter) == null ? void 0 : b.next) === !1 &&
          !t.value.next) ||
        t.value.next === !1
    return {
      prev: u
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
              ((C = n[r - 1]) == null ? void 0 : C.link),
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
const Kt = {},
  Wt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Yt = d(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  Jt = d(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  Zt = [Yt, Jt]
function Qt(o, e) {
  return a(), l('svg', Wt, Zt)
}
const Xt = g(Kt, [['render', Qt]]),
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
        s = $(() => e.href && Se.test(e.href))
      return (n, r) => (
        a(),
        k(
          U(t.value),
          {
            class: S([
              'VPLink',
              {
                link: n.href,
                'vp-external-link-icon': s.value,
                'no-icon': n.noIcon,
              },
            ]),
            href: n.href ? i(_e)(n.href) : void 0,
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
  eo = { class: 'VPLastUpdated' },
  to = ['datetime'],
  oo = m({
    __name: 'VPDocFooterLastUpdated',
    setup(o) {
      const { theme: e, page: t, frontmatter: s, lang: n } = V(),
        r = $(() => new Date(s.value.lastUpdated ?? t.value.lastUpdated)),
        u = $(() => r.value.toISOString()),
        p = L('')
      return (
        x(() => {
          te(() => {
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
            l('p', eo, [
              H(
                P(
                  ((y = i(e).lastUpdated) == null ? void 0 : y.text) ||
                    i(e).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              d('time', { datetime: u.value }, P(p.value), 9, to),
            ])
          )
        }
      )
    },
  }),
  so = g(oo, [['__scopeId', 'data-v-4ba3d317']]),
  no = { key: 0, class: 'VPDocFooter' },
  ao = { key: 0, class: 'edit-info' },
  ro = { key: 0, class: 'edit-link' },
  io = { key: 1, class: 'last-updated' },
  lo = { key: 1, class: 'prev-next' },
  co = { class: 'pager' },
  uo = ['innerHTML'],
  vo = ['innerHTML'],
  ho = { class: 'pager' },
  po = ['innerHTML'],
  fo = ['innerHTML'],
  _o = m({
    __name: 'VPDocFooter',
    setup(o) {
      const { theme: e, page: t, frontmatter: s } = V(),
        n = Rt(),
        r = qt(),
        u = $(() => e.value.editLink && s.value.editLink !== !1),
        p = $(() => t.value.lastUpdated && s.value.lastUpdated !== !1),
        v = $(() => u.value || p.value || r.value.prev || r.value.next)
      return (b, y) => {
        var w, C, I, N
        return v.value
          ? (a(),
            l('footer', no, [
              c(b.$slots, 'doc-footer-before', {}, void 0, !0),
              u.value || p.value
                ? (a(),
                  l('div', ao, [
                    u.value
                      ? (a(),
                        l('div', ro, [
                          f(
                            z,
                            {
                              class: 'edit-link-button',
                              href: i(n).url,
                              'no-icon': !0,
                            },
                            {
                              default: h(() => [
                                f(Xt, {
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
                    p.value ? (a(), l('div', io, [f(so)])) : _('', !0),
                  ]))
                : _('', !0),
              ((w = i(r).prev) != null && w.link) ||
              ((C = i(r).next) != null && C.link)
                ? (a(),
                  l('nav', lo, [
                    d('div', co, [
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
                                    uo,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).prev.text,
                                    },
                                    null,
                                    8,
                                    vo,
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
                    d('div', ho, [
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
                                    po,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).next.text,
                                    },
                                    null,
                                    8,
                                    fo,
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
  mo = g(_o, [['__scopeId', 'data-v-39b90627']]),
  go = (o) => (E('data-v-3fe17779'), (o = o()), F(), o),
  $o = { class: 'container' },
  ko = go(() => d('div', { class: 'aside-curtain' }, null, -1)),
  bo = { class: 'aside-container' },
  yo = { class: 'aside-content' },
  wo = { class: 'content' },
  Vo = { class: 'content-container' },
  Po = { class: 'main' },
  Lo = m({
    __name: 'VPDoc',
    setup(o) {
      const { theme: e } = V(),
        t = se(),
        { hasSidebar: s, hasAside: n, leftAside: r } = D(),
        u = $(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (p, v) => {
        const b = R('Content')
        return (
          a(),
          l(
            'div',
            { class: S(['VPDoc', { 'has-sidebar': i(s), 'has-aside': i(n) }]) },
            [
              c(p.$slots, 'doc-top', {}, void 0, !0),
              d('div', $o, [
                i(n)
                  ? (a(),
                    l(
                      'div',
                      { key: 0, class: S(['aside', { 'left-aside': i(r) }]) },
                      [
                        ko,
                        d('div', bo, [
                          d('div', yo, [
                            f(jt, null, {
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
                d('div', wo, [
                  d('div', Vo, [
                    c(p.$slots, 'doc-before', {}, void 0, !0),
                    d('main', Po, [
                      f(
                        b,
                        {
                          class: S([
                            'vp-doc',
                            [
                              u.value,
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
                    f(mo, null, {
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
  So = g(Lo, [['__scopeId', 'data-v-3fe17779']]),
  Mo = m({
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
        t = $(() => e.href && Se.test(e.href)),
        s = $(() => (e.tag || e.href ? 'a' : 'button'))
      return (n, r) => (
        a(),
        k(
          U(s.value),
          {
            class: S(['VPButton', [n.size, n.theme]]),
            href: n.href ? i(_e)(n.href) : void 0,
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
  Co = g(Mo, [['__scopeId', 'data-v-a9f690c4']]),
  Io = ['src', 'alt'],
  To = m({
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
                      Q(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: i(he)(
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
                      Io,
                    ))
                  : (a(),
                    l(
                      T,
                      { key: 1 },
                      [
                        f(
                          s,
                          Q(
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
                          Q(
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
  ee = g(To, [['__scopeId', 'data-v-221709f0']]),
  No = (o) => (E('data-v-971af588'), (o = o()), F(), o),
  Bo = { class: 'container' },
  Ao = { class: 'main' },
  Ho = { key: 0, class: 'name' },
  zo = ['innerHTML'],
  Eo = ['innerHTML'],
  Fo = ['innerHTML'],
  Do = { key: 0, class: 'actions' },
  Oo = { key: 0, class: 'image' },
  xo = { class: 'image-container' },
  Uo = No(() => d('div', { class: 'image-bg' }, null, -1)),
  Go = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(o) {
      const e = W('hero-image-slot-exists')
      return (t, s) => (
        a(),
        l(
          'div',
          { class: S(['VPHero', { 'has-image': t.image || i(e) }]) },
          [
            d('div', Bo, [
              d('div', Ao, [
                c(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                c(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(),
                        l('h1', Ho, [
                          d(
                            'span',
                            { innerHTML: t.name, class: 'clip' },
                            null,
                            8,
                            zo,
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
                          Eo,
                        ))
                      : _('', !0),
                    t.tagline
                      ? (a(),
                        l(
                          'p',
                          { key: 2, innerHTML: t.tagline, class: 'tagline' },
                          null,
                          8,
                          Fo,
                        ))
                      : _('', !0),
                  ],
                  !0,
                ),
                c(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    l('div', Do, [
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
                                Co,
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
                  l('div', Oo, [
                    d('div', xo, [
                      Uo,
                      c(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              k(
                                ee,
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
  jo = g(Go, [['__scopeId', 'data-v-971af588']]),
  Ro = m({
    __name: 'VPHomeHero',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).hero
          ? (a(),
            k(
              jo,
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
  qo = {},
  Ko = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Wo = d(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  Yo = [Wo]
function Jo(o, e) {
  return a(), l('svg', Ko, Yo)
}
const Zo = g(qo, [['render', Jo]]),
  Qo = { class: 'box' },
  Xo = { key: 0, class: 'icon' },
  es = ['innerHTML'],
  ts = ['innerHTML'],
  os = ['innerHTML'],
  ss = { key: 4, class: 'link-text' },
  ns = { class: 'link-text-value' },
  as = m({
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
              d('article', Qo, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    l('div', Xo, [
                      f(
                        ee,
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
                      ee,
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
                      es,
                    ))
                  : _('', !0),
                d('h2', { class: 'title', innerHTML: e.title }, null, 8, ts),
                e.details
                  ? (a(),
                    l(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      os,
                    ))
                  : _('', !0),
                e.linkText
                  ? (a(),
                    l('div', ss, [
                      d('p', ns, [
                        H(P(e.linkText) + ' ', 1),
                        f(Zo, { class: 'link-text-icon' }),
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
  rs = g(as, [['__scopeId', 'data-v-7073c63f']]),
  is = { key: 0, class: 'VPFeatures' },
  ls = { class: 'container' },
  cs = { class: 'items' },
  us = m({
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
            l('div', is, [
              d('div', ls, [
                d('div', cs, [
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
                          { key: r.title, class: S(['item', [t.value]]) },
                          [
                            f(
                              rs,
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
  ds = g(us, [['__scopeId', 'data-v-f3fa1aba']]),
  vs = m({
    __name: 'VPHomeFeatures',
    setup(o) {
      const { frontmatter: e } = V()
      return (t, s) =>
        i(e).features
          ? (a(),
            k(
              ds,
              { key: 0, class: 'VPHomeFeatures', features: i(e).features },
              null,
              8,
              ['features'],
            ))
          : _('', !0)
    },
  }),
  hs = { class: 'VPHome' },
  ps = m({
    __name: 'VPHome',
    setup(o) {
      return (e, t) => {
        const s = R('Content')
        return (
          a(),
          l('div', hs, [
            c(e.$slots, 'home-hero-before', {}, void 0, !0),
            f(Ro, null, {
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
            f(vs),
            c(e.$slots, 'home-features-after', {}, void 0, !0),
            f(s),
          ])
        )
      }
    },
  }),
  fs = g(ps, [['__scopeId', 'data-v-d2f3eedd']]),
  _s = {},
  ms = { class: 'VPPage' }
function gs(o, e) {
  const t = R('Content')
  return (
    a(),
    l('div', ms, [c(o.$slots, 'page-top'), f(t), c(o.$slots, 'page-bottom')])
  )
}
const $s = g(_s, [['render', gs]]),
  ks = m({
    __name: 'VPContent',
    setup(o) {
      const { page: e, frontmatter: t } = V(),
        { hasSidebar: s } = D()
      return (n, r) => (
        a(),
        l(
          'div',
          {
            class: S([
              'VPContent',
              { 'has-sidebar': i(s), 'is-home': i(t).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            i(e).isNotFound
              ? c(n.$slots, 'not-found', { key: 0 }, () => [f($t)], !0)
              : i(t).layout === 'page'
              ? (a(),
                k(
                  $s,
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
                  fs,
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
                  So,
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
  bs = g(ks, [['__scopeId', 'data-v-e8d52db2']]),
  ys = { class: 'container' },
  ws = ['innerHTML'],
  Vs = ['innerHTML'],
  Ps = m({
    __name: 'VPFooter',
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = D()
      return (n, r) =>
        i(e).footer && i(t).footer !== !1
          ? (a(),
            l(
              'footer',
              { key: 0, class: S(['VPFooter', { 'has-sidebar': i(s) }]) },
              [
                d('div', ys, [
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
                        ws,
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
                        Vs,
                      ))
                    : _('', !0),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  Ls = g(Ps, [['__scopeId', 'data-v-f5761f20']])
function Ae() {
  const { theme: o, frontmatter: e } = V(),
    t = Le([]),
    s = $(() => t.value.length > 0)
  return (
    oe(() => {
      t.value = ge(e.value.outline ?? o.value.outline)
    }),
    { headers: t, hasLocalNav: s }
  )
}
const Ss = {},
  Ms = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Cs = d(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1,
  ),
  Is = [Cs]
function Ts(o, e) {
  return a(), l('svg', Ms, Is)
}
const He = g(Ss, [['render', Ts]]),
  Ns = { class: 'header' },
  Bs = { class: 'outline' },
  As = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(o) {
      const e = o,
        { theme: t } = V(),
        s = L(!1),
        n = L(0),
        r = L(),
        u = L()
      Ye(r, () => {
        s.value = !1
      }),
        Je('Escape', () => {
          s.value = !1
        }),
        oe(() => {
          s.value = !1
        })
      function p() {
        ;(s.value = !s.value),
          (n.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (u.value && (u.value.style.transition = 'none'),
          Ze(() => {
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
                  { key: 0, onClick: p, class: S({ open: s.value }) },
                  [H(P(i(Ne)(i(t))) + ' ', 1), f(He, { class: 'icon' })],
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
              ve,
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
                          ref: u,
                          class: 'items',
                          onClick: v,
                        },
                        [
                          d('div', Ns, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: b },
                              P(i(t).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          d('div', Bs, [
                            f(Be, { headers: y.headers }, null, 8, ['headers']),
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
  Hs = g(As, [['__scopeId', 'data-v-d62082ce']]),
  zs = {},
  Es = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Fs = d(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  Ds = d(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  Os = d(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  xs = d(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  Us = [Fs, Ds, Os, xs]
function Gs(o, e) {
  return a(), l('svg', Es, Us)
}
const js = g(zs, [['render', Gs]]),
  Rs = { class: 'container' },
  qs = ['aria-expanded'],
  Ks = { class: 'menu-text' },
  Ws = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(o) {
      const { theme: e, frontmatter: t } = V(),
        { hasSidebar: s } = D(),
        { headers: n } = Ae(),
        { y: r } = Ce(),
        u = L(0)
      x(() => {
        u.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        oe(() => {
          n.value = ge(t.value.outline ?? e.value.outline)
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
        i(t).layout !== 'home' && (!v.value || i(r) >= u.value)
          ? (a(),
            l(
              'div',
              { key: 0, class: S(b.value) },
              [
                d('div', Rs, [
                  i(s)
                    ? (a(),
                      l(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': y.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: w[0] || (w[0] = (C) => y.$emit('open-menu')),
                        },
                        [
                          f(js, { class: 'menu-icon' }),
                          d('span', Ks, P(i(e).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        qs,
                      ))
                    : _('', !0),
                  f(Hs, { headers: i(n), navHeight: u.value }, null, 8, [
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
  Ys = g(Ws, [['__scopeId', 'data-v-a1abf90f']])
function Js() {
  const o = L(!1)
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
  const r = se()
  return (
    j(() => r.path, t),
    { isScreenOpen: o, openScreen: e, closeScreen: t, toggleScreen: s }
  )
}
const Zs = {},
  Qs = { class: 'VPSwitch', type: 'button', role: 'switch' },
  Xs = { class: 'check' },
  en = { key: 0, class: 'icon' }
function tn(o, e) {
  return (
    a(),
    l('button', Qs, [
      d('span', Xs, [
        o.$slots.default
          ? (a(), l('span', en, [c(o.$slots, 'default', {}, void 0, !0)]))
          : _('', !0),
      ]),
    ])
  )
}
const on = g(Zs, [
    ['render', tn],
    ['__scopeId', 'data-v-2acdc7fc'],
  ]),
  sn = {},
  nn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  an = d(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  rn = [an]
function ln(o, e) {
  return a(), l('svg', nn, rn)
}
const cn = g(sn, [['render', ln]]),
  un = {},
  dn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  vn = Qe(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  hn = [vn]
function pn(o, e) {
  return a(), l('svg', dn, hn)
}
const fn = g(un, [['render', pn]]),
  _n = m({
    __name: 'VPSwitchAppearance',
    setup(o) {
      const { isDark: e, theme: t } = V(),
        s = W('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = $(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (r, u) => (
        a(),
        k(
          on,
          {
            title: n.value,
            class: 'VPSwitchAppearance',
            'aria-checked': i(e),
            onClick: i(s),
          },
          {
            default: h(() => [
              f(fn, { class: 'sun' }),
              f(cn, { class: 'moon' }),
            ]),
            _: 1,
          },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  $e = g(_n, [['__scopeId', 'data-v-f92d2f72']]),
  mn = { key: 0, class: 'VPNavBarAppearance' },
  gn = m({
    __name: 'VPNavBarAppearance',
    setup(o) {
      const { site: e } = V()
      return (t, s) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(), l('div', mn, [f($e)]))
          : _('', !0)
    },
  }),
  $n = g(gn, [['__scopeId', 'data-v-39301be8']]),
  ke = L()
let ze = !1,
  ie = 0
function kn(o) {
  const e = L(!1)
  if (K) {
    !ze && bn(), ie++
    const t = j(ke, (s) => {
      var n, r, u
      s === o.el.value || ((n = o.el.value) != null && n.contains(s))
        ? ((e.value = !0), (r = o.onFocus) == null || r.call(o))
        : ((e.value = !1), (u = o.onBlur) == null || u.call(o))
    })
    pe(() => {
      t(), ie--, ie || yn()
    })
  }
  return Xe(e)
}
function bn() {
  document.addEventListener('focusin', Ee),
    (ze = !0),
    (ke.value = document.activeElement)
}
function yn() {
  document.removeEventListener('focusin', Ee)
}
function Ee() {
  ke.value = document.activeElement
}
const wn = {},
  Vn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Pn = d(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  Ln = [Pn]
function Sn(o, e) {
  return a(), l('svg', Vn, Ln)
}
const Fe = g(wn, [['render', Sn]]),
  Mn = {},
  Cn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  In = d('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Tn = d('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Nn = d('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  Bn = [In, Tn, Nn]
function An(o, e) {
  return a(), l('svg', Cn, Bn)
}
const Hn = g(Mn, [['render', An]]),
  zn = { class: 'VPMenuLink' },
  En = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, s) => (
        a(),
        l('div', zn, [
          f(
            z,
            {
              class: S({
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
  ne = g(En, [['__scopeId', 'data-v-cba6f3f4']]),
  Fn = { class: 'VPMenuGroup' },
  Dn = { key: 0, class: 'title' },
  On = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Fn, [
          e.text ? (a(), l('p', Dn, P(e.text), 1)) : _('', !0),
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
                      ? (a(), k(ne, { key: 0, item: s }, null, 8, ['item']))
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
  xn = g(On, [['__scopeId', 'data-v-ab7b8d91']]),
  Un = { class: 'VPMenu' },
  Gn = { key: 0, class: 'items' },
  jn = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', Un, [
          e.items
            ? (a(),
              l('div', Gn, [
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
                              k(ne, { key: 0, item: s }, null, 8, ['item']))
                            : (a(),
                              k(
                                xn,
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
  Rn = g(jn, [['__scopeId', 'data-v-fcdcccb7']]),
  qn = ['aria-expanded', 'aria-label'],
  Kn = { key: 0, class: 'text' },
  Wn = ['innerHTML'],
  Yn = { class: 'menu' },
  Jn = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(o) {
      const e = L(!1),
        t = L()
      kn({ el: t, onBlur: s })
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
            onMouseenter: r[1] || (r[1] = (u) => (e.value = !0)),
            onMouseleave: r[2] || (r[2] = (u) => (e.value = !1)),
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
                onClick: r[0] || (r[0] = (u) => (e.value = !e.value)),
              },
              [
                n.button || n.icon
                  ? (a(),
                    l('span', Kn, [
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
                            Wn,
                          ))
                        : _('', !0),
                      f(Fe, { class: 'text-icon' }),
                    ]))
                  : (a(), k(Hn, { key: 1, class: 'icon' })),
              ],
              8,
              qn,
            ),
            d('div', Yn, [
              f(
                Rn,
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
  be = g(Jn, [['__scopeId', 'data-v-656060c7']]),
  Zn = {
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
  Qn = ['href', 'aria-label', 'innerHTML'],
  Xn = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(o) {
      const e = o,
        t = $(() => (typeof e.icon == 'object' ? e.icon.svg : Zn[e.icon]))
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
          Qn,
        )
      )
    },
  }),
  ea = g(Xn, [['__scopeId', 'data-v-ea70026e']]),
  ta = { class: 'VPSocialLinks' },
  oa = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', ta, [
          (a(!0),
          l(
            T,
            null,
            A(
              e.links,
              ({ link: s, icon: n, ariaLabel: r }) => (
                a(),
                k(ea, { key: s, icon: n, link: s, ariaLabel: r }, null, 8, [
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
  ye = g(oa, [['__scopeId', 'data-v-cc55c76b']]),
  sa = { key: 0, class: 'group translations' },
  na = { class: 'trans-title' },
  aa = { key: 1, class: 'group' },
  ra = { class: 'item appearance' },
  ia = { class: 'label' },
  la = { class: 'appearance-action' },
  ca = { key: 2, class: 'group' },
  ua = { class: 'item social-links' },
  da = m({
    __name: 'VPNavBarExtra',
    setup(o) {
      const { site: e, theme: t } = V(),
        { localeLinks: s, currentLang: n } = Y({ correspondingLink: !0 }),
        r = $(
          () =>
            (s.value.length && n.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        )
      return (u, p) =>
        r.value
          ? (a(),
            k(
              be,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: h(() => [
                  i(s).length && i(n).label
                    ? (a(),
                      l('div', sa, [
                        d('p', na, P(i(n).label), 1),
                        (a(!0),
                        l(
                          T,
                          null,
                          A(
                            i(s),
                            (v) => (
                              a(),
                              k(ne, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : _('', !0),
                  i(e).appearance && i(e).appearance !== 'force-dark'
                    ? (a(),
                      l('div', aa, [
                        d('div', ra, [
                          d(
                            'p',
                            ia,
                            P(i(t).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          d('div', la, [f($e)]),
                        ]),
                      ]))
                    : _('', !0),
                  i(t).socialLinks
                    ? (a(),
                      l('div', ca, [
                        d('div', ua, [
                          f(
                            ye,
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
  va = g(da, [['__scopeId', 'data-v-ab9782f9']]),
  ha = (o) => (E('data-v-464329f9'), (o = o()), F(), o),
  pa = ['aria-expanded'],
  fa = ha(() =>
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
  _a = [fa],
  ma = m({
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
            class: S(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (s) => e.$emit('click')),
          },
          _a,
          10,
          pa,
        )
      )
    },
  }),
  ga = g(ma, [['__scopeId', 'data-v-464329f9']]),
  $a = ['innerHTML'],
  ka = m({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(o) {
      const { page: e } = V()
      return (t, s) => (
        a(),
        k(
          z,
          {
            class: S({
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
              d('span', { innerHTML: t.item.text }, null, 8, $a),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  ba = g(ka, [['__scopeId', 'data-v-922d1c9b']]),
  ya = m({
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
      return (r, u) => (
        a(),
        k(
          be,
          {
            class: S({
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
  wa = (o) => (E('data-v-85770335'), (o = o()), F(), o),
  Va = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  Pa = wa(() =>
    d(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  La = m({
    __name: 'VPNavBarMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', Va, [
              Pa,
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
                          ? (a(), k(ba, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(ya, { key: 1, item: n }, null, 8, ['item'])),
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
  Sa = g(La, [['__scopeId', 'data-v-85770335']])
function Ma(o) {
  const { localeIndex: e, theme: t } = V()
  function s(n) {
    var N, B, M
    const r = n.split('.'),
      u = (N = t.value.search) == null ? void 0 : N.options,
      p = u && typeof u == 'object',
      v =
        (p &&
          ((M = (B = u.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : M.translations)) ||
        null,
      b = (p && u.translations) || null
    let y = v,
      w = b,
      C = o
    const I = r.pop()
    for (const Z of r) {
      let O = null
      const q = C == null ? void 0 : C[Z]
      q && (O = C = q)
      const ae = w == null ? void 0 : w[Z]
      ae && (O = w = ae)
      const re = y == null ? void 0 : y[Z]
      re && (O = y = re), q || (C = O), ae || (w = O), re || (y = O)
    }
    return (
      (y == null ? void 0 : y[I]) ??
      (w == null ? void 0 : w[I]) ??
      (C == null ? void 0 : C[I]) ??
      ''
    )
  }
  return s
}
const Ca = ['aria-label'],
  Ia = { class: 'DocSearch-Button-Container' },
  Ta = d(
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
  Na = { class: 'DocSearch-Button-Placeholder' },
  Ba = d(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      d('kbd', { class: 'DocSearch-Button-Key' }),
      d('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  we = m({
    __name: 'VPNavBarSearchButton',
    setup(o) {
      const t = Ma({
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
            d('span', Ia, [Ta, d('span', Na, P(i(t)('button.buttonText')), 1)]),
            Ba,
          ],
          8,
          Ca,
        )
      )
    },
  }),
  Aa = { class: 'VPNavBarSearch' },
  Ha = { id: 'local-search' },
  za = { key: 1, id: 'docsearch' },
  Ea = m({
    __name: 'VPNavBarSearch',
    setup(o) {
      const e = () => null,
        t = () => null,
        { theme: s } = V(),
        n = L(!1),
        r = L(!1)
      x(() => {})
      function u() {
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
      const v = L(!1),
        b = ''
      return (y, w) => {
        var C
        return (
          a(),
          l('div', Aa, [
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
                    d('div', Ha, [
                      f(we, {
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
                              ((C = i(s).search) == null
                                ? void 0
                                : C.options) ?? i(s).algolia,
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
                      : (a(), l('div', za, [f(we, { onClick: u })])),
                  ],
                  64,
                ))
              : _('', !0),
          ])
        )
      }
    },
  }),
  Fa = m({
    __name: 'VPNavBarSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              ye,
              { key: 0, class: 'VPNavBarSocialLinks', links: i(e).socialLinks },
              null,
              8,
              ['links'],
            ))
          : _('', !0)
    },
  }),
  Da = g(Fa, [['__scopeId', 'data-v-970392df']]),
  Oa = ['href', 'rel', 'target'],
  xa = { key: 1 },
  Ua = { key: 2 },
  Ga = m({
    __name: 'VPNavBarTitle',
    setup(o) {
      const { site: e, theme: t } = V(),
        { hasSidebar: s } = D(),
        { currentLang: n } = Y(),
        r = $(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
            ? void 0
            : v.link
        }),
        u = $(() => {
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
          { class: S(['VPNavBarTitle', { 'has-sidebar': i(s) }]) },
          [
            d(
              'a',
              {
                class: 'title',
                href: r.value ?? i(_e)(i(n).link),
                rel: u.value,
                target: p.value,
              },
              [
                c(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                i(t).logo
                  ? (a(),
                    k(
                      ee,
                      { key: 0, class: 'logo', image: i(t).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : _('', !0),
                i(t).siteTitle
                  ? (a(), l('span', xa, P(i(t).siteTitle), 1))
                  : i(t).siteTitle === void 0
                  ? (a(), l('span', Ua, P(i(e).title), 1))
                  : _('', !0),
                c(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              Oa,
            ),
          ],
          2,
        )
      )
    },
  }),
  ja = g(Ga, [['__scopeId', 'data-v-d30acd41']]),
  Ra = {},
  qa = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ka = d('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  Wa = d(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  Ya = [Ka, Wa]
function Ja(o, e) {
  return a(), l('svg', qa, Ya)
}
const De = g(Ra, [['render', Ja]]),
  Za = { class: 'items' },
  Qa = { class: 'title' },
  Xa = m({
    __name: 'VPNavBarTranslations',
    setup(o) {
      const { theme: e } = V(),
        { localeLinks: t, currentLang: s } = Y({ correspondingLink: !0 })
      return (n, r) =>
        i(t).length && i(s).label
          ? (a(),
            k(
              be,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: De,
                label: i(e).langMenuLabel || 'Change language',
              },
              {
                default: h(() => [
                  d('div', Za, [
                    d('p', Qa, P(i(s).label), 1),
                    (a(!0),
                    l(
                      T,
                      null,
                      A(
                        i(t),
                        (u) => (
                          a(),
                          k(ne, { key: u.link, item: u }, null, 8, ['item'])
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
  er = g(Xa, [['__scopeId', 'data-v-6f037d1c']]),
  tr = (o) => (E('data-v-e2d4d38c'), (o = o()), F(), o),
  or = { class: 'wrapper' },
  sr = { class: 'container' },
  nr = { class: 'title' },
  ar = { class: 'content' },
  rr = { class: 'content-body' },
  ir = tr(() =>
    d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1),
  ),
  lr = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(o) {
      const { y: e } = Ce(),
        { hasSidebar: t } = D(),
        { hasLocalNav: s } = Ae(),
        { frontmatter: n } = V(),
        r = L({})
      return (
        Pe(() => {
          r.value = {
            'has-sidebar': t.value,
            'has-local-nav': s.value,
            top: n.value.layout === 'home' && e.value === 0,
          }
        }),
        (u, p) => (
          a(),
          l(
            'div',
            { class: S(['VPNavBar', r.value]) },
            [
              d('div', or, [
                d('div', sr, [
                  d('div', nr, [
                    f(ja, null, {
                      'nav-bar-title-before': h(() => [
                        c(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': h(() => [
                        c(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  d('div', ar, [
                    d('div', rr, [
                      c(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      f(Ea, { class: 'search' }),
                      f(Sa, { class: 'menu' }),
                      f(er, { class: 'translations' }),
                      f($n, { class: 'appearance' }),
                      f(Da, { class: 'social-links' }),
                      f(va, { class: 'extra' }),
                      c(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      f(
                        ga,
                        {
                          class: 'hamburger',
                          active: u.isScreenOpen,
                          onClick:
                            p[0] || (p[0] = (v) => u.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              ir,
            ],
            2,
          )
        )
      )
    },
  }),
  cr = g(lr, [['__scopeId', 'data-v-e2d4d38c']]),
  ur = { key: 0, class: 'VPNavScreenAppearance' },
  dr = { class: 'text' },
  vr = m({
    __name: 'VPNavScreenAppearance',
    setup(o) {
      const { site: e, theme: t } = V()
      return (s, n) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(),
            l('div', ur, [
              d('p', dr, P(i(t).darkModeSwitchLabel || 'Appearance'), 1),
              f($e),
            ]))
          : _('', !0)
    },
  }),
  hr = g(vr, [['__scopeId', 'data-v-83332725']]),
  pr = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(o) {
      const e = W('close-screen')
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
  fr = g(pr, [['__scopeId', 'data-v-4760ddb3']]),
  _r = {},
  mr = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  gr = d(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  $r = [gr]
function kr(o, e) {
  return a(), l('svg', mr, $r)
}
const br = g(_r, [['render', kr]]),
  yr = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(o) {
      const e = W('close-screen')
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
  Oe = g(yr, [['__scopeId', 'data-v-b7e806a3']]),
  wr = { class: 'VPNavScreenMenuGroupSection' },
  Vr = { key: 0, class: 'title' },
  Pr = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(o) {
      return (e, t) => (
        a(),
        l('div', wr, [
          e.text ? (a(), l('p', Vr, P(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            T,
            null,
            A(
              e.items,
              (s) => (a(), k(Oe, { key: s.text, item: s }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Lr = g(Pr, [['__scopeId', 'data-v-8a97d36f']]),
  Sr = ['aria-controls', 'aria-expanded'],
  Mr = ['innerHTML'],
  Cr = ['id'],
  Ir = { key: 1, class: 'group' },
  Tr = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(o) {
      const e = o,
        t = L(!1),
        s = $(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function n() {
        t.value = !t.value
      }
      return (r, u) => (
        a(),
        l(
          'div',
          { class: S(['VPNavScreenMenuGroup', { open: t.value }]) },
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
                  Mr,
                ),
                f(br, { class: 'button-icon' }),
              ],
              8,
              Sr,
            ),
            d(
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
                                f(Oe, { item: p }, null, 8, ['item']),
                              ]))
                            : (a(),
                              l('div', Ir, [
                                f(
                                  Lr,
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
              Cr,
            ),
          ],
          2,
        )
      )
    },
  }),
  Nr = g(Tr, [['__scopeId', 'data-v-66bd100f']]),
  Br = { key: 0, class: 'VPNavScreenMenu' },
  Ar = m({
    __name: 'VPNavScreenMenu',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).nav
          ? (a(),
            l('nav', Br, [
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
                          ? (a(), k(fr, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            k(
                              Nr,
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
  Hr = m({
    __name: 'VPNavScreenSocialLinks',
    setup(o) {
      const { theme: e } = V()
      return (t, s) =>
        i(e).socialLinks
          ? (a(),
            k(
              ye,
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
  zr = { class: 'list' },
  Er = m({
    __name: 'VPNavScreenTranslations',
    setup(o) {
      const { localeLinks: e, currentLang: t } = Y({ correspondingLink: !0 }),
        s = L(!1)
      function n() {
        s.value = !s.value
      }
      return (r, u) =>
        i(e).length && i(t).label
          ? (a(),
            l(
              'div',
              {
                key: 0,
                class: S(['VPNavScreenTranslations', { open: s.value }]),
              },
              [
                d('button', { class: 'title', onClick: n }, [
                  f(De, { class: 'icon lang' }),
                  H(' ' + P(i(t).label) + ' ', 1),
                  f(Fe, { class: 'icon chevron' }),
                ]),
                d('ul', zr, [
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
  Fr = g(Er, [['__scopeId', 'data-v-230aa62c']]),
  Dr = { class: 'container' },
  Or = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(o) {
      const e = L(null),
        t = Ie(K ? document.body : null)
      return (s, n) => (
        a(),
        k(
          ve,
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
                      d('div', Dr, [
                        c(
                          s.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        f(Ar, { class: 'menu' }),
                        f(Fr, { class: 'translations' }),
                        f(hr, { class: 'appearance' }),
                        f(Hr, { class: 'social-links' }),
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
  xr = g(Or, [['__scopeId', 'data-v-62af7f20']]),
  Ur = { key: 0, class: 'VPNav' },
  Gr = m({
    __name: 'VPNav',
    setup(o) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: s } = Js(),
        { frontmatter: n } = V(),
        r = $(() => n.value.navbar !== !1)
      return (
        fe('close-screen', t),
        te(() => {
          K && document.documentElement.classList.toggle('hide-nav', !r.value)
        }),
        (u, p) =>
          r.value
            ? (a(),
              l('header', Ur, [
                f(
                  cr,
                  { 'is-screen-open': i(e), onToggleScreen: i(s) },
                  {
                    'nav-bar-title-before': h(() => [
                      c(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': h(() => [
                      c(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': h(() => [
                      c(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': h(() => [
                      c(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                f(
                  xr,
                  { open: i(e) },
                  {
                    'nav-screen-content-before': h(() => [
                      c(u.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': h(() => [
                      c(u.$slots, 'nav-screen-content-after', {}, void 0, !0),
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
  jr = g(Gr, [['__scopeId', 'data-v-86036eb2']]),
  Rr = (o) => (E('data-v-2d8c65e0'), (o = o()), F(), o),
  qr = ['role', 'tabindex'],
  Kr = Rr(() => d('div', { class: 'indicator' }, null, -1)),
  Wr = { key: 1, class: 'items' },
  Yr = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(o) {
      const e = o,
        {
          collapsed: t,
          collapsible: s,
          isLink: n,
          isActiveLink: r,
          hasActiveLink: u,
          hasChildren: p,
          toggle: v,
        } = wt($(() => e.item)),
        b = $(() => (p.value ? 'section' : 'div')),
        y = $(() => (n.value ? 'a' : 'div')),
        w = $(() =>
          p.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p',
        ),
        C = $(() => (n.value ? void 0 : 'button')),
        I = $(() => [
          [`level-${e.depth}`],
          { collapsible: s.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': r.value },
          { 'has-active': u.value },
        ])
      function N(M) {
        ;('key' in M && M.key !== 'Enter') || (!e.item.link && v())
      }
      function B() {
        e.item.link && v()
      }
      return (M, Z) => {
        const O = R('VPSidebarItem', !0)
        return (
          a(),
          k(
            U(b.value),
            { class: S(['VPSidebarItem', I.value]) },
            {
              default: h(() => [
                M.item.text
                  ? (a(),
                    l(
                      'div',
                      Q(
                        { key: 0, class: 'item', role: C.value },
                        tt(M.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: M.item.items && 0 },
                      ),
                      [
                        Kr,
                        M.item.link
                          ? (a(),
                            k(
                              z,
                              {
                                key: 0,
                                tag: y.value,
                                class: 'link',
                                href: M.item.link,
                                rel: M.item.rel,
                                target: M.item.target,
                              },
                              {
                                default: h(() => [
                                  (a(),
                                  k(
                                    U(w.value),
                                    { class: 'text', innerHTML: M.item.text },
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
                              { key: 1, class: 'text', innerHTML: M.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        M.item.collapsed != null
                          ? (a(),
                            l(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: B,
                                onKeydown: et(B, ['enter']),
                                tabindex: '0',
                              },
                              [f(He, { class: 'caret-icon' })],
                              32,
                            ))
                          : _('', !0),
                      ],
                      16,
                      qr,
                    ))
                  : _('', !0),
                M.item.items && M.item.items.length
                  ? (a(),
                    l('div', Wr, [
                      M.depth < 5
                        ? (a(!0),
                          l(
                            T,
                            { key: 0 },
                            A(
                              M.item.items,
                              (q) => (
                                a(),
                                k(
                                  O,
                                  { key: q.text, item: q, depth: M.depth + 1 },
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
  Jr = g(Yr, [['__scopeId', 'data-v-2d8c65e0']]),
  xe = (o) => (E('data-v-875a24b2'), (o = o()), F(), o),
  Zr = xe(() => d('div', { class: 'curtain' }, null, -1)),
  Qr = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  Xr = xe(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  ei = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(o) {
      const { sidebarGroups: e, hasSidebar: t } = D(),
        s = o,
        n = L(null),
        r = Ie(K ? document.body : null)
      return (
        j(
          [s, n],
          () => {
            var u
            s.open
              ? ((r.value = !0), (u = n.value) == null || u.focus())
              : (r.value = !1)
          },
          { immediate: !0, flush: 'post' },
        ),
        (u, p) =>
          i(t)
            ? (a(),
              l(
                'aside',
                {
                  key: 0,
                  class: S(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: p[0] || (p[0] = ot(() => {}, ['stop'])),
                },
                [
                  Zr,
                  d('nav', Qr, [
                    Xr,
                    c(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    l(
                      T,
                      null,
                      A(
                        i(e),
                        (v) => (
                          a(),
                          l('div', { key: v.text, class: 'group' }, [
                            f(Jr, { item: v, depth: 0 }, null, 8, ['item']),
                          ])
                        ),
                      ),
                      128,
                    )),
                    c(u.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : _('', !0)
      )
    },
  }),
  ti = g(ei, [['__scopeId', 'data-v-875a24b2']]),
  oi = m({
    __name: 'VPSkipLink',
    setup(o) {
      const e = se(),
        t = L()
      j(
        () => e.path,
        () => t.value.focus(),
      )
      function s({ target: n }) {
        const r = document.getElementById(decodeURIComponent(n.hash).slice(1))
        if (r) {
          const u = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', u)
          }
          r.setAttribute('tabindex', '-1'),
            r.addEventListener('blur', u),
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
  si = g(oi, [['__scopeId', 'data-v-bc7e97a6']]),
  ni = m({
    __name: 'Layout',
    setup(o) {
      const { isOpen: e, open: t, close: s } = D(),
        n = se()
      j(() => n.path, s), yt(e, s)
      const { frontmatter: r } = V(),
        u = st(),
        p = $(() => !!u['home-hero-image'])
      return (
        fe('hero-image-slot-exists', p),
        (v, b) => {
          const y = R('Content')
          return i(r).layout !== !1
            ? (a(),
              l(
                'div',
                { key: 0, class: S(['Layout', i(r).pageClass]) },
                [
                  c(v.$slots, 'layout-top', {}, void 0, !0),
                  f(si),
                  f(
                    it,
                    { class: 'backdrop', show: i(e), onClick: i(s) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  f(jr, null, {
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
                  f(Ys, { open: i(e), onOpenMenu: i(t) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  f(
                    ti,
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
                  f(bs, null, {
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
                  f(Ls),
                  c(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), k(y, { key: 1 }))
        }
      )
    },
  }),
  ai = g(ni, [['__scopeId', 'data-v-066deec2']]),
  ri = {
    Layout: ai,
    enhanceApp: ({ app: o }) => {
      o.component('Badge', nt)
    },
  },
  J = (o, e) => {
    if (
      ((o.install = (t) => {
        for (const s of [o, ...Object.values(e ?? {})]) t.component(s.name, s)
      }),
      e)
    )
      for (const [t, s] of Object.entries(e)) o[t] = s
    return o
  },
  ii = (o = []) => ({
    install: (e) => {
      o.forEach((t) => e.use(t))
    },
  }),
  li = m({
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
          { ref: 'buttonRef', class: S(['pot-button', t.value]) },
          [c(n.$slots, 'default', {}, () => [H(P(s.value), 1)])],
          2,
        )
      )
    },
  }),
  ci = J(li),
  ui = { class: 'pot-icon' },
  di = ['xlink:href'],
  vi = m({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(o) {
      const e = o,
        t = $(() => `#icon-${e.iconClass}`)
      return (s, n) => (
        a(), l('svg', ui, [d('use', { 'xlink:href': t.value }, null, 8, di)])
      )
    },
  }),
  hi = J(vi),
  Ue = Symbol('radio-group')
function pi(o, e) {
  const t = W(o, e)
  if (!t) throw new Error('该组件的上游组件需注入正确的值')
  return t
}
const fi = ['name', 'value'],
  _i = m({
    name: 'PotRadio',
    __name: 'radio',
    props: { value: { default: '' } },
    setup(o) {
      const e = o,
        t = pi(Ue)
      function s(n) {
        const r = n.target
        t.changeRadioValue(r.value)
      }
      return (n, r) => (
        a(),
        l(
          'label',
          {
            class: S([
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
              fi,
            ),
            c(n.$slots, 'default'),
          ],
          2,
        )
      )
    },
  }),
  Ve = { prefix: Math.floor(Math.random() * 1e4), current: 0 }
function mi(o) {
  return `${o}-${Ve.prefix}-${Ve.current++}`
}
const gi = { class: 'pot-radio-group' },
  $i = m({
    name: 'PotRadioGroup',
    __name: 'radio-group',
    props: { modelValue: { default: '' } },
    emits: ['update:modelValue'],
    setup(o, { emit: e }) {
      const t = o,
        s = e,
        n = $(() => t.modelValue)
      return (
        fe(Ue, {
          name: mi('radio-group-name'),
          changeRadioValue: (r) => {
            s('update:modelValue', r)
          },
          checkedValue: n,
        }),
        (r, u) => (a(), l('div', gi, [c(r.$slots, 'default')]))
      )
    },
  }),
  ki = J(_i),
  bi = J($i),
  yi = m({
    name: 'PotSwitch',
    __name: 'switch',
    props: { modelValue: { type: Boolean, default: !1 } },
    emits: ['update:modelValue'],
    setup(o, { emit: e }) {
      const t = L(null),
        s = L(0),
        n = o,
        r = e
      x(() => {
        t.value && (s.value = t.value.clientHeight)
      })
      function u() {
        r('update:modelValue', !n.modelValue)
      }
      return (p, v) => (
        a(),
        l(
          'div',
          {
            ref_key: 'switchRef',
            ref: t,
            class: S([
              'pot-switch',
              [n.modelValue ? 'pot-switch_on' : 'pot-switch_off'],
            ]),
            onClick: u,
          },
          [
            d(
              'div',
              {
                class: S([
                  'pot-switch--core',
                  [
                    n.modelValue
                      ? 'pot-switch--core_on'
                      : 'pot-switch--core_off',
                  ],
                ]),
                style: Me({
                  '--pot-switch-core-height': `${s.value - 4}px`,
                  '--pot-switch-core-left': `calc(100% - ${s.value - 3}px)`,
                }),
              },
              null,
              6,
            ),
          ],
          2,
        )
      )
    },
  }),
  wi = J(yi),
  Ge = [ci, hi, ki, bi, wi]
console.log(Ge)
const Vi = ii(Ge),
  Li = {
    ...ri,
    enhanceApp({ app: o }) {
      o.use(Vi)
    },
  }
export { Li as R }
