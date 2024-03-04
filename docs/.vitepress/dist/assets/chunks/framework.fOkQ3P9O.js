/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function gs(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const te = {},
  mt = [],
  xe = () => {},
  io = () => !1,
  Ut = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ms = (e) => e.startsWith('onUpdate:'),
  ie = Object.assign,
  _s = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  oo = Object.prototype.hasOwnProperty,
  X = (e, t) => oo.call(e, t),
  B = Array.isArray,
  _t = (e) => bn(e) === '[object Map]',
  Fr = (e) => bn(e) === '[object Set]',
  k = (e) => typeof e == 'function',
  ne = (e) => typeof e == 'string',
  St = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  $r = (e) => (Z(e) || k(e)) && k(e.then) && k(e.catch),
  Hr = Object.prototype.toString,
  bn = (e) => Hr.call(e),
  lo = (e) => bn(e).slice(8, -1),
  jr = (e) => bn(e) === '[object Object]',
  ys = (e) =>
    ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  yt = gs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  vn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  co = /-(\w)/g,
  Me = vn((e) => e.replace(co, (t, n) => (n ? n.toUpperCase() : ''))),
  ao = /\B([A-Z])/g,
  at = vn((e) => e.replace(ao, '-$1').toLowerCase()),
  wn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  on = vn((e) => (e ? `on${wn(e)}` : '')),
  Qe = (e, t) => !Object.is(e, t),
  Dn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  an = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  uo = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  fo = (e) => {
    const t = ne(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Us
const Dr = () =>
  Us ||
  (Us =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function bs(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ne(s) ? mo(s) : bs(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (ne(e) || Z(e)) return e
}
const ho = /;(?![^(]*\))/g,
  po = /:([^]+)/,
  go = /\/\*[^]*?\*\//g
function mo(e) {
  const t = {}
  return (
    e
      .replace(go, '')
      .split(ho)
      .forEach((n) => {
        if (n) {
          const s = n.split(po)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function vs(e) {
  let t = ''
  if (ne(e)) t = e
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = vs(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const _o =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  yo = gs(_o)
function Vr(e) {
  return !!e || e === ''
}
const Fa = (e) =>
    ne(e)
      ? e
      : e == null
      ? ''
      : B(e) || (Z(e) && (e.toString === Hr || !k(e.toString)))
      ? JSON.stringify(e, Br, 2)
      : String(e),
  Br = (e, t) =>
    t && t.__v_isRef
      ? Br(e, t.value)
      : _t(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], i) => ((n[Vn(s, i) + ' =>'] = r), n),
            {},
          ),
        }
      : Fr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Vn(n)) }
      : St(t)
      ? Vn(t)
      : Z(t) && !B(t) && !jr(t)
      ? String(t)
      : t,
  Vn = (e, t = '') => {
    var n
    return St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class bo {
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
function vo(e, t = be) {
  t && t.active && t.effects.push(e)
}
function Ur() {
  return be
}
function wo(e) {
  be && be.cleanups.push(e)
}
let ot
class ws {
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
      vo(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), ut()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (Eo(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ft()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Ge,
      n = ot
    try {
      return (Ge = !0), (ot = this), this._runnings++, ks(this), this.fn()
    } finally {
      Ks(this), this._runnings--, (ot = n), (Ge = t)
    }
  }
  stop() {
    var t
    this.active &&
      (ks(this),
      Ks(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function Eo(e) {
  return e.value
}
function ks(e) {
  e._trackId++, (e._depsLength = 0)
}
function Ks(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) kr(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function kr(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ge = !0,
  ts = 0
const Kr = []
function ut() {
  Kr.push(Ge), (Ge = !1)
}
function ft() {
  const e = Kr.pop()
  Ge = e === void 0 ? !0 : e
}
function Es() {
  ts++
}
function Cs() {
  for (ts--; !ts && ns.length; ) ns.shift()()
}
function Wr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && kr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ns = []
function qr(e, t, n) {
  Es()
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
          ((s._shouldSchedule = !1), s.scheduler && ns.push(s.scheduler)))
  }
  Cs()
}
const Gr = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  un = new WeakMap(),
  lt = Symbol(''),
  ss = Symbol('')
function _e(e, t, n) {
  if (Ge && ot) {
    let s = un.get(e)
    s || un.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = Gr(() => s.delete(n)))), Wr(ot, r)
  }
}
function $e(e, t, n, s, r, i) {
  const o = un.get(e)
  if (!o) return
  let l = []
  if (t === 'clear') l = [...o.values()]
  else if (n === 'length' && B(e)) {
    const c = Number(s)
    o.forEach((u, d) => {
      ;(d === 'length' || (!St(d) && d >= c)) && l.push(u)
    })
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        B(e)
          ? ys(n) && l.push(o.get('length'))
          : (l.push(o.get(lt)), _t(e) && l.push(o.get(ss)))
        break
      case 'delete':
        B(e) || (l.push(o.get(lt)), _t(e) && l.push(o.get(ss)))
        break
      case 'set':
        _t(e) && l.push(o.get(lt))
        break
    }
  Es()
  for (const c of l) c && qr(c, 4)
  Cs()
}
function Co(e, t) {
  var n
  return (n = un.get(e)) == null ? void 0 : n.get(t)
}
const xo = gs('__proto__,__v_isRef,__isVue'),
  zr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(St),
  ),
  Ws = So()
function So() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = Y(this)
        for (let i = 0, o = this.length; i < o; i++) _e(s, 'get', i + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(Y)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        ut(), Es()
        const s = Y(this)[t].apply(this, n)
        return Cs(), ft(), s
      }
    }),
    e
  )
}
function To(e) {
  const t = Y(this)
  return _e(t, 'has', e), t.hasOwnProperty(e)
}
class Xr {
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
      return s === (r ? (i ? Do : Zr) : i ? Qr : Jr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = B(t)
    if (!r) {
      if (o && X(Ws, n)) return Reflect.get(Ws, n, s)
      if (n === 'hasOwnProperty') return To
    }
    const l = Reflect.get(t, n, s)
    return (St(n) ? zr.has(n) : xo(n)) || (r || _e(t, 'get', n), i)
      ? l
      : de(l)
      ? o && ys(n)
        ? l
        : l.value
      : Z(l)
      ? r
        ? xn(l)
        : Cn(l)
      : l
  }
}
class Yr extends Xr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    if (!this._shallow) {
      const c = Ct(i)
      if (
        (!fn(s) && !Ct(s) && ((i = Y(i)), (s = Y(s))), !B(t) && de(i) && !de(s))
      )
        return c ? !1 : ((i.value = s), !0)
    }
    const o = B(t) && ys(n) ? Number(n) < t.length : X(t, n),
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
    return (!St(n) || !zr.has(n)) && _e(t, 'has', n), s
  }
  ownKeys(t) {
    return _e(t, 'iterate', B(t) ? 'length' : lt), Reflect.ownKeys(t)
  }
}
class Ao extends Xr {
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
const Ro = new Yr(),
  Oo = new Ao(),
  Lo = new Yr(!0),
  xs = (e) => e,
  En = (e) => Reflect.getPrototypeOf(e)
function qt(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = Y(e),
    i = Y(t)
  n || (Qe(t, i) && _e(r, 'get', t), _e(r, 'get', i))
  const { has: o } = En(r),
    l = s ? xs : n ? As : Ht
  if (o.call(r, t)) return l(e.get(t))
  if (o.call(r, i)) return l(e.get(i))
  e !== r && e.get(t)
}
function Gt(e, t = !1) {
  const n = this.__v_raw,
    s = Y(n),
    r = Y(e)
  return (
    t || (Qe(e, r) && _e(s, 'has', e), _e(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function zt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && _e(Y(e), 'iterate', lt), Reflect.get(e, 'size', e)
  )
}
function qs(e) {
  e = Y(e)
  const t = Y(this)
  return En(t).has.call(t, e) || (t.add(e), $e(t, 'add', e, e)), this
}
function Gs(e, t) {
  t = Y(t)
  const n = Y(this),
    { has: s, get: r } = En(n)
  let i = s.call(n, e)
  i || ((e = Y(e)), (i = s.call(n, e)))
  const o = r.call(n, e)
  return (
    n.set(e, t), i ? Qe(t, o) && $e(n, 'set', e, t) : $e(n, 'add', e, t), this
  )
}
function zs(e) {
  const t = Y(this),
    { has: n, get: s } = En(t)
  let r = n.call(t, e)
  r || ((e = Y(e)), (r = n.call(t, e))), s && s.call(t, e)
  const i = t.delete(e)
  return r && $e(t, 'delete', e, void 0), i
}
function Xs() {
  const e = Y(this),
    t = e.size !== 0,
    n = e.clear()
  return t && $e(e, 'clear', void 0, void 0), n
}
function Xt(e, t) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      l = Y(o),
      c = t ? xs : e ? As : Ht
    return (
      !e && _e(l, 'iterate', lt), o.forEach((u, d) => s.call(r, c(u), c(d), i))
    )
  }
}
function Yt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = Y(r),
      o = _t(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      u = r[e](...s),
      d = n ? xs : t ? As : Ht
    return (
      !t && _e(i, 'iterate', c ? ss : lt),
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
function Io() {
  const e = {
      get(i) {
        return qt(this, i)
      },
      get size() {
        return zt(this)
      },
      has: Gt,
      add: qs,
      set: Gs,
      delete: zs,
      clear: Xs,
      forEach: Xt(!1, !1),
    },
    t = {
      get(i) {
        return qt(this, i, !1, !0)
      },
      get size() {
        return zt(this)
      },
      has: Gt,
      add: qs,
      set: Gs,
      delete: zs,
      clear: Xs,
      forEach: Xt(!1, !0),
    },
    n = {
      get(i) {
        return qt(this, i, !0)
      },
      get size() {
        return zt(this, !0)
      },
      has(i) {
        return Gt.call(this, i, !0)
      },
      add: De('add'),
      set: De('set'),
      delete: De('delete'),
      clear: De('clear'),
      forEach: Xt(!0, !1),
    },
    s = {
      get(i) {
        return qt(this, i, !0, !0)
      },
      get size() {
        return zt(this, !0)
      },
      has(i) {
        return Gt.call(this, i, !0)
      },
      add: De('add'),
      set: De('set'),
      delete: De('delete'),
      clear: De('clear'),
      forEach: Xt(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
      ;(e[i] = Yt(i, !1, !1)),
        (n[i] = Yt(i, !0, !1)),
        (t[i] = Yt(i, !1, !0)),
        (s[i] = Yt(i, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [Po, Mo, No, Fo] = Io()
function Ss(e, t) {
  const n = t ? (e ? Fo : No) : e ? Mo : Po
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
      ? e
      : r === '__v_raw'
      ? s
      : Reflect.get(X(n, r) && r in s ? n : s, r, i)
}
const $o = { get: Ss(!1, !1) },
  Ho = { get: Ss(!1, !0) },
  jo = { get: Ss(!0, !1) },
  Jr = new WeakMap(),
  Qr = new WeakMap(),
  Zr = new WeakMap(),
  Do = new WeakMap()
function Vo(e) {
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
function Bo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vo(lo(e))
}
function Cn(e) {
  return Ct(e) ? e : Ts(e, !1, Ro, $o, Jr)
}
function Uo(e) {
  return Ts(e, !1, Lo, Ho, Qr)
}
function xn(e) {
  return Ts(e, !0, Oo, jo, Zr)
}
function Ts(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = r.get(e)
  if (i) return i
  const o = Bo(e)
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
function fn(e) {
  return !!(e && e.__v_isShallow)
}
function ei(e) {
  return bt(e) || Ct(e)
}
function Y(e) {
  const t = e && e.__v_raw
  return t ? Y(t) : e
}
function Lt(e) {
  return Object.isExtensible(e) && an(e, '__v_skip', !0), e
}
const Ht = (e) => (Z(e) ? Cn(e) : e),
  As = (e) => (Z(e) ? xn(e) : e)
class ti {
  constructor(t, n, s, r) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ws(
        () => t(this._value),
        () => It(this, this.effect._dirtyLevel === 2 ? 2 : 3),
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
        It(t, 4),
      Rs(t),
      t.effect._dirtyLevel >= 2 && It(t, 2),
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
function ko(e, t, n = !1) {
  let s, r
  const i = k(e)
  return (
    i ? ((s = e), (r = xe)) : ((s = e.get), (r = e.set)),
    new ti(s, r, i || !r, n)
  )
}
function Rs(e) {
  var t
  Ge &&
    ot &&
    ((e = Y(e)),
    Wr(
      ot,
      (t = e.dep) != null
        ? t
        : (e.dep = Gr(() => (e.dep = void 0), e instanceof ti ? e : void 0)),
    ))
}
function It(e, t = 4, n) {
  e = Y(e)
  const s = e.dep
  s && qr(s, t)
}
function de(e) {
  return !!(e && e.__v_isRef === !0)
}
function me(e) {
  return si(e, !1)
}
function ni(e) {
  return si(e, !0)
}
function si(e, t) {
  return de(e) ? e : new Ko(e, t)
}
class Ko {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Y(t)),
      (this._value = n ? t : Ht(t))
  }
  get value() {
    return Rs(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || fn(t) || Ct(t)
    ;(t = n ? t : Y(t)),
      Qe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Ht(t)), It(this, 4))
  }
}
function ri(e) {
  return de(e) ? e.value : e
}
const Wo = {
  get: (e, t, n) => ri(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function ii(e) {
  return bt(e) ? e : new Proxy(e, Wo)
}
class qo {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => Rs(this),
      () => It(this),
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
function Go(e) {
  return new qo(e)
}
class zo {
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
    return Co(Y(this._object), this._key)
  }
}
class Xo {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function Yo(e, t, n) {
  return de(e)
    ? e
    : k(e)
    ? new Xo(e)
    : Z(e) && arguments.length > 1
    ? Jo(e, t, n)
    : me(e)
}
function Jo(e, t, n) {
  const s = e[t]
  return de(s) ? s : new zo(e, t, n)
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
    Sn(i, t, n)
  }
  return r
}
function Se(e, t, n, s) {
  if (k(e)) {
    const i = ze(e, t, n, s)
    return (
      i &&
        $r(i) &&
        i.catch((o) => {
          Sn(o, t, n)
        }),
      i
    )
  }
  const r = []
  for (let i = 0; i < e.length; i++) r.push(Se(e[i], t, n, s))
  return r
}
function Sn(e, t, n, s = !0) {
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
  Qo(e, n, r, s)
}
function Qo(e, t, n, s = !0) {
  console.error(e)
}
let jt = !1,
  rs = !1
const ue = []
let Pe = 0
const vt = []
let ke = null,
  rt = 0
const oi = Promise.resolve()
let Os = null
function Tn(e) {
  const t = Os || oi
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Zo(e) {
  let t = Pe + 1,
    n = ue.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = ue[s],
      i = Dt(r)
    i < e || (i === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Ls(e) {
  ;(!ue.length || !ue.includes(e, jt && e.allowRecurse ? Pe + 1 : Pe)) &&
    (e.id == null ? ue.push(e) : ue.splice(Zo(e.id), 0, e), li())
}
function li() {
  !jt && !rs && ((rs = !0), (Os = oi.then(ci)))
}
function el(e) {
  const t = ue.indexOf(e)
  t > Pe && ue.splice(t, 1)
}
function tl(e) {
  B(e)
    ? vt.push(...e)
    : (!ke || !ke.includes(e, e.allowRecurse ? rt + 1 : rt)) && vt.push(e),
    li()
}
function Ys(e, t, n = jt ? Pe + 1 : 0) {
  for (; n < ue.length; n++) {
    const s = ue[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      ue.splice(n, 1), n--, s()
    }
  }
}
function dn(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort((n, s) => Dt(n) - Dt(s))
    if (((vt.length = 0), ke)) {
      ke.push(...t)
      return
    }
    for (ke = t, rt = 0; rt < ke.length; rt++) ke[rt]()
    ;(ke = null), (rt = 0)
  }
}
const Dt = (e) => (e.id == null ? 1 / 0 : e.id),
  nl = (e, t) => {
    const n = Dt(e) - Dt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function ci(e) {
  ;(rs = !1), (jt = !0), ue.sort(nl)
  try {
    for (Pe = 0; Pe < ue.length; Pe++) {
      const t = ue[Pe]
      t && t.active !== !1 && ze(t, null, 14)
    }
  } finally {
    ;(Pe = 0),
      (ue.length = 0),
      dn(),
      (jt = !1),
      (Os = null),
      (ue.length || vt.length) && ci()
  }
}
function sl(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || te
  let r = n
  const i = t.startsWith('update:'),
    o = i && t.slice(7)
  if (o && o in s) {
    const d = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: h, trim: m } = s[d] || te
    m && (r = n.map((w) => (ne(w) ? w.trim() : w))), h && (r = n.map(uo))
  }
  let l,
    c = s[(l = on(t))] || s[(l = on(Me(t)))]
  !c && i && (c = s[(l = on(at(t)))]), c && Se(c, e, 6, r)
  const u = s[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Se(u, e, 6, r)
  }
}
function ai(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!k(e)) {
    const c = (u) => {
      const d = ai(u, t, !0)
      d && ((l = !0), ie(o, d))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !i && !l
    ? (Z(e) && s.set(e, null), null)
    : (B(i) ? i.forEach((c) => (o[c] = null)) : ie(o, i),
      Z(e) && s.set(e, o),
      o)
}
function An(e, t) {
  return !e || !Ut(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      X(e, t[0].toLowerCase() + t.slice(1)) || X(e, at(t)) || X(e, t))
}
let fe = null,
  Rn = null
function hn(e) {
  const t = fe
  return (fe = e), (Rn = (e && e.type.__scopeId) || null), t
}
function $a(e) {
  Rn = e
}
function Ha() {
  Rn = null
}
function rl(e, t = fe, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && cr(-1)
    const i = hn(t)
    let o
    try {
      o = e(...r)
    } finally {
      hn(i), s._d && cr(1)
    }
    return o
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Bn(e) {
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
  const J = hn(e)
  try {
    if (n.shapeFlag & 4) {
      const _ = r || s,
        N = _
      ;(D = Ae(d.call(N, _, h, i, w, m, L))), (W = c)
    } else {
      const _ = t
      ;(D = Ae(
        _.length > 1 ? _(i, { attrs: c, slots: l, emit: u }) : _(i, null),
      )),
        (W = t.props ? c : il(c))
    }
  } catch (_) {
    ;(Ft.length = 0), Sn(_, e, 1), (D = ae(ve))
  }
  let p = D
  if (W && M !== !1) {
    const _ = Object.keys(W),
      { shapeFlag: N } = p
    _.length && N & 7 && (o && _.some(ms) && (W = ol(W, o)), (p = Ze(p, W)))
  }
  return (
    n.dirs && ((p = Ze(p)), (p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (p.transition = n.transition),
    (D = p),
    hn(J),
    D
  )
}
const il = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Ut(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  ol = (e, t) => {
    const n = {}
    for (const s in e) (!ms(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function ll(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    u = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Js(s, o, u) : !!o
    if (c & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const m = d[h]
        if (o[m] !== s[m] && !An(u, m)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Js(s, o, u)
        : !0
      : !!o
  return !1
}
function Js(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !An(n, i)) return !0
  }
  return !1
}
function cl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Is = 'components'
function ja(e, t) {
  return fi(Is, e, !0, t) || e
}
const ui = Symbol.for('v-ndc')
function Da(e) {
  return ne(e) ? fi(Is, e, !1) || e : e || ui
}
function fi(e, t, n = !0, s = !1) {
  const r = fe || ce
  if (r) {
    const i = r.type
    if (e === Is) {
      const l = rc(i, !1)
      if (l && (l === t || l === Me(t) || l === wn(Me(t)))) return i
    }
    const o = Qs(r[e] || i[e], t) || Qs(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Qs(e, t) {
  return e && (e[t] || e[Me(t)] || e[wn(Me(t))])
}
const al = (e) => e.__isSuspense
function di(e, t) {
  t && t.pendingBranch
    ? B(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : tl(e)
}
const ul = Symbol.for('v-scx'),
  fl = () => Et(ul)
function hi(e, t) {
  return On(e, null, t)
}
function Va(e, t) {
  return On(e, null, { flush: 'post' })
}
const Jt = {}
function Xe(e, t, n) {
  return On(e, t, n)
}
function On(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: l } = te,
) {
  if (t && i) {
    const I = t
    t = (...V) => {
      I(...V), N()
    }
  }
  const c = ce,
    u = (I) => (s === !0 ? I : pt(I, s === !1 ? 1 : void 0))
  let d,
    h = !1,
    m = !1
  if (
    (de(e)
      ? ((d = () => e.value), (h = fn(e)))
      : bt(e)
      ? ((d = () => u(e)), (h = !0))
      : B(e)
      ? ((m = !0),
        (h = e.some((I) => bt(I) || fn(I))),
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
    d = () => pt(I())
  }
  let w,
    L = (I) => {
      w = p.onStop = () => {
        ze(I, c, 4), (w = p.onStop = void 0)
      }
    },
    M
  if (Fn)
    if (
      ((L = xe),
      t ? n && Se(t, c, 3, [d(), m ? [] : void 0, L]) : d(),
      r === 'sync')
    ) {
      const I = fl()
      M = I.__watcherHandles || (I.__watcherHandles = [])
    } else return xe
  let D = m ? new Array(e.length).fill(Jt) : Jt
  const W = () => {
    if (!(!p.active || !p.dirty))
      if (t) {
        const I = p.run()
        ;(s || h || (m ? I.some((V, O) => Qe(V, D[O])) : Qe(I, D))) &&
          (w && w(),
          Se(t, c, 3, [I, D === Jt ? void 0 : m && D[0] === Jt ? [] : D, L]),
          (D = I))
      } else p.run()
  }
  W.allowRecurse = !!t
  let J
  r === 'sync'
    ? (J = W)
    : r === 'post'
    ? (J = () => pe(W, c && c.suspense))
    : ((W.pre = !0), c && (W.id = c.uid), (J = () => Ls(W)))
  const p = new ws(d, xe, J),
    _ = Ur(),
    N = () => {
      p.stop(), _ && _s(_.effects, p)
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
function dl(e, t, n) {
  const s = this.proxy,
    r = ne(e) ? (e.includes('.') ? pi(s, e) : () => s[e]) : e.bind(s, s)
  let i
  k(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = kt(this),
    l = On(r, i.bind(s), n)
  return o(), l
}
function pi(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function pt(e, t, n = 0, s) {
  if (!Z(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), de(e))) pt(e.value, t, n, s)
  else if (B(e)) for (let r = 0; r < e.length; r++) pt(e[r], t, n, s)
  else if (Fr(e) || _t(e))
    e.forEach((r) => {
      pt(r, t, n, s)
    })
  else if (jr(e)) for (const r in e) pt(e[r], t, n, s)
  return e
}
function Ie(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && (ut(), Se(c, n, 8, [e.el, l, e, t]), ft())
  }
}
const Ke = Symbol('_leaveCb'),
  Qt = Symbol('_enterCb')
function hl() {
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
    vi(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const we = [Function, Array],
  gi = {
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
  pl = {
    name: 'BaseTransition',
    props: gi,
    setup(e, { slots: t }) {
      const n = Nn(),
        s = hl()
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
        if (s.isLeaving) return Un(o)
        const u = Zs(o)
        if (!u) return Un(o)
        const d = is(u, l, s, n)
        os(u, d)
        const h = n.subTree,
          m = h && Zs(h)
        let w = !1
        const { getTransitionKey: L } = u.type
        if (L) {
          const M = L()
          r === void 0 ? (r = M) : M !== r && ((r = M), (w = !0))
        }
        if (m && m.type !== ve && (!it(u, m) || w)) {
          const M = is(m, l, s, n)
          if ((os(m, M), c === 'out-in'))
            return (
              (s.isLeaving = !0),
              (M.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update())
              }),
              Un(o)
            )
          c === 'in-out' &&
            u.type !== ve &&
            (M.delayLeave = (D, W, J) => {
              const p = mi(s, m)
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
  gl = pl
function mi(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function is(e, t, n, s) {
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
    _ = mi(n, e),
    N = (O, T) => {
      O && Se(O, s, 9, T)
    },
    I = (O, T) => {
      const A = T[1]
      N(O, T),
        B(O) ? O.every((K) => K.length <= 1) && A() : O.length <= 1 && A()
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
        const A = _[p]
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
        const q = (O[Qt] = (re) => {
          S ||
            ((S = !0),
            re ? N(K, [O]) : N(A, [O]),
            V.delayedLeave && V.delayedLeave(),
            (O[Qt] = void 0))
        })
        T ? I(T, [O, q]) : q()
      },
      leave(O, T) {
        const A = String(e.key)
        if ((O[Qt] && O[Qt](!0), n.isUnmounting)) return T()
        N(h, [O])
        let K = !1
        const S = (O[Ke] = (q) => {
          K ||
            ((K = !0),
            T(),
            q ? N(L, [O]) : N(w, [O]),
            (O[Ke] = void 0),
            _[A] === e && delete _[A])
        })
        ;(_[A] = e), m ? I(m, [O, S]) : S()
      },
      clone(O) {
        return is(O, t, n, s)
      },
    }
  return V
}
function Un(e) {
  if (Ln(e)) return (e = Ze(e)), (e.children = null), e
}
function Zs(e) {
  return Ln(e) ? (e.children ? e.children[0] : void 0) : e
}
function os(e, t) {
  e.shapeFlag & 6 && e.component
    ? os(e.component.subTree, t)
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
/*! #__NO_SIDE_EFFECTS__ */ function yi(e, t) {
  return k(e) ? ie({ name: e.name }, t, { setup: e }) : e
}
const wt = (e) => !!e.type.__asyncLoader,
  Ln = (e) => e.type.__isKeepAlive
function ml(e, t) {
  bi(e, 'a', t)
}
function _l(e, t) {
  bi(e, 'da', t)
}
function bi(e, t, n = ce) {
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
  if ((In(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Ln(r.parent.vnode) && yl(s, t, n, r), (r = r.parent)
  }
}
function yl(e, t, n, s) {
  const r = In(t, e, s, !0)
  Pn(() => {
    _s(s[t], r)
  }, n)
}
function In(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          ut()
          const l = kt(n),
            c = Se(t, n, e, o)
          return l(), ft(), c
        })
    return s ? r.unshift(i) : r.push(i), i
  }
}
const je =
    (e) =>
    (t, n = ce) =>
      (!Fn || e === 'sp') && In(e, (...s) => t(...s), n),
  bl = je('bm'),
  Tt = je('m'),
  vl = je('bu'),
  wl = je('u'),
  vi = je('bum'),
  Pn = je('um'),
  El = je('sp'),
  Cl = je('rtg'),
  xl = je('rtc')
function Sl(e, t = ce) {
  In('ec', e, t)
}
function Ba(e, t, n, s) {
  let r
  const i = n && n[s]
  if (B(e) || ne(e)) {
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
function Ua(e, t, n = {}, s, r) {
  if (fe.isCE || (fe.parent && wt(fe.parent) && fe.parent.isCE))
    return t !== 'default' && (n.name = t), ae('slot', n, s && s())
  let i = e[t]
  i && i._c && (i._d = !1), Pi()
  const o = i && wi(i(n)),
    l = Ni(
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
function wi(e) {
  return e.some((t) =>
    mn(t) ? !(t.type === ve || (t.type === ge && !wi(t.children))) : !0,
  )
    ? e
    : null
}
function ka(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : on(s)] = e[s]
  return n
}
const ls = (e) => (e ? (ji(e) ? Fs(e) || e.proxy : ls(e.parent)) : null),
  Pt = ie(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ls(e.parent),
    $root: (e) => ls(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ps(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Ls(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = Tn.bind(e.proxy)),
    $watch: (e) => dl.bind(e),
  }),
  kn = (e, t) => e !== te && !e.__isScriptSetup && X(e, t),
  Tl = {
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
          if (kn(s, t)) return (o[t] = 1), s[t]
          if (r !== te && X(r, t)) return (o[t] = 2), r[t]
          if ((u = e.propsOptions[0]) && X(u, t)) return (o[t] = 3), i[t]
          if (n !== te && X(n, t)) return (o[t] = 4), n[t]
          cs && (o[t] = 0)
        }
      }
      const d = Pt[t]
      let h, m
      if (d) return t === '$attrs' && _e(e, 'get', t), d(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== te && X(n, t)) return (o[t] = 4), n[t]
      if (((m = c.config.globalProperties), X(m, t))) return m[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return kn(r, t)
        ? ((r[t] = n), !0)
        : s !== te && X(s, t)
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
        (e !== te && X(e, o)) ||
        kn(t, o) ||
        ((l = i[0]) && X(l, o)) ||
        X(s, o) ||
        X(Pt, o) ||
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
function Ka() {
  return Al().slots
}
function Al() {
  const e = Nn()
  return e.setupContext || (e.setupContext = Vi(e))
}
function er(e) {
  return B(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let cs = !0
function Rl(e) {
  const t = Ps(e),
    n = e.proxy,
    s = e.ctx
  ;(cs = !1), t.beforeCreate && tr(t.beforeCreate, e, 'bc')
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
    unmounted: _,
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
  if ((u && Ol(u, s, null), o))
    for (const z in o) {
      const $ = o[z]
      k($) && (s[z] = $.bind(n))
    }
  if (r) {
    const z = r.call(n, n)
    Z(z) && (e.data = Cn(z))
  }
  if (((cs = !0), i))
    for (const z in i) {
      const $ = i[z],
        Ne = k($) ? $.bind(n, n) : k($.get) ? $.get.bind(n, n) : xe,
        Kt = !k($) && k($.set) ? $.set.bind(n) : xe,
        et = se({ get: Ne, set: Kt })
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Oe) => (et.value = Oe),
      })
    }
  if (l) for (const z in l) Ei(l[z], s, n, z)
  if (c) {
    const z = k(c) ? c.call(n) : c
    Reflect.ownKeys(z).forEach(($) => {
      Fl($, z[$])
    })
  }
  d && tr(d, e, 'c')
  function H(z, $) {
    B($) ? $.forEach((Ne) => z(Ne.bind(n))) : $ && z($.bind(n))
  }
  if (
    (H(bl, h),
    H(Tt, m),
    H(vl, w),
    H(wl, L),
    H(ml, M),
    H(_l, D),
    H(Sl, O),
    H(xl, I),
    H(Cl, V),
    H(vi, J),
    H(Pn, _),
    H(El, T),
    B(A))
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
function Ol(e, t, n = xe) {
  B(e) && (e = as(e))
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
function tr(e, t, n) {
  Se(B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Ei(e, t, n, s) {
  const r = s.includes('.') ? pi(n, s) : () => n[s]
  if (ne(e)) {
    const i = t[e]
    k(i) && Xe(r, i)
  } else if (k(e)) Xe(r, e.bind(n))
  else if (Z(e))
    if (B(e)) e.forEach((i) => Ei(i, t, n, s))
    else {
      const i = k(e.handler) ? e.handler.bind(n) : t[e.handler]
      k(i) && Xe(r, i, e)
    }
}
function Ps(e) {
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
      : ((c = {}), r.length && r.forEach((u) => pn(c, u, o, !0)), pn(c, t, o)),
    Z(t) && i.set(t, c),
    c
  )
}
function pn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  i && pn(e, i, n, !0), r && r.forEach((o) => pn(e, o, n, !0))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = Ll[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Ll = {
  data: nr,
  props: sr,
  emits: sr,
  methods: Ot,
  computed: Ot,
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
  components: Ot,
  directives: Ot,
  watch: Pl,
  provide: nr,
  inject: Il,
}
function nr(e, t) {
  return t
    ? e
      ? function () {
          return ie(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function Il(e, t) {
  return Ot(as(e), as(t))
}
function as(e) {
  if (B(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ot(e, t) {
  return e ? ie(Object.create(null), e, t) : t
}
function sr(e, t) {
  return e
    ? B(e) && B(t)
      ? [...new Set([...e, ...t])]
      : ie(Object.create(null), er(e), er(t ?? {}))
    : t
}
function Pl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ie(Object.create(null), e)
  for (const s in t) n[s] = he(e[s], t[s])
  return n
}
function Ci() {
  return {
    app: null,
    config: {
      isNativeTag: io,
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
let Ml = 0
function Nl(e, t) {
  return function (s, r = null) {
    k(s) || (s = ie({}, s)), r != null && !Z(r) && (r = null)
    const i = Ci(),
      o = new WeakSet()
    let l = !1
    const c = (i.app = {
      _uid: Ml++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: oc,
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
          const m = ae(s, r)
          return (
            (m.appContext = i),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            d && t ? t(m, u) : e(m, u, h),
            (l = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            Fs(m.component) || m.component.proxy
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
        const d = Mt
        Mt = c
        try {
          return u()
        } finally {
          Mt = d
        }
      },
    })
    return c
  }
}
let Mt = null
function Fl(e, t) {
  if (ce) {
    let n = ce.provides
    const s = ce.parent && ce.parent.provides
    s === n && (n = ce.provides = Object.create(s)), (n[e] = t)
  }
}
function Et(e, t, n = !1) {
  const s = ce || fe
  if (s || Mt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Mt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t
  }
}
function $l(e, t, n, s = !1) {
  const r = {},
    i = {}
  an(i, Mn, 1), (e.propsDefaults = Object.create(null)), xi(e, t, r, i)
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  n ? (e.props = s ? r : Uo(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i)
}
function Hl(e, t, n, s) {
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
        if (An(e.emitsOptions, m)) continue
        const w = t[m]
        if (c)
          if (X(i, m)) w !== i[m] && ((i[m] = w), (u = !0))
          else {
            const L = Me(m)
            r[L] = us(c, l, L, w, e, !1)
          }
        else w !== i[m] && ((i[m] = w), (u = !0))
      }
    }
  } else {
    xi(e, t, r, i) && (u = !0)
    let d
    for (const h in l)
      (!t || (!X(t, h) && ((d = at(h)) === h || !X(t, d)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (r[h] = us(c, l, h, void 0, e, !0))
          : delete r[h])
    if (i !== l) for (const h in i) (!t || !X(t, h)) && (delete i[h], (u = !0))
  }
  u && $e(e, 'set', '$attrs')
}
function xi(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (yt(c)) continue
      const u = t[c]
      let d
      r && X(r, (d = Me(c)))
        ? !i || !i.includes(d)
          ? (n[d] = u)
          : ((l || (l = {}))[d] = u)
        : An(e.emitsOptions, c) ||
          ((!(c in s) || u !== s[c]) && ((s[c] = u), (o = !0)))
    }
  if (i) {
    const c = Y(n),
      u = l || te
    for (let d = 0; d < i.length; d++) {
      const h = i[d]
      n[h] = us(r, c, h, u[h], e, !X(u, h))
    }
  }
  return o
}
function us(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = X(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && k(c)) {
        const { propsDefaults: u } = r
        if (n in u) s = u[n]
        else {
          const d = kt(r)
          ;(s = u[n] = c.call(null, t)), d()
        }
      } else s = c
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === at(n)) && (s = !0))
  }
  return s
}
function Si(e, t, n = !1) {
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
      const [m, w] = Si(h, t, !0)
      ie(o, m), w && l.push(...w)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!i && !c) return Z(e) && s.set(e, mt), mt
  if (B(i))
    for (let d = 0; d < i.length; d++) {
      const h = Me(i[d])
      rr(h) && (o[h] = te)
    }
  else if (i)
    for (const d in i) {
      const h = Me(d)
      if (rr(h)) {
        const m = i[d],
          w = (o[h] = B(m) || k(m) ? { type: m } : ie({}, m))
        if (w) {
          const L = lr(Boolean, w.type),
            M = lr(String, w.type)
          ;(w[0] = L > -1),
            (w[1] = M < 0 || L < M),
            (L > -1 || X(w, 'default')) && l.push(h)
        }
      }
    }
  const u = [o, l]
  return Z(e) && s.set(e, u), u
}
function rr(e) {
  return e[0] !== '$' && !yt(e)
}
function ir(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function or(e, t) {
  return ir(e) === ir(t)
}
function lr(e, t) {
  return B(t) ? t.findIndex((n) => or(n, e)) : k(t) && or(t, e) ? 0 : -1
}
const Ti = (e) => e[0] === '_' || e === '$stable',
  Ms = (e) => (B(e) ? e.map(Ae) : [Ae(e)]),
  jl = (e, t, n) => {
    if (t._n) return t
    const s = rl((...r) => Ms(t(...r)), n)
    return (s._c = !1), s
  },
  Ai = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (Ti(r)) continue
      const i = e[r]
      if (k(i)) t[r] = jl(r, i, s)
      else if (i != null) {
        const o = Ms(i)
        t[r] = () => o
      }
    }
  },
  Ri = (e, t) => {
    const n = Ms(t)
    e.slots.default = () => n
  },
  Dl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Y(t)), an(t, '_', n)) : Ai(t, (e.slots = {}))
    } else (e.slots = {}), t && Ri(e, t)
    an(e.slots, Mn, 1)
  },
  Vl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = te
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (i = !1)
          : (ie(r, t), !n && l === 1 && delete r._)
        : ((i = !t.$stable), Ai(t, r)),
        (o = t)
    } else t && (Ri(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !Ti(l) && o[l] == null && delete r[l]
  }
function gn(e, t, n, s, r = !1) {
  if (B(e)) {
    e.forEach((m, w) => gn(m, t && (B(t) ? t[w] : t), n, s, r))
    return
  }
  if (wt(s) && !r) return
  const i = s.shapeFlag & 4 ? Fs(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    u = t && t.r,
    d = l.refs === te ? (l.refs = {}) : l.refs,
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
            ? B(M) && _s(M, i)
            : B(M)
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
const Bl = (e) =>
    e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Ul = (e) => e.namespaceURI.includes('MathML'),
  Zt = (e) => {
    if (Bl(e)) return 'svg'
    if (Ul(e)) return 'mathml'
  },
  en = (e) => e.nodeType === 8
function kl(e) {
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
    d = (p, _) => {
      if (!_.hasChildNodes()) {
        n(null, p, _), dn(), (_._vnode = p)
        return
      }
      ;(Ve = !1),
        h(_.firstChild, p, null, null, null),
        dn(),
        (_._vnode = p),
        Ve && console.error('Hydration completed but contains mismatches.')
    },
    h = (p, _, N, I, V, O = !1) => {
      const T = en(p) && p.data === '[',
        A = () => M(p, _, N, I, V, T),
        { type: K, ref: S, shapeFlag: q, patchFlag: re } = _
      let le = p.nodeType
      ;(_.el = p), re === -2 && ((O = !1), (_.dynamicChildren = null))
      let H = null
      switch (K) {
        case xt:
          le !== 3
            ? _.children === ''
              ? (c((_.el = r('')), o(p), p), (H = p))
              : (H = A())
            : (p.data !== _.children && ((Ve = !0), (p.data = _.children)),
              (H = i(p)))
          break
        case ve:
          J(p)
            ? ((H = i(p)), W((_.el = p.content.firstChild), p, N))
            : le !== 8 || T
            ? (H = A())
            : (H = i(p))
          break
        case Nt:
          if ((T && ((p = i(p)), (le = p.nodeType)), le === 1 || le === 3)) {
            H = p
            const z = !_.children.length
            for (let $ = 0; $ < _.staticCount; $++)
              z && (_.children += H.nodeType === 1 ? H.outerHTML : H.data),
                $ === _.staticCount - 1 && (_.anchor = H),
                (H = i(H))
            return T ? i(H) : H
          } else A()
          break
        case ge:
          T ? (H = L(p, _, N, I, V, O)) : (H = A())
          break
        default:
          if (q & 1)
            (le !== 1 || _.type.toLowerCase() !== p.tagName.toLowerCase()) &&
            !J(p)
              ? (H = A())
              : (H = m(p, _, N, I, V, O))
          else if (q & 6) {
            _.slotScopeIds = V
            const z = o(p)
            if (
              (T
                ? (H = D(p))
                : en(p) && p.data === 'teleport start'
                ? (H = D(p, p.data, 'teleport end'))
                : (H = i(p)),
              t(_, z, null, N, I, Zt(z), O),
              wt(_))
            ) {
              let $
              T
                ? (($ = ae(ge)),
                  ($.anchor = H ? H.previousSibling : z.lastChild))
                : ($ = p.nodeType === 3 ? Hi('') : ae('div')),
                ($.el = p),
                (_.component.subTree = $)
            }
          } else
            q & 64
              ? le !== 8
                ? (H = A())
                : (H = _.type.hydrate(p, _, N, I, V, O, e, w))
              : q & 128 &&
                (H = _.type.hydrate(p, _, N, I, Zt(o(p)), V, O, e, h))
      }
      return S != null && gn(S, null, I, _), H
    },
    m = (p, _, N, I, V, O) => {
      O = O || !!_.dynamicChildren
      const {
          type: T,
          props: A,
          patchFlag: K,
          shapeFlag: S,
          dirs: q,
          transition: re,
        } = _,
        le = T === 'input' || T === 'option'
      if (le || K !== -1) {
        q && Ie(_, null, N, 'created')
        let H = !1
        if (J(p)) {
          H = Oi(I, re) && N && N.vnode.props && N.vnode.props.appear
          const $ = p.content.firstChild
          H && re.beforeEnter($), W($, p, N), (_.el = p = $)
        }
        if (S & 16 && !(A && (A.innerHTML || A.textContent))) {
          let $ = w(p.firstChild, _, p, N, I, V, O)
          for (; $; ) {
            Ve = !0
            const Ne = $
            ;($ = $.nextSibling), l(Ne)
          }
        } else
          S & 8 &&
            p.textContent !== _.children &&
            ((Ve = !0), (p.textContent = _.children))
        if (A)
          if (le || !O || K & 48)
            for (const $ in A)
              ((le && ($.endsWith('value') || $ === 'indeterminate')) ||
                (Ut($) && !yt($)) ||
                $[0] === '.') &&
                s(p, $, null, A[$], void 0, void 0, N)
          else A.onClick && s(p, 'onClick', null, A.onClick, void 0, void 0, N)
        let z
        ;(z = A && A.onVnodeBeforeMount) && Ee(z, N, _),
          q && Ie(_, null, N, 'beforeMount'),
          ((z = A && A.onVnodeMounted) || q || H) &&
            di(() => {
              z && Ee(z, N, _), H && re.enter(p), q && Ie(_, null, N, 'mounted')
            }, I)
      }
      return p.nextSibling
    },
    w = (p, _, N, I, V, O, T) => {
      T = T || !!_.dynamicChildren
      const A = _.children,
        K = A.length
      for (let S = 0; S < K; S++) {
        const q = T ? A[S] : (A[S] = Ae(A[S]))
        if (p) p = h(p, q, I, V, O, T)
        else {
          if (q.type === xt && !q.children) continue
          ;(Ve = !0), n(null, q, N, null, I, V, Zt(N), O)
        }
      }
      return p
    },
    L = (p, _, N, I, V, O) => {
      const { slotScopeIds: T } = _
      T && (V = V ? V.concat(T) : T)
      const A = o(p),
        K = w(i(p), _, A, N, I, V, O)
      return K && en(K) && K.data === ']'
        ? i((_.anchor = K))
        : ((Ve = !0), c((_.anchor = u(']')), A, K), K)
    },
    M = (p, _, N, I, V, O) => {
      if (((Ve = !0), (_.el = null), O)) {
        const K = D(p)
        for (;;) {
          const S = i(p)
          if (S && S !== K) l(S)
          else break
        }
      }
      const T = i(p),
        A = o(p)
      return l(p), n(null, _, A, T, N, I, Zt(A), V), T
    },
    D = (p, _ = '[', N = ']') => {
      let I = 0
      for (; p; )
        if (((p = i(p)), p && en(p) && (p.data === _ && I++, p.data === N))) {
          if (I === 0) return i(p)
          I--
        }
      return p
    },
    W = (p, _, N) => {
      const I = _.parentNode
      I && I.replaceChild(p, _)
      let V = N
      for (; V; )
        V.vnode.el === _ && (V.vnode.el = V.subTree.el = p), (V = V.parent)
    },
    J = (p) => p.nodeType === 1 && p.tagName.toLowerCase() === 'template'
  return [d, h]
}
const pe = di
function Kl(e) {
  return Wl(e, kl)
}
function Wl(e, t) {
  const n = Dr()
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
      y = null,
      b = null,
      C = null,
      R = void 0,
      E = null,
      x = !!f.dynamicChildren,
    ) => {
      if (a === f) return
      a && !it(a, f) && ((y = Wt(a)), Oe(a, b, C, !0), (a = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null))
      const { type: v, ref: P, shapeFlag: j } = f
      switch (v) {
        case xt:
          D(a, f, g, y)
          break
        case ve:
          W(a, f, g, y)
          break
        case Nt:
          a == null && J(f, g, y, R)
          break
        case ge:
          S(a, f, g, y, b, C, R, E, x)
          break
        default:
          j & 1
            ? N(a, f, g, y, b, C, R, E, x)
            : j & 6
            ? q(a, f, g, y, b, C, R, E, x)
            : (j & 64 || j & 128) && v.process(a, f, g, y, b, C, R, E, x, dt)
      }
      P != null && b && gn(P, a && a.ref, C, f || a, !f)
    },
    D = (a, f, g, y) => {
      if (a == null) s((f.el = l(f.children)), g, y)
      else {
        const b = (f.el = a.el)
        f.children !== a.children && u(b, f.children)
      }
    },
    W = (a, f, g, y) => {
      a == null ? s((f.el = c(f.children || '')), g, y) : (f.el = a.el)
    },
    J = (a, f, g, y) => {
      ;[a.el, a.anchor] = L(a.children, f, g, y, a.el, a.anchor)
    },
    p = ({ el: a, anchor: f }, g, y) => {
      let b
      for (; a && a !== f; ) (b = m(a)), s(a, g, y), (a = b)
      s(f, g, y)
    },
    _ = ({ el: a, anchor: f }) => {
      let g
      for (; a && a !== f; ) (g = m(a)), r(a), (a = g)
      r(f)
    },
    N = (a, f, g, y, b, C, R, E, x) => {
      f.type === 'svg' ? (R = 'svg') : f.type === 'math' && (R = 'mathml'),
        a == null ? I(f, g, y, b, C, R, E, x) : T(a, f, b, C, R, E, x)
    },
    I = (a, f, g, y, b, C, R, E) => {
      let x, v
      const { props: P, shapeFlag: j, transition: F, dirs: U } = a
      if (
        ((x = a.el = o(a.type, C, P && P.is, P)),
        j & 8
          ? d(x, a.children)
          : j & 16 && O(a.children, x, null, y, b, Kn(a, C), R, E),
        U && Ie(a, null, y, 'created'),
        V(x, a, a.scopeId, R, y),
        P)
      ) {
        for (const Q in P)
          Q !== 'value' &&
            !yt(Q) &&
            i(x, Q, null, P[Q], C, a.children, y, b, Fe)
        'value' in P && i(x, 'value', null, P.value, C),
          (v = P.onVnodeBeforeMount) && Ee(v, y, a)
      }
      U && Ie(a, null, y, 'beforeMount')
      const G = Oi(b, F)
      G && F.beforeEnter(x),
        s(x, f, g),
        ((v = P && P.onVnodeMounted) || G || U) &&
          pe(() => {
            v && Ee(v, y, a), G && F.enter(x), U && Ie(a, null, y, 'mounted')
          }, b)
    },
    V = (a, f, g, y, b) => {
      if ((g && w(a, g), y)) for (let C = 0; C < y.length; C++) w(a, y[C])
      if (b) {
        let C = b.subTree
        if (f === C) {
          const R = b.vnode
          V(a, R, R.scopeId, R.slotScopeIds, b.parent)
        }
      }
    },
    O = (a, f, g, y, b, C, R, E, x = 0) => {
      for (let v = x; v < a.length; v++) {
        const P = (a[v] = E ? We(a[v]) : Ae(a[v]))
        M(null, P, f, g, y, b, C, R, E)
      }
    },
    T = (a, f, g, y, b, C, R) => {
      const E = (f.el = a.el)
      let { patchFlag: x, dynamicChildren: v, dirs: P } = f
      x |= a.patchFlag & 16
      const j = a.props || te,
        F = f.props || te
      let U
      if (
        (g && tt(g, !1),
        (U = F.onVnodeBeforeUpdate) && Ee(U, g, f, a),
        P && Ie(f, a, g, 'beforeUpdate'),
        g && tt(g, !0),
        v
          ? A(a.dynamicChildren, v, E, g, y, Kn(f, b), C)
          : R || $(a, f, E, null, g, y, Kn(f, b), C, !1),
        x > 0)
      ) {
        if (x & 16) K(E, f, j, F, g, y, b)
        else if (
          (x & 2 && j.class !== F.class && i(E, 'class', null, F.class, b),
          x & 4 && i(E, 'style', j.style, F.style, b),
          x & 8)
        ) {
          const G = f.dynamicProps
          for (let Q = 0; Q < G.length; Q++) {
            const ee = G[Q],
              oe = j[ee],
              Te = F[ee]
            ;(Te !== oe || ee === 'value') &&
              i(E, ee, oe, Te, b, a.children, g, y, Fe)
          }
        }
        x & 1 && a.children !== f.children && d(E, f.children)
      } else !R && v == null && K(E, f, j, F, g, y, b)
      ;((U = F.onVnodeUpdated) || P) &&
        pe(() => {
          U && Ee(U, g, f, a), P && Ie(f, a, g, 'updated')
        }, y)
    },
    A = (a, f, g, y, b, C, R) => {
      for (let E = 0; E < f.length; E++) {
        const x = a[E],
          v = f[E],
          P =
            x.el && (x.type === ge || !it(x, v) || x.shapeFlag & 70)
              ? h(x.el)
              : g
        M(x, v, P, null, y, b, C, R, !0)
      }
    },
    K = (a, f, g, y, b, C, R) => {
      if (g !== y) {
        if (g !== te)
          for (const E in g)
            !yt(E) && !(E in y) && i(a, E, g[E], null, R, f.children, b, C, Fe)
        for (const E in y) {
          if (yt(E)) continue
          const x = y[E],
            v = g[E]
          x !== v && E !== 'value' && i(a, E, v, x, R, f.children, b, C, Fe)
        }
        'value' in y && i(a, 'value', g.value, y.value, R)
      }
    },
    S = (a, f, g, y, b, C, R, E, x) => {
      const v = (f.el = a ? a.el : l('')),
        P = (f.anchor = a ? a.anchor : l(''))
      let { patchFlag: j, dynamicChildren: F, slotScopeIds: U } = f
      U && (E = E ? E.concat(U) : U),
        a == null
          ? (s(v, g, y), s(P, g, y), O(f.children || [], g, P, b, C, R, E, x))
          : j > 0 && j & 64 && F && a.dynamicChildren
          ? (A(a.dynamicChildren, F, g, b, C, R, E),
            (f.key != null || (b && f === b.subTree)) && Li(a, f, !0))
          : $(a, f, g, P, b, C, R, E, x)
    },
    q = (a, f, g, y, b, C, R, E, x) => {
      ;(f.slotScopeIds = E),
        a == null
          ? f.shapeFlag & 512
            ? b.ctx.activate(f, g, y, R, x)
            : re(f, g, y, b, C, R, x)
          : le(a, f, x)
    },
    re = (a, f, g, y, b, C, R) => {
      const E = (a.component = ec(a, y, b))
      if ((Ln(a) && (E.ctx.renderer = dt), tc(E), E.asyncDep)) {
        if ((b && b.registerDep(E, H), !a.el)) {
          const x = (E.subTree = ae(ve))
          W(null, x, f, g)
        }
      } else H(E, a, f, g, b, C, R)
    },
    le = (a, f, g) => {
      const y = (f.component = a.component)
      if (ll(a, f, g))
        if (y.asyncDep && !y.asyncResolved) {
          z(y, f, g)
          return
        } else (y.next = f), el(y.update), (y.effect.dirty = !0), y.update()
      else (f.el = a.el), (y.vnode = f)
    },
    H = (a, f, g, y, b, C, R) => {
      const E = () => {
          if (a.isMounted) {
            let { next: P, bu: j, u: F, parent: U, vnode: G } = a
            {
              const ht = Ii(a)
              if (ht) {
                P && ((P.el = G.el), z(a, P, R)),
                  ht.asyncDep.then(() => {
                    a.isUnmounted || E()
                  })
                return
              }
            }
            let Q = P,
              ee
            tt(a, !1),
              P ? ((P.el = G.el), z(a, P, R)) : (P = G),
              j && Dn(j),
              (ee = P.props && P.props.onVnodeBeforeUpdate) && Ee(ee, U, P, G),
              tt(a, !0)
            const oe = Bn(a),
              Te = a.subTree
            ;(a.subTree = oe),
              M(Te, oe, h(Te.el), Wt(Te), a, b, C),
              (P.el = oe.el),
              Q === null && cl(a, oe.el),
              F && pe(F, b),
              (ee = P.props && P.props.onVnodeUpdated) &&
                pe(() => Ee(ee, U, P, G), b)
          } else {
            let P
            const { el: j, props: F } = f,
              { bm: U, m: G, parent: Q } = a,
              ee = wt(f)
            if (
              (tt(a, !1),
              U && Dn(U),
              !ee && (P = F && F.onVnodeBeforeMount) && Ee(P, Q, f),
              tt(a, !0),
              j && jn)
            ) {
              const oe = () => {
                ;(a.subTree = Bn(a)), jn(j, a.subTree, a, b, null)
              }
              ee
                ? f.type.__asyncLoader().then(() => !a.isUnmounted && oe())
                : oe()
            } else {
              const oe = (a.subTree = Bn(a))
              M(null, oe, g, y, a, b, C), (f.el = oe.el)
            }
            if ((G && pe(G, b), !ee && (P = F && F.onVnodeMounted))) {
              const oe = f
              pe(() => Ee(P, Q, oe), b)
            }
            ;(f.shapeFlag & 256 ||
              (Q && wt(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              a.a &&
              pe(a.a, b),
              (a.isMounted = !0),
              (f = g = y = null)
          }
        },
        x = (a.effect = new ws(E, xe, () => Ls(v), a.scope)),
        v = (a.update = () => {
          x.dirty && x.run()
        })
      ;(v.id = a.uid), tt(a, !0), v()
    },
    z = (a, f, g) => {
      f.component = a
      const y = a.vnode.props
      ;(a.vnode = f),
        (a.next = null),
        Hl(a, f.props, y, g),
        Vl(a, f.children, g),
        ut(),
        Ys(a),
        ft()
    },
    $ = (a, f, g, y, b, C, R, E, x = !1) => {
      const v = a && a.children,
        P = a ? a.shapeFlag : 0,
        j = f.children,
        { patchFlag: F, shapeFlag: U } = f
      if (F > 0) {
        if (F & 128) {
          Kt(v, j, g, y, b, C, R, E, x)
          return
        } else if (F & 256) {
          Ne(v, j, g, y, b, C, R, E, x)
          return
        }
      }
      U & 8
        ? (P & 16 && Fe(v, b, C), j !== v && d(g, j))
        : P & 16
        ? U & 16
          ? Kt(v, j, g, y, b, C, R, E, x)
          : Fe(v, b, C, !0)
        : (P & 8 && d(g, ''), U & 16 && O(j, g, y, b, C, R, E, x))
    },
    Ne = (a, f, g, y, b, C, R, E, x) => {
      ;(a = a || mt), (f = f || mt)
      const v = a.length,
        P = f.length,
        j = Math.min(v, P)
      let F
      for (F = 0; F < j; F++) {
        const U = (f[F] = x ? We(f[F]) : Ae(f[F]))
        M(a[F], U, g, null, b, C, R, E, x)
      }
      v > P ? Fe(a, b, C, !0, !1, j) : O(f, g, y, b, C, R, E, x, j)
    },
    Kt = (a, f, g, y, b, C, R, E, x) => {
      let v = 0
      const P = f.length
      let j = a.length - 1,
        F = P - 1
      for (; v <= j && v <= F; ) {
        const U = a[v],
          G = (f[v] = x ? We(f[v]) : Ae(f[v]))
        if (it(U, G)) M(U, G, g, null, b, C, R, E, x)
        else break
        v++
      }
      for (; v <= j && v <= F; ) {
        const U = a[j],
          G = (f[F] = x ? We(f[F]) : Ae(f[F]))
        if (it(U, G)) M(U, G, g, null, b, C, R, E, x)
        else break
        j--, F--
      }
      if (v > j) {
        if (v <= F) {
          const U = F + 1,
            G = U < P ? f[U].el : y
          for (; v <= F; )
            M(null, (f[v] = x ? We(f[v]) : Ae(f[v])), g, G, b, C, R, E, x), v++
        }
      } else if (v > F) for (; v <= j; ) Oe(a[v], b, C, !0), v++
      else {
        const U = v,
          G = v,
          Q = new Map()
        for (v = G; v <= F; v++) {
          const ye = (f[v] = x ? We(f[v]) : Ae(f[v]))
          ye.key != null && Q.set(ye.key, v)
        }
        let ee,
          oe = 0
        const Te = F - G + 1
        let ht = !1,
          Ds = 0
        const At = new Array(Te)
        for (v = 0; v < Te; v++) At[v] = 0
        for (v = U; v <= j; v++) {
          const ye = a[v]
          if (oe >= Te) {
            Oe(ye, b, C, !0)
            continue
          }
          let Le
          if (ye.key != null) Le = Q.get(ye.key)
          else
            for (ee = G; ee <= F; ee++)
              if (At[ee - G] === 0 && it(ye, f[ee])) {
                Le = ee
                break
              }
          Le === void 0
            ? Oe(ye, b, C, !0)
            : ((At[Le - G] = v + 1),
              Le >= Ds ? (Ds = Le) : (ht = !0),
              M(ye, f[Le], g, null, b, C, R, E, x),
              oe++)
        }
        const Vs = ht ? ql(At) : mt
        for (ee = Vs.length - 1, v = Te - 1; v >= 0; v--) {
          const ye = G + v,
            Le = f[ye],
            Bs = ye + 1 < P ? f[ye + 1].el : y
          At[v] === 0
            ? M(null, Le, g, Bs, b, C, R, E, x)
            : ht && (ee < 0 || v !== Vs[ee] ? et(Le, g, Bs, 2) : ee--)
        }
      }
    },
    et = (a, f, g, y, b = null) => {
      const { el: C, type: R, transition: E, children: x, shapeFlag: v } = a
      if (v & 6) {
        et(a.component.subTree, f, g, y)
        return
      }
      if (v & 128) {
        a.suspense.move(f, g, y)
        return
      }
      if (v & 64) {
        R.move(a, f, g, dt)
        return
      }
      if (R === ge) {
        s(C, f, g)
        for (let j = 0; j < x.length; j++) et(x[j], f, g, y)
        s(a.anchor, f, g)
        return
      }
      if (R === Nt) {
        p(a, f, g)
        return
      }
      if (y !== 2 && v & 1 && E)
        if (y === 0) E.beforeEnter(C), s(C, f, g), pe(() => E.enter(C), b)
        else {
          const { leave: j, delayLeave: F, afterLeave: U } = E,
            G = () => s(C, f, g),
            Q = () => {
              j(C, () => {
                G(), U && U()
              })
            }
          F ? F(C, G, Q) : Q()
        }
      else s(C, f, g)
    },
    Oe = (a, f, g, y = !1, b = !1) => {
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
      if ((E != null && gn(E, null, g, a, !0), P & 256)) {
        f.ctx.deactivate(a)
        return
      }
      const U = P & 1 && F,
        G = !wt(a)
      let Q
      if ((G && (Q = R && R.onVnodeBeforeUnmount) && Ee(Q, f, a), P & 6))
        ro(a.component, g, y)
      else {
        if (P & 128) {
          a.suspense.unmount(g, y)
          return
        }
        U && Ie(a, null, f, 'beforeUnmount'),
          P & 64
            ? a.type.remove(a, f, g, b, dt, y)
            : v && (C !== ge || (j > 0 && j & 64))
            ? Fe(v, f, g, !1, !0)
            : ((C === ge && j & 384) || (!b && P & 16)) && Fe(x, f, g),
          y && Hs(a)
      }
      ;((G && (Q = R && R.onVnodeUnmounted)) || U) &&
        pe(() => {
          Q && Ee(Q, f, a), U && Ie(a, null, f, 'unmounted')
        }, g)
    },
    Hs = (a) => {
      const { type: f, el: g, anchor: y, transition: b } = a
      if (f === ge) {
        so(g, y)
        return
      }
      if (f === Nt) {
        _(a)
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
    so = (a, f) => {
      let g
      for (; a !== f; ) (g = m(a)), r(a), (a = g)
      r(f)
    },
    ro = (a, f, g) => {
      const { bum: y, scope: b, update: C, subTree: R, um: E } = a
      y && Dn(y),
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
    Fe = (a, f, g, y = !1, b = !1, C = 0) => {
      for (let R = C; R < a.length; R++) Oe(a[R], f, g, y, b)
    },
    Wt = (a) =>
      a.shapeFlag & 6
        ? Wt(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : m(a.anchor || a.el)
  let $n = !1
  const js = (a, f, g) => {
      a == null
        ? f._vnode && Oe(f._vnode, null, null, !0)
        : M(f._vnode || null, a, f, null, null, null, g),
        $n || (($n = !0), Ys(), dn(), ($n = !1)),
        (f._vnode = a)
    },
    dt = {
      p: M,
      um: Oe,
      m: et,
      r: Hs,
      mt: re,
      mc: O,
      pc: $,
      pbc: A,
      n: Wt,
      o: e,
    }
  let Hn, jn
  return (
    t && ([Hn, jn] = t(dt)), { render: js, hydrate: Hn, createApp: Nl(js, Hn) }
  )
}
function Kn({ type: e, props: t }, n) {
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
function Oi(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Li(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (B(s) && B(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = We(r[i])), (l.el = o.el)),
        n || Li(o, l)),
        l.type === xt && (l.el = o.el)
    }
}
function ql(e) {
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
function Ii(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ii(t)
}
const Gl = (e) => e.__isTeleport,
  ge = Symbol.for('v-fgt'),
  xt = Symbol.for('v-txt'),
  ve = Symbol.for('v-cmt'),
  Nt = Symbol.for('v-stc'),
  Ft = []
let Re = null
function Pi(e = !1) {
  Ft.push((Re = e ? null : []))
}
function zl() {
  Ft.pop(), (Re = Ft[Ft.length - 1] || null)
}
let Vt = 1
function cr(e) {
  Vt += e
}
function Mi(e) {
  return (
    (e.dynamicChildren = Vt > 0 ? Re || mt : null),
    zl(),
    Vt > 0 && Re && Re.push(e),
    e
  )
}
function Wa(e, t, n, s, r, i) {
  return Mi($i(e, t, n, s, r, i, !0))
}
function Ni(e, t, n, s, r) {
  return Mi(ae(e, t, n, s, r, !0))
}
function mn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function it(e, t) {
  return e.type === t.type && e.key === t.key
}
const Mn = '__vInternal',
  Fi = ({ key: e }) => e ?? null,
  ln = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ne(e) || de(e) || k(e)
        ? { i: fe, r: e, k: t, f: !!n }
        : e
      : null
  )
function $i(
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
    key: t && Fi(t),
    ref: t && ln(t),
    scopeId: Rn,
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
    ctx: fe,
  }
  return (
    l
      ? (Ns(c, n), i & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ne(n) ? 8 : 16),
    Vt > 0 &&
      !o &&
      Re &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      Re.push(c),
    c
  )
}
const ae = Xl
function Xl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === ui) && (e = ve), mn(e))) {
    const l = Ze(e, t, !0)
    return (
      n && Ns(l, n),
      Vt > 0 &&
        !i &&
        Re &&
        (l.shapeFlag & 6 ? (Re[Re.indexOf(e)] = l) : Re.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((ic(e) && (e = e.__vccOpts), t)) {
    t = Yl(t)
    let { class: l, style: c } = t
    l && !ne(l) && (t.class = vs(l)),
      Z(c) && (ei(c) && !B(c) && (c = ie({}, c)), (t.style = bs(c)))
  }
  const o = ne(e) ? 1 : al(e) ? 128 : Gl(e) ? 64 : Z(e) ? 4 : k(e) ? 2 : 0
  return $i(e, t, n, s, r, o, i, !0)
}
function Yl(e) {
  return e ? (ei(e) || Mn in e ? ie({}, e) : e) : null
}
function Ze(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = e,
    l = t ? Jl(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Fi(l),
    ref:
      t && t.ref ? (n && r ? (B(r) ? r.concat(ln(t)) : [r, ln(t)]) : ln(t)) : r,
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
function Hi(e = ' ', t = 0) {
  return ae(xt, null, e, t)
}
function qa(e, t) {
  const n = ae(Nt, null, e)
  return (n.staticCount = t), n
}
function Ga(e = '', t = !1) {
  return t ? (Pi(), Ni(ve, null, e)) : ae(ve, null, e)
}
function Ae(e) {
  return e == null || typeof e == 'boolean'
    ? ae(ve)
    : B(e)
    ? ae(ge, null, e.slice())
    : typeof e == 'object'
    ? We(e)
    : ae(xt, null, String(e))
}
function We(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ze(e)
}
function Ns(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (B(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(Mn in t)
        ? (t._ctx = fe)
        : r === 3 &&
          fe &&
          (fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    k(t)
      ? ((t = { default: t, _ctx: fe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Hi(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Jl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = vs([t.class, s.class]))
      else if (r === 'style') t.style = bs([t.style, s.style])
      else if (Ut(r)) {
        const i = t[r],
          o = s[r]
        o &&
          i !== o &&
          !(B(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ee(e, t, n, s = null) {
  Se(e, t, 7, [n, s])
}
const Ql = Ci()
let Zl = 0
function ec(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ql,
    i = {
      uid: Zl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new bo(!0),
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
      propsOptions: Si(s, r),
      emitsOptions: ai(s, r),
      emit: null,
      emitted: null,
      propsDefaults: te,
      inheritAttrs: s.inheritAttrs,
      ctx: te,
      data: te,
      props: te,
      attrs: te,
      slots: te,
      refs: te,
      setupState: te,
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
    (i.emit = sl.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let ce = null
const Nn = () => ce || fe
let _n, fs
{
  const e = Dr(),
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
  ;(_n = t('__VUE_INSTANCE_SETTERS__', (n) => (ce = n))),
    (fs = t('__VUE_SSR_SETTERS__', (n) => (Fn = n)))
}
const kt = (e) => {
    const t = ce
    return (
      _n(e),
      e.scope.on(),
      () => {
        e.scope.off(), _n(t)
      }
    )
  },
  ar = () => {
    ce && ce.scope.off(), _n(null)
  }
function ji(e) {
  return e.vnode.shapeFlag & 4
}
let Fn = !1
function tc(e, t = !1) {
  t && fs(t)
  const { props: n, children: s } = e.vnode,
    r = ji(e)
  $l(e, n, r, t), Dl(e, s)
  const i = r ? nc(e, t) : void 0
  return t && fs(!1), i
}
function nc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Lt(new Proxy(e.ctx, Tl)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Vi(e) : null),
      i = kt(e)
    ut()
    const o = ze(s, e, 0, [e.props, r])
    if ((ft(), i(), $r(o))) {
      if ((o.then(ar, ar), t))
        return o
          .then((l) => {
            ur(e, l, t)
          })
          .catch((l) => {
            Sn(l, e, 0)
          })
      e.asyncDep = o
    } else ur(e, o, t)
  } else Di(e, t)
}
function ur(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = ii(t)),
    Di(e, n)
}
let fr
function Di(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && fr && !s.render) {
      const r = s.template || Ps(e).template
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          u = ie(ie({ isCustomElement: i, delimiters: l }, o), c)
        s.render = fr(r, u)
      }
    }
    e.render = s.render || xe
  }
  {
    const r = kt(e)
    ut()
    try {
      Rl(e)
    } finally {
      ft(), r()
    }
  }
}
function sc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return _e(e, 'get', '$attrs'), t[n]
      },
    }))
  )
}
function Vi(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return sc(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Fs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ii(Lt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Pt) return Pt[n](e)
        },
        has(t, n) {
          return n in t || n in Pt
        },
      }))
    )
}
function rc(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ic(e) {
  return k(e) && '__vccOpts' in e
}
const se = (e, t) => ko(e, t, Fn)
function ds(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !B(t)
      ? mn(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && mn(n) && (n = [n]),
      ae(e, t, n))
}
const oc = '3.4.18'
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const lc = 'http://www.w3.org/2000/svg',
  cc = 'http://www.w3.org/1998/Math/MathML',
  qe = typeof document < 'u' ? document : null,
  dr = qe && qe.createElement('template'),
  ac = {
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
          ? qe.createElementNS(lc, e)
          : t === 'mathml'
          ? qe.createElementNS(cc, e)
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
        dr.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
            ? `<math>${e}</math>`
            : e
        const l = dr.content
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
  Be = 'transition',
  Rt = 'animation',
  Bt = Symbol('_vtc'),
  Bi = (e, { slots: t }) => ds(gl, uc(e), t)
Bi.displayName = 'Transition'
const Ui = {
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
Bi.props = ie({}, gi, Ui)
const nt = (e, t = []) => {
    B(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  hr = (e) => (e ? (B(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function uc(e) {
  const t = {}
  for (const S in e) S in Ui || (t[S] = e[S])
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
    L = fc(r),
    M = L && L[0],
    D = L && L[1],
    {
      onBeforeEnter: W,
      onEnter: J,
      onEnterCancelled: p,
      onLeave: _,
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
      const le = S ? V : J,
        H = () => T(q, S, re)
      nt(le, [q, H]),
        pr(() => {
          st(q, S ? c : i), Ue(q, S ? d : l), hr(le) || gr(q, s, M, H)
        })
    }
  return ie(t, {
    onBeforeEnter(S) {
      nt(W, [S]), Ue(S, i), Ue(S, o)
    },
    onBeforeAppear(S) {
      nt(I, [S]), Ue(S, c), Ue(S, u)
    },
    onEnter: K(!1),
    onAppear: K(!0),
    onLeave(S, q) {
      S._isLeaving = !0
      const re = () => A(S, q)
      Ue(S, h),
        pc(),
        Ue(S, m),
        pr(() => {
          S._isLeaving && (st(S, h), Ue(S, w), hr(_) || gr(S, s, D, re))
        }),
        nt(_, [S, re])
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
function fc(e) {
  if (e == null) return null
  if (Z(e)) return [Wn(e.enter), Wn(e.leave)]
  {
    const t = Wn(e)
    return [t, t]
  }
}
function Wn(e) {
  return fo(e)
}
function Ue(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Bt] || (e[Bt] = new Set())).add(t)
}
function st(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Bt]
  n && (n.delete(t), n.size || (e[Bt] = void 0))
}
function pr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let dc = 0
function gr(e, t, n, s) {
  const r = (e._endId = ++dc),
    i = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(i, n)
  const { type: o, timeout: l, propCount: c } = hc(e, t)
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
function hc(e, t) {
  const n = window.getComputedStyle(e),
    s = (L) => (n[L] || '').split(', '),
    r = s(`${Be}Delay`),
    i = s(`${Be}Duration`),
    o = mr(r, i),
    l = s(`${Rt}Delay`),
    c = s(`${Rt}Duration`),
    u = mr(l, c)
  let d = null,
    h = 0,
    m = 0
  t === Be
    ? o > 0 && ((d = Be), (h = o), (m = i.length))
    : t === Rt
    ? u > 0 && ((d = Rt), (h = u), (m = c.length))
    : ((h = Math.max(o, u)),
      (d = h > 0 ? (o > u ? Be : Rt) : null),
      (m = d ? (d === Be ? i.length : c.length) : 0))
  const w =
    d === Be && /\b(transform|all)(,|$)/.test(s(`${Be}Property`).toString())
  return { type: d, timeout: h, propCount: m, hasTransform: w }
}
function mr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => _r(n) + _r(e[s])))
}
function _r(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function pc() {
  return document.body.offsetHeight
}
function gc(e, t, n) {
  const s = e[Bt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
const yr = Symbol('_vod'),
  mc = Symbol(''),
  _c = /(^|;)\s*display\s*:/
function yc(e, t, n) {
  const s = e.style,
    r = ne(n),
    i = s.display
  let o = !1
  if (n && !r) {
    if (t && !ne(t)) for (const l in t) n[l] == null && hs(s, l, '')
    for (const l in n) l === 'display' && (o = !0), hs(s, l, n[l])
  } else if (r) {
    if (t !== n) {
      const l = s[mc]
      l && (n += ';' + l), (s.cssText = n), (o = _c.test(n))
    }
  } else t && e.removeAttribute('style')
  yr in e && ((e[yr] = o ? s.display : ''), (s.display = i))
}
const br = /\s*!important$/
function hs(e, t, n) {
  if (B(n)) n.forEach((s) => hs(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = bc(e, t)
    br.test(n)
      ? e.setProperty(at(s), n.replace(br, ''), 'important')
      : (e[s] = n)
  }
}
const vr = ['Webkit', 'Moz', 'ms'],
  qn = {}
function bc(e, t) {
  const n = qn[t]
  if (n) return n
  let s = Me(t)
  if (s !== 'filter' && s in e) return (qn[t] = s)
  s = wn(s)
  for (let r = 0; r < vr.length; r++) {
    const i = vr[r] + s
    if (i in e) return (qn[t] = i)
  }
  return t
}
const wr = 'http://www.w3.org/1999/xlink'
function vc(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(wr, t.slice(6, t.length))
      : e.setAttributeNS(wr, t, n)
  else {
    const i = yo(t)
    n == null || (i && !Vr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : n)
  }
}
function wc(e, t, n, s, r, i, o) {
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
      ? (n = Vr(n))
      : n == null && u === 'string'
      ? ((n = ''), (c = !0))
      : u === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function Ec(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function Cc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Er = Symbol('_vei')
function xc(e, t, n, s, r = null) {
  const i = e[Er] || (e[Er] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = Sc(t)
    if (s) {
      const u = (i[t] = Rc(s, r))
      Ec(e, l, u, c)
    } else o && (Cc(e, l, o, c), (i[t] = void 0))
  }
}
const Cr = /(?:Once|Passive|Capture)$/
function Sc(e) {
  let t
  if (Cr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Cr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : at(e.slice(2)), t]
}
let Gn = 0
const Tc = Promise.resolve(),
  Ac = () => Gn || (Tc.then(() => (Gn = 0)), (Gn = Date.now()))
function Rc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Se(Oc(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = Ac()), n
}
function Oc(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const xr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Lc = (e, t, n, s, r, i, o, l, c) => {
    const u = r === 'svg'
    t === 'class'
      ? gc(e, s, u)
      : t === 'style'
      ? yc(e, n, s)
      : Ut(t)
      ? ms(t) || xc(e, t, n, s, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Ic(e, t, s, u)
        )
      ? wc(e, t, s, i, o, l, c)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        vc(e, t, s, u))
  }
function Ic(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && xr(t) && k(n))
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
  return xr(t) && ne(n) ? !1 : t in e
}
const Pc = ['ctrl', 'shift', 'alt', 'meta'],
  Mc = {
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
    exact: (e, t) => Pc.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  za = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
          const l = Mc[t[o]]
          if (l && l(r, t)) return
        }
        return e(r, ...i)
      })
    )
  },
  Nc = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Xa = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const i = at(r.key)
        if (t.some((o) => o === i || Nc[o] === i)) return e(r)
      })
    )
  },
  Fc = ie({ patchProp: Lc }, ac)
let zn,
  Sr = !1
function $c() {
  return (zn = Sr ? zn : Kl(Fc)), (Sr = !0), zn
}
const Ya = (...e) => {
  const t = $c().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = jc(s)
      if (r) return n(r, !0, Hc(r))
    }),
    t
  )
}
function Hc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function jc(e) {
  return ne(e) ? document.querySelector(e) : e
}
const Ja = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Dc = 'modulepreload',
  Vc = function (e) {
    return '/' + e
  },
  Tr = {},
  Qa = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link')
      r = Promise.all(
        n.map((o) => {
          if (((o = Vc(o)), o in Tr)) return
          Tr[o] = !0
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
            ((d.rel = l ? 'stylesheet' : Dc),
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
  Bc = window.__VP_SITE_DATA__
function $s(e) {
  return Ur() ? (wo(e), !0) : !1
}
function Ye(e) {
  return typeof e == 'function' ? e() : ri(e)
}
const ki = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const Uc = Object.prototype.toString,
  kc = (e) => Uc.call(e) === '[object Object]',
  $t = () => {},
  ps = Kc()
function Kc() {
  var e, t
  return (
    ki &&
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
function Wc(e, t) {
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
const Ki = (e) => e()
function qc(e = Ki) {
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
  return { isActive: xn(t), pause: n, resume: s, eventFilter: r }
}
function Gc(e) {
  return e || Nn()
}
function Wi(...e) {
  if (e.length !== 1) return Yo(...e)
  const t = e[0]
  return typeof t == 'function' ? xn(Go(() => ({ get: t, set: $t }))) : me(t)
}
function zc(e, t, n = {}) {
  const { eventFilter: s = Ki, ...r } = n
  return Xe(e, Wc(s, t), r)
}
function Xc(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: i, pause: o, resume: l, isActive: c } = qc(s)
  return {
    stop: zc(e, t, { ...r, eventFilter: i }),
    pause: o,
    resume: l,
    isActive: c,
  }
}
function qi(e, t = !0, n) {
  Gc() ? Tt(e, n) : t ? e() : Tn(e)
}
function gt(e) {
  var t
  const n = Ye(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const He = ki ? window : void 0
function Je(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = He))
      : ([t, n, s, r] = e),
    !t)
  )
    return $t
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
        const m = kc(h) ? { ...h } : h
        i.push(...n.flatMap((w) => s.map((L) => l(d, w, L, m))))
      },
      { immediate: !0, flush: 'post' },
    ),
    u = () => {
      c(), o()
    }
  return $s(u), u
}
let Ar = !1
function Za(e, t, n = {}) {
  const {
    window: s = He,
    ignore: r = [],
    capture: i = !0,
    detectIframe: o = !1,
  } = n
  if (!s) return $t
  ps &&
    !Ar &&
    ((Ar = !0),
    Array.from(s.document.body.children).forEach((m) =>
      m.addEventListener('click', $t),
    ),
    s.document.documentElement.addEventListener('click', $t))
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
function Yc(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
    ? (t) => t.key === e
    : Array.isArray(e)
    ? (t) => e.includes(t.key)
    : () => !0
}
function eu(...e) {
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
    c = Yc(t)
  return Je(
    r,
    i,
    (d) => {
      ;(d.repeat && Ye(l)) || (c(d) && n(d))
    },
    o,
  )
}
function Jc() {
  const e = me(!1),
    t = Nn()
  return (
    t &&
      Tt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Qc(e) {
  const t = Jc()
  return se(() => (t.value, !!e()))
}
function Zc(e, t = {}) {
  const { window: n = He } = t,
    s = Qc(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
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
    c = hi(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(Ye(e))),
        'addEventListener' in r
          ? r.addEventListener('change', o)
          : r.addListener(o),
        (i.value = r.matches))
    })
  return (
    $s(() => {
      c(), l(), (r = void 0)
    }),
    i
  )
}
const tn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  nn = '__vueuse_ssr_handlers__',
  ea = ta()
function ta() {
  return nn in tn || (tn[nn] = tn[nn] || {}), tn[nn]
}
function Gi(e, t) {
  return ea[e] || t
}
function na(e) {
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
const sa = {
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
  Rr = 'vueuse-storage'
function ra(e, t, n, s = {}) {
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
    M = (d ? ni : me)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = Gi('getDefaultStorage', () => {
        var T
        return (T = He) == null ? void 0 : T.localStorage
      })()
    } catch (T) {
      w(T)
    }
  if (!n) return M
  const D = Ye(t),
    W = na(D),
    J = (r = s.serializer) != null ? r : sa[W],
    { pause: p, resume: _ } = Xc(M, () => N(M.value), {
      flush: i,
      deep: o,
      eventFilter: m,
    })
  return (
    h &&
      l &&
      qi(() => {
        Je(h, 'storage', O), Je(h, Rr, V), L && O()
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
              new CustomEvent(Rr, {
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
          T ? Tn(_) : _()
        }
      }
    }
  }
}
function zi(e) {
  return Zc('(prefers-color-scheme: dark)', e)
}
function ia(e = {}) {
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
    m = zi({ window: r }),
    w = se(() => (m.value ? 'dark' : 'light')),
    L =
      c ||
      (o == null
        ? Wi(s)
        : ra(o, s, i, { window: r, listenToStorageChanges: l })),
    M = se(() => (L.value === 'auto' ? w.value : L.value)),
    D = Gi('updateHTMLAttrs', (_, N, I) => {
      const V =
        typeof _ == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(_)
          : gt(_)
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
  function W(_) {
    var N
    D(t, n, (N = h[_]) != null ? N : _)
  }
  function J(_) {
    e.onChanged ? e.onChanged(_, W) : W(_)
  }
  Xe(M, J, { flush: 'post', immediate: !0 }), qi(() => J(M.value))
  const p = se({
    get() {
      return u ? L.value : M.value
    },
    set(_) {
      L.value = _
    },
  })
  try {
    return Object.assign(p, { store: L, system: w, state: M })
  } catch {
    return p
  }
}
function oa(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = He } = e,
    r = ia({
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
      r.system ? r.system.value : zi({ window: s }).value ? 'dark' : 'light',
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
function Xn(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
    ? e.documentElement
    : e
}
function Xi(e) {
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
    return !n || n.tagName === 'BODY' ? !1 : Xi(n)
  }
}
function la(e) {
  const t = e || window.event,
    n = t.target
  return Xi(n)
    ? !1
    : t.touches.length > 1
    ? !0
    : (t.preventDefault && t.preventDefault(), !1)
}
const sn = new WeakMap()
function tu(e, t = !1) {
  const n = me(t)
  let s = null,
    r
  Xe(
    Wi(e),
    (l) => {
      const c = Xn(Ye(l))
      if (c) {
        const u = c
        sn.get(u) || sn.set(u, r), n.value && (u.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const i = () => {
      const l = Xn(Ye(e))
      !l ||
        n.value ||
        (ps &&
          (s = Je(
            l,
            'touchmove',
            (c) => {
              la(c)
            },
            { passive: !1 },
          )),
        (l.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      var l
      const c = Xn(Ye(e))
      !c ||
        !n.value ||
        (ps && (s == null || s()),
        (c.style.overflow = (l = sn.get(c)) != null ? l : ''),
        sn.delete(c),
        (n.value = !1))
    }
  return (
    $s(o),
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
function nu(e = {}) {
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
var Yn = { BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0, SSR: !1 },
  ca = {}
const Yi = /^(?:[a-z]+:|\/\/)/i,
  aa = 'vitepress-theme-appearance',
  ua = /#.*$/,
  fa = /[?#].*$/,
  da = /(?:(^|\/)index)?\.(?:md|html)$/,
  Ce = typeof document < 'u',
  Ji = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function ha(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = Or(`/${e}`)), n)) return new RegExp(t).test(e)
  if (Or(t) !== e) return !1
  const s = t.match(ua)
  return s ? (Ce ? location.hash : '') === s[0] : !0
}
function Or(e) {
  return decodeURI(e).replace(fa, '').replace(da, '$1')
}
function pa(e) {
  return Yi.test(e)
}
function ga(e, t) {
  var s, r, i, o, l, c, u
  const n =
    Object.keys(e.locales).find(
      (d) => d !== 'root' && !pa(d) && ha(t, `/${d}/`, !0),
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
    head: Zi(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((u = e.locales[n]) == null ? void 0 : u.themeConfig),
    },
  })
}
function Qi(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = ma(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function ma(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
    ? ` | ${e}`
    : e === t
    ? ''
    : ` | ${t}`
}
function _a(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([i, o]) => i === n && o[r[0]] === r[1])
}
function Zi(e, t) {
  return [...e.filter((n) => !_a(t, n)), ...t]
}
const ya = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  ba = /^[a-z]:/i
function Lr(e) {
  const t = ba.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(ya, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const Jn = new Set()
function va(e) {
  if (Jn.size === 0) {
    const n =
      (typeof process == 'object' && ca.VITE_EXTRA_EXTENSIONS) ||
      (Yn == null ? void 0 : Yn.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => Jn.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !Jn.has(t.toLowerCase())
}
const wa = Symbol(),
  ct = ni(Bc)
function su(e) {
  const t = se(() => ga(ct.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? me(!0)
        : n
        ? oa({
            storageKey: aa,
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
    title: se(() => Qi(t.value, e.data)),
    description: se(() => e.data.description || t.value.description),
    isDark: s,
  }
}
function Ea() {
  const e = Et(wa)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function Ca(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function Ir(e) {
  return Yi.test(e) || !e.startsWith('/') ? e : Ca(ct.value.base, e)
}
function xa(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ce)) {
    const n = '/'
    t = Lr(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
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
  } else t = `./${Lr(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let cn = []
function ru(e) {
  cn.push(e),
    Pn(() => {
      cn = cn.filter((t) => t !== e)
    })
}
function Sa() {
  let e = ct.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = Pr(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = Pr(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function Pr(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const Ta = Symbol(),
  eo = 'http://a.com',
  Aa = () => ({ path: '/', component: null, data: Ji })
function iu(e, t) {
  const n = Cn(Aa()),
    s = { route: n, go: r }
  async function r(l = Ce ? location.href : '/') {
    var c, u
    ;(l = yn(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (Nr(l),
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
    const d = new URL(l, eo),
      h = (i = d.pathname)
    try {
      let w = await e(h)
      if (!w) throw new Error(`Page not found: ${h}`)
      if (i === h) {
        i = null
        const { default: L, __pageData: M } = w
        if (!L) throw new Error(`Invalid route component: ${L}`)
        ;(n.path = Ce ? h : Ir(h)),
          (n.component = Lt(L)),
          (n.data = Lt(M)),
          Ce &&
            Tn(() => {
              let D =
                ct.value.base +
                M.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!ct.value.cleanUrls && !D.endsWith('/') && (D += '.html'),
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
                  Mr(W, d.hash)
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
          const L = await fetch(ct.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await L.json()), await o(l, c, !0)
          return
        } catch {}
      i === h &&
        ((i = null),
        (n.path = Ce ? h : Ir(h)),
        (n.component = t ? Lt(t) : null),
        (n.data = Ji))
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
              va(w) &&
              (l.preventDefault(),
              w === D.pathname && M === D.search
                ? (L !== D.hash &&
                    (history.pushState(null, '', L),
                    window.dispatchEvent(new Event('hashchange'))),
                  L
                    ? Mr(u, L, u.classList.contains('header-anchor'))
                    : (Nr(h), window.scrollTo(0, 0)))
                : r(h))
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        await o(yn(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href)
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function Ra() {
  const e = Et(Ta)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function to() {
  return Ra().route
}
function Mr(e, t, n = !1) {
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
      o = window.scrollY + s.getBoundingClientRect().top - Sa() + i
    requestAnimationFrame(r)
  }
}
function Nr(e) {
  Ce &&
    yn(e) !== yn(location.href) &&
    (history.replaceState({ scrollPosition: window.scrollY }, document.title),
    history.pushState(null, '', e))
}
function yn(e) {
  const t = new URL(e, eo)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    ct.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const Qn = () => cn.forEach((e) => e()),
  ou = yi({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = to(),
        { site: n } = Ea()
      return () =>
        ds(e.as, n.value.contentProps ?? { style: { position: 'relative' } }, [
          t.component
            ? ds(t.component, {
                onVnodeMounted: Qn,
                onVnodeUpdated: Qn,
                onVnodeUnmounted: Qn,
              })
            : '404 Page Not Found',
        ])
    },
  }),
  lu = yi({
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
function cu() {
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
function au() {
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
          Oa(u).then(() => {
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
async function Oa(e) {
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
function uu(e, t) {
  let n = !0,
    s = []
  const r = (i) => {
    if (n) {
      ;(n = !1),
        i.forEach((l) => {
          const c = Zn(l)
          for (const u of document.head.children)
            if (u.isEqualNode(c)) {
              s.push(u)
              return
            }
        })
      return
    }
    const o = i.map(Zn)
    s.forEach((l, c) => {
      const u = o.findIndex((d) =>
        d == null ? void 0 : d.isEqualNode(l ?? null),
      )
      u !== -1 ? delete o[u] : (l == null || l.remove(), delete s[c])
    }),
      o.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...o].filter(Boolean))
  }
  hi(() => {
    const i = e.data,
      o = t.value,
      l = i && i.description,
      c = (i && i.frontmatter.head) || [],
      u = Qi(o, i)
    u !== document.title && (document.title = u)
    const d = l || o.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== d && h.setAttribute('content', d)
      : Zn(['meta', { name: 'description', content: d }]),
      r(Zi(o.head, Ia(c)))
  })
}
function Zn([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return n && (s.innerHTML = n), e === 'script' && !t.async && (s.async = !1), s
}
function La(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function Ia(e) {
  return e.filter((t) => !La(t))
}
const es = new Set(),
  no = () => document.createElement('link'),
  Pa = (e) => {
    const t = no()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  Ma = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let rn
const Na =
  Ce &&
  (rn = no()) &&
  rn.relList &&
  rn.relList.supports &&
  rn.relList.supports('prefetch')
    ? Pa
    : Ma
function fu() {
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
            if (!es.has(c)) {
              es.add(c)
              const u = xa(c)
              u && Na(u)
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
              (l !== location.pathname ? n.observe(i) : es.add(l)))
        })
      })
  }
  Tt(s)
  const r = to()
  Xe(() => r.path, s),
    Pn(() => {
      n && n.disconnect()
    })
}
export {
  ka as $,
  Pn as A,
  Va as B,
  wl as C,
  Sa as D,
  ja as E,
  ge as F,
  Ba as G,
  ni as H,
  ru as I,
  ae as J,
  Da as K,
  Yi as L,
  to as M,
  Jl as N,
  Et as O,
  Za as P,
  eu as Q,
  bs as R,
  Tn as S,
  Bi as T,
  nu as U,
  qa as V,
  xn as W,
  tu as X,
  Fl as Y,
  Xa as Z,
  Ja as _,
  Hi as a,
  za as a0,
  Ka as a1,
  uu as a2,
  Ta as a3,
  su as a4,
  wa as a5,
  ou as a6,
  lu as a7,
  ct as a8,
  Ya as a9,
  iu as aa,
  xa as ab,
  Qa as ac,
  fu as ad,
  au as ae,
  cu as af,
  ds as ag,
  Ni as b,
  Wa as c,
  yi as d,
  Ga as e,
  va as f,
  Ir as g,
  me as h,
  pa as i,
  Ce as j,
  se as k,
  Tt as l,
  $i as m,
  vs as n,
  Pi as o,
  ri as p,
  $a as q,
  Ua as r,
  Ha as s,
  Fa as t,
  Ea as u,
  ha as v,
  rl as w,
  Zc as x,
  Xe as y,
  hi as z,
}
