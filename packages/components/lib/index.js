'use strict'
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' },
})
const e = require('./utils/install.js'),
  t = require('./installs.js'),
  n = require('./Input/index.js'),
  o = require('./Button/index.js'),
  u = e.makeInstaller(t)
exports.PotInput = n.PotInput
exports.PotButton = o.PotButton
exports.default = u
