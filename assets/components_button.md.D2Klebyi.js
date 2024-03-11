import {
  _ as o,
  E as p,
  o as e,
  c as n,
  J as i,
  m as t,
  a as s,
  V as d,
} from './chunks/framework.DzsyM-52.js'
const r = {}
function k(l, h) {
  const a = p('PotButton')
  return e(), n('div', null, [i(a), i(a, { type: 'yellow' })])
}
const c = o(r, [['render', k]]),
  E = t(
    'h1',
    { id: 'button-按钮', tabindex: '-1' },
    [
      s('Button 按钮 '),
      t(
        'a',
        {
          class: 'header-anchor',
          href: '#button-按钮',
          'aria-label': 'Permalink to "Button 按钮"',
        },
        '​',
      ),
    ],
    -1,
  ),
  _ = t('p', null, '常用的操作按钮。', -1),
  u = t(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      s('基础用法 '),
      t(
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
  g = t(
    'p',
    null,
    [
      s('按钮可以根据 '),
      t('code', null, 'type'),
      s(' 来设置不同的颜色，如'),
      t('code', null, 'yellow'),
    ],
    -1,
  ),
  y = d(
    `<details class="details custom-block"><summary>显示代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Default&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yellow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>颜色种类，非必选</td><td><code>string</code></td><td>—</td></tr></tbody></table>`,
    4,
  ),
  P = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}',
  ),
  m = { name: 'components/button.md' },
  f = Object.assign(m, {
    setup(l) {
      return (h, a) => (e(), n('div', null, [E, _, u, g, i(c), y]))
    },
  })
export { P as __pageData, f as default }
