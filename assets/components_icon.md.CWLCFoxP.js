import {
  E as e,
  o as l,
  c as h,
  J as i,
  V as p,
} from './chunks/framework.BTLdhyVs.js'
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
  d = p(
    `<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标&quot;">​</a></h1><p>PotatiUI 仅提供图标组件，不提供具体的图标，需在项目中自行引入相应<strong>svg图标</strong>和<strong>插件</strong>进行使用：</p><ol><li>安装<code>vite-plugin-svg-icons</code>插件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm add vite-plugin-svg-icons -D</span></span></code></pre></div><ol start="2"><li>在<code>vite.config.ts</code>中进行如下配置：</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;node:path&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createSvgIconsPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite-plugin-svg-icons&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    createSvgIconsPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      iconDirs: [path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;assets/icon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// svg图标所在文件夹位置，可按实际情况进行修改</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      symbolId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icon-[name]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      svgoOptions: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        plugins: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;removeAttrs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              attrs: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fill&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><ol start="3"><li>在项目的入口文件中：</li></ol><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;virtual:svg-icons-register&#39;</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`,
    9,
  ),
  o = p(
    `<details class="details custom-block"><summary>显示代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;30px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;blue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;play&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pause&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;add-btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> icon-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reduce-btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>icon-class</td><td>svg文件名称，必选</td><td><code>string</code></td><td>—</td></tr></tbody></table>`,
    4,
  ),
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
