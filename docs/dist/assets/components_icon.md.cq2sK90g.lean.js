import {
  N as e,
  o as l,
  a as h,
  k as i,
  $ as p,
} from './chunks/framework.D7pjZlIy.js'
if (typeof window < 'u') {
  let a = function () {
    var n = document.body,
      s = document.getElementById('__svg__icons__dom__')
    s ||
      ((s = document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
      (s.style.position = 'absolute'),
      (s.style.width = '0'),
      (s.style.height = '0'),
      (s.id = '__svg__icons__dom__'),
      s.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
      s.setAttribute('xmlns:link', 'http://www.w3.org/1999/xlink')),
      (s.innerHTML =
        '<symbol class="icon" viewBox="0 0 1024 1024"   id="icon-add-btn"><path d="M482.669714 541.330286h-205.336381v-58.660572h205.336381v-205.336381h58.660572v205.336381h205.336381v58.660572h-205.336381v205.336381h-58.660572v-205.336381z" p-id="8242" /><path d="M512 938.666667c235.641905 0 426.666667-191.024762 426.666667-426.666667S747.641905 85.333333 512 85.333333 85.333333 276.358095 85.333333 512 276.358095 938.666667 512 938.666667z m0-58.660572c-203.239619 0-368.006095-164.766476-368.006095-368.006095 0-203.239619 164.766476-368.006095 368.006095-368.006095 203.239619 0 368.006095 164.766476 368.006095 368.006095 0 203.239619-164.766476 368.006095-368.006095 368.006095z" p-id="8243" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-pause"><path d="M405.333333 362.666667h58.660572V682.666667h-58.660572V362.666667zM618.666667 362.666667h-58.660572V682.666667h58.660572V362.666667z" p-id="8781" /><path d="M512 938.666667c235.641905 0 426.666667-191.024762 426.666667-426.666667S747.641905 85.333333 512 85.333333 85.333333 276.358095 85.333333 512 276.358095 938.666667 512 938.666667z m0-58.660572c-203.239619 0-368.006095-164.766476-368.006095-368.006095 0-203.239619 164.766476-368.006095 368.006095-368.006095 203.239619 0 368.006095 164.766476 368.006095 368.006095 0 203.239619-164.766476 368.006095-368.006095 368.006095z" p-id="8782" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-play"><path d="M680.057905 484.62019c20.601905 12.434286 20.601905 42.300952 0 54.75962l-242.176 146.480761c-21.308952 12.897524-48.542476-2.462476-48.542476-27.379809V365.519238a31.98781 31.98781 0 0 1 48.566857-27.379809l242.151619 146.480761z m-232.057905-71.801904v198.363428L611.986286 512l-163.986286-99.181714z" p-id="8598" /><path d="M938.666667 512c0 235.641905-191.024762 426.666667-426.666667 426.666667S85.333333 747.641905 85.333333 512 276.358095 85.333333 512 85.333333 938.666667 276.358095 938.666667 512z m-58.660572 0c0-203.239619-164.766476-368.006095-368.006095-368.006095-203.239619 0-368.006095 164.766476-368.006095 368.006095 0 203.239619 164.766476 368.006095 368.006095 368.006095 203.239619 0 368.006095-164.766476 368.006095-368.006095z" p-id="8599" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"   id="icon-reduce-btn"><path d="M277.333333 541.330286h469.333334v-58.660572h-469.333334v58.660572z" p-id="8403" /><path d="M938.666667 512c0 235.641905-191.024762 426.666667-426.666667 426.666667S85.333333 747.641905 85.333333 512 276.358095 85.333333 512 85.333333 938.666667 276.358095 938.666667 512z m-58.660572 0c0-203.239619-164.766476-368.006095-368.006095-368.006095-203.239619 0-368.006095 164.766476-368.006095 368.006095 0 203.239619 164.766476 368.006095 368.006095 368.006095 203.239619 0 368.006095-164.766476 368.006095-368.006095z" p-id="8404" /></symbol>'),
      n.insertBefore(s, n.lastChild)
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', a)
    : a()
}
const k = { class: 'icon-box' },
  E = {
    __name: 'basic',
    setup(a) {
      return (n, s) => {
        const t = e('PotIcon')
        return (
          l(),
          h('div', k, [
            i(t, { 'icon-class': 'play' }),
            i(t, { 'icon-class': 'pause' }),
            i(t, { 'icon-class': 'add-btn' }),
            i(t, { 'icon-class': 'reduce-btn' }),
          ])
        )
      }
    },
  },
  d = p('', 9),
  o = p('', 4),
  g = JSON.parse(
    '{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md"}',
  ),
  r = { name: 'components/icon.md' },
  y = Object.assign(r, {
    setup(a) {
      return (n, s) => (l(), h('div', null, [d, i(E), o]))
    },
  })
export { g as __pageData, y as default }
