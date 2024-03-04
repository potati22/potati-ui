import {
  d as m,
  o as a,
  c as l,
  r as c,
  n as M,
  a as H,
  t as V,
  b,
  w as h,
  T as de,
  e as _,
  _ as g,
  u as Oe,
  i as Ue,
  f as xe,
  g as ve,
  h as L,
  j as K,
  k,
  l as j,
  m as d,
  p as i,
  q as E,
  s as F,
  v as x,
  x as ie,
  y as G,
  z as X,
  A as he,
  B as we,
  C as je,
  D as Ge,
  E as R,
  F as I,
  G as A,
  H as Pe,
  I as ee,
  J as f,
  K as U,
  L as Ve,
  M as te,
  N as J,
  O as se,
  P as Re,
  Q as qe,
  R as Ke,
  S as We,
  U as Le,
  V as Ye,
  W as Je,
  X as Se,
  Y as Me,
  Z as Ze,
  $ as Qe,
  a0 as Xe,
  a1 as et,
} from './framework.fOkQ3P9O.js'
const tt = m({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(s) {
      return (e, t) => (
        a(),
        l(
          'span',
          { class: M(['VPBadge', e.type]) },
          [c(e.$slots, 'default', {}, () => [H(V(e.text), 1)])],
          2,
        )
      )
    },
  }),
  st = { key: 0, class: 'VPBackdrop' },
  ot = m({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(s) {
      return (e, t) => (
        a(),
        b(
          de,
          { name: 'fade' },
          {
            default: h(() => [e.show ? (a(), l('div', st)) : _('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  nt = g(ot, [['__scopeId', 'data-v-59bf151a']]),
  P = Oe
function at(s, e) {
  let t,
    o = !1
  return () => {
    t && clearTimeout(t),
      o
        ? (t = setTimeout(s, e))
        : (s(), (o = !0) && setTimeout(() => (o = !1), e))
  }
}
function le(s) {
  return /^\//.test(s) ? s : `/${s}`
}
function pe(s) {
  const {
    pathname: e,
    search: t,
    hash: o,
    protocol: n,
  } = new URL(s, 'http://a.com')
  if (Ue(s) || s.startsWith('#') || !n.startsWith('http') || !xe(e)) return s
  const { site: r } = P(),
    u =
      e.endsWith('/') || e.endsWith('.html')
        ? s
        : s.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${e.replace(
              /(\.md)?$/,
              r.value.cleanUrls ? '' : '.html',
            )}${t}${o}`,
          )
  return ve(u)
}
const fe = L(K ? location.hash : '')
K &&
  window.addEventListener('hashchange', () => {
    fe.value = location.hash
  })
function W({ removeCurrent: s = !0, correspondingLink: e = !1 } = {}) {
  const { site: t, localeIndex: o, page: n, theme: r } = P(),
    u = k(() => {
      var v, $
      return {
        label: (v = t.value.locales[o.value]) == null ? void 0 : v.label,
        link:
          (($ = t.value.locales[o.value]) == null ? void 0 : $.link) ||
          (o.value === 'root' ? '/' : `/${o.value}/`),
      }
    })
  return {
    localeLinks: k(() =>
      Object.entries(t.value.locales).flatMap(([v, $]) =>
        s && u.value.label === $.label
          ? []
          : {
              text: $.label,
              link:
                rt(
                  $.link || (v === 'root' ? '/' : `/${v}/`),
                  r.value.i18nRouting !== !1 && e,
                  n.value.relativePath.slice(u.value.link.length - 1),
                  !t.value.cleanUrls,
                ) + fe.value,
            },
      ),
    ),
    currentLang: u,
  }
}
function rt(s, e, t, o) {
  return e
    ? s.replace(/\/$/, '') +
        le(
          t
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, o ? '.html' : ''),
        )
    : s
}
const it = (s) => (E('data-v-07f75c55'), (s = s()), F(), s),
  lt = { class: 'NotFound' },
  ct = { class: 'code' },
  ut = { class: 'title' },
  dt = it(() => d('div', { class: 'divider' }, null, -1)),
  vt = { class: 'quote' },
  ht = { class: 'action' },
  pt = ['href', 'aria-label'],
  ft = m({
    __name: 'NotFound',
    setup(s) {
      const { site: e, theme: t } = P(),
        { localeLinks: o } = W({ removeCurrent: !1 }),
        n = L('/')
      return (
        j(() => {
          var u
          const r = window.location.pathname
            .replace(e.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          o.value.length &&
            (n.value =
              ((u = o.value.find(({ link: p }) => p.startsWith(r))) == null
                ? void 0
                : u.link) || o.value[0].link)
        }),
        (r, u) => {
          var p, v, $, y, w
          return (
            a(),
            l('div', lt, [
              d(
                'p',
                ct,
                V(((p = i(t).notFound) == null ? void 0 : p.code) ?? '404'),
                1,
              ),
              d(
                'h1',
                ut,
                V(
                  ((v = i(t).notFound) == null ? void 0 : v.title) ??
                    'PAGE NOT FOUND',
                ),
                1,
              ),
              dt,
              d(
                'blockquote',
                vt,
                V(
                  (($ = i(t).notFound) == null ? void 0 : $.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              d('div', ht, [
                d(
                  'a',
                  {
                    class: 'link',
                    href: i(ve)(n.value),
                    'aria-label':
                      ((y = i(t).notFound) == null ? void 0 : y.linkLabel) ??
                      'go to home',
                  },
                  V(
                    ((w = i(t).notFound) == null ? void 0 : w.linkText) ??
                      'Take me home',
                  ),
                  9,
                  pt,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  _t = g(ft, [['__scopeId', 'data-v-07f75c55']])
function Ce(s, e) {
  if (Array.isArray(s)) return Z(s)
  if (s == null) return []
  e = le(e)
  const t = Object.keys(s)
      .sort((n, r) => r.split('/').length - n.split('/').length)
      .find((n) => e.startsWith(le(n))),
    o = t ? s[t] : []
  return Array.isArray(o) ? Z(o) : Z(o.items, o.base)
}
function mt(s) {
  const e = []
  let t = 0
  for (const o in s) {
    const n = s[o]
    if (n.items) {
      t = e.push(n)
      continue
    }
    e[t] || e.push({ items: [] }), e[t].items.push(n)
  }
  return e
}
function gt(s) {
  const e = []
  function t(o) {
    for (const n of o)
      n.text &&
        n.link &&
        e.push({ text: n.text, link: n.link, docFooterText: n.docFooterText }),
        n.items && t(n.items)
  }
  return t(s), e
}
function ce(s, e) {
  return Array.isArray(e)
    ? e.some((t) => ce(s, t))
    : x(s, e.link)
    ? !0
    : e.items
    ? ce(s, e.items)
    : !1
}
function Z(s, e) {
  return [...s].map((t) => {
    const o = { ...t },
      n = o.base || e
    return (
      n && o.link && (o.link = n + o.link),
      o.items && (o.items = Z(o.items, n)),
      o
    )
  })
}
function D() {
  const { frontmatter: s, page: e, theme: t } = P(),
    o = ie('(min-width: 960px)'),
    n = L(!1),
    r = k(() => {
      const B = t.value.sidebar,
        S = e.value.relativePath
      return B ? Ce(B, S) : []
    }),
    u = L(r.value)
  G(r, (B, S) => {
    JSON.stringify(B) !== JSON.stringify(S) && (u.value = r.value)
  })
  const p = k(
      () =>
        s.value.sidebar !== !1 &&
        u.value.length > 0 &&
        s.value.layout !== 'home',
    ),
    v = k(() =>
      $
        ? s.value.aside == null
          ? t.value.aside === 'left'
          : s.value.aside === 'left'
        : !1,
    ),
    $ = k(() =>
      s.value.layout === 'home'
        ? !1
        : s.value.aside != null
        ? !!s.value.aside
        : t.value.aside !== !1,
    ),
    y = k(() => p.value && o.value),
    w = k(() => (p.value ? mt(u.value) : []))
  function C() {
    n.value = !0
  }
  function T() {
    n.value = !1
  }
  function N() {
    n.value ? T() : C()
  }
  return {
    isOpen: n,
    sidebar: u,
    sidebarGroups: w,
    hasSidebar: p,
    hasAside: $,
    leftAside: v,
    isSidebarEnabled: y,
    open: C,
    close: T,
    toggle: N,
  }
}
function $t(s, e) {
  let t
  X(() => {
    t = s.value ? document.activeElement : void 0
  }),
    j(() => {
      window.addEventListener('keyup', o)
    }),
    he(() => {
      window.removeEventListener('keyup', o)
    })
  function o(n) {
    n.key === 'Escape' && s.value && (e(), t == null || t.focus())
  }
}
function kt(s) {
  const { page: e } = P(),
    t = L(!1),
    o = k(() => s.value.collapsed != null),
    n = k(() => !!s.value.link),
    r = L(!1),
    u = () => {
      r.value = x(e.value.relativePath, s.value.link)
    }
  G([e, s, fe], u), j(u)
  const p = k(() =>
      r.value
        ? !0
        : s.value.items
        ? ce(e.value.relativePath, s.value.items)
        : !1,
    ),
    v = k(() => !!(s.value.items && s.value.items.length))
  X(() => {
    t.value = !!(o.value && s.value.collapsed)
  }),
    we(() => {
      ;(r.value || p.value) && (t.value = !1)
    })
  function $() {
    o.value && (t.value = !t.value)
  }
  return {
    collapsed: t,
    collapsible: o,
    isLink: n,
    isActiveLink: r,
    hasActiveLink: p,
    hasChildren: v,
    toggle: $,
  }
}
function bt() {
  const { hasSidebar: s } = D(),
    e = ie('(min-width: 960px)'),
    t = ie('(min-width: 1280px)')
  return {
    isAsideEnabled: k(() =>
      !t.value && !e.value ? !1 : s.value ? t.value : e.value,
    ),
  }
}
const ue = []
function Ie(s) {
  return (
    (typeof s.outline == 'object' &&
      !Array.isArray(s.outline) &&
      s.outline.label) ||
    s.outlineTitle ||
    'On this page'
  )
}
function _e(s) {
  const e = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((t) => t.id && t.hasChildNodes())
    .map((t) => {
      const o = Number(t.tagName[1])
      return { element: t, title: yt(t), link: '#' + t.id, level: o }
    })
  return wt(e, s)
}
function yt(s) {
  let e = ''
  for (const t of s.childNodes)
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
function wt(s, e) {
  if (e === !1) return []
  const t = (typeof e == 'object' && !Array.isArray(e) ? e.level : e) || 2,
    [o, n] = typeof t == 'number' ? [t, t] : t === 'deep' ? [2, 6] : t
  ;(s = s.filter((u) => u.level >= o && u.level <= n)), (ue.length = 0)
  for (const { element: u, link: p } of s) ue.push({ element: u, link: p })
  const r = []
  e: for (let u = 0; u < s.length; u++) {
    const p = s[u]
    if (u === 0) r.push(p)
    else {
      for (let v = u - 1; v >= 0; v--) {
        const $ = s[v]
        if ($.level < p.level) {
          ;($.children || ($.children = [])).push(p)
          continue e
        }
      }
      r.push(p)
    }
  }
  return r
}
function Pt(s, e) {
  const { isAsideEnabled: t } = bt(),
    o = at(r, 100)
  let n = null
  j(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', o)
  }),
    je(() => {
      u(location.hash)
    }),
    he(() => {
      window.removeEventListener('scroll', o)
    })
  function r() {
    if (!t.value) return
    const p = window.scrollY,
      v = window.innerHeight,
      $ = document.body.offsetHeight,
      y = Math.abs(p + v - $) < 1,
      w = ue
        .map(({ element: T, link: N }) => ({ link: N, top: Vt(T) }))
        .filter(({ top: T }) => !Number.isNaN(T))
        .sort((T, N) => T.top - N.top)
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
    for (const { link: T, top: N } of w) {
      if (N > p + Ge() + 4) break
      C = T
    }
    u(C)
  }
  function u(p) {
    n && n.classList.remove('active'),
      p == null
        ? (n = null)
        : (n = s.value.querySelector(`a[href="${decodeURIComponent(p)}"]`))
    const v = n
    v
      ? (v.classList.add('active'),
        (e.value.style.top = v.offsetTop + 39 + 'px'),
        (e.value.style.opacity = '1'))
      : ((e.value.style.top = '33px'), (e.value.style.opacity = '0'))
  }
}
function Vt(s) {
  let e = 0
  for (; s !== document.body; ) {
    if (s === null) return NaN
    ;(e += s.offsetTop), (s = s.offsetParent)
  }
  return e
}
const Lt = ['href', 'title'],
  St = m({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(s) {
      function e({ target: t }) {
        const o = t.href.split('#')[1],
          n = document.getElementById(decodeURIComponent(o))
        n == null || n.focus({ preventScroll: !0 })
      }
      return (t, o) => {
        const n = R('VPDocOutlineItem', !0)
        return (
          a(),
          l(
            'ul',
            { class: M(['VPDocOutlineItem', t.root ? 'root' : 'nested']) },
            [
              (a(!0),
              l(
                I,
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
                        V(p),
                        9,
                        Lt,
                      ),
                      r != null && r.length
                        ? (a(),
                          b(n, { key: 0, headers: r }, null, 8, ['headers']))
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
  Te = g(St, [['__scopeId', 'data-v-1d718f80']]),
  Mt = (s) => (E('data-v-860eb583'), (s = s()), F(), s),
  Ct = { class: 'content' },
  It = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  Tt = { 'aria-labelledby': 'doc-outline-aria-label' },
  Nt = Mt(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  Bt = m({
    __name: 'VPDocAsideOutline',
    setup(s) {
      const { frontmatter: e, theme: t } = P(),
        o = Pe([])
      ee(() => {
        o.value = _e(e.value.outline ?? t.value.outline)
      })
      const n = L(),
        r = L()
      return (
        Pt(n, r),
        (u, p) => (
          a(),
          l(
            'div',
            {
              class: M([
                'VPDocAsideOutline',
                { 'has-outline': o.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: n,
              role: 'navigation',
            },
            [
              d('div', Ct, [
                d(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: r },
                  null,
                  512,
                ),
                d('div', It, V(i(Ie)(i(t))), 1),
                d('nav', Tt, [
                  Nt,
                  f(Te, { headers: o.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  At = g(Bt, [['__scopeId', 'data-v-860eb583']]),
  Ht = { class: 'VPDocAsideCarbonAds' },
  zt = m({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(s) {
      const e = () => null
      return (t, o) => (
        a(),
        l('div', Ht, [
          f(i(e), { 'carbon-ads': t.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  Et = (s) => (E('data-v-be2aafe6'), (s = s()), F(), s),
  Ft = { class: 'VPDocAside' },
  Dt = Et(() => d('div', { class: 'spacer' }, null, -1)),
  Ot = m({
    __name: 'VPDocAside',
    setup(s) {
      const { theme: e } = P()
      return (t, o) => (
        a(),
        l('div', Ft, [
          c(t.$slots, 'aside-top', {}, void 0, !0),
          c(t.$slots, 'aside-outline-before', {}, void 0, !0),
          f(At),
          c(t.$slots, 'aside-outline-after', {}, void 0, !0),
          Dt,
          c(t.$slots, 'aside-ads-before', {}, void 0, !0),
          i(e).carbonAds
            ? (a(),
              b(zt, { key: 0, 'carbon-ads': i(e).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : _('', !0),
          c(t.$slots, 'aside-ads-after', {}, void 0, !0),
          c(t.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  Ut = g(Ot, [['__scopeId', 'data-v-be2aafe6']])
function xt() {
  const { theme: s, page: e } = P()
  return k(() => {
    const { text: t = 'Edit this page', pattern: o = '' } =
      s.value.editLink || {}
    let n
    return (
      typeof o == 'function'
        ? (n = o(e.value))
        : (n = o.replace(/:path/g, e.value.filePath)),
      { url: n, text: t }
    )
  })
}
function jt() {
  const { page: s, theme: e, frontmatter: t } = P()
  return k(() => {
    var v, $, y, w, C, T, N, B
    const o = Ce(e.value.sidebar, s.value.relativePath),
      n = gt(o),
      r = n.findIndex((S) => x(s.value.relativePath, S.link)),
      u =
        (((v = e.value.docFooter) == null ? void 0 : v.prev) === !1 &&
          !t.value.prev) ||
        t.value.prev === !1,
      p =
        ((($ = e.value.docFooter) == null ? void 0 : $.next) === !1 &&
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
              ((T = n[r + 1]) == null ? void 0 : T.docFooterText) ??
              ((N = n[r + 1]) == null ? void 0 : N.text),
            link:
              (typeof t.value.next == 'object' ? t.value.next.link : void 0) ??
              ((B = n[r + 1]) == null ? void 0 : B.link),
          },
    }
  })
}
const Gt = {},
  Rt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  qt = d(
    'path',
    {
      d: 'M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z',
    },
    null,
    -1,
  ),
  Kt = d(
    'path',
    {
      d: 'M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z',
    },
    null,
    -1,
  ),
  Wt = [qt, Kt]
function Yt(s, e) {
  return a(), l('svg', Rt, Wt)
}
const Jt = g(Gt, [['render', Yt]]),
  z = m({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(s) {
      const e = s,
        t = k(() => e.tag ?? (e.href ? 'a' : 'span')),
        o = k(() => e.href && Ve.test(e.href))
      return (n, r) => (
        a(),
        b(
          U(t.value),
          {
            class: M([
              'VPLink',
              {
                link: n.href,
                'vp-external-link-icon': o.value,
                'no-icon': n.noIcon,
              },
            ]),
            href: n.href ? i(pe)(n.href) : void 0,
            target: n.target ?? (o.value ? '_blank' : void 0),
            rel: n.rel ?? (o.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [c(n.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Zt = { class: 'VPLastUpdated' },
  Qt = ['datetime'],
  Xt = m({
    __name: 'VPDocFooterLastUpdated',
    setup(s) {
      const { theme: e, page: t, frontmatter: o, lang: n } = P(),
        r = k(() => new Date(o.value.lastUpdated ?? t.value.lastUpdated)),
        u = k(() => r.value.toISOString()),
        p = L('')
      return (
        j(() => {
          X(() => {
            var v, $, y
            p.value = new Intl.DateTimeFormat(
              ($ =
                (v = e.value.lastUpdated) == null ? void 0 : v.formatOptions) !=
                null && $.forceLocale
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
        (v, $) => {
          var y
          return (
            a(),
            l('p', Zt, [
              H(
                V(
                  ((y = i(e).lastUpdated) == null ? void 0 : y.text) ||
                    i(e).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              d('time', { datetime: u.value }, V(p.value), 9, Qt),
            ])
          )
        }
      )
    },
  }),
  es = g(Xt, [['__scopeId', 'data-v-4ba3d317']]),
  ts = { key: 0, class: 'VPDocFooter' },
  ss = { key: 0, class: 'edit-info' },
  os = { key: 0, class: 'edit-link' },
  ns = { key: 1, class: 'last-updated' },
  as = { key: 1, class: 'prev-next' },
  rs = { class: 'pager' },
  is = ['innerHTML'],
  ls = ['innerHTML'],
  cs = { class: 'pager' },
  us = ['innerHTML'],
  ds = ['innerHTML'],
  vs = m({
    __name: 'VPDocFooter',
    setup(s) {
      const { theme: e, page: t, frontmatter: o } = P(),
        n = xt(),
        r = jt(),
        u = k(() => e.value.editLink && o.value.editLink !== !1),
        p = k(() => t.value.lastUpdated && o.value.lastUpdated !== !1),
        v = k(() => u.value || p.value || r.value.prev || r.value.next)
      return ($, y) => {
        var w, C, T, N
        return v.value
          ? (a(),
            l('footer', ts, [
              c($.$slots, 'doc-footer-before', {}, void 0, !0),
              u.value || p.value
                ? (a(),
                  l('div', ss, [
                    u.value
                      ? (a(),
                        l('div', os, [
                          f(
                            z,
                            {
                              class: 'edit-link-button',
                              href: i(n).url,
                              'no-icon': !0,
                            },
                            {
                              default: h(() => [
                                f(Jt, {
                                  class: 'edit-link-icon',
                                  'aria-label': 'edit icon',
                                }),
                                H(' ' + V(i(n).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : _('', !0),
                    p.value ? (a(), l('div', ns, [f(es)])) : _('', !0),
                  ]))
                : _('', !0),
              ((w = i(r).prev) != null && w.link) ||
              ((C = i(r).next) != null && C.link)
                ? (a(),
                  l('nav', as, [
                    d('div', rs, [
                      (T = i(r).prev) != null && T.link
                        ? (a(),
                          b(
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
                                    is,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).prev.text,
                                    },
                                    null,
                                    8,
                                    ls,
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
                    d('div', cs, [
                      (N = i(r).next) != null && N.link
                        ? (a(),
                          b(
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
                                    us,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).next.text,
                                    },
                                    null,
                                    8,
                                    ds,
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
  hs = g(vs, [['__scopeId', 'data-v-39b90627']]),
  ps = (s) => (E('data-v-3fe17779'), (s = s()), F(), s),
  fs = { class: 'container' },
  _s = ps(() => d('div', { class: 'aside-curtain' }, null, -1)),
  ms = { class: 'aside-container' },
  gs = { class: 'aside-content' },
  $s = { class: 'content' },
  ks = { class: 'content-container' },
  bs = { class: 'main' },
  ys = m({
    __name: 'VPDoc',
    setup(s) {
      const { theme: e } = P(),
        t = te(),
        { hasSidebar: o, hasAside: n, leftAside: r } = D(),
        u = k(() => t.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (p, v) => {
        const $ = R('Content')
        return (
          a(),
          l(
            'div',
            { class: M(['VPDoc', { 'has-sidebar': i(o), 'has-aside': i(n) }]) },
            [
              c(p.$slots, 'doc-top', {}, void 0, !0),
              d('div', fs, [
                i(n)
                  ? (a(),
                    l(
                      'div',
                      { key: 0, class: M(['aside', { 'left-aside': i(r) }]) },
                      [
                        _s,
                        d('div', ms, [
                          d('div', gs, [
                            f(Ut, null, {
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
                d('div', $s, [
                  d('div', ks, [
                    c(p.$slots, 'doc-before', {}, void 0, !0),
                    d('main', bs, [
                      f(
                        $,
                        {
                          class: M([
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
                    f(hs, null, {
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
  ws = g(ys, [['__scopeId', 'data-v-3fe17779']]),
  Ps = m({
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
    setup(s) {
      const e = s,
        t = k(() => e.href && Ve.test(e.href)),
        o = k(() => (e.tag || e.href ? 'a' : 'button'))
      return (n, r) => (
        a(),
        b(
          U(o.value),
          {
            class: M(['VPButton', [n.size, n.theme]]),
            href: n.href ? i(pe)(n.href) : void 0,
            target: e.target ?? (t.value ? '_blank' : void 0),
            rel: e.rel ?? (t.value ? 'noreferrer' : void 0),
          },
          { default: h(() => [H(V(n.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Vs = g(Ps, [['__scopeId', 'data-v-a9f690c4']]),
  Ls = ['src', 'alt'],
  Ss = m({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(s) {
      return (e, t) => {
        const o = R('VPImage', !0)
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
                      J(
                        { key: 0, class: 'VPImage' },
                        typeof e.image == 'string'
                          ? e.$attrs
                          : { ...e.image, ...e.$attrs },
                        {
                          src: i(ve)(
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
                      Ls,
                    ))
                  : (a(),
                    l(
                      I,
                      { key: 1 },
                      [
                        f(
                          o,
                          J(
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
                          o,
                          J(
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
  Q = g(Ss, [['__scopeId', 'data-v-221709f0']]),
  Ms = (s) => (E('data-v-971af588'), (s = s()), F(), s),
  Cs = { class: 'container' },
  Is = { class: 'main' },
  Ts = { key: 0, class: 'name' },
  Ns = ['innerHTML'],
  Bs = ['innerHTML'],
  As = ['innerHTML'],
  Hs = { key: 0, class: 'actions' },
  zs = { key: 0, class: 'image' },
  Es = { class: 'image-container' },
  Fs = Ms(() => d('div', { class: 'image-bg' }, null, -1)),
  Ds = m({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(s) {
      const e = se('hero-image-slot-exists')
      return (t, o) => (
        a(),
        l(
          'div',
          { class: M(['VPHero', { 'has-image': t.image || i(e) }]) },
          [
            d('div', Cs, [
              d('div', Is, [
                c(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                c(
                  t.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    t.name
                      ? (a(),
                        l('h1', Ts, [
                          d(
                            'span',
                            { innerHTML: t.name, class: 'clip' },
                            null,
                            8,
                            Ns,
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
                          Bs,
                        ))
                      : _('', !0),
                    t.tagline
                      ? (a(),
                        l(
                          'p',
                          { key: 2, innerHTML: t.tagline, class: 'tagline' },
                          null,
                          8,
                          As,
                        ))
                      : _('', !0),
                  ],
                  !0,
                ),
                c(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                t.actions
                  ? (a(),
                    l('div', Hs, [
                      (a(!0),
                      l(
                        I,
                        null,
                        A(
                          t.actions,
                          (n) => (
                            a(),
                            l('div', { key: n.link, class: 'action' }, [
                              f(
                                Vs,
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
                  l('div', zs, [
                    d('div', Es, [
                      Fs,
                      c(
                        t.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          t.image
                            ? (a(),
                              b(
                                Q,
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
  Os = g(Ds, [['__scopeId', 'data-v-971af588']]),
  Us = m({
    __name: 'VPHomeHero',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        i(e).hero
          ? (a(),
            b(
              Os,
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
  xs = {},
  js = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  Gs = d(
    'path',
    {
      d: 'M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z',
    },
    null,
    -1,
  ),
  Rs = [Gs]
function qs(s, e) {
  return a(), l('svg', js, Rs)
}
const Ks = g(xs, [['render', qs]]),
  Ws = { class: 'box' },
  Ys = { key: 0, class: 'icon' },
  Js = ['innerHTML'],
  Zs = ['innerHTML'],
  Qs = ['innerHTML'],
  Xs = { key: 4, class: 'link-text' },
  eo = { class: 'link-text-value' },
  to = m({
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
    setup(s) {
      return (e, t) => (
        a(),
        b(
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
              d('article', Ws, [
                typeof e.icon == 'object' && e.icon.wrap
                  ? (a(),
                    l('div', Ys, [
                      f(
                        Q,
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
                    b(
                      Q,
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
                      Js,
                    ))
                  : _('', !0),
                d('h2', { class: 'title', innerHTML: e.title }, null, 8, Zs),
                e.details
                  ? (a(),
                    l(
                      'p',
                      { key: 3, class: 'details', innerHTML: e.details },
                      null,
                      8,
                      Qs,
                    ))
                  : _('', !0),
                e.linkText
                  ? (a(),
                    l('div', Xs, [
                      d('p', eo, [
                        H(V(e.linkText) + ' ', 1),
                        f(Ks, { class: 'link-text-icon' }),
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
  so = g(to, [['__scopeId', 'data-v-7073c63f']]),
  oo = { key: 0, class: 'VPFeatures' },
  no = { class: 'container' },
  ao = { class: 'items' },
  ro = m({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(s) {
      const e = s,
        t = k(() => {
          const o = e.features.length
          if (o) {
            if (o === 2) return 'grid-2'
            if (o === 3) return 'grid-3'
            if (o % 3 === 0) return 'grid-6'
            if (o > 3) return 'grid-4'
          } else return
        })
      return (o, n) =>
        o.features
          ? (a(),
            l('div', oo, [
              d('div', no, [
                d('div', ao, [
                  (a(!0),
                  l(
                    I,
                    null,
                    A(
                      o.features,
                      (r) => (
                        a(),
                        l(
                          'div',
                          { key: r.title, class: M(['item', [t.value]]) },
                          [
                            f(
                              so,
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
  io = g(ro, [['__scopeId', 'data-v-f3fa1aba']]),
  lo = m({
    __name: 'VPHomeFeatures',
    setup(s) {
      const { frontmatter: e } = P()
      return (t, o) =>
        i(e).features
          ? (a(),
            b(
              io,
              { key: 0, class: 'VPHomeFeatures', features: i(e).features },
              null,
              8,
              ['features'],
            ))
          : _('', !0)
    },
  }),
  co = { class: 'VPHome' },
  uo = m({
    __name: 'VPHome',
    setup(s) {
      return (e, t) => {
        const o = R('Content')
        return (
          a(),
          l('div', co, [
            c(e.$slots, 'home-hero-before', {}, void 0, !0),
            f(Us, null, {
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
            f(lo),
            c(e.$slots, 'home-features-after', {}, void 0, !0),
            f(o),
          ])
        )
      }
    },
  }),
  vo = g(uo, [['__scopeId', 'data-v-d2f3eedd']]),
  ho = {},
  po = { class: 'VPPage' }
function fo(s, e) {
  const t = R('Content')
  return (
    a(),
    l('div', po, [c(s.$slots, 'page-top'), f(t), c(s.$slots, 'page-bottom')])
  )
}
const _o = g(ho, [['render', fo]]),
  mo = m({
    __name: 'VPContent',
    setup(s) {
      const { page: e, frontmatter: t } = P(),
        { hasSidebar: o } = D()
      return (n, r) => (
        a(),
        l(
          'div',
          {
            class: M([
              'VPContent',
              { 'has-sidebar': i(o), 'is-home': i(t).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            i(e).isNotFound
              ? c(n.$slots, 'not-found', { key: 0 }, () => [f(_t)], !0)
              : i(t).layout === 'page'
              ? (a(),
                b(
                  _o,
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
                b(
                  vo,
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
              ? (a(), b(U(i(t).layout), { key: 3 }))
              : (a(),
                b(
                  ws,
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
  go = g(mo, [['__scopeId', 'data-v-e8d52db2']]),
  $o = { class: 'container' },
  ko = ['innerHTML'],
  bo = ['innerHTML'],
  yo = m({
    __name: 'VPFooter',
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = D()
      return (n, r) =>
        i(e).footer && i(t).footer !== !1
          ? (a(),
            l(
              'footer',
              { key: 0, class: M(['VPFooter', { 'has-sidebar': i(o) }]) },
              [
                d('div', $o, [
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
                        ko,
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
                        bo,
                      ))
                    : _('', !0),
                ]),
              ],
              2,
            ))
          : _('', !0)
    },
  }),
  wo = g(yo, [['__scopeId', 'data-v-f5761f20']])
function Ne() {
  const { theme: s, frontmatter: e } = P(),
    t = Pe([]),
    o = k(() => t.value.length > 0)
  return (
    ee(() => {
      t.value = _e(e.value.outline ?? s.value.outline)
    }),
    { headers: t, hasLocalNav: o }
  )
}
const Po = {},
  Vo = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Lo = d(
    'path',
    {
      d: 'M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z',
    },
    null,
    -1,
  ),
  So = [Lo]
function Mo(s, e) {
  return a(), l('svg', Vo, So)
}
const Be = g(Po, [['render', Mo]]),
  Co = { class: 'header' },
  Io = { class: 'outline' },
  To = m({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(s) {
      const e = s,
        { theme: t } = P(),
        o = L(!1),
        n = L(0),
        r = L(),
        u = L()
      Re(r, () => {
        o.value = !1
      }),
        qe('Escape', () => {
          o.value = !1
        }),
        ee(() => {
          o.value = !1
        })
      function p() {
        ;(o.value = !o.value),
          (n.value =
            window.innerHeight + Math.min(window.scrollY - e.navHeight, 0))
      }
      function v(y) {
        y.target.classList.contains('outline-link') &&
          (u.value && (u.value.style.transition = 'none'),
          We(() => {
            o.value = !1
          }))
      }
      function $() {
        ;(o.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (y, w) => (
        a(),
        l(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: Ke({ '--vp-vh': n.value + 'px' }),
            ref_key: 'main',
            ref: r,
          },
          [
            y.headers.length > 0
              ? (a(),
                l(
                  'button',
                  { key: 0, onClick: p, class: M({ open: o.value }) },
                  [H(V(i(Ie)(i(t))) + ' ', 1), f(Be, { class: 'icon' })],
                  2,
                ))
              : (a(),
                l(
                  'button',
                  { key: 1, onClick: $ },
                  V(i(t).returnToTopLabel || 'Return to top'),
                  1,
                )),
            f(
              de,
              { name: 'flyout' },
              {
                default: h(() => [
                  o.value
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
                          d('div', Co, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: $ },
                              V(i(t).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          d('div', Io, [
                            f(Te, { headers: y.headers }, null, 8, ['headers']),
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
  No = g(To, [['__scopeId', 'data-v-d62082ce']]),
  Bo = {},
  Ao = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ho = d(
    'path',
    {
      d: 'M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z',
    },
    null,
    -1,
  ),
  zo = d(
    'path',
    { d: 'M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z' },
    null,
    -1,
  ),
  Eo = d(
    'path',
    {
      d: 'M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z',
    },
    null,
    -1,
  ),
  Fo = d(
    'path',
    {
      d: 'M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z',
    },
    null,
    -1,
  ),
  Do = [Ho, zo, Eo, Fo]
function Oo(s, e) {
  return a(), l('svg', Ao, Do)
}
const Uo = g(Bo, [['render', Oo]]),
  xo = { class: 'container' },
  jo = ['aria-expanded'],
  Go = { class: 'menu-text' },
  Ro = m({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(s) {
      const { theme: e, frontmatter: t } = P(),
        { hasSidebar: o } = D(),
        { headers: n } = Ne(),
        { y: r } = Le(),
        u = L(0)
      j(() => {
        u.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        ee(() => {
          n.value = _e(t.value.outline ?? e.value.outline)
        })
      const p = k(() => n.value.length === 0),
        v = k(() => p.value && !o.value),
        $ = k(() => ({
          VPLocalNav: !0,
          'has-sidebar': o.value,
          empty: p.value,
          fixed: v.value,
        }))
      return (y, w) =>
        i(t).layout !== 'home' && (!v.value || i(r) >= u.value)
          ? (a(),
            l(
              'div',
              { key: 0, class: M($.value) },
              [
                d('div', xo, [
                  i(o)
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
                          f(Uo, { class: 'menu-icon' }),
                          d('span', Go, V(i(e).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        jo,
                      ))
                    : _('', !0),
                  f(No, { headers: i(n), navHeight: u.value }, null, 8, [
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
  qo = g(Ro, [['__scopeId', 'data-v-a1abf90f']])
function Ko() {
  const s = L(!1)
  function e() {
    ;(s.value = !0), window.addEventListener('resize', n)
  }
  function t() {
    ;(s.value = !1), window.removeEventListener('resize', n)
  }
  function o() {
    s.value ? t() : e()
  }
  function n() {
    window.outerWidth >= 768 && t()
  }
  const r = te()
  return (
    G(() => r.path, t),
    { isScreenOpen: s, openScreen: e, closeScreen: t, toggleScreen: o }
  )
}
const Wo = {},
  Yo = { class: 'VPSwitch', type: 'button', role: 'switch' },
  Jo = { class: 'check' },
  Zo = { key: 0, class: 'icon' }
function Qo(s, e) {
  return (
    a(),
    l('button', Yo, [
      d('span', Jo, [
        s.$slots.default
          ? (a(), l('span', Zo, [c(s.$slots, 'default', {}, void 0, !0)]))
          : _('', !0),
      ]),
    ])
  )
}
const Xo = g(Wo, [
    ['render', Qo],
    ['__scopeId', 'data-v-2acdc7fc'],
  ]),
  en = {},
  tn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  sn = d(
    'path',
    {
      d: 'M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z',
    },
    null,
    -1,
  ),
  on = [sn]
function nn(s, e) {
  return a(), l('svg', tn, on)
}
const an = g(en, [['render', nn]]),
  rn = {},
  ln = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  cn = Ye(
    '<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',
    9,
  ),
  un = [cn]
function dn(s, e) {
  return a(), l('svg', ln, un)
}
const vn = g(rn, [['render', dn]]),
  hn = m({
    __name: 'VPSwitchAppearance',
    setup(s) {
      const { isDark: e, theme: t } = P(),
        o = se('toggle-appearance', () => {
          e.value = !e.value
        }),
        n = k(() =>
          e.value
            ? t.value.lightModeSwitchTitle || 'Switch to light theme'
            : t.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (r, u) => (
        a(),
        b(
          Xo,
          {
            title: n.value,
            class: 'VPSwitchAppearance',
            'aria-checked': i(e),
            onClick: i(o),
          },
          {
            default: h(() => [
              f(vn, { class: 'sun' }),
              f(an, { class: 'moon' }),
            ]),
            _: 1,
          },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  me = g(hn, [['__scopeId', 'data-v-f92d2f72']]),
  pn = { key: 0, class: 'VPNavBarAppearance' },
  fn = m({
    __name: 'VPNavBarAppearance',
    setup(s) {
      const { site: e } = P()
      return (t, o) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(), l('div', pn, [f(me)]))
          : _('', !0)
    },
  }),
  _n = g(fn, [['__scopeId', 'data-v-39301be8']]),
  ge = L()
let Ae = !1,
  re = 0
function mn(s) {
  const e = L(!1)
  if (K) {
    !Ae && gn(), re++
    const t = G(ge, (o) => {
      var n, r, u
      o === s.el.value || ((n = s.el.value) != null && n.contains(o))
        ? ((e.value = !0), (r = s.onFocus) == null || r.call(s))
        : ((e.value = !1), (u = s.onBlur) == null || u.call(s))
    })
    he(() => {
      t(), re--, re || $n()
    })
  }
  return Je(e)
}
function gn() {
  document.addEventListener('focusin', He),
    (Ae = !0),
    (ge.value = document.activeElement)
}
function $n() {
  document.removeEventListener('focusin', He)
}
function He() {
  ge.value = document.activeElement
}
const kn = {},
  bn = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  yn = d(
    'path',
    {
      d: 'M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z',
    },
    null,
    -1,
  ),
  wn = [yn]
function Pn(s, e) {
  return a(), l('svg', bn, wn)
}
const ze = g(kn, [['render', Pn]]),
  Vn = {},
  Ln = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Sn = d('circle', { cx: '12', cy: '12', r: '2' }, null, -1),
  Mn = d('circle', { cx: '19', cy: '12', r: '2' }, null, -1),
  Cn = d('circle', { cx: '5', cy: '12', r: '2' }, null, -1),
  In = [Sn, Mn, Cn]
function Tn(s, e) {
  return a(), l('svg', Ln, In)
}
const Nn = g(Vn, [['render', Tn]]),
  Bn = { class: 'VPMenuLink' },
  An = m({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        l('div', Bn, [
          f(
            z,
            {
              class: M({
                active: i(x)(
                  i(e).relativePath,
                  t.item.activeMatch || t.item.link,
                  !!t.item.activeMatch,
                ),
              }),
              href: t.item.link,
              target: t.item.target,
              rel: t.item.rel,
            },
            { default: h(() => [H(V(t.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      )
    },
  }),
  oe = g(An, [['__scopeId', 'data-v-cba6f3f4']]),
  Hn = { class: 'VPMenuGroup' },
  zn = { key: 0, class: 'title' },
  En = m({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        l('div', Hn, [
          e.text ? (a(), l('p', zn, V(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            I,
            null,
            A(
              e.items,
              (o) => (
                a(),
                l(
                  I,
                  null,
                  [
                    'link' in o
                      ? (a(), b(oe, { key: 0, item: o }, null, 8, ['item']))
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
  Fn = g(En, [['__scopeId', 'data-v-ab7b8d91']]),
  Dn = { class: 'VPMenu' },
  On = { key: 0, class: 'items' },
  Un = m({
    __name: 'VPMenu',
    props: { items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        l('div', Dn, [
          e.items
            ? (a(),
              l('div', On, [
                (a(!0),
                l(
                  I,
                  null,
                  A(
                    e.items,
                    (o) => (
                      a(),
                      l(
                        I,
                        { key: o.text },
                        [
                          'link' in o
                            ? (a(),
                              b(oe, { key: 0, item: o }, null, 8, ['item']))
                            : (a(),
                              b(
                                Fn,
                                { key: 1, text: o.text, items: o.items },
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
  xn = g(Un, [['__scopeId', 'data-v-fcdcccb7']]),
  jn = ['aria-expanded', 'aria-label'],
  Gn = { key: 0, class: 'text' },
  Rn = ['innerHTML'],
  qn = { class: 'menu' },
  Kn = m({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(s) {
      const e = L(!1),
        t = L()
      mn({ el: t, onBlur: o })
      function o() {
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
                    l('span', Gn, [
                      n.icon
                        ? (a(), b(U(n.icon), { key: 0, class: 'option-icon' }))
                        : _('', !0),
                      n.button
                        ? (a(),
                          l(
                            'span',
                            { key: 1, innerHTML: n.button },
                            null,
                            8,
                            Rn,
                          ))
                        : _('', !0),
                      f(ze, { class: 'text-icon' }),
                    ]))
                  : (a(), b(Nn, { key: 1, class: 'icon' })),
              ],
              8,
              jn,
            ),
            d('div', qn, [
              f(
                xn,
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
  $e = g(Kn, [['__scopeId', 'data-v-656060c7']]),
  Wn = {
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
  Yn = ['href', 'aria-label', 'innerHTML'],
  Jn = m({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(s) {
      const e = s,
        t = k(() => (typeof e.icon == 'object' ? e.icon.svg : Wn[e.icon]))
      return (o, n) => (
        a(),
        l(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: o.link,
            'aria-label':
              o.ariaLabel ?? (typeof o.icon == 'string' ? o.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: t.value,
          },
          null,
          8,
          Yn,
        )
      )
    },
  }),
  Zn = g(Jn, [['__scopeId', 'data-v-ea70026e']]),
  Qn = { class: 'VPSocialLinks' },
  Xn = m({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(s) {
      return (e, t) => (
        a(),
        l('div', Qn, [
          (a(!0),
          l(
            I,
            null,
            A(
              e.links,
              ({ link: o, icon: n, ariaLabel: r }) => (
                a(),
                b(Zn, { key: o, icon: n, link: o, ariaLabel: r }, null, 8, [
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
  ke = g(Xn, [['__scopeId', 'data-v-cc55c76b']]),
  ea = { key: 0, class: 'group translations' },
  ta = { class: 'trans-title' },
  sa = { key: 1, class: 'group' },
  oa = { class: 'item appearance' },
  na = { class: 'label' },
  aa = { class: 'appearance-action' },
  ra = { key: 2, class: 'group' },
  ia = { class: 'item social-links' },
  la = m({
    __name: 'VPNavBarExtra',
    setup(s) {
      const { site: e, theme: t } = P(),
        { localeLinks: o, currentLang: n } = W({ correspondingLink: !0 }),
        r = k(
          () =>
            (o.value.length && n.value.label) ||
            e.value.appearance ||
            t.value.socialLinks,
        )
      return (u, p) =>
        r.value
          ? (a(),
            b(
              $e,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: h(() => [
                  i(o).length && i(n).label
                    ? (a(),
                      l('div', ea, [
                        d('p', ta, V(i(n).label), 1),
                        (a(!0),
                        l(
                          I,
                          null,
                          A(
                            i(o),
                            (v) => (
                              a(),
                              b(oe, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : _('', !0),
                  i(e).appearance && i(e).appearance !== 'force-dark'
                    ? (a(),
                      l('div', sa, [
                        d('div', oa, [
                          d(
                            'p',
                            na,
                            V(i(t).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          d('div', aa, [f(me)]),
                        ]),
                      ]))
                    : _('', !0),
                  i(t).socialLinks
                    ? (a(),
                      l('div', ra, [
                        d('div', ia, [
                          f(
                            ke,
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
  ca = g(la, [['__scopeId', 'data-v-ab9782f9']]),
  ua = (s) => (E('data-v-464329f9'), (s = s()), F(), s),
  da = ['aria-expanded'],
  va = ua(() =>
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
  ha = [va],
  pa = m({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(s) {
      return (e, t) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: M(['VPNavBarHamburger', { active: e.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': e.active,
            'aria-controls': 'VPNavScreen',
            onClick: t[0] || (t[0] = (o) => e.$emit('click')),
          },
          ha,
          10,
          da,
        )
      )
    },
  }),
  fa = g(pa, [['__scopeId', 'data-v-464329f9']]),
  _a = ['innerHTML'],
  ma = m({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(s) {
      const { page: e } = P()
      return (t, o) => (
        a(),
        b(
          z,
          {
            class: M({
              VPNavBarMenuLink: !0,
              active: i(x)(
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
              d('span', { innerHTML: t.item.text }, null, 8, _a),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  ga = g(ma, [['__scopeId', 'data-v-922d1c9b']]),
  $a = m({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(s) {
      const e = s,
        { page: t } = P(),
        o = (r) =>
          'link' in r
            ? x(t.value.relativePath, r.link, !!e.item.activeMatch)
            : r.items.some(o),
        n = k(() => o(e.item))
      return (r, u) => (
        a(),
        b(
          $e,
          {
            class: M({
              VPNavBarMenuGroup: !0,
              active:
                i(x)(
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
  ka = (s) => (E('data-v-85770335'), (s = s()), F(), s),
  ba = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  ya = ka(() =>
    d(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  wa = m({
    __name: 'VPNavBarMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        i(e).nav
          ? (a(),
            l('nav', ba, [
              ya,
              (a(!0),
              l(
                I,
                null,
                A(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      I,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), b(ga, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            b($a, { key: 1, item: n }, null, 8, ['item'])),
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
  Pa = g(wa, [['__scopeId', 'data-v-85770335']])
function Va(s) {
  const { localeIndex: e, theme: t } = P()
  function o(n) {
    var N, B, S
    const r = n.split('.'),
      u = (N = t.value.search) == null ? void 0 : N.options,
      p = u && typeof u == 'object',
      v =
        (p &&
          ((S = (B = u.locales) == null ? void 0 : B[e.value]) == null
            ? void 0
            : S.translations)) ||
        null,
      $ = (p && u.translations) || null
    let y = v,
      w = $,
      C = s
    const T = r.pop()
    for (const Y of r) {
      let O = null
      const q = C == null ? void 0 : C[Y]
      q && (O = C = q)
      const ne = w == null ? void 0 : w[Y]
      ne && (O = w = ne)
      const ae = y == null ? void 0 : y[Y]
      ae && (O = y = ae), q || (C = O), ne || (w = O), ae || (y = O)
    }
    return (
      (y == null ? void 0 : y[T]) ??
      (w == null ? void 0 : w[T]) ??
      (C == null ? void 0 : C[T]) ??
      ''
    )
  }
  return o
}
const La = ['aria-label'],
  Sa = { class: 'DocSearch-Button-Container' },
  Ma = d(
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
  Ca = { class: 'DocSearch-Button-Placeholder' },
  Ia = d(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      d('kbd', { class: 'DocSearch-Button-Key' }),
      d('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  ye = m({
    __name: 'VPNavBarSearchButton',
    setup(s) {
      const t = Va({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (o, n) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': i(t)('button.buttonAriaLabel'),
          },
          [
            d('span', Sa, [Ma, d('span', Ca, V(i(t)('button.buttonText')), 1)]),
            Ia,
          ],
          8,
          La,
        )
      )
    },
  }),
  Ta = { class: 'VPNavBarSearch' },
  Na = { id: 'local-search' },
  Ba = { key: 1, id: 'docsearch' },
  Aa = m({
    __name: 'VPNavBarSearch',
    setup(s) {
      const e = () => null,
        t = () => null,
        { theme: o } = P(),
        n = L(!1),
        r = L(!1)
      j(() => {})
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
        $ = ''
      return (y, w) => {
        var C
        return (
          a(),
          l('div', Ta, [
            i($) === 'local'
              ? (a(),
                l(
                  I,
                  { key: 0 },
                  [
                    v.value
                      ? (a(),
                        b(i(e), {
                          key: 0,
                          onClose: w[0] || (w[0] = (T) => (v.value = !1)),
                        }))
                      : _('', !0),
                    d('div', Na, [
                      f(ye, {
                        onClick: w[1] || (w[1] = (T) => (v.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : i($) === 'algolia'
              ? (a(),
                l(
                  I,
                  { key: 1 },
                  [
                    n.value
                      ? (a(),
                        b(
                          i(t),
                          {
                            key: 0,
                            algolia:
                              ((C = i(o).search) == null
                                ? void 0
                                : C.options) ?? i(o).algolia,
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
                      : (a(), l('div', Ba, [f(ye, { onClick: u })])),
                  ],
                  64,
                ))
              : _('', !0),
          ])
        )
      }
    },
  }),
  Ha = m({
    __name: 'VPNavBarSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        i(e).socialLinks
          ? (a(),
            b(
              ke,
              { key: 0, class: 'VPNavBarSocialLinks', links: i(e).socialLinks },
              null,
              8,
              ['links'],
            ))
          : _('', !0)
    },
  }),
  za = g(Ha, [['__scopeId', 'data-v-970392df']]),
  Ea = ['href', 'rel', 'target'],
  Fa = { key: 1 },
  Da = { key: 2 },
  Oa = m({
    __name: 'VPNavBarTitle',
    setup(s) {
      const { site: e, theme: t } = P(),
        { hasSidebar: o } = D(),
        { currentLang: n } = W(),
        r = k(() => {
          var v
          return typeof t.value.logoLink == 'string'
            ? t.value.logoLink
            : (v = t.value.logoLink) == null
            ? void 0
            : v.link
        }),
        u = k(() => {
          var v
          return typeof t.value.logoLink == 'string' ||
            (v = t.value.logoLink) == null
            ? void 0
            : v.rel
        }),
        p = k(() => {
          var v
          return typeof t.value.logoLink == 'string' ||
            (v = t.value.logoLink) == null
            ? void 0
            : v.target
        })
      return (v, $) => (
        a(),
        l(
          'div',
          { class: M(['VPNavBarTitle', { 'has-sidebar': i(o) }]) },
          [
            d(
              'a',
              {
                class: 'title',
                href: r.value ?? i(pe)(i(n).link),
                rel: u.value,
                target: p.value,
              },
              [
                c(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                i(t).logo
                  ? (a(),
                    b(Q, { key: 0, class: 'logo', image: i(t).logo }, null, 8, [
                      'image',
                    ]))
                  : _('', !0),
                i(t).siteTitle
                  ? (a(), l('span', Fa, V(i(t).siteTitle), 1))
                  : i(t).siteTitle === void 0
                  ? (a(), l('span', Da, V(i(e).title), 1))
                  : _('', !0),
                c(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              Ea,
            ),
          ],
          2,
        )
      )
    },
  }),
  Ua = g(Oa, [['__scopeId', 'data-v-d30acd41']]),
  xa = {},
  ja = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  Ga = d('path', { d: 'M0 0h24v24H0z', fill: 'none' }, null, -1),
  Ra = d(
    'path',
    {
      d: ' M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ',
      class: 'css-c4d79v',
    },
    null,
    -1,
  ),
  qa = [Ga, Ra]
function Ka(s, e) {
  return a(), l('svg', ja, qa)
}
const Ee = g(xa, [['render', Ka]]),
  Wa = { class: 'items' },
  Ya = { class: 'title' },
  Ja = m({
    __name: 'VPNavBarTranslations',
    setup(s) {
      const { theme: e } = P(),
        { localeLinks: t, currentLang: o } = W({ correspondingLink: !0 })
      return (n, r) =>
        i(t).length && i(o).label
          ? (a(),
            b(
              $e,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: Ee,
                label: i(e).langMenuLabel || 'Change language',
              },
              {
                default: h(() => [
                  d('div', Wa, [
                    d('p', Ya, V(i(o).label), 1),
                    (a(!0),
                    l(
                      I,
                      null,
                      A(
                        i(t),
                        (u) => (
                          a(),
                          b(oe, { key: u.link, item: u }, null, 8, ['item'])
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
  Za = g(Ja, [['__scopeId', 'data-v-6f037d1c']]),
  Qa = (s) => (E('data-v-e2d4d38c'), (s = s()), F(), s),
  Xa = { class: 'wrapper' },
  er = { class: 'container' },
  tr = { class: 'title' },
  sr = { class: 'content' },
  or = { class: 'content-body' },
  nr = Qa(() =>
    d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1),
  ),
  ar = m({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(s) {
      const { y: e } = Le(),
        { hasSidebar: t } = D(),
        { hasLocalNav: o } = Ne(),
        { frontmatter: n } = P(),
        r = L({})
      return (
        we(() => {
          r.value = {
            'has-sidebar': t.value,
            'has-local-nav': o.value,
            top: n.value.layout === 'home' && e.value === 0,
          }
        }),
        (u, p) => (
          a(),
          l(
            'div',
            { class: M(['VPNavBar', r.value]) },
            [
              d('div', Xa, [
                d('div', er, [
                  d('div', tr, [
                    f(Ua, null, {
                      'nav-bar-title-before': h(() => [
                        c(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': h(() => [
                        c(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  d('div', sr, [
                    d('div', or, [
                      c(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      f(Aa, { class: 'search' }),
                      f(Pa, { class: 'menu' }),
                      f(Za, { class: 'translations' }),
                      f(_n, { class: 'appearance' }),
                      f(za, { class: 'social-links' }),
                      f(ca, { class: 'extra' }),
                      c(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      f(
                        fa,
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
              nr,
            ],
            2,
          )
        )
      )
    },
  }),
  rr = g(ar, [['__scopeId', 'data-v-e2d4d38c']]),
  ir = { key: 0, class: 'VPNavScreenAppearance' },
  lr = { class: 'text' },
  cr = m({
    __name: 'VPNavScreenAppearance',
    setup(s) {
      const { site: e, theme: t } = P()
      return (o, n) =>
        i(e).appearance && i(e).appearance !== 'force-dark'
          ? (a(),
            l('div', ir, [
              d('p', lr, V(i(t).darkModeSwitchLabel || 'Appearance'), 1),
              f(me),
            ]))
          : _('', !0)
    },
  }),
  ur = g(cr, [['__scopeId', 'data-v-83332725']]),
  dr = m({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(s) {
      const e = se('close-screen')
      return (t, o) => (
        a(),
        b(
          z,
          {
            class: 'VPNavScreenMenuLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: i(e),
          },
          { default: h(() => [H(V(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  vr = g(dr, [['__scopeId', 'data-v-4760ddb3']]),
  hr = {},
  pr = {
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
    focusable: 'false',
    viewBox: '0 0 24 24',
  },
  fr = d(
    'path',
    {
      d: 'M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z',
    },
    null,
    -1,
  ),
  _r = [fr]
function mr(s, e) {
  return a(), l('svg', pr, _r)
}
const gr = g(hr, [['render', mr]]),
  $r = m({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(s) {
      const e = se('close-screen')
      return (t, o) => (
        a(),
        b(
          z,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            onClick: i(e),
          },
          { default: h(() => [H(V(t.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Fe = g($r, [['__scopeId', 'data-v-b7e806a3']]),
  kr = { class: 'VPNavScreenMenuGroupSection' },
  br = { key: 0, class: 'title' },
  yr = m({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(s) {
      return (e, t) => (
        a(),
        l('div', kr, [
          e.text ? (a(), l('p', br, V(e.text), 1)) : _('', !0),
          (a(!0),
          l(
            I,
            null,
            A(
              e.items,
              (o) => (a(), b(Fe, { key: o.text, item: o }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  wr = g(yr, [['__scopeId', 'data-v-8a97d36f']]),
  Pr = ['aria-controls', 'aria-expanded'],
  Vr = ['innerHTML'],
  Lr = ['id'],
  Sr = { key: 1, class: 'group' },
  Mr = m({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(s) {
      const e = s,
        t = L(!1),
        o = k(() => `NavScreenGroup-${e.text.replace(' ', '-').toLowerCase()}`)
      function n() {
        t.value = !t.value
      }
      return (r, u) => (
        a(),
        l(
          'div',
          { class: M(['VPNavScreenMenuGroup', { open: t.value }]) },
          [
            d(
              'button',
              {
                class: 'button',
                'aria-controls': o.value,
                'aria-expanded': t.value,
                onClick: n,
              },
              [
                d(
                  'span',
                  { class: 'button-text', innerHTML: r.text },
                  null,
                  8,
                  Vr,
                ),
                f(gr, { class: 'button-icon' }),
              ],
              8,
              Pr,
            ),
            d(
              'div',
              { id: o.value, class: 'items' },
              [
                (a(!0),
                l(
                  I,
                  null,
                  A(
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
                                f(Fe, { item: p }, null, 8, ['item']),
                              ]))
                            : (a(),
                              l('div', Sr, [
                                f(
                                  wr,
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
              Lr,
            ),
          ],
          2,
        )
      )
    },
  }),
  Cr = g(Mr, [['__scopeId', 'data-v-66bd100f']]),
  Ir = { key: 0, class: 'VPNavScreenMenu' },
  Tr = m({
    __name: 'VPNavScreenMenu',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        i(e).nav
          ? (a(),
            l('nav', Ir, [
              (a(!0),
              l(
                I,
                null,
                A(
                  i(e).nav,
                  (n) => (
                    a(),
                    l(
                      I,
                      { key: n.text },
                      [
                        'link' in n
                          ? (a(), b(vr, { key: 0, item: n }, null, 8, ['item']))
                          : (a(),
                            b(
                              Cr,
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
  Nr = m({
    __name: 'VPNavScreenSocialLinks',
    setup(s) {
      const { theme: e } = P()
      return (t, o) =>
        i(e).socialLinks
          ? (a(),
            b(
              ke,
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
  Br = { class: 'list' },
  Ar = m({
    __name: 'VPNavScreenTranslations',
    setup(s) {
      const { localeLinks: e, currentLang: t } = W({ correspondingLink: !0 }),
        o = L(!1)
      function n() {
        o.value = !o.value
      }
      return (r, u) =>
        i(e).length && i(t).label
          ? (a(),
            l(
              'div',
              {
                key: 0,
                class: M(['VPNavScreenTranslations', { open: o.value }]),
              },
              [
                d('button', { class: 'title', onClick: n }, [
                  f(Ee, { class: 'icon lang' }),
                  H(' ' + V(i(t).label) + ' ', 1),
                  f(ze, { class: 'icon chevron' }),
                ]),
                d('ul', Br, [
                  (a(!0),
                  l(
                    I,
                    null,
                    A(
                      i(e),
                      (p) => (
                        a(),
                        l('li', { key: p.link, class: 'item' }, [
                          f(
                            z,
                            { class: 'link', href: p.link },
                            { default: h(() => [H(V(p.text), 1)]), _: 2 },
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
  Hr = g(Ar, [['__scopeId', 'data-v-230aa62c']]),
  zr = { class: 'container' },
  Er = m({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(s) {
      const e = L(null),
        t = Se(K ? document.body : null)
      return (o, n) => (
        a(),
        b(
          de,
          {
            name: 'fade',
            onEnter: n[0] || (n[0] = (r) => (t.value = !0)),
            onAfterLeave: n[1] || (n[1] = (r) => (t.value = !1)),
          },
          {
            default: h(() => [
              o.open
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
                      d('div', zr, [
                        c(
                          o.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        f(Tr, { class: 'menu' }),
                        f(Hr, { class: 'translations' }),
                        f(ur, { class: 'appearance' }),
                        f(Nr, { class: 'social-links' }),
                        c(o.$slots, 'nav-screen-content-after', {}, void 0, !0),
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
  Fr = g(Er, [['__scopeId', 'data-v-62af7f20']]),
  Dr = { key: 0, class: 'VPNav' },
  Or = m({
    __name: 'VPNav',
    setup(s) {
      const { isScreenOpen: e, closeScreen: t, toggleScreen: o } = Ko(),
        { frontmatter: n } = P(),
        r = k(() => n.value.navbar !== !1)
      return (
        Me('close-screen', t),
        X(() => {
          K && document.documentElement.classList.toggle('hide-nav', !r.value)
        }),
        (u, p) =>
          r.value
            ? (a(),
              l('header', Dr, [
                f(
                  rr,
                  { 'is-screen-open': i(e), onToggleScreen: i(o) },
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
                  Fr,
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
  Ur = g(Or, [['__scopeId', 'data-v-86036eb2']]),
  xr = (s) => (E('data-v-2d8c65e0'), (s = s()), F(), s),
  jr = ['role', 'tabindex'],
  Gr = xr(() => d('div', { class: 'indicator' }, null, -1)),
  Rr = { key: 1, class: 'items' },
  qr = m({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(s) {
      const e = s,
        {
          collapsed: t,
          collapsible: o,
          isLink: n,
          isActiveLink: r,
          hasActiveLink: u,
          hasChildren: p,
          toggle: v,
        } = kt(k(() => e.item)),
        $ = k(() => (p.value ? 'section' : 'div')),
        y = k(() => (n.value ? 'a' : 'div')),
        w = k(() =>
          p.value ? (e.depth + 2 === 7 ? 'p' : `h${e.depth + 2}`) : 'p',
        ),
        C = k(() => (n.value ? void 0 : 'button')),
        T = k(() => [
          [`level-${e.depth}`],
          { collapsible: o.value },
          { collapsed: t.value },
          { 'is-link': n.value },
          { 'is-active': r.value },
          { 'has-active': u.value },
        ])
      function N(S) {
        ;('key' in S && S.key !== 'Enter') || (!e.item.link && v())
      }
      function B() {
        e.item.link && v()
      }
      return (S, Y) => {
        const O = R('VPSidebarItem', !0)
        return (
          a(),
          b(
            U($.value),
            { class: M(['VPSidebarItem', T.value]) },
            {
              default: h(() => [
                S.item.text
                  ? (a(),
                    l(
                      'div',
                      J(
                        { key: 0, class: 'item', role: C.value },
                        Qe(S.item.items ? { click: N, keydown: N } : {}, !0),
                        { tabindex: S.item.items && 0 },
                      ),
                      [
                        Gr,
                        S.item.link
                          ? (a(),
                            b(
                              z,
                              {
                                key: 0,
                                tag: y.value,
                                class: 'link',
                                href: S.item.link,
                                rel: S.item.rel,
                                target: S.item.target,
                              },
                              {
                                default: h(() => [
                                  (a(),
                                  b(
                                    U(w.value),
                                    { class: 'text', innerHTML: S.item.text },
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
                            b(
                              U(w.value),
                              { key: 1, class: 'text', innerHTML: S.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        S.item.collapsed != null
                          ? (a(),
                            l(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: B,
                                onKeydown: Ze(B, ['enter']),
                                tabindex: '0',
                              },
                              [f(Be, { class: 'caret-icon' })],
                              32,
                            ))
                          : _('', !0),
                      ],
                      16,
                      jr,
                    ))
                  : _('', !0),
                S.item.items && S.item.items.length
                  ? (a(),
                    l('div', Rr, [
                      S.depth < 5
                        ? (a(!0),
                          l(
                            I,
                            { key: 0 },
                            A(
                              S.item.items,
                              (q) => (
                                a(),
                                b(
                                  O,
                                  { key: q.text, item: q, depth: S.depth + 1 },
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
  Kr = g(qr, [['__scopeId', 'data-v-2d8c65e0']]),
  De = (s) => (E('data-v-875a24b2'), (s = s()), F(), s),
  Wr = De(() => d('div', { class: 'curtain' }, null, -1)),
  Yr = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  Jr = De(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  Zr = m({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(s) {
      const { sidebarGroups: e, hasSidebar: t } = D(),
        o = s,
        n = L(null),
        r = Se(K ? document.body : null)
      return (
        G(
          [o, n],
          () => {
            var u
            o.open
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
                  class: M(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: n,
                  onClick: p[0] || (p[0] = Xe(() => {}, ['stop'])),
                },
                [
                  Wr,
                  d('nav', Yr, [
                    Jr,
                    c(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    l(
                      I,
                      null,
                      A(
                        i(e),
                        (v) => (
                          a(),
                          l('div', { key: v.text, class: 'group' }, [
                            f(Kr, { item: v, depth: 0 }, null, 8, ['item']),
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
  Qr = g(Zr, [['__scopeId', 'data-v-875a24b2']]),
  Xr = m({
    __name: 'VPSkipLink',
    setup(s) {
      const e = te(),
        t = L()
      G(
        () => e.path,
        () => t.value.focus(),
      )
      function o({ target: n }) {
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
                onClick: o,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  ei = g(Xr, [['__scopeId', 'data-v-bc7e97a6']]),
  ti = m({
    __name: 'Layout',
    setup(s) {
      const { isOpen: e, open: t, close: o } = D(),
        n = te()
      G(() => n.path, o), $t(e, o)
      const { frontmatter: r } = P(),
        u = et(),
        p = k(() => !!u['home-hero-image'])
      return (
        Me('hero-image-slot-exists', p),
        (v, $) => {
          const y = R('Content')
          return i(r).layout !== !1
            ? (a(),
              l(
                'div',
                { key: 0, class: M(['Layout', i(r).pageClass]) },
                [
                  c(v.$slots, 'layout-top', {}, void 0, !0),
                  f(ei),
                  f(
                    nt,
                    { class: 'backdrop', show: i(e), onClick: i(o) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  f(Ur, null, {
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
                  f(qo, { open: i(e), onOpenMenu: i(t) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  f(
                    Qr,
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
                  f(go, null, {
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
                  f(wo),
                  c(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), b(y, { key: 1 }))
        }
      )
    },
  }),
  si = g(ti, [['__scopeId', 'data-v-066deec2']]),
  oi = {
    Layout: si,
    enhanceApp: ({ app: s }) => {
      s.component('Badge', tt)
    },
  },
  be = (s, e) => {
    if (
      ((s.install = (t) => {
        for (const o of [s, ...Object.values(e ?? {})]) t.component(o.name, o)
      }),
      e)
    )
      for (const [t, o] of Object.entries(e)) s[t] = o
    return s
  },
  ni = (s = []) => ({
    install: (e) => {
      s.forEach((t) => e.use(t))
    },
  }),
  ai = m({
    name: 'PotButton',
    __name: 'button',
    props: { type: { default: void 0 } },
    setup(s) {
      const e = s,
        t = k(() => ({ [`pot-button--${e.type}`]: e.type })),
        o = k(() =>
          e.type
            ? e.type.replace(e.type.charAt(0), e.type.charAt(0).toUpperCase())
            : 'Default',
        )
      return (n, r) => (
        a(),
        l(
          'button',
          { ref: 'buttonRef', class: M(['pot-button', t.value]) },
          [c(n.$slots, 'default', {}, () => [H(V(o.value), 1)])],
          2,
        )
      )
    },
  }),
  ri = be(ai),
  ii = { class: 'pot-icon' },
  li = ['xlink:href'],
  ci = m({
    name: 'PotIcon',
    __name: 'icon',
    props: { iconClass: { default: '' } },
    setup(s) {
      const e = s,
        t = k(() => `#icon-${e.iconClass}`)
      return (o, n) => (
        a(), l('svg', ii, [d('use', { 'xlink:href': t.value }, null, 8, li)])
      )
    },
  }),
  ui = be(ci),
  di = { class: 'pot-radio' },
  vi = ['id', 'name', 'value'],
  hi = ['for'],
  pi = m({
    name: 'PotRadio',
    __name: 'radio',
    props: {
      name: { default: void 0 },
      options: { default: void 0 },
      modelValue: { default: void 0 },
    },
    emits: ['update:modelValue'],
    setup(s, { emit: e }) {
      const t = s,
        o = e,
        n = L('')
      let r = ''
      function u(p) {
        const v = p.target
        r != v.value &&
          (o('update:modelValue', v.value), (r = v.value), (n.value = v.id))
      }
      return (p, v) => (
        a(),
        l('div', di, [
          (a(!0),
          l(
            I,
            null,
            A(
              t.options,
              ($) => (
                a(),
                l('div', { key: $.id }, [
                  d(
                    'input',
                    {
                      id: $.id.toString(),
                      type: 'radio',
                      name: t.name,
                      value: $.value,
                      onFocus: u,
                    },
                    null,
                    40,
                    vi,
                  ),
                  d(
                    'label',
                    {
                      for: $.id.toString(),
                      class: M([
                        'pot-radio--item',
                        {
                          'pot-radio--item_checked':
                            $.id.toString() === n.value,
                        },
                      ]),
                    },
                    V($.label),
                    11,
                    hi,
                  ),
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  fi = be(pi),
  _i = [ui, ri, fi],
  mi = ni(_i),
  $i = {
    ...oi,
    enhanceApp({ app: s }) {
      s.use(mi)
    },
  }
export { $i as R }
