/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function _s(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const ee = {},
  mt = [],
  xe = () => {},
  co = () => !1,
  Wt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  bs = (e) => e.startsWith('onUpdate:'),
  oe = Object.assign,
  vs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  ao = Object.prototype.hasOwnProperty,
  X = (e, t) => ao.call(e, t),
  U = Array.isArray,
  yt = (e) => En(e) === '[object Map]',
  Hr = (e) => En(e) === '[object Set]',
  k = (e) => typeof e == 'function',
  ne = (e) => typeof e == 'string',
  St = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  jr = (e) => (Z(e) || k(e)) && k(e.then) && k(e.catch),
  Dr = Object.prototype.toString,
  En = (e) => Dr.call(e),
  uo = (e) => En(e).slice(8, -1),
  Vr = (e) => En(e) === '[object Object]',
  ws = (e) =>
    ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  _t = _s(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  Cn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  fo = /-(\w)/g,
  Me = Cn((e) => e.replace(fo, (t, n) => (n ? n.toUpperCase() : ''))),
  ho = /\B([A-Z])/g,
  ut = Cn((e) => e.replace(ho, '-$1').toLowerCase()),
  xn = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  an = Cn((e) => (e ? `on${xn(e)}` : '')),
  Qe = (e, t) => !Object.is(e, t),
  kn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  dn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  po = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  go = (e) => {
    const t = ne(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Ws
const Ur = () =>
  Ws ||
  (Ws =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function Es(e) {
  if (U(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ne(s) ? bo(s) : Es(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ne(e) || Z(e)) return e
}
const mo = /;(?![^(]*\))/g,
  yo = /:([^]+)/,
  _o = /\/\*[^]*?\*\//g
function bo(e) {
  const t = {}
  return (
    e
      .replace(_o, '')
      .split(mo)
      .forEach((n) => {
        if (n) {
          const s = n.split(yo)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function Cs(e) {
  let t = ''
  if (ne(e)) t = e
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const s = Cs(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const vo =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  wo = _s(vo)
function Br(e) {
  return !!e || e === ''
}
const Da = (e) =>
    ne(e)
      ? e
      : e == null
      ? ''
      : U(e) || (Z(e) && (e.toString === Dr || !k(e.toString)))
      ? JSON.stringify(e, kr, 2)
      : String(e),
  kr = (e, t) =>
    t && t.__v_isRef
      ? kr(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[Kn(s, i) + ' =>'] = r), n),
            {},
          ),
        }
      : Hr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Kn(n)) }
      : St(t)
      ? Kn(t)
      : Z(t) && !U(t) && !Vr(t)
      ? String(t)
      : t,
  Kn = (e, t = '') => {
    var n
    return St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class Eo {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = be
      try {
        return (be = this), t()
      } finally {
        be = n
      }
    }
  }
  on() {
    be = this
  }
  off() {
    be = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Co(e, t = be) {
  t && t.active && t.effects.push(e)
}
function Kr() {
  return be
}
function xo(e) {
  be && be.cleanups.push(e)
}
let lt
class xs {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Co(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), ft()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (So(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), dt()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Ge,
      n = lt
    try {
      return (Ge = !0), (lt = this), this._runnings++, qs(this), this.fn()
    } finally {
      Gs(this), this._runnings--, (lt = n), (Ge = t)
    }
  }
  stop() {
    var t
    this.active &&
      (qs(this),
      Gs(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function So(e) {
  return e.value
}
function qs(e) {
  e._trackId++, (e._depsLength = 0)
}
function Gs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Wr(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Wr(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ge = !0,
  rs = 0
const qr = []
function ft() {
  qr.push(Ge), (Ge = !1)
}
function dt() {
  const e = qr.pop()
  Ge = e === void 0 ? !0 : e
}
function Ss() {
  rs++
}
function Ts() {
  for (rs--; !rs && is.length; ) is.shift()()
}
function Gr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Wr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const is = []
function zr(e, t, n) {
  Ss()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && is.push(s.scheduler)))
  }
  Ts()
}
const Xr = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  hn = new WeakMap(),
  ct = Symbol(''),
  os = Symbol('')
function ye(e, t, n) {
  if (Ge && lt) {
    let s = hn.get(e)
    s || hn.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Xr(() => s.delete(n)))), Gr(lt, r)
  }
}
function $e(e, t, n, s, r, i) {
  const o = hn.get(e)
  if (!o) return
  let l = []
  if (t === 'clear') l = [...o.values()]
  else if (n === 'length' && U(e)) {
    const c = Number(s)
    o.forEach((u, d) => {
      ;(d === 'length' || (!St(d) && d >= c)) && l.push(u)
    })
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        U(e)
          ? ws(n) && l.push(o.get('length'))
          : (l.push(o.get(ct)), yt(e) && l.push(o.get(os)))
        break
      case 'delete':
        U(e) || (l.push(o.get(ct)), yt(e) && l.push(o.get(os)))
        break
      case 'set':
        yt(e) && l.push(o.get(ct))
        break
    }
  Ss()
  for (const c of l) c && zr(c, 4)
  Ts()
}
function To(e, t) {
  var n
  return (n = hn.get(e)) == null ? void 0 : n.get(t)
}
const Ao = _s('__proto__,__v_isRef,__isVue'),
  Yr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(St),
  ),
  zs = Ro()
function Ro() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = Y(this)
        for (let i = 0, o = this.length; i < o; i++) ye(s, 'get', i + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(Y)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        ft(), Ss()
        const s = Y(this)[t].apply(this, n)
        return Ts(), dt(), s
      }
    }),
    e
  )
}
function Oo(e) {
  const t = Y(this)
  return ye(t, 'has', e), t.hasOwnProperty(e)
}
class Jr {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._shallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      i = this._shallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? Bo : ti) : i ? ei : Zr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = U(t)
    if (!r) {
      if (o && X(zs, n)) return Reflect.get(zs, n, s)
      if (n === 'hasOwnProperty') return Oo
    }
    const l = Reflect.get(t, n, s)
    return (St(n) ? Yr.has(n) : Ao(n)) || (r || ye(t, 'get', n), i)
      ? l
      : de(l)
      ? o && ws(n)
        ? l
        : l.value
      : Z(l)
      ? r
        ? An(l)
        : Tn(l)
      : l
  }
}
class Qr extends Jr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._shallow) {
      const c = Ct(i)
      if (
        (!pn(s) && !Ct(s) && ((i = Y(i)), (s = Y(s))), !U(t) && de(i) && !de(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = U(t) && ws(n) ? Number(n) < t.length : X(t, n),
      l = Reflect.set(t, n, s, r)
    return (
      t === Y(r) && (o ? Qe(s, i) && $e(t, 'set', n, s) : $e(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = X(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && $e(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!St(n) || !Yr.has(n)) && ye(t, 'has', n), s
  }
  ownKeys(t) {
    return ye(t, 'iterate', U(t) ? 'length' : ct), Reflect.ownKeys(t)
  }
}
class Lo extends Jr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const Io = new Qr(),
  Po = new Lo(),
  Mo = new Qr(!0),
  As = (e) => e,
  Sn = (e) => Reflect.getPrototypeOf(e)
function Xt(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = Y(e),
    i = Y(t)
  n || (Qe(t, i) && ye(r, 'get', t), ye(r, 'get', i))
  const { has: o } = Sn(r),
    l = s ? As : n ? Ls : Dt
  if (o.call(r, t)) return l(e.get(t))
  if (o.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Yt(e, t = !1) {
  const n = this.__v_raw,
    s = Y(n),
    r = Y(e)
  return (
    t || (Qe(e, r) && ye(s, 'has', e), ye(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function Jt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ye(Y(e), 'iterate', ct), Reflect.get(e, 'size', e)
  )
}
function Xs(e) {
  e = Y(e)
  const t = Y(this)
  return Sn(t).has.call(t, e) || (t.add(e), $e(t, 'add', e, e)), this
}
function Ys(e, t) {
  t = Y(t)
  const n = Y(this),
    { has: s, get: r } = Sn(n)
  let i = s.call(n, e)
  i || ((e = Y(e)), (i = s.call(n, e)))
  const o = r.call(n, e)
  return (
    n.set(e, t), i ? Qe(t, o) && $e(n, 'set', e, t) : $e(n, 'add', e, t), this
  )
}
function Js(e) {
  const t = Y(this),
    { has: n, get: s } = Sn(t)
  let r = n.call(t, e)
  r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && $e(t, 'delete', e, void 0), i
}
function Qs() {
  const e = Y(this),
    t = e.size !== 0,
    n = e.clear()
  return t && $e(e, 'clear', void 0, void 0), n
}
function Qt(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = Y(o),
      c = t ? As : e ? Ls : Dt
    return (
      !e && ye(l, 'iterate', ct), o.forEach((u, d) => s.call(r, c(u), c(d), i))
    )
  }
}
function Zt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Y(r),
      o = yt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      d = n ? As : t ? Ls : Dt
    return (
      !t && ye(i, 'iterate', c ? os : ct),
      {
        next() {
          const { value: h, done: m } = u.next()
          return m
            ? { value: h, done: m }
            : { value: l ? [d(h[0]), d(h[1])] : d(h), done: m }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function De(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function No() {
  const e = {
      get(i) {
        return Xt(this, i)
      },
      get size() {
        return Jt(this)
      },
      has: Yt,
      add: Xs,
      set: Ys,
      delete: Js,
      clear: Qs,
      forEach: Qt(!1, !1),
    },
    t = {
      get(i) {
        return Xt(this, i, !1, !0)
      },
      get size() {
        return Jt(this)
      },
      has: Yt,
      add: Xs,
      set: Ys,
      delete: Js,
      clear: Qs,
      forEach: Qt(!1, !0),
    },
    n = {
      get(i) {
        return Xt(this, i, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(i) {
        return Yt.call(this, i, !0)
      },
      add: De('add'),
      set: De('set'),
      delete: De('delete'),
      clear: De('clear'),
      forEach: Qt(!0, !1),
    },
    s = {
      get(i) {
        return Xt(this, i, !0, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(i) {
        return Yt.call(this, i, !0)
      },
      add: De('add'),
      set: De('set'),
      delete: De('delete'),
      clear: De('clear'),
      forEach: Qt(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Zt(i, !1, !1)),
        (n[i] = Zt(i, !0, !1)),
        (t[i] = Zt(i, !1, !0)),
        (s[i] = Zt(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Fo, $o, Ho, jo] = No()
function Rs(e, t) {
  const n = t ? (e ? jo : Ho) : e ? $o : Fo
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(X(n, r) && r in s ? n : s, r, i)
}
const Do = { get: Rs(!1, !1) },
  Vo = { get: Rs(!1, !0) },
  Uo = { get: Rs(!0, !1) },
  Zr = new WeakMap(),
  ei = new WeakMap(),
  ti = new WeakMap(),
  Bo = new WeakMap()
function ko(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Ko(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ko(uo(e))
}
function Tn(e) {
  return Ct(e) ? e : Os(e, !1, Io, Do, Zr)
}
function Wo(e) {
  return Os(e, !1, Mo, Vo, ei)
}
function An(e) {
  return Os(e, !0, Po, Uo, ti)
}
function Os(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = Ko(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? s : n)
  return r.set(e, l), l
}
function bt(e) {
  return Ct(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ct(e) {
  return !!(e && e.__v_isReadonly)
}
function pn(e) {
  return !!(e && e.__v_isShallow)
}
function ni(e) {
  return bt(e) || Ct(e)
}
function Y(e) {
  const t = e && e.__v_raw
  return t ? Y(t) : e
}
function It(e) {
  return Object.isExtensible(e) && dn(e, '__v_skip', !0), e
}
const Dt = (e) => (Z(e) ? Tn(e) : e),
  Ls = (e) => (Z(e) ? An(e) : e)
class si {
  constructor(t, n, s, r) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new xs(
        () => t(this._value),
        () => Pt(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = Y(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        Qe(t._value, (t._value = t.effect.run())) &&
        Pt(t, 4),
      Is(t),
      t.effect._dirtyLevel >= 2 && Pt(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function qo(e, t, n = !1) {
  let s, r
  const i = k(e)
  return (
    i ? ((s = e), (r = xe)) : ((s = e.get), (r = e.set)),
    new si(s, r, i || !r, n)
  )
}
function Is(e) {
  var t
  Ge &&
    lt &&
    ((e = Y(e)),
    Gr(
      lt,
      (t = e.dep) != null
        ? t
        : (e.dep = Xr(() => (e.dep = void 0), e instanceof si ? e : void 0)),
    ))
}
function Pt(e, t = 4, n) {
  e = Y(e)
  const s = e.dep
  s && zr(s, t)
}
function de(e) {
  return !!(e && e.__v_isRef === !0)
}
function me(e) {
  return ii(e, !1)
}
function ri(e) {
  return ii(e, !0)
}
function ii(e, t) {
  return de(e) ? e : new Go(e, t)
}
class Go {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Y(t)),
      (this._value = n ? t : Dt(t))
  }
  get value() {
    return Is(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || pn(t) || Ct(t)
    ;(t = n ? t : Y(t)),
      Qe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Dt(t)), Pt(this, 4))
  }
}
function oi(e) {
  return de(e) ? e.value : e
}
const zo = {
  get: (e, t, n) => oi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function li(e) {
  return bt(e) ? e : new Proxy(e, zo)
}
class Xo {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => Is(this),
      () => Pt(this),
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Yo(e) {
  return new Xo(e)
}
class Jo {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return To(Y(this._object), this._key)
  }
}
class Qo {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function Zo(e, t, n) {
  return de(e)
    ? e
    : k(e)
    ? new Qo(e)
    : Z(e) && arguments.length > 1
    ? el(e, t, n)
    : me(e)
}
function el(e, t, n) {
  const s = e[t]
  return de(s) ? s : new Jo(e, t, n)
}
/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function ze(e, t, n, s) {
  let r
  try {
    r = s ? e(...s) : e()
  } catch (i) {
    Rn(i, t, n)
  }
  return r
}
function Se(e, t, n, s) {
  if (k(e)) {
    const i = ze(e, t, n, s)
    return (
      i &&
        jr(i) &&
        i.catch((o) => {
          Rn(o, t, n)
        }),
      i
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(Se(e[i], t, n, s))
  return r
}
function Rn(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let i = t.parent
    const o = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; i; ) {
      const u = i.ec
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, o, l) === !1) return
      }
      i = i.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      ze(c, null, 10, [e, o, l])
      return
    }
  }
  tl(e, n, r, s)
}
function tl(e, t, n, s = !0) {
  console.error(e)
}
let Vt = !1,
  ls = !1
const fe = []
let Pe = 0
const vt = []
let ke = null,
  rt = 0
const ci = Promise.resolve()
let Ps = null
function On(e) {
  const t = Ps || ci
  return e ? t.then(this ? e.bind(this) : e) : t
}
function nl(e) {
  let t = Pe + 1,
    n = fe.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = fe[s],
      i = Ut(r)
    i < e || (i === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ms(e) {
  ;(!fe.length || !fe.includes(e, Vt && e.allowRecurse ? Pe + 1 : Pe)) &&
    (e.id == null ? fe.push(e) : fe.splice(nl(e.id), 0, e), ai())
}
function ai() {
  !Vt && !ls && ((ls = !0), (Ps = ci.then(ui)))
}
function sl(e) {
  const t = fe.indexOf(e)
  t > Pe && fe.splice(t, 1)
}
function rl(e) {
  U(e)
    ? vt.push(...e)
    : (!ke || !ke.includes(e, e.allowRecurse ? rt + 1 : rt)) && vt.push(e),
    ai()
}
function Zs(e, t, n = Vt ? Pe + 1 : 0) {
  for (; n < fe.length; n++) {
    const s = fe[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      fe.splice(n, 1), n--, s()
    }
  }
}
function gn(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort((n, s) => Ut(n) - Ut(s))
    if (((vt.length = 0), ke)) {
      ke.push(...t)
      return
    }
    for (ke = t, rt = 0; rt < ke.length; rt++) ke[rt]()
    ;(ke = null), (rt = 0)
  }
}
const Ut = (e) => (e.id == null ? 1 / 0 : e.id),
  il = (e, t) => {
    const n = Ut(e) - Ut(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function ui(e) {
  ;(ls = !1), (Vt = !0), fe.sort(il)
  try {
    for (Pe = 0; Pe < fe.length; Pe++) {
      const t = fe[Pe]
      t && t.active !== !1 && ze(t, null, 14)
    }
  } finally {
    ;(Pe = 0),
      (fe.length = 0),
      gn(),
      (Vt = !1),
      (Ps = null),
      (fe.length || vt.length) && ui()
  }
}
function ol(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in s) {
    const d = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: h, trim: m } = s[d] || ee
    m && (r = n.map((w) => (ne(w) ? w.trim() : w))), h && (r = n.map(po))
  }
  let l,
    c = s[(l = an(t))] || s[(l = an(Me(t)))]
  !c && i && (c = s[(l = an(ut(t)))]), c && Se(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Se(u, e, 6, r)
  }
}
function fi(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!k(e)) {
    const c = (u) => {
      const d = fi(u, t, !0)
      d && ((l = !0), oe(o, d))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (U(i) ? i.forEach((c) => (o[c] = null)) : oe(o, i),
      Z(e) && s.set(e, o),
      o)
}
function Ln(e, t) {
  return !e || !Wt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      X(e, t[0].toLowerCase() + t.slice(1)) || X(e, ut(t)) || X(e, t))
}
let ie = null,
  In = null
function mn(e) {
  const t = ie
  return (ie = e), (In = (e && e.type.__scopeId) || null), t
}
function Va(e) {
  In = e
}
function Ua() {
  In = null
}
function ll(e, t = ie, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && fr(-1)
    const i = mn(t)
    let o
    try {
      o = e(...r)
    } finally {
      mn(i), s._d && fr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: l,
    attrs: c,
    emit: u,
    render: d,
    renderCache: h,
    data: m,
    setupState: w,
    ctx: L,
    inheritAttrs: M,
  } = e
  let D, W
  const J = mn(e)
  try {
    if (n.shapeFlag & 4) {
      const y = r || s,
        N = y
      ;(D = Ae(d.call(N, y, h, i, w, m, L))), (W = c)
    } else {
      const y = t
      ;(D = Ae(
        y.length > 1 ? y(i, { attrs: c, slots: l, emit: u }) : y(i, null),
      )),
        (W = t.props ? c : cl(c))
    }
  } catch (y) {
    ;($t.length = 0), Rn(y, e, 1), (D = ue(ve))
  }
  let p = D
  if (W && M !== !1) {
    const y = Object.keys(W),
      { shapeFlag: N } = p
    y.length && N & 7 && (o && y.some(bs) && (W = al(W, o)), (p = Ze(p, W)))
  }
  return (
    n.dirs && ((p = Ze(p)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (p.transition = n.transition),
    (D = p),
    mn(J),
    D
  )
}
const cl = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Wt(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  al = (e, t) => {
    const n = {}
    for (const s in e) (!bs(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function ul(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? er(s, o, u) : !!o
    if (c & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const m = d[h]
        if (o[m] !== s[m] && !Ln(u, m)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? er(s, o, u)
        : !0
      : !!o
  return !1
}
function er(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !Ln(n, i)) return !0
  }
  return !1
}
function fl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ns = 'components',
  dl = 'directives'
function Ba(e, t) {
  return Fs(Ns, e, !0, t) || e
}
const di = Symbol.for('v-ndc')
function ka(e) {
  return ne(e) ? Fs(Ns, e, !1) || e : e || di
}
function Ka(e) {
  return Fs(dl, e)
}
function Fs(e, t, n = !0, s = !1) {
  const r = ie || ae
  if (r) {
    const i = r.type
    if (e === Ns) {
      const l = cc(i, !1)
      if (l && (l === t || l === Me(t) || l === xn(Me(t)))) return i
    }
    const o = tr(r[e] || i[e], t) || tr(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function tr(e, t) {
  return e && (e[t] || e[Me(t)] || e[xn(Me(t))])
}
const hl = (e) => e.__isSuspense
function hi(e, t) {
  t && t.pendingBranch
    ? U(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : rl(e)
}
const pl = Symbol.for('v-scx'),
  gl = () => Et(pl)
function pi(e, t) {
  return Pn(e, null, t)
}
function Wa(e, t) {
  return Pn(e, null, { flush: 'post' })
}
const en = {}
function Xe(e, t, n) {
  return Pn(e, t, n)
}
function Pn(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: l } = ee,
) {
  if (t && i) {
    const I = t
    t = (...V) => {
      I(...V), N()
    }
  }
  const c = ae,
    u = (I) => (s === !0 ? I : ot(I, s === !1 ? 1 : void 0))
  let d,
    h = !1,
    m = !1
  if (
    (de(e)
      ? ((d = () => e.value), (h = pn(e)))
      : bt(e)
      ? ((d = () => u(e)), (h = !0))
      : U(e)
      ? ((m = !0),
        (h = e.some((I) => bt(I) || pn(I))),
        (d = () =>
          e.map((I) => {
            if (de(I)) return I.value
            if (bt(I)) return u(I)
            if (k(I)) return ze(I, c, 2)
          })))
      : k(e)
      ? t
        ? (d = () => ze(e, c, 2))
        : (d = () => (w && w(), Se(e, c, 3, [L])))
      : (d = xe),
    t && s)
  ) {
    const I = d
    d = () => ot(I())
  }
  let w,
    L = (I) => {
      w = p.onStop = () => {
        ze(I, c, 4), (w = p.onStop = void 0)
      }
    },
    M
  if (jn)
    if (
      ((L = xe),
      t ? n && Se(t, c, 3, [d(), m ? [] : void 0, L]) : d(),
      r === 'sync')
    ) {
      const I = gl()
      M = I.__watcherHandles || (I.__watcherHandles = [])
    } else return xe
  let D = m ? new Array(e.length).fill(en) : en
  const W = () => {
    if (!(!p.active || !p.dirty))
      if (t) {
        const I = p.run()
        ;(s || h || (m ? I.some((V, O) => Qe(V, D[O])) : Qe(I, D))) &&
          (w && w(),
          Se(t, c, 3, [I, D === en ? void 0 : m && D[0] === en ? [] : D, L]),
          (D = I))
      } else p.run()
  }
  W.allowRecurse = !!t
  let J
  r === 'sync'
    ? (J = W)
    : r === 'post'
    ? (J = () => pe(W, c && c.suspense))
    : ((W.pre = !0), c && (W.id = c.uid), (J = () => Ms(W)))
  const p = new xs(d, xe, J),
    y = Kr(),
    N = () => {
      p.stop(), y && vs(y.effects, p)
    }
  return (
    t
      ? n
        ? W()
        : (D = p.run())
      : r === 'post'
      ? pe(p.run.bind(p), c && c.suspense)
      : p.run(),
    M && M.push(N),
    N
  )
}
function ml(e, t, n) {
  const s = this.proxy,
    r = ne(e) ? (e.includes('.') ? gi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  k(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = qt(this),
    l = Pn(r, i.bind(s), n)
  return o(), l
}
function gi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function ot(e, t, n = 0, s) {
  if (!Z(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), de(e))) ot(e.value, t, n, s)
  else if (U(e)) for (let r = 0; r < e.length; r++) ot(e[r], t, n, s)
  else if (Hr(e) || yt(e))
    e.forEach((r) => {
      ot(r, t, n, s)
    })
  else if (Vr(e)) for (const r in e) ot(e[r], t, n, s)
  return e
}
function qa(e, t) {
  if (ie === null) return e
  const n = Dn(ie) || ie.proxy,
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r]
    i &&
      (k(i) && (i = { mounted: i, updated: i }),
      i.deep && ot(o),
      s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function Ie(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (ft(), Se(c, n, 8, [e.el, l, e, t]), dt())
  }
}
const Ke = Symbol('_leaveCb'),
  tn = Symbol('_enterCb')
function yl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Tt(() => {
      e.isMounted = !0
    }),
    wi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const we = [Function, Array],
  mi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we,
  },
  _l = {
    name: 'BaseTransition',
    props: mi,
    setup(e, { slots: t }) {
      const n = Hn(),
        s = yl()
      let r
      return () => {
        const i = t.default && _i(t.default(), !0)
        if (!i || !i.length) return
        let o = i[0]
        if (i.length > 1) {
          for (const M of i)
            if (M.type !== ve) {
              o = M
              break
            }
        }
        const l = Y(e),
          { mode: c } = l
        if (s.isLeaving) return qn(o)
        const u = nr(o)
        if (!u) return qn(o)
        const d = cs(u, l, s, n)
        as(u, d)
        const h = n.subTree,
          m = h && nr(h)
        let w = !1
        const { getTransitionKey: L } = u.type
        if (L) {
          const M = L()
          r === void 0 ? (r = M) : M !== r && ((r = M), (w = !0))
        }
        if (m && m.type !== ve && (!it(u, m) || w)) {
          const M = cs(m, l, s, n)
          if ((as(m, M), c === 'out-in'))
            return (
              (s.isLeaving = !0),
              (M.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update())
              }),
              qn(o)
            )
          c === 'in-out' &&
            u.type !== ve &&
            (M.delayLeave = (D, W, J) => {
              const p = yi(s, m)
              ;(p[String(m.key)] = m),
                (D[Ke] = () => {
                  W(), (D[Ke] = void 0), delete d.delayedLeave
                }),
                (d.delayedLeave = J)
            })
        }
        return o
      }
    },
  },
  bl = _l
function yi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function cs(e, t, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: h,
      onLeave: m,
      onAfterLeave: w,
      onLeaveCancelled: L,
      onBeforeAppear: M,
      onAppear: D,
      onAfterAppear: W,
      onAppearCancelled: J,
    } = t,
    p = String(e.key),
    y = yi(n, e),
    N = (O, T) => {
      O && Se(O, s, 9, T)
    },
    I = (O, T) => {
      const A = T[1]
      N(O, T),
        U(O) ? O.every((K) => K.length <= 1) && A() : O.length <= 1 && A()
    },
    V = {
      mode: i,
      persisted: o,
      beforeEnter(O) {
        let T = l
        if (!n.isMounted)
          if (r) T = M || l
          else return
        O[Ke] && O[Ke](!0)
        const A = y[p]
        A && it(e, A) && A.el[Ke] && A.el[Ke](), N(T, [O])
      },
      enter(O) {
        let T = c,
          A = u,
          K = d
        if (!n.isMounted)
          if (r) (T = D || c), (A = W || u), (K = J || d)
          else return
        let S = !1
        const q = (O[tn] = (re) => {
          S ||
            ((S = !0),
            re ? N(K, [O]) : N(A, [O]),
            V.delayedLeave && V.delayedLeave(),
            (O[tn] = void 0))
        })
        T ? I(T, [O, q]) : q()
      },
      leave(O, T) {
        const A = String(e.key)
        if ((O[tn] && O[tn](!0), n.isUnmounting)) return T()
        N(h, [O])
        let K = !1
        const S = (O[Ke] = (q) => {
          K ||
            ((K = !0),
            T(),
            q ? N(L, [O]) : N(w, [O]),
            (O[Ke] = void 0),
            y[A] === e && delete y[A])
        })
        ;(y[A] = e), m ? I(m, [O, S]) : S()
      },
      clone(O) {
        return cs(O, t, n, s)
      },
    }
  return V
}
function qn(e) {
  if (Mn(e)) return (e = Ze(e)), (e.children = null), e
}
function nr(e) {
  return Mn(e) ? (e.children ? e.children[0] : void 0) : e
}
function as(e, t) {
  e.shapeFlag & 6 && e.component
    ? as(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function _i(e, t = !1, n) {
  let s = [],
    r = 0
  for (let i = 0; i < e.length; i++) {
    let o = e[i]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i)
    o.type === ge
      ? (o.patchFlag & 128 && r++, (s = s.concat(_i(o.children, t, l))))
      : (t || o.type !== ve) && s.push(l != null ? Ze(o, { key: l }) : o)
  }
  if (r > 1) for (let i = 0; i < s.length; i++) s[i].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function bi(e, t) {
  return k(e) ? oe({ name: e.name }, t, { setup: e }) : e
}
const wt = (e) => !!e.type.__asyncLoader,
  Mn = (e) => e.type.__isKeepAlive
function vl(e, t) {
  vi(e, 'a', t)
}
function wl(e, t) {
  vi(e, 'da', t)
}
function vi(e, t, n = ae) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Nn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Mn(r.parent.vnode) && El(s, t, n, r), (r = r.parent)
  }
}
function El(e, t, n, s) {
  const r = Nn(t, e, s, !0)
  Fn(() => {
    vs(s[t], r)
  }, n)
}
function Nn(e, t, n = ae, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          ft()
          const l = qt(n),
            c = Se(t, n, e, o)
          return l(), dt(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const je =
    (e) =>
    (t, n = ae) =>
      (!jn || e === 'sp') && Nn(e, (...s) => t(...s), n),
  Cl = je('bm'),
  Tt = je('m'),
  xl = je('bu'),
  Sl = je('u'),
  wi = je('bum'),
  Fn = je('um'),
  Tl = je('sp'),
  Al = je('rtg'),
  Rl = je('rtc')
function Ol(e, t = ae) {
  Nn('ec', e, t)
}
function Ga(e, t, n, s) {
  let r
  const i = n && n[s]
  if (U(e) || ne(e)) {
    r = new Array(e.length)
    for (let o = 0, l = e.length; o < l; o++)
      r[o] = t(e[o], o, void 0, i && i[o])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let o = 0; o < e; o++) r[o] = t(o + 1, o, void 0, i && i[o])
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (o, l) => t(o, l, void 0, i && i[l]))
    else {
      const o = Object.keys(e)
      r = new Array(o.length)
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l]
        r[l] = t(e[u], u, l, i && i[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function za(e, t, n = {}, s, r) {
  if (ie.isCE || (ie.parent && wt(ie.parent) && ie.parent.isCE))
    return t !== 'default' && (n.name = t), ue('slot', n, s && s())
  let i = e[t]
  i && i._c && (i._d = !1), Ni()
  const o = i && Ei(i(n)),
    l = $i(
      ge,
      { key: n.key || (o && o.key) || `_${t}` },
      o || (s ? s() : []),
      o && e._ === 1 ? 64 : -2,
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    i && i._c && (i._d = !0),
    l
  )
}
function Ei(e) {
  return e.some((t) =>
    bn(t) ? !(t.type === ve || (t.type === ge && !Ei(t.children))) : !0,
  )
    ? e
    : null
}
function Xa(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : an(s)] = e[s]
  return n
}
const us = (e) => (e ? (Vi(e) ? Dn(e) || e.proxy : us(e.parent)) : null),
  Mt = oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => us(e.parent),
    $root: (e) => us(e.root),
    $emit: (e) => e.emit,
    $options: (e) => $s(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ms(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = On.bind(e.proxy)),
    $watch: (e) => ml.bind(e),
  }),
  Gn = (e, t) => e !== ee && !e.__isScriptSetup && X(e, t),
  Ll = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: c,
      } = e
      let u
      if (t[0] !== '$') {
        const w = o[t]
        if (w !== void 0)
          switch (w) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Gn(s, t)) return (o[t] = 1), s[t]
          if (r !== ee && X(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && X(u, t)) return (o[t] = 3), i[t]
          if (n !== ee && X(n, t)) return (o[t] = 4), n[t]
          fs && (o[t] = 0)
        }
      }
      const d = Mt[t]
      let h, m
      if (d) return t === '$attrs' && ye(e, 'get', t), d(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && X(n, t)) return (o[t] = 4), n[t]
      if (((m = c.config.globalProperties), X(m, t))) return m[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return Gn(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && X(s, t)
        ? ((s[t] = n), !0)
        : X(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ee && X(e, o)) ||
        Gn(t, o) ||
        ((l = i[0]) && X(l, o)) ||
        X(s, o) ||
        X(Mt, o) ||
        X(r.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : X(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Ya() {
  return Il().slots
}
function Il() {
  const e = Hn()
  return e.setupContext || (e.setupContext = Bi(e))
}
function sr(e) {
  return U(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let fs = !0
function Pl(e) {
  const t = $s(e),
    n = e.proxy,
    s = e.ctx
  ;(fs = !1), t.beforeCreate && rr(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: u,
    created: d,
    beforeMount: h,
    mounted: m,
    beforeUpdate: w,
    updated: L,
    activated: M,
    deactivated: D,
    beforeDestroy: W,
    beforeUnmount: J,
    destroyed: p,
    unmounted: y,
    render: N,
    renderTracked: I,
    renderTriggered: V,
    errorCaptured: O,
    serverPrefetch: T,
    expose: A,
    inheritAttrs: K,
    components: S,
    directives: q,
    filters: re,
  } = t
  if ((u && Ml(u, s, null), o))
    for (const z in o) {
      const $ = o[z]
      k($) && (s[z] = $.bind(n))
    }
  if (r) {
    const z = r.call(n, n)
    Z(z) && (e.data = Tn(z))
  }
  if (((fs = !0), i))
    for (const z in i) {
      const $ = i[z],
        Ne = k($) ? $.bind(n, n) : k($.get) ? $.get.bind(n, n) : xe,
        Gt = !k($) && k($.set) ? $.set.bind(n) : xe,
        et = se({ get: Ne, set: Gt })
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Oe) => (et.value = Oe),
      })
    }
  if (l) for (const z in l) Ci(l[z], s, n, z)
  if (c) {
    const z = k(c) ? c.call(n) : c
    Reflect.ownKeys(z).forEach(($) => {
      Dl($, z[$])
    })
  }
  d && rr(d, e, 'c')
  function H(z, $) {
    U($) ? $.forEach((Ne) => z(Ne.bind(n))) : $ && z($.bind(n))
  }
  if (
    (H(Cl, h),
    H(Tt, m),
    H(xl, w),
    H(Sl, L),
    H(vl, M),
    H(wl, D),
    H(Ol, O),
    H(Rl, I),
    H(Al, V),
    H(wi, J),
    H(Fn, y),
    H(Tl, T),
    U(A))
  )
    if (A.length) {
      const z = e.exposed || (e.exposed = {})
      A.forEach(($) => {
        Object.defineProperty(z, $, {
          get: () => n[$],
          set: (Ne) => (n[$] = Ne),
        })
      })
    } else e.exposed || (e.exposed = {})
  N && e.render === xe && (e.render = N),
    K != null && (e.inheritAttrs = K),
    S && (e.components = S),
    q && (e.directives = q)
}
function Ml(e, t, n = xe) {
  U(e) && (e = ds(e))
  for (const s in e) {
    const r = e[s]
    let i
    Z(r)
      ? 'default' in r
        ? (i = Et(r.from || s, r.default, !0))
        : (i = Et(r.from || s))
      : (i = Et(r)),
      de(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i)
  }
}
function rr(e, t, n) {
  Se(U(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ci(e, t, n, s) {
  const r = s.includes('.') ? gi(n, s) : () => n[s]
  if (ne(e)) {
    const i = t[e]
    k(i) && Xe(r, i)
  } else if (k(e)) Xe(r, e.bind(n))
  else if (Z(e))
    if (U(e)) e.forEach((i) => Ci(i, t, n, s))
    else {
      const i = k(e.handler) ? e.handler.bind(n) : t[e.handler]
      k(i) && Xe(r, i, e)
    }
}
function $s(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((u) => yn(c, u, o, !0)), yn(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function yn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && yn(e, i, n, !0), r && r.forEach((o) => yn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Nl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Nl = {
  data: ir,
  props: or,
  emits: or,
  methods: Lt,
  computed: Lt,
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  components: Lt,
  directives: Lt,
  watch: $l,
  provide: ir,
  inject: Fl,
}
function ir(e, t) {
  return t
    ? e
      ? function () {
          return oe(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Fl(e, t) {
  return Lt(ds(e), ds(t))
}
function ds(e) {
  if (U(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Lt(e, t) {
  return e ? oe(Object.create(null), e, t) : t
}
function or(e, t) {
  return e
    ? U(e) && U(t)
      ? [...new Set([...e, ...t])]
      : oe(Object.create(null), sr(e), sr(t ?? {}))
    : t
}
function $l(e, t) {
  if (!e) return t
  if (!t) return e
  const n = oe(Object.create(null), e)
  for (const s in t) n[s] = he(e[s], t[s])
  return n
}
function xi() {
  return {
    app: null,
    config: {
      isNativeTag: co,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Hl = 0
function jl(e, t) {
  return function (s, r = null) {
    k(s) || (s = oe({}, s)), r != null && !Z(r) && (r = null)
    const i = xi(),
      o = new WeakSet()
    let l = !1
    const c = (i.app = {
      _uid: Hl++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: uc,
      get config() {
        return i.config
      },
      set config(u) {},
      use(u, ...d) {
        return (
          o.has(u) ||
            (u && k(u.install)
              ? (o.add(u), u.install(c, ...d))
              : k(u) && (o.add(u), u(c, ...d))),
          c
        )
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c
      },
      component(u, d) {
        return d ? ((i.components[u] = d), c) : i.components[u]
      },
      directive(u, d) {
        return d ? ((i.directives[u] = d), c) : i.directives[u]
      },
      mount(u, d, h) {
        if (!l) {
          const m = ue(s, r)
          return (
            (m.appContext = i),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            d && t ? t(m, u) : e(m, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Dn(m.component) || m.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, d) {
        return (i.provides[u] = d), c
      },
      runWithContext(u) {
        const d = Nt
        Nt = c
        try {
          return u()
        } finally {
          Nt = d
        }
      },
    })
    return c
  }
}
let Nt = null
function Dl(e, t) {
  if (ae) {
    let n = ae.provides
    const s = ae.parent && ae.parent.provides
    s === n && (n = ae.provides = Object.create(s)), (n[e] = t)
  }
}
function Et(e, t, n = !1) {
  const s = ae || ie
  if (s || Nt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Nt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t
  }
}
function Vl(e, t, n, s = !1) {
  const r = {},
    i = {}
  dn(i, $n, 1), (e.propsDefaults = Object.create(null)), Si(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Wo(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function Ul(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = Y(r),
    [c] = e.propsOptions
  let u = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const d = e.vnode.dynamicProps
      for (let h = 0; h < d.length; h++) {
        let m = d[h]
        if (Ln(e.emitsOptions, m)) continue
        const w = t[m]
        if (c)
          if (X(i, m)) w !== i[m] && ((i[m] = w), (u = !0))
          else {
            const L = Me(m)
            r[L] = hs(c, l, L, w, e, !1)
          }
        else w !== i[m] && ((i[m] = w), (u = !0))
      }
    }
  } else {
    Si(e, t, r, i) && (u = !0)
    let d
    for (const h in l)
      (!t || (!X(t, h) && ((d = ut(h)) === h || !X(t, d)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (r[h] = hs(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !X(t, h)) && (delete i[h], (u = !0))
  }
  u && $e(e, 'set', '$attrs')
}
function Si(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (_t(c)) continue
      const u = t[c]
      let d
      r && X(r, (d = Me(c)))
        ? !i || !i.includes(d)
          ? (n[d] = u)
          : ((l || (l = {}))[d] = u)
        : Ln(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = Y(n),
      u = l || ee
    for (let d = 0; d < i.length; d++) {
      const h = i[d]
      n[h] = hs(r, c, h, u[h], e, !X(u, h))
    }
  }
  return o
}
function hs(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = X(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const d = qt(r)
          ;(s = u[n] = c.call(null, t)), d()
        }
      } else s = c
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === ut(n)) && (s = !0))
  }
  return s
}
function Ti(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!k(e)) {
    const d = (h) => {
      c = !0
      const [m, w] = Ti(h, t, !0)
      oe(o, m), w && l.push(...w)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!i && !c) return Z(e) && s.set(e, mt), mt
  if (U(i))
    for (let d = 0; d < i.length; d++) {
      const h = Me(i[d])
      lr(h) && (o[h] = ee)
    }
  else if (i)
    for (const d in i) {
      const h = Me(d)
      if (lr(h)) {
        const m = i[d],
          w = (o[h] = U(m) || k(m) ? { type: m } : oe({}, m))
        if (w) {
          const L = ur(Boolean, w.type),
            M = ur(String, w.type)
          ;(w[0] = L > -1),
            (w[1] = M < 0 || L < M),
            (L > -1 || X(w, 'default')) && l.push(h)
        }
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function lr(e) {
  return e[0] !== '$' && !_t(e)
}
function cr(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function ar(e, t) {
  return cr(e) === cr(t)
}
function ur(e, t) {
  return U(t) ? t.findIndex((n) => ar(n, e)) : k(t) && ar(t, e) ? 0 : -1
}
const Ai = (e) => e[0] === '_' || e === '$stable',
  Hs = (e) => (U(e) ? e.map(Ae) : [Ae(e)]),
  Bl = (e, t, n) => {
    if (t._n) return t
    const s = ll((...r) => Hs(t(...r)), n)
    return (s._c = !1), s
  },
  Ri = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ai(r)) continue
      const i = e[r]
      if (k(i)) t[r] = Bl(r, i, s)
      else if (i != null) {
        const o = Hs(i)
        t[r] = () => o
      }
    }
  },
  Oi = (e, t) => {
    const n = Hs(t)
    e.slots.default = () => n
  },
  kl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Y(t)), dn(t, '_', n)) : Ri(t, (e.slots = {}))
    } else (e.slots = {}), t && Oi(e, t)
    dn(e.slots, $n, 1)
  },
  Kl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : (oe(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Ri(t, r)),
        (o = t)
    } else t && (Oi(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Ai(l) && o[l] == null && delete r[l]
  }
function _n(e, t, n, s, r = !1) {
  if (U(e)) {
    e.forEach((m, w) => _n(m, t && (U(t) ? t[w] : t), n, s, r))
    return
  }
  if (wt(s) && !r) return
  const i = s.shapeFlag & 4 ? Dn(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    d = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (u != null &&
      u !== c &&
      (ne(u)
        ? ((d[u] = null), X(h, u) && (h[u] = null))
        : de(u) && (u.value = null)),
    k(c))
  )
    ze(c, l, 12, [o, d])
  else {
    const m = ne(c),
      w = de(c)
    if (m || w) {
      const L = () => {
        if (e.f) {
          const M = m ? (X(h, c) ? h[c] : d[c]) : c.value
          r
            ? U(M) && vs(M, i)
            : U(M)
            ? M.includes(i) || M.push(i)
            : m
            ? ((d[c] = [i]), X(h, c) && (h[c] = d[c]))
            : ((c.value = [i]), e.k && (d[e.k] = c.value))
        } else
          m
            ? ((d[c] = o), X(h, c) && (h[c] = o))
            : w && ((c.value = o), e.k && (d[e.k] = o))
      }
      o ? ((L.id = -1), pe(L, n)) : L()
    }
  }
}
let Ve = !1
const Wl = (e) =>
    e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  ql = (e) => e.namespaceURI.includes('MathML'),
  nn = (e) => {
    if (Wl(e)) return 'svg'
    if (ql(e)) return 'mathml'
  },
  sn = (e) => e.nodeType === 8
function Gl(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: i,
        parentNode: o,
        remove: l,
        insert: c,
        createComment: u,
      },
    } = e,
    d = (p, y) => {
      if (!y.hasChildNodes()) {
        n(null, p, y), gn(), (y._vnode = p)
        return
      }
      ;(Ve = !1),
        h(y.firstChild, p, null, null, null),
        gn(),
        (y._vnode = p),
        Ve && console.error('Hydration completed but contains mismatches.')
    },
    h = (p, y, N, I, V, O = !1) => {
      const T = sn(p) && p.data === '[',
        A = () => M(p, y, N, I, V, T),
        { type: K, ref: S, shapeFlag: q, patchFlag: re } = y
      let ce = p.nodeType
      ;(y.el = p), re === -2 && ((O = !1), (y.dynamicChildren = null))
      let H = null
      switch (K) {
        case xt:
          ce !== 3
            ? y.children === ''
              ? (c((y.el = r('')), o(p), p), (H = p))
              : (H = A())
            : (p.data !== y.children && ((Ve = !0), (p.data = y.children)),
              (H = i(p)))
          break
        case ve:
          J(p)
            ? ((H = i(p)), W((y.el = p.content.firstChild), p, N))
            : ce !== 8 || T
            ? (H = A())
            : (H = i(p))
          break
        case Ft:
          if ((T && ((p = i(p)), (ce = p.nodeType)), ce === 1 || ce === 3)) {
            H = p
            const z = !y.children.length
            for (let $ = 0; $ < y.staticCount; $++)
              z && (y.children += H.nodeType === 1 ? H.outerHTML : H.data),
                $ === y.staticCount - 1 && (y.anchor = H),
                (H = i(H))
            return T ? i(H) : H
          } else A()
          break
        case ge:
          T ? (H = L(p, y, N, I, V, O)) : (H = A())
          break
        default:
          if (q & 1)
            (ce !== 1 || y.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !J(p)
              ? (H = A())
              : (H = m(p, y, N, I, V, O))
          else if (q & 6) {
            y.slotScopeIds = V
            const z = o(p)
            if (
              (T
                ? (H = D(p))
                : sn(p) && p.data === 'teleport start'
                ? (H = D(p, p.data, 'teleport end'))
                : (H = i(p)),
              t(y, z, null, N, I, nn(z), O),
              wt(y))
            ) {
              let $
              T
                ? (($ = ue(ge)),
                  ($.anchor = H ? H.previousSibling : z.lastChild))
                : ($ = p.nodeType === 3 ? Di('') : ue('div')),
                ($.el = p),
                (y.component.subTree = $)
            }
          } else
            q & 64
              ? ce !== 8
                ? (H = A())
                : (H = y.type.hydrate(p, y, N, I, V, O, e, w))
              : q & 128 &&
                (H = y.type.hydrate(p, y, N, I, nn(o(p)), V, O, e, h))
      }
      return S != null && _n(S, null, I, y), H
    },
    m = (p, y, N, I, V, O) => {
      O = O || !!y.dynamicChildren
      const {
          type: T,
          props: A,
          patchFlag: K,
          shapeFlag: S,
          dirs: q,
          transition: re,
        } = y,
        ce = T === 'input' || T === 'option'
      if (ce || K !== -1) {
        q && Ie(y, null, N, 'created')
        let H = !1
        if (J(p)) {
          H = Ii(I, re) && N && N.vnode.props && N.vnode.props.appear
          const $ = p.content.firstChild
          H && re.beforeEnter($), W($, p, N), (y.el = p = $)
        }
        if (S & 16 && !(A && (A.innerHTML || A.textContent))) {
          let $ = w(p.firstChild, y, p, N, I, V, O)
          for (; $; ) {
            Ve = !0
            const Ne = $
            ;($ = $.nextSibling), l(Ne)
          }
        } else
          S & 8 &&
            p.textContent !== y.children &&
            ((Ve = !0), (p.textContent = y.children))
        if (A)
          if (ce || !O || K & 48)
            for (const $ in A)
              ((ce && ($.endsWith('value') || $ === 'indeterminate')) ||
                (Wt($) && !_t($)) ||
                $[0] === '.') &&
                s(p, $, null, A[$], void 0, void 0, N)
          else A.onClick && s(p, 'onClick', null, A.onClick, void 0, void 0, N)
        let z
        ;(z = A && A.onVnodeBeforeMount) && Ee(z, N, y),
          q && Ie(y, null, N, 'beforeMount'),
          ((z = A && A.onVnodeMounted) || q || H) &&
            hi(() => {
              z && Ee(z, N, y), H && re.enter(p), q && Ie(y, null, N, 'mounted')
            }, I)
      }
      return p.nextSibling
    },
    w = (p, y, N, I, V, O, T) => {
      T = T || !!y.dynamicChildren
      const A = y.children,
        K = A.length
      for (let S = 0; S < K; S++) {
        const q = T ? A[S] : (A[S] = Ae(A[S]))
        if (p) p = h(p, q, I, V, O, T)
        else {
          if (q.type === xt && !q.children) continue
          ;(Ve = !0), n(null, q, N, null, I, V, nn(N), O)
        }
      }
      return p
    },
    L = (p, y, N, I, V, O) => {
      const { slotScopeIds: T } = y
      T && (V = V ? V.concat(T) : T)
      const A = o(p),
        K = w(i(p), y, A, N, I, V, O)
      return K && sn(K) && K.data === ']'
        ? i((y.anchor = K))
        : ((Ve = !0), c((y.anchor = u(']')), A, K), K)
    },
    M = (p, y, N, I, V, O) => {
      if (((Ve = !0), (y.el = null), O)) {
        const K = D(p)
        for (;;) {
          const S = i(p)
          if (S && S !== K) l(S)
          else break
        }
      }
      const T = i(p),
        A = o(p)
      return l(p), n(null, y, A, T, N, I, nn(A), V), T
    },
    D = (p, y = '[', N = ']') => {
      let I = 0
      for (; p; )
        if (((p = i(p)), p && sn(p) && (p.data === y && I++, p.data === N))) {
          if (I === 0) return i(p)
          I--
        }
      return p
    },
    W = (p, y, N) => {
      const I = y.parentNode
      I && I.replaceChild(p, y)
      let V = N
      for (; V; )
        V.vnode.el === y && (V.vnode.el = V.subTree.el = p), (V = V.parent)
    },
    J = (p) => p.nodeType === 1 && p.tagName.toLowerCase() === 'template'
  return [d, h]
}
const pe = hi
function zl(e) {
  return Li(e)
}
function Xl(e) {
  return Li(e, Gl)
}
function Li(e, t) {
  const n = Ur()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: u,
      setElementText: d,
      parentNode: h,
      nextSibling: m,
      setScopeId: w = xe,
      insertStaticContent: L,
    } = e,
    M = (
      a,
      f,
      g,
      _ = null,
      b = null,
      C = null,
      R = void 0,
      E = null,
      x = !!f.dynamicChildren,
    ) => {
      if (a === f) return
      a && !it(a, f) && ((_ = zt(a)), Oe(a, b, C, !0), (a = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null))
      const { type: v, ref: P, shapeFlag: j } = f
      switch (v) {
        case xt:
          D(a, f, g, _)
          break
        case ve:
          W(a, f, g, _)
          break
        case Ft:
          a == null && J(f, g, _, R)
          break
        case ge:
          S(a, f, g, _, b, C, R, E, x)
          break
        default:
          j & 1
            ? N(a, f, g, _, b, C, R, E, x)
            : j & 6
            ? q(a, f, g, _, b, C, R, E, x)
            : (j & 64 || j & 128) && v.process(a, f, g, _, b, C, R, E, x, ht)
      }
      P != null && b && _n(P, a && a.ref, C, f || a, !f)
    },
    D = (a, f, g, _) => {
      if (a == null) s((f.el = l(f.children)), g, _)
      else {
        const b = (f.el = a.el)
        f.children !== a.children && u(b, f.children)
      }
    },
    W = (a, f, g, _) => {
      a == null ? s((f.el = c(f.children || '')), g, _) : (f.el = a.el)
    },
    J = (a, f, g, _) => {
      ;[a.el, a.anchor] = L(a.children, f, g, _, a.el, a.anchor)
    },
    p = ({ el: a, anchor: f }, g, _) => {
      let b
      for (; a && a !== f; ) (b = m(a)), s(a, g, _), (a = b)
      s(f, g, _)
    },
    y = ({ el: a, anchor: f }) => {
      let g
      for (; a && a !== f; ) (g = m(a)), r(a), (a = g)
      r(f)
    },
    N = (a, f, g, _, b, C, R, E, x) => {
      f.type === 'svg' ? (R = 'svg') : f.type === 'math' && (R = 'mathml'),
        a == null ? I(f, g, _, b, C, R, E, x) : T(a, f, b, C, R, E, x)
    },
    I = (a, f, g, _, b, C, R, E) => {
      let x, v
      const { props: P, shapeFlag: j, transition: F, dirs: B } = a
      if (
        ((x = a.el = o(a.type, C, P && P.is, P)),
        j & 8
          ? d(x, a.children)
          : j & 16 && O(a.children, x, null, _, b, zn(a, C), R, E),
        B && Ie(a, null, _, 'created'),
        V(x, a, a.scopeId, R, _),
        P)
      ) {
        for (const Q in P)
          Q !== 'value' &&
            !_t(Q) &&
            i(x, Q, null, P[Q], C, a.children, _, b, Fe)
        'value' in P && i(x, 'value', null, P.value, C),
          (v = P.onVnodeBeforeMount) && Ee(v, _, a)
      }
      B && Ie(a, null, _, 'beforeMount')
      const G = Ii(b, F)
      G && F.beforeEnter(x),
        s(x, f, g),
        ((v = P && P.onVnodeMounted) || G || B) &&
          pe(() => {
            v && Ee(v, _, a), G && F.enter(x), B && Ie(a, null, _, 'mounted')
          }, b)
    },
    V = (a, f, g, _, b) => {
      if ((g && w(a, g), _)) for (let C = 0; C < _.length; C++) w(a, _[C])
      if (b) {
        let C = b.subTree
        if (f === C) {
          const R = b.vnode
          V(a, R, R.scopeId, R.slotScopeIds, b.parent)
        }
      }
    },
    O = (a, f, g, _, b, C, R, E, x = 0) => {
      for (let v = x; v < a.length; v++) {
        const P = (a[v] = E ? We(a[v]) : Ae(a[v]))
        M(null, P, f, g, _, b, C, R, E)
      }
    },
    T = (a, f, g, _, b, C, R) => {
      const E = (f.el = a.el)
      let { patchFlag: x, dynamicChildren: v, dirs: P } = f
      x |= a.patchFlag & 16
      const j = a.props || ee,
        F = f.props || ee
      let B
      if (
        (g && tt(g, !1),
        (B = F.onVnodeBeforeUpdate) && Ee(B, g, f, a),
        P && Ie(f, a, g, 'beforeUpdate'),
        g && tt(g, !0),
        v
          ? A(a.dynamicChildren, v, E, g, _, zn(f, b), C)
          : R || $(a, f, E, null, g, _, zn(f, b), C, !1),
        x > 0)
      ) {
        if (x & 16) K(E, f, j, F, g, _, b)
        else if (
          (x & 2 && j.class !== F.class && i(E, 'class', null, F.class, b),
          x & 4 && i(E, 'style', j.style, F.style, b),
          x & 8)
        ) {
          const G = f.dynamicProps
          for (let Q = 0; Q < G.length; Q++) {
            const te = G[Q],
              le = j[te],
              Te = F[te]
            ;(Te !== le || te === 'value') &&
              i(E, te, le, Te, b, a.children, g, _, Fe)
          }
        }
        x & 1 && a.children !== f.children && d(E, f.children)
      } else !R && v == null && K(E, f, j, F, g, _, b)
      ;((B = F.onVnodeUpdated) || P) &&
        pe(() => {
          B && Ee(B, g, f, a), P && Ie(f, a, g, 'updated')
        }, _)
    },
    A = (a, f, g, _, b, C, R) => {
      for (let E = 0; E < f.length; E++) {
        const x = a[E],
          v = f[E],
          P =
            x.el && (x.type === ge || !it(x, v) || x.shapeFlag & 70)
              ? h(x.el)
              : g
        M(x, v, P, null, _, b, C, R, !0)
      }
    },
    K = (a, f, g, _, b, C, R) => {
      if (g !== _) {
        if (g !== ee)
          for (const E in g)
            !_t(E) && !(E in _) && i(a, E, g[E], null, R, f.children, b, C, Fe)
        for (const E in _) {
          if (_t(E)) continue
          const x = _[E],
            v = g[E]
          x !== v && E !== 'value' && i(a, E, v, x, R, f.children, b, C, Fe)
        }
        'value' in _ && i(a, 'value', g.value, _.value, R)
      }
    },
    S = (a, f, g, _, b, C, R, E, x) => {
      const v = (f.el = a ? a.el : l('')),
        P = (f.anchor = a ? a.anchor : l(''))
      let { patchFlag: j, dynamicChildren: F, slotScopeIds: B } = f
      B && (E = E ? E.concat(B) : B),
        a == null
          ? (s(v, g, _), s(P, g, _), O(f.children || [], g, P, b, C, R, E, x))
          : j > 0 && j & 64 && F && a.dynamicChildren
          ? (A(a.dynamicChildren, F, g, b, C, R, E),
            (f.key != null || (b && f === b.subTree)) && Pi(a, f, !0))
          : $(a, f, g, P, b, C, R, E, x)
    },
    q = (a, f, g, _, b, C, R, E, x) => {
      ;(f.slotScopeIds = E),
        a == null
          ? f.shapeFlag & 512
            ? b.ctx.activate(f, g, _, R, x)
            : re(f, g, _, b, C, R, x)
          : ce(a, f, x)
    },
    re = (a, f, g, _, b, C, R) => {
      const E = (a.component = rc(a, _, b))
      if ((Mn(a) && (E.ctx.renderer = ht), ic(E), E.asyncDep)) {
        if ((b && b.registerDep(E, H), !a.el)) {
          const x = (E.subTree = ue(ve))
          W(null, x, f, g)
        }
      } else H(E, a, f, g, b, C, R)
    },
    ce = (a, f, g) => {
      const _ = (f.component = a.component)
      if (ul(a, f, g))
        if (_.asyncDep && !_.asyncResolved) {
          z(_, f, g)
          return
        } else (_.next = f), sl(_.update), (_.effect.dirty = !0), _.update()
      else (f.el = a.el), (_.vnode = f)
    },
    H = (a, f, g, _, b, C, R) => {
      const E = () => {
          if (a.isMounted) {
            let { next: P, bu: j, u: F, parent: B, vnode: G } = a
            {
              const pt = Mi(a)
              if (pt) {
                P && ((P.el = G.el), z(a, P, R)),
                  pt.asyncDep.then(() => {
                    a.isUnmounted || E()
                  })
                return
              }
            }
            let Q = P,
              te
            tt(a, !1),
              P ? ((P.el = G.el), z(a, P, R)) : (P = G),
              j && kn(j),
              (te = P.props && P.props.onVnodeBeforeUpdate) && Ee(te, B, P, G),
              tt(a, !0)
            const le = Wn(a),
              Te = a.subTree
            ;(a.subTree = le),
              M(Te, le, h(Te.el), zt(Te), a, b, C),
              (P.el = le.el),
              Q === null && fl(a, le.el),
              F && pe(F, b),
              (te = P.props && P.props.onVnodeUpdated) &&
                pe(() => Ee(te, B, P, G), b)
          } else {
            let P
            const { el: j, props: F } = f,
              { bm: B, m: G, parent: Q } = a,
              te = wt(f)
            if (
              (tt(a, !1),
              B && kn(B),
              !te && (P = F && F.onVnodeBeforeMount) && Ee(P, Q, f),
              tt(a, !0),
              j && Bn)
            ) {
              const le = () => {
                ;(a.subTree = Wn(a)), Bn(j, a.subTree, a, b, null)
              }
              te
                ? f.type.__asyncLoader().then(() => !a.isUnmounted && le())
                : le()
            } else {
              const le = (a.subTree = Wn(a))
              M(null, le, g, _, a, b, C), (f.el = le.el)
            }
            if ((G && pe(G, b), !te && (P = F && F.onVnodeMounted))) {
              const le = f
              pe(() => Ee(P, Q, le), b)
            }
            ;(f.shapeFlag & 256 ||
              (Q && wt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              a.a &&
              pe(a.a, b),
              (a.isMounted = !0),
              (f = g = _ = null)
          }
        },
        x = (a.effect = new xs(E, xe, () => Ms(v), a.scope)),
        v = (a.update = () => {
          x.dirty && x.run()
        })
      ;(v.id = a.uid), tt(a, !0), v()
    },
    z = (a, f, g) => {
      f.component = a
      const _ = a.vnode.props
      ;(a.vnode = f),
        (a.next = null),
        Ul(a, f.props, _, g),
        Kl(a, f.children, g),
        ft(),
        Zs(a),
        dt()
    },
    $ = (a, f, g, _, b, C, R, E, x = !1) => {
      const v = a && a.children,
        P = a ? a.shapeFlag : 0,
        j = f.children,
        { patchFlag: F, shapeFlag: B } = f
      if (F > 0) {
        if (F & 128) {
          Gt(v, j, g, _, b, C, R, E, x)
          return
        } else if (F & 256) {
          Ne(v, j, g, _, b, C, R, E, x)
          return
        }
      }
      B & 8
        ? (P & 16 && Fe(v, b, C), j !== v && d(g, j))
        : P & 16
        ? B & 16
          ? Gt(v, j, g, _, b, C, R, E, x)
          : Fe(v, b, C, !0)
        : (P & 8 && d(g, ''), B & 16 && O(j, g, _, b, C, R, E, x))
    },
    Ne = (a, f, g, _, b, C, R, E, x) => {
      ;(a = a || mt), (f = f || mt)
      const v = a.length,
        P = f.length,
        j = Math.min(v, P)
      let F
      for (F = 0; F < j; F++) {
        const B = (f[F] = x ? We(f[F]) : Ae(f[F]))
        M(a[F], B, g, null, b, C, R, E, x)
      }
      v > P ? Fe(a, b, C, !0, !1, j) : O(f, g, _, b, C, R, E, x, j)
    },
    Gt = (a, f, g, _, b, C, R, E, x) => {
      let v = 0
      const P = f.length
      let j = a.length - 1,
        F = P - 1
      for (; v <= j && v <= F; ) {
        const B = a[v],
          G = (f[v] = x ? We(f[v]) : Ae(f[v]))
        if (it(B, G)) M(B, G, g, null, b, C, R, E, x)
        else break
        v++
      }
      for (; v <= j && v <= F; ) {
        const B = a[j],
          G = (f[F] = x ? We(f[F]) : Ae(f[F]))
        if (it(B, G)) M(B, G, g, null, b, C, R, E, x)
        else break
        j--, F--
      }
      if (v > j) {
        if (v <= F) {
          const B = F + 1,
            G = B < P ? f[B].el : _
          for (; v <= F; )
            M(null, (f[v] = x ? We(f[v]) : Ae(f[v])), g, G, b, C, R, E, x), v++
        }
      } else if (v > F) for (; v <= j; ) Oe(a[v], b, C, !0), v++
      else {
        const B = v,
          G = v,
          Q = new Map()
        for (v = G; v <= F; v++) {
          const _e = (f[v] = x ? We(f[v]) : Ae(f[v]))
          _e.key != null && Q.set(_e.key, v)
        }
        let te,
          le = 0
        const Te = F - G + 1
        let pt = !1,
          Bs = 0
        const At = new Array(Te)
        for (v = 0; v < Te; v++) At[v] = 0
        for (v = B; v <= j; v++) {
          const _e = a[v]
          if (le >= Te) {
            Oe(_e, b, C, !0)
            continue
          }
          let Le
          if (_e.key != null) Le = Q.get(_e.key)
          else
            for (te = G; te <= F; te++)
              if (At[te - G] === 0 && it(_e, f[te])) {
                Le = te
                break
              }
          Le === void 0
            ? Oe(_e, b, C, !0)
            : ((At[Le - G] = v + 1),
              Le >= Bs ? (Bs = Le) : (pt = !0),
              M(_e, f[Le], g, null, b, C, R, E, x),
              le++)
        }
        const ks = pt ? Yl(At) : mt
        for (te = ks.length - 1, v = Te - 1; v >= 0; v--) {
          const _e = G + v,
            Le = f[_e],
            Ks = _e + 1 < P ? f[_e + 1].el : _
          At[v] === 0
            ? M(null, Le, g, Ks, b, C, R, E, x)
            : pt && (te < 0 || v !== ks[te] ? et(Le, g, Ks, 2) : te--)
        }
      }
    },
    et = (a, f, g, _, b = null) => {
      const { el: C, type: R, transition: E, children: x, shapeFlag: v } = a
      if (v & 6) {
        et(a.component.subTree, f, g, _)
        return
      }
      if (v & 128) {
        a.suspense.move(f, g, _)
        return
      }
      if (v & 64) {
        R.move(a, f, g, ht)
        return
      }
      if (R === ge) {
        s(C, f, g)
        for (let j = 0; j < x.length; j++) et(x[j], f, g, _)
        s(a.anchor, f, g)
        return
      }
      if (R === Ft) {
        p(a, f, g)
        return
      }
      if (_ !== 2 && v & 1 && E)
        if (_ === 0) E.beforeEnter(C), s(C, f, g), pe(() => E.enter(C), b)
        else {
          const { leave: j, delayLeave: F, afterLeave: B } = E,
            G = () => s(C, f, g),
            Q = () => {
              j(C, () => {
                G(), B && B()
              })
            }
          F ? F(C, G, Q) : Q()
        }
      else s(C, f, g)
    },
    Oe = (a, f, g, _ = !1, b = !1) => {
      const {
        type: C,
        props: R,
        ref: E,
        children: x,
        dynamicChildren: v,
        shapeFlag: P,
        patchFlag: j,
        dirs: F,
      } = a
      if ((E != null && _n(E, null, g, a, !0), P & 256)) {
        f.ctx.deactivate(a)
        return
      }
      const B = P & 1 && F,
        G = !wt(a)
      let Q
      if ((G && (Q = R && R.onVnodeBeforeUnmount) && Ee(Q, f, a), P & 6))
        lo(a.component, g, _)
      else {
        if (P & 128) {
          a.suspense.unmount(g, _)
          return
        }
        B && Ie(a, null, f, 'beforeUnmount'),
          P & 64
            ? a.type.remove(a, f, g, b, ht, _)
            : v && (C !== ge || (j > 0 && j & 64))
            ? Fe(v, f, g, !1, !0)
            : ((C === ge && j & 384) || (!b && P & 16)) && Fe(x, f, g),
          _ && Vs(a)
      }
      ;((G && (Q = R && R.onVnodeUnmounted)) || B) &&
        pe(() => {
          Q && Ee(Q, f, a), B && Ie(a, null, f, 'unmounted')
        }, g)
    },
    Vs = (a) => {
      const { type: f, el: g, anchor: _, transition: b } = a
      if (f === ge) {
        oo(g, _)
        return
      }
      if (f === Ft) {
        y(a)
        return
      }
      const C = () => {
        r(g), b && !b.persisted && b.afterLeave && b.afterLeave()
      }
      if (a.shapeFlag & 1 && b && !b.persisted) {
        const { leave: R, delayLeave: E } = b,
          x = () => R(g, C)
        E ? E(a.el, C, x) : x()
      } else C()
    },
    oo = (a, f) => {
      let g
      for (; a !== f; ) (g = m(a)), r(a), (a = g)
      r(f)
    },
    lo = (a, f, g) => {
      const { bum: _, scope: b, update: C, subTree: R, um: E } = a
      _ && kn(_),
        b.stop(),
        C && ((C.active = !1), Oe(R, a, f, g)),
        E && pe(E, f),
        pe(() => {
          a.isUnmounted = !0
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve())
    },
    Fe = (a, f, g, _ = !1, b = !1, C = 0) => {
      for (let R = C; R < a.length; R++) Oe(a[R], f, g, _, b)
    },
    zt = (a) =>
      a.shapeFlag & 6
        ? zt(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : m(a.anchor || a.el)
  let Vn = !1
  const Us = (a, f, g) => {
      a == null
        ? f._vnode && Oe(f._vnode, null, null, !0)
        : M(f._vnode || null, a, f, null, null, null, g),
        Vn || ((Vn = !0), Zs(), gn(), (Vn = !1)),
        (f._vnode = a)
    },
    ht = {
      p: M,
      um: Oe,
      m: et,
      r: Vs,
      mt: re,
      mc: O,
      pc: $,
      pbc: A,
      n: zt,
      o: e,
    }
  let Un, Bn
  return (
    t && ([Un, Bn] = t(ht)), { render: Us, hydrate: Un, createApp: jl(Us, Un) }
  )
}
function zn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Ii(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Pi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (U(s) && U(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = We(r[i])), (l.el = o.el)),
        n || Pi(o, l)),
        l.type === xt && (l.el = o.el)
    }
}
function Yl(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const u = e[s]
    if (u !== 0) {
      if (((r = n[n.length - 1]), e[r] < u)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), e[n[l]] < u ? (i = l + 1) : (o = l)
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = t[o])
  return n
}
function Mi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Mi(t)
}
const Jl = (e) => e.__isTeleport,
  ge = Symbol.for('v-fgt'),
  xt = Symbol.for('v-txt'),
  ve = Symbol.for('v-cmt'),
  Ft = Symbol.for('v-stc'),
  $t = []
let Re = null
function Ni(e = !1) {
  $t.push((Re = e ? null : []))
}
function Ql() {
  $t.pop(), (Re = $t[$t.length - 1] || null)
}
let Bt = 1
function fr(e) {
  Bt += e
}
function Fi(e) {
  return (
    (e.dynamicChildren = Bt > 0 ? Re || mt : null),
    Ql(),
    Bt > 0 && Re && Re.push(e),
    e
  )
}
function Ja(e, t, n, s, r, i) {
  return Fi(ji(e, t, n, s, r, i, !0))
}
function $i(e, t, n, s, r) {
  return Fi(ue(e, t, n, s, r, !0))
}
function bn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function it(e, t) {
  return e.type === t.type && e.key === t.key
}
const $n = '__vInternal',
  Hi = ({ key: e }) => e ?? null,
  un = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ne(e) || de(e) || k(e)
        ? { i: ie, r: e, k: t, f: !!n }
        : e
      : null
  )
function ji(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  i = e === ge ? 0 : 1,
  o = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hi(t),
    ref: t && un(t),
    scopeId: In,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ie,
  }
  return (
    l
      ? (js(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ne(n) ? 8 : 16),
    Bt > 0 &&
      !o &&
      Re &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Re.push(c),
    c
  )
}
const ue = Zl
function Zl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === di) && (e = ve), bn(e))) {
    const l = Ze(e, t, !0)
    return (
      n && js(l, n),
      Bt > 0 &&
        !i &&
        Re &&
        (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((ac(e) && (e = e.__vccOpts), t)) {
    t = ec(t)
    let { class: l, style: c } = t
    l && !ne(l) && (t.class = Cs(l)),
      Z(c) && (ni(c) && !U(c) && (c = oe({}, c)), (t.style = Es(c)))
  }
  const o = ne(e) ? 1 : hl(e) ? 128 : Jl(e) ? 64 : Z(e) ? 4 : k(e) ? 2 : 0
  return ji(e, t, n, s, r, o, i, !0)
}
function ec(e) {
  return e ? (ni(e) || $n in e ? oe({}, e) : e) : null
}
function Ze(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? tc(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Hi(l),
    ref:
      t && t.ref ? (n && r ? (U(r) ? r.concat(un(t)) : [r, un(t)]) : un(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ge ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Di(e = ' ', t = 0) {
  return ue(xt, null, e, t)
}
function Qa(e, t) {
  const n = ue(Ft, null, e)
  return (n.staticCount = t), n
}
function Za(e = '', t = !1) {
  return t ? (Ni(), $i(ve, null, e)) : ue(ve, null, e)
}
function Ae(e) {
  return e == null || typeof e == 'boolean'
    ? ue(ve)
    : U(e)
    ? ue(ge, null, e.slice())
    : typeof e == 'object'
    ? We(e)
    : ue(xt, null, String(e))
}
function We(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ze(e)
}
function js(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (U(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), js(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !($n in t)
        ? (t._ctx = ie)
        : r === 3 &&
          ie &&
          (ie.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    k(t)
      ? ((t = { default: t, _ctx: ie }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Di(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function tc(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = Cs([t.class, s.class]))
      else if (r === 'style') t.style = Es([t.style, s.style])
      else if (Wt(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(U(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ee(e, t, n, s = null) {
  Se(e, t, 7, [n, s])
}
const nc = xi()
let sc = 0
function rc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || nc,
    i = {
      uid: sc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Eo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ti(s, r),
      emitsOptions: fi(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = ol.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ae = null
const Hn = () => ae || ie
let vn, ps
{
  const e = Ur(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;(vn = t('__VUE_INSTANCE_SETTERS__', (n) => (ae = n))),
    (ps = t('__VUE_SSR_SETTERS__', (n) => (jn = n)))
}
const qt = (e) => {
    const t = ae
    return (
      vn(e),
      e.scope.on(),
      () => {
        e.scope.off(), vn(t)
      }
    )
  },
  dr = () => {
    ae && ae.scope.off(), vn(null)
  }
function Vi(e) {
  return e.vnode.shapeFlag & 4
}
let jn = !1
function ic(e, t = !1) {
  t && ps(t)
  const { props: n, children: s } = e.vnode,
    r = Vi(e)
  Vl(e, n, r, t), kl(e, s)
  const i = r ? oc(e, t) : void 0
  return t && ps(!1), i
}
function oc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = It(new Proxy(e.ctx, Ll)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Bi(e) : null),
      i = qt(e)
    ft()
    const o = ze(s, e, 0, [e.props, r])
    if ((dt(), i(), jr(o))) {
      if ((o.then(dr, dr), t))
        return o
          .then((l) => {
            hr(e, l, t)
          })
          .catch((l) => {
            Rn(l, e, 0)
          })
      e.asyncDep = o
    } else hr(e, o, t)
  } else Ui(e, t)
}
function hr(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = li(t)),
    Ui(e, n)
}
let pr
function Ui(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && pr && !s.render) {
      const r = s.template || $s(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = oe(oe({ isCustomElement: i, delimiters: l }, o), c)
        s.render = pr(r, u)
      }
    }
    e.render = s.render || xe
  }
  {
    const r = qt(e)
    ft()
    try {
      Pl(e)
    } finally {
      dt(), r()
    }
  }
}
function lc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ye(e, 'get', '$attrs'), t[n]
      },
    }))
  )
}
function Bi(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return lc(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Dn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(li(It(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Mt) return Mt[n](e)
        },
        has(t, n) {
          return n in t || n in Mt
        },
      }))
    )
}
function cc(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ac(e) {
  return k(e) && '__vccOpts' in e
}
const se = (e, t) => qo(e, t, jn)
function gs(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !U(t)
      ? bn(t)
        ? ue(e, null, [t])
        : ue(e, t)
      : ue(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && bn(n) && (n = [n]),
      ue(e, t, n))
}
const uc = '3.4.18'
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const fc = 'http://www.w3.org/2000/svg',
  dc = 'http://www.w3.org/1998/Math/MathML',
  qe = typeof document < 'u' ? document : null,
  gr = qe && qe.createElement('template'),
  hc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? qe.createElementNS(fc, e)
          : t === 'mathml'
          ? qe.createElementNS(dc, e)
          : qe.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        gr.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
            ? `<math>${e}</math>`
            : e
        const l = gr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  Ue = 'transition',
  Rt = 'animation',
  kt = Symbol('_vtc'),
  ki = (e, { slots: t }) => gs(bl, pc(e), t)
ki.displayName = 'Transition'
const Ki = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
ki.props = oe({}, mi, Ki)
const nt = (e, t = []) => {
    U(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  mr = (e) => (e ? (U(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function pc(e) {
  const t = {}
  for (const S in e) S in Ki || (t[S] = e[S])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = i,
      appearActiveClass: u = o,
      appearToClass: d = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: m = `${n}-leave-active`,
      leaveToClass: w = `${n}-leave-to`,
    } = e,
    L = gc(r),
    M = L && L[0],
    D = L && L[1],
    {
      onBeforeEnter: W,
      onEnter: J,
      onEnterCancelled: p,
      onLeave: y,
      onLeaveCancelled: N,
      onBeforeAppear: I = W,
      onAppear: V = J,
      onAppearCancelled: O = p,
    } = t,
    T = (S, q, re) => {
      st(S, q ? d : l), st(S, q ? u : o), re && re()
    },
    A = (S, q) => {
      ;(S._isLeaving = !1), st(S, h), st(S, w), st(S, m), q && q()
    },
    K = (S) => (q, re) => {
      const ce = S ? V : J,
        H = () => T(q, S, re)
      nt(ce, [q, H]),
        yr(() => {
          st(q, S ? c : i), Be(q, S ? d : l), mr(ce) || _r(q, s, M, H)
        })
    }
  return oe(t, {
    onBeforeEnter(S) {
      nt(W, [S]), Be(S, i), Be(S, o)
    },
    onBeforeAppear(S) {
      nt(I, [S]), Be(S, c), Be(S, u)
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(S, q) {
      S._isLeaving = !0
      const re = () => A(S, q)
      Be(S, h),
        _c(),
        Be(S, m),
        yr(() => {
          S._isLeaving && (st(S, h), Be(S, w), mr(y) || _r(S, s, D, re))
        }),
        nt(y, [S, re])
    },
    onEnterCancelled(S) {
      T(S, !1), nt(p, [S])
    },
    onAppearCancelled(S) {
      T(S, !0), nt(O, [S])
    },
    onLeaveCancelled(S) {
      A(S), nt(N, [S])
    },
  })
}
function gc(e) {
  if (e == null) return null
  if (Z(e)) return [Xn(e.enter), Xn(e.leave)]
  {
    const t = Xn(e)
    return [t, t]
  }
}
function Xn(e) {
  return go(e)
}
function Be(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[kt] || (e[kt] = new Set())).add(t)
}
function st(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[kt]
  n && (n.delete(t), n.size || (e[kt] = void 0))
}
function yr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let mc = 0
function _r(e, t, n, s) {
  const r = (e._endId = ++mc),
    i = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = yc(e, t)
  if (!o) return s()
  const u = o + 'end'
  let d = 0
  const h = () => {
      e.removeEventListener(u, m), i()
    },
    m = (w) => {
      w.target === e && ++d >= c && h()
    }
  setTimeout(() => {
    d < c && h()
  }, l + 1),
    e.addEventListener(u, m)
}
function yc(e, t) {
  const n = window.getComputedStyle(e),
    s = (L) => (n[L] || '').split(', '),
    r = s(`${Ue}Delay`),
    i = s(`${Ue}Duration`),
    o = br(r, i),
    l = s(`${Rt}Delay`),
    c = s(`${Rt}Duration`),
    u = br(l, c)
  let d = null,
    h = 0,
    m = 0
  t === Ue
    ? o > 0 && ((d = Ue), (h = o), (m = i.length))
    : t === Rt
    ? u > 0 && ((d = Rt), (h = u), (m = c.length))
    : ((h = Math.max(o, u)),
      (d = h > 0 ? (o > u ? Ue : Rt) : null),
      (m = d ? (d === Ue ? i.length : c.length) : 0))
  const w =
    d === Ue && /\b(transform|all)(,|$)/.test(s(`${Ue}Property`).toString())
  return { type: d, timeout: h, propCount: m, hasTransform: w }
}
function br(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => vr(n) + vr(e[s])))
}
function vr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function _c() {
  return document.body.offsetHeight
}
function bc(e, t, n) {
  const s = e[kt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const Kt = Symbol('_vod'),
  eu = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Kt] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Ot(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      ;(!t == !n && e.style.display === e[Kt]) ||
        (s
          ? t
            ? (s.beforeEnter(e), Ot(e, !0), s.enter(e))
            : s.leave(e, () => {
                Ot(e, !1)
              })
          : Ot(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Ot(e, t)
    },
  }
function Ot(e, t) {
  e.style.display = t ? e[Kt] : 'none'
}
const vc = Symbol(''),
  wc = /(^|;)\s*display\s*:/
function Ec(e, t, n) {
  const s = e.style,
    r = ne(n),
    i = s.display
  let o = !1
  if (n && !r) {
    if (t && !ne(t)) for (const l in t) n[l] == null && ms(s, l, '')
    for (const l in n) l === 'display' && (o = !0), ms(s, l, n[l])
  } else if (r) {
    if (t !== n) {
      const l = s[vc]
      l && (n += ';' + l), (s.cssText = n), (o = wc.test(n))
    }
  } else t && e.removeAttribute('style')
  Kt in e && ((e[Kt] = o ? s.display : ''), (s.display = i))
}
const wr = /\s*!important$/
function ms(e, t, n) {
  if (U(n)) n.forEach((s) => ms(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Cc(e, t)
    wr.test(n)
      ? e.setProperty(ut(s), n.replace(wr, ''), 'important')
      : (e[s] = n)
  }
}
const Er = ['Webkit', 'Moz', 'ms'],
  Yn = {}
function Cc(e, t) {
  const n = Yn[t]
  if (n) return n
  let s = Me(t)
  if (s !== 'filter' && s in e) return (Yn[t] = s)
  s = xn(s)
  for (let r = 0; r < Er.length; r++) {
    const i = Er[r] + s
    if (i in e) return (Yn[t] = i)
  }
  return t
}
const Cr = 'http://www.w3.org/1999/xlink'
function xc(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Cr, t.slice(6, t.length))
      : e.setAttributeNS(Cr, t, n)
  else {
    const i = wo(t)
    n == null || (i && !Br(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function Sc(e, t, n, s, r, i, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && o(s, r, i), (e[t] = n ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = n
    const u = l === 'OPTION' ? e.getAttribute('value') : e.value,
      d = n ?? ''
    u !== d && (e.value = d), n == null && e.removeAttribute(t)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const u = typeof e[t]
    u === 'boolean'
      ? (n = Br(n))
      : n == null && u === 'string'
      ? ((n = ''), (c = !0))
      : u === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function Tc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Ac(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const xr = Symbol('_vei')
function Rc(e, t, n, s, r = null) {
  const i = e[xr] || (e[xr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Oc(t)
    if (s) {
      const u = (i[t] = Pc(s, r))
      Tc(e, l, u, c)
    } else o && (Ac(e, l, o, c), (i[t] = void 0))
  }
}
const Sr = /(?:Once|Passive|Capture)$/
function Oc(e) {
  let t
  if (Sr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Sr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : ut(e.slice(2)), t]
}
let Jn = 0
const Lc = Promise.resolve(),
  Ic = () => Jn || (Lc.then(() => (Jn = 0)), (Jn = Date.now()))
function Pc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Se(Mc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Ic()), n
}
function Mc(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const Tr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Nc = (e, t, n, s, r, i, o, l, c) => {
    const u = r === 'svg'
    t === 'class'
      ? bc(e, s, u)
      : t === 'style'
      ? Ec(e, n, s)
      : Wt(t)
      ? bs(t) || Rc(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Fc(e, t, s, u)
        )
      ? Sc(e, t, s, i, o, l, c)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        xc(e, t, s, u))
  }
function Fc(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Tr(t) && k(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return Tr(t) && ne(n) ? !1 : t in e
}
const $c = ['ctrl', 'shift', 'alt', 'meta'],
  Hc = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => $c.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  tu = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Hc[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  jc = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  nu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = ut(r.key)
        if (t.some((o) => o === i || jc[o] === i)) return e(r)
      })
    )
  },
  Wi = oe({ patchProp: Nc }, hc)
let Ht,
  Ar = !1
function Dc() {
  return Ht || (Ht = zl(Wi))
}
function Vc() {
  return (Ht = Ar ? Ht : Xl(Wi)), (Ar = !0), Ht
}
const su = (...e) => {
    Dc().render(...e)
  },
  ru = (...e) => {
    const t = Vc().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Bc(s)
        if (r) return n(r, !0, Uc(r))
      }),
      t
    )
  }
function Uc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Bc(e) {
  return ne(e) ? document.querySelector(e) : e
}
const iu = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  kc = 'modulepreload',
  Kc = function (e) {
    return '/potati-ui/' + e
  },
  Rr = {},
  ou = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link')
      r = Promise.all(
        n.map((o) => {
          if (((o = Kc(o)), o in Rr)) return
          Rr[o] = !0
          const l = o.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : ''
          if (!!s)
            for (let h = i.length - 1; h >= 0; h--) {
              const m = i[h]
              if (m.href === o && (!l || m.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${o}"]${c}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = l ? 'stylesheet' : kc),
            l || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = o),
            document.head.appendChild(d),
            l)
          )
            return new Promise((h, m) => {
              d.addEventListener('load', h),
                d.addEventListener('error', () =>
                  m(new Error(`Unable to preload CSS for ${o}`)),
                )
            })
        }),
      )
    }
    return r
      .then(() => t())
      .catch((i) => {
        const o = new Event('vite:preloadError', { cancelable: !0 })
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i
      })
  },
  Wc = window.__VP_SITE_DATA__
function Ds(e) {
  return Kr() ? (xo(e), !0) : !1
}
function Ye(e) {
  return typeof e == 'function' ? e() : oi(e)
}
const qi = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const qc = Object.prototype.toString,
  Gc = (e) => qc.call(e) === '[object Object]',
  jt = () => {},
  ys = zc()
function zc() {
  var e, t
  return (
    qi &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        )))
  )
}
function Xc(e, t) {
  function n(...s) {
    return new Promise((r, i) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(i)
    })
  }
  return n
}
const Gi = (e) => e()
function Yc(e = Gi) {
  const t = me(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...i) => {
    t.value && e(...i)
  }
  return { isActive: An(t), pause: n, resume: s, eventFilter: r }
}
function Jc(e) {
  return e || Hn()
}
function zi(...e) {
  if (e.length !== 1) return Zo(...e)
  const t = e[0]
  return typeof t == 'function' ? An(Yo(() => ({ get: t, set: jt }))) : me(t)
}
function Qc(e, t, n = {}) {
  const { eventFilter: s = Gi, ...r } = n
  return Xe(e, Xc(s, t), r)
}
function Zc(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = Yc(s)
  return {
    stop: Qc(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function Xi(e, t = !0, n) {
  Jc() ? Tt(e, n) : t ? e() : On(e)
}
function gt(e) {
  var t
  const n = Ye(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const He = qi ? window : void 0
function Je(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = He))
      : ([t, n, s, r] = e),
    !t)
  )
    return jt
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const i = [],
    o = () => {
      i.forEach((d) => d()), (i.length = 0)
    },
    l = (d, h, m, w) => (
      d.addEventListener(h, m, w), () => d.removeEventListener(h, m, w)
    ),
    c = Xe(
      () => [gt(t), Ye(r)],
      ([d, h]) => {
        if ((o(), !d)) return
        const m = Gc(h) ? { ...h } : h
        i.push(...n.flatMap((w) => s.map((L) => l(d, w, L, m))))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), o()
    }
  return Ds(u), u
}
let Or = !1
function lu(e, t, n = {}) {
  const {
    window: s = He,
    ignore: r = [],
    capture: i = !0,
    detectIframe: o = !1,
  } = n
  if (!s) return jt
  ys &&
    !Or &&
    ((Or = !0),
    Array.from(s.document.body.children).forEach((m) =>
      m.addEventListener('click', jt),
    ),
    s.document.documentElement.addEventListener('click', jt))
  let l = !0
  const c = (m) =>
      r.some((w) => {
        if (typeof w == 'string')
          return Array.from(s.document.querySelectorAll(w)).some(
            (L) => L === m.target || m.composedPath().includes(L),
          )
        {
          const L = gt(w)
          return L && (m.target === L || m.composedPath().includes(L))
        }
      }),
    d = [
      Je(
        s,
        'click',
        (m) => {
          const w = gt(e)
          if (!(!w || w === m.target || m.composedPath().includes(w))) {
            if ((m.detail === 0 && (l = !c(m)), !l)) {
              l = !0
              return
            }
            t(m)
          }
        },
        { passive: !0, capture: i },
      ),
      Je(
        s,
        'pointerdown',
        (m) => {
          const w = gt(e)
          l = !c(m) && !!(w && !m.composedPath().includes(w))
        },
        { passive: !0 },
      ),
      o &&
        Je(s, 'blur', (m) => {
          setTimeout(() => {
            var w
            const L = gt(e)
            ;((w = s.document.activeElement) == null ? void 0 : w.tagName) ===
              'IFRAME' &&
              !(L != null && L.contains(s.document.activeElement)) &&
              t(m)
          }, 0)
        }),
    ].filter(Boolean)
  return () => d.forEach((m) => m())
}
function ea(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0
}
function cu(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
    ? typeof e[1] == 'object'
      ? ((t = !0), (n = e[0]), (s = e[1]))
      : ((t = e[0]), (n = e[1]))
    : ((t = !0), (n = e[0]))
  const {
      target: r = He,
      eventName: i = 'keydown',
      passive: o = !1,
      dedupe: l = !1,
    } = s,
    c = ea(t)
  return Je(
    r,
    i,
    (d) => {
      ;(d.repeat && Ye(l)) || (c(d) && n(d))
    },
    o,
  )
}
function ta() {
  const e = me(!1),
    t = Hn()
  return (
    t &&
      Tt(() => {
        e.value = !0
      }, t),
    e
  )
}
function na(e) {
  const t = ta()
  return se(() => (t.value, !!e()))
}
function sa(e, t = {}) {
  const { window: n = He } = t,
    s = na(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const i = me(!1),
    o = (u) => {
      i.value = u.matches
    },
    l = () => {
      r &&
        ('removeEventListener' in r
          ? r.removeEventListener('change', o)
          : r.removeListener(o))
    },
    c = pi(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(Ye(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    Ds(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const rn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  on = '__vueuse_ssr_handlers__',
  ra = ia()
function ia() {
  return on in rn || (rn[on] = rn[on] || {}), rn[on]
}
function Yi(e, t) {
  return ra[e] || t
}
function oa(e) {
  return e == null
    ? 'any'
    : e instanceof Set
    ? 'set'
    : e instanceof Map
    ? 'map'
    : e instanceof Date
    ? 'date'
    : typeof e == 'boolean'
    ? 'boolean'
    : typeof e == 'string'
    ? 'string'
    : typeof e == 'object'
    ? 'object'
    : Number.isNaN(e)
    ? 'any'
    : 'number'
}
const la = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  Lr = 'vueuse-storage'
function ca(e, t, n, s = {}) {
  var r
  const {
      flush: i = 'pre',
      deep: o = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: u = !1,
      shallow: d,
      window: h = He,
      eventFilter: m,
      onError: w = (T) => {
        console.error(T)
      },
      initOnMounted: L,
    } = s,
    M = (d ? ri : me)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = Yi('getDefaultStorage', () => {
        var T
        return (T = He) == null ? void 0 : T.localStorage
      })()
    } catch (T) {
      w(T)
    }
  if (!n) return M
  const D = Ye(t),
    W = oa(D),
    J = (r = s.serializer) != null ? r : la[W],
    { pause: p, resume: y } = Zc(M, () => N(M.value), {
      flush: i,
      deep: o,
      eventFilter: m,
    })
  return (
    h &&
      l &&
      Xi(() => {
        Je(h, 'storage', O), Je(h, Lr, V), L && O()
      }),
    L || O(),
    M
  )
  function N(T) {
    try {
      const A = n.getItem(e),
        K = (S) => {
          h &&
            h.dispatchEvent(
              new CustomEvent(Lr, {
                detail: { key: e, oldValue: A, newValue: S, storageArea: n },
              }),
            )
        }
      if (T == null) K(null), n.removeItem(e)
      else {
        const S = J.write(T)
        A !== S && (n.setItem(e, S), K(S))
      }
    } catch (A) {
      w(A)
    }
  }
  function I(T) {
    const A = T ? T.newValue : n.getItem(e)
    if (A == null) return c && D != null && n.setItem(e, J.write(D)), D
    if (!T && u) {
      const K = J.read(A)
      return typeof u == 'function'
        ? u(K, D)
        : W === 'object' && !Array.isArray(K)
        ? { ...D, ...K }
        : K
    } else return typeof A != 'string' ? A : J.read(A)
  }
  function V(T) {
    O(T.detail)
  }
  function O(T) {
    if (!(T && T.storageArea !== n)) {
      if (T && T.key == null) {
        M.value = D
        return
      }
      if (!(T && T.key !== e)) {
        p()
        try {
          ;(T == null ? void 0 : T.newValue) !== J.write(M.value) &&
            (M.value = I(T))
        } catch (A) {
          w(A)
        } finally {
          T ? On(y) : y()
        }
      }
    }
  }
}
function Ji(e) {
  return sa('(prefers-color-scheme: dark)', e)
}
function aa(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = He,
      storage: i,
      storageKey: o = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: u,
      disableTransition: d = !0,
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    m = Ji({ window: r }),
    w = se(() => (m.value ? 'dark' : 'light')),
    L =
      c ||
      (o == null
        ? zi(s)
        : ca(o, s, i, { window: r, listenToStorageChanges: l })),
    M = se(() => (L.value === 'auto' ? w.value : L.value)),
    D = Yi('updateHTMLAttrs', (y, N, I) => {
      const V =
        typeof y == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(y)
          : gt(y)
      if (!V) return
      let O
      if (
        (d &&
          ((O = r.document.createElement('style')),
          O.appendChild(
            document.createTextNode(
              '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
            ),
          ),
          r.document.head.appendChild(O)),
        N === 'class')
      ) {
        const T = I.split(/\s/g)
        Object.values(h)
          .flatMap((A) => (A || '').split(/\s/g))
          .filter(Boolean)
          .forEach((A) => {
            T.includes(A) ? V.classList.add(A) : V.classList.remove(A)
          })
      } else V.setAttribute(N, I)
      d && (r.getComputedStyle(O).opacity, document.head.removeChild(O))
    })
  function W(y) {
    var N
    D(t, n, (N = h[y]) != null ? N : y)
  }
  function J(y) {
    e.onChanged ? e.onChanged(y, W) : W(y)
  }
  Xe(M, J, { flush: 'post', immediate: !0 }), Xi(() => J(M.value))
  const p = se({
    get() {
      return u ? L.value : M.value
    },
    set(y) {
      L.value = y
    },
  })
  try {
    return Object.assign(p, { store: L, system: w, state: M })
  } catch {
    return p
  }
}
function ua(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = He } = e,
    r = aa({
      ...e,
      onChanged: (l, c) => {
        var u
        e.onChanged
          ? (u = e.onChanged) == null || u.call(e, l === 'dark', c, l)
          : c(l)
      },
      modes: { dark: t, light: n },
    }),
    i = se(() =>
      r.system ? r.system.value : Ji({ window: s }).value ? 'dark' : 'light',
    )
  return se({
    get() {
      return r.value === 'dark'
    },
    set(l) {
      const c = l ? 'dark' : 'light'
      i.value === c ? (r.value = 'auto') : (r.value = c)
    },
  })
}
function Qn(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
    ? e.documentElement
    : e
}
function Qi(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : Qi(n)
  }
}
function fa(e) {
  const t = e || window.event,
    n = t.target
  return Qi(n)
    ? !1
    : t.touches.length > 1
    ? !0
    : (t.preventDefault && t.preventDefault(), !1)
}
const ln = new WeakMap()
function au(e, t = !1) {
  const n = me(t)
  let s = null,
    r
  Xe(
    zi(e),
    (l) => {
      const c = Qn(Ye(l))
      if (c) {
        const u = c
        ln.get(u) || ln.set(u, r), n.value && (u.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const i = () => {
      const l = Qn(Ye(e))
      !l ||
        n.value ||
        (ys &&
          (s = Je(
            l,
            'touchmove',
            (c) => {
              fa(c)
            },
            { passive: !1 },
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      var l
      const c = Qn(Ye(e))
      !c ||
        !n.value ||
        (ys && (s == null || s()),
        (c.style.overflow = (l = ln.get(c)) != null ? l : ''),
        ln.delete(c),
        (n.value = !1))
    }
  return (
    Ds(o),
    se({
      get() {
        return n.value
      },
      set(l) {
        l ? i() : o()
      },
    })
  )
}
function uu(e = {}) {
  const { window: t = He, behavior: n = 'auto' } = e
  if (!t) return { x: me(0), y: me(0) }
  const s = me(t.scrollX),
    r = me(t.scrollY),
    i = se({
      get() {
        return s.value
      },
      set(l) {
        scrollTo({ left: l, behavior: n })
      },
    }),
    o = se({
      get() {
        return r.value
      },
      set(l) {
        scrollTo({ top: l, behavior: n })
      },
    })
  return (
    Je(
      t,
      'scroll',
      () => {
        ;(s.value = t.scrollX), (r.value = t.scrollY)
      },
      { capture: !1, passive: !0 },
    ),
    { x: i, y: o }
  )
}
var Zn = {
    BASE_URL: '/potati-ui/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  da = {}
const Zi = /^(?:[a-z]+:|\/\/)/i,
  ha = 'vitepress-theme-appearance',
  pa = /#.*$/,
  ga = /[?#].*$/,
  ma = /(?:(^|\/)index)?\.(?:md|html)$/,
  Ce = typeof document < 'u',
  eo = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function ya(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Ir(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Ir(t) !== e) return !1
  const s = t.match(pa)
  return s ? (Ce ? location.hash : '') === s[0] : !0
}
function Ir(e) {
  return decodeURI(e).replace(ga, '').replace(ma, '$1')
}
function _a(e) {
  return Zi.test(e)
}
function ba(e, t) {
  var s, r, i, o, l, c, u
  const n =
    Object.keys(e.locales).find(
      (d) => d !== 'root' && !_a(d) && ya(t, `/${d}/`, !0),
    ) || 'root'
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
    titleTemplate:
      ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: no(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  })
}
function to(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = va(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function va(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ''
    : ` | ${t}`
}
function wa(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function no(e, t) {
  return [...e.filter((n) => !wa(t, n)), ...t]
}
const Ea = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  Ca = /^[a-z]:/i
function Pr(e) {
  const t = Ca.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(Ea, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const es = new Set()
function xa(e) {
  if (es.size === 0) {
    const n =
      (typeof process == 'object' && da.VITE_EXTRA_EXTENSIONS) ||
      (Zn == null ? void 0 : Zn.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => es.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !es.has(t.toLowerCase())
}
const Sa = Symbol(),
  at = ri(Wc)
function fu(e) {
  const t = se(() => ba(at.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? me(!0)
        : n
        ? ua({
            storageKey: ha,
            initialValue: () => (typeof n == 'string' ? n : 'auto'),
            ...(typeof n == 'object' ? n : {}),
          })
        : me(!1)
  return {
    site: t,
    theme: se(() => t.value.themeConfig),
    page: se(() => e.data),
    frontmatter: se(() => e.data.frontmatter),
    params: se(() => e.data.params),
    lang: se(() => t.value.lang),
    dir: se(() => e.data.frontmatter.dir || t.value.dir),
    localeIndex: se(() => t.value.localeIndex || 'root'),
    title: se(() => to(t.value, e.data)),
    description: se(() => e.data.description || t.value.description),
    isDark: s,
  }
}
function Ta() {
  const e = Et(Sa)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Aa(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Mr(e) {
  return Zi.test(e) || !e.startsWith('/') ? e : Aa(at.value.base, e)
}
function Ra(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ce)) {
    const n = '/potati-ui/'
    t = Pr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${Pr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let fn = []
function du(e) {
  fn.push(e),
    Fn(() => {
      fn = fn.filter((t) => t !== e)
    })
}
function Oa() {
  let e = at.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Nr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Nr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Nr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const La = Symbol(),
  so = 'http://a.com',
  Ia = () => ({ path: '/', component: null, data: eo })
function hu(e, t) {
  const n = Tn(Ia()),
    s = { route: n, go: r }
  async function r(l = Ce ? location.href : '/') {
    var c, u
    ;(l = wn(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        ($r(l),
        await o(l),
        await ((u = s.onAfterRouteChanged) == null ? void 0 : u.call(s, l)))
  }
  let i = null
  async function o(l, c = 0, u = !1) {
    var m
    if (
      (await ((m = s.onBeforePageLoad) == null ? void 0 : m.call(s, l))) === !1
    )
      return
    const d = new URL(l, so),
      h = (i = d.pathname)
    try {
      let w = await e(h)
      if (!w) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: L, __pageData: M } = w
        if (!L) throw new Error(`Invalid route component: ${L}`)
        ;(n.path = Ce ? h : Mr(h)),
          (n.component = It(L)),
          (n.data = It(M)),
          Ce &&
            On(() => {
              let D =
                at.value.base +
                M.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!at.value.cleanUrls && !D.endsWith('/') && (D += '.html'),
                D !== d.pathname &&
                  ((d.pathname = D),
                  (l = D + d.search + d.hash),
                  history.replaceState(null, '', l)),
                d.hash && !c)
              ) {
                let W = null
                try {
                  W = document.getElementById(
                    decodeURIComponent(d.hash).slice(1),
                  )
                } catch (J) {
                  console.warn(J)
                }
                if (W) {
                  Fr(W, d.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (w) {
      if (
        (!/fetch|Page not found/.test(w.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(w),
        !u)
      )
        try {
          const L = await fetch(at.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await L.json()), await o(l, c, !0)
          return
        } catch {}
      i === h &&
        ((i = null),
        (n.path = Ce ? h : Mr(h)),
        (n.component = t ? It(t) : null),
        (n.data = eo))
    }
  }
  return (
    Ce &&
      (window.addEventListener(
        'click',
        (l) => {
          if (l.target.closest('button')) return
          const u = l.target.closest('a')
          if (
            u &&
            !u.closest('.vp-raw') &&
            (u instanceof SVGElement || !u.download)
          ) {
            const { target: d } = u,
              {
                href: h,
                origin: m,
                pathname: w,
                hash: L,
                search: M,
              } = new URL(
                u.href instanceof SVGAnimatedString ? u.href.animVal : u.href,
                u.baseURI,
              ),
              D = window.location
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !d &&
              m === D.origin &&
              xa(w) &&
              (l.preventDefault(),
              w === D.pathname && M === D.search
                ? (L !== D.hash &&
                    (history.pushState(null, '', L),
                    window.dispatchEvent(new Event('hashchange'))),
                  L
                    ? Fr(u, L, u.classList.contains('header-anchor'))
                    : ($r(h), window.scrollTo(0, 0)))
                : r(h))
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        await o(wn(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href)
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function Pa() {
  const e = Et(La)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function ro() {
  return Pa().route
}
function Fr(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(o - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, o)
        : window.scrollTo({ left: 0, top: o, behavior: 'smooth' })
    }
    const i = parseInt(window.getComputedStyle(s).paddingTop, 10),
      o = window.scrollY + s.getBoundingClientRect().top - Oa() + i
    requestAnimationFrame(r)
  }
}
function $r(e) {
  Ce &&
    wn(e) !== wn(location.href) &&
    (history.replaceState({ scrollPosition: window.scrollY }, document.title),
    history.pushState(null, '', e))
}
function wn(e) {
  const t = new URL(e, so)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    at.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const ts = () => fn.forEach((e) => e()),
  pu = bi({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = ro(),
        { site: n } = Ta()
      return () =>
        gs(e.as, n.value.contentProps ?? { style: { position: 'relative' } }, [
          t.component
            ? gs(t.component, {
                onVnodeMounted: ts,
                onVnodeUpdated: ts,
                onVnodeUnmounted: ts,
              })
            : '404 Page Not Found',
        ])
    },
  }),
  gu = bi({
    setup(e, { slots: t }) {
      const n = me(!1)
      return (
        Tt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function mu() {
  Ce &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const i = s.querySelector('.blocks')
        if (!i) return
        const o = Array.from(i.children).find((u) =>
          u.classList.contains('active'),
        )
        if (!o) return
        const l = i.children[r]
        if (!l || o === l) return
        o.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function yu() {
  if (Ce) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !i) return
        const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = i.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((d) => d.remove())
        let u = c.textContent || ''
        o && (u = u.replace(/^ *(\$|>) /gm, '').trim()),
          Ma(u).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const d = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, d)
          })
      }
    })
  }
}
async function Ma(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function _u(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = ns(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        })
      return
    }
    const o = i.map(ns)
    s.forEach((l, c) => {
      const u = o.findIndex((d) =>
        d == null ? void 0 : d.isEqualNode(l ?? null),
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  pi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = to(o, i)
    u !== document.title && (document.title = u)
    const d = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== d && h.setAttribute('content', d)
      : ns(['meta', { name: 'description', content: d }]),
      r(no(o.head, Fa(c)))
  })
}
function ns([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return n && (s.innerHTML = n), e === 'script' && !t.async && (s.async = !1), s
}
function Na(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Fa(e) {
  return e.filter((t) => !Na(t))
}
const ss = new Set(),
  io = () => document.createElement('link'),
  $a = (e) => {
    const t = io()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  Ha = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let cn
const ja =
  Ce &&
  (cn = io()) &&
  cn.relList &&
  cn.relList.supports &&
  cn.relList.supports('prefetch')
    ? $a
    : Ha
function bu() {
  if (!Ce || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((i) => {
        i.forEach((o) => {
          if (o.isIntersecting) {
            const l = o.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!ss.has(c)) {
              ss.add(c)
              const u = Ra(c)
              u && ja(u)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((i) => {
          const { hostname: o, pathname: l } = new URL(
              i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,
              i.baseURI,
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (i.target !== '_blank' &&
              o === location.hostname &&
              (l !== location.pathname ? n.observe(i) : ss.add(l)))
        })
      })
  }
  Tt(s)
  const r = ro()
  Xe(() => r.path, s),
    Fn(() => {
      n && n.disconnect()
    })
}
export {
  Qa as $,
  xa as A,
  Mr as B,
  Ce as C,
  Va as D,
  Ua as E,
  ya as F,
  sa as G,
  Xe as H,
  pi as I,
  Fn as J,
  Wa as K,
  Sl as L,
  Oa as M,
  Ba as N,
  ge as O,
  Ga as P,
  ri as Q,
  du as R,
  ka as S,
  ki as T,
  Zi as U,
  ro as V,
  tc as W,
  lu as X,
  cu as Y,
  uu as Z,
  iu as _,
  Ja as a,
  An as a0,
  au as a1,
  nu as a2,
  Xa as a3,
  tu as a4,
  Ya as a5,
  Ka as a6,
  _u as a7,
  La as a8,
  fu as a9,
  Sa as aa,
  pu as ab,
  gu as ac,
  at as ad,
  ru as ae,
  hu as af,
  Ra as ag,
  ou as ah,
  bu as ai,
  yu as aj,
  mu as ak,
  gs as al,
  Di as b,
  se as c,
  bi as d,
  ji as e,
  me as f,
  Tt as g,
  $i as h,
  Et as i,
  qa as j,
  ue as k,
  Es as l,
  Tn as m,
  Cs as n,
  Ni as o,
  Dl as p,
  su as q,
  za as r,
  On as s,
  Da as t,
  oi as u,
  eu as v,
  ll as w,
  Za as x,
  Ta as y,
  _a as z,
}
