import {
  d as g,
  h as c,
  E as e,
  o as p,
  c as k,
  J as i,
  w as n,
  m as s,
  t as y,
  a,
  V as u,
} from './chunks/framework.DzsyM-52.js'
const _ = { style: { 'margin-top': '15px' } },
  F = g({
    __name: 'basic',
    setup(d) {
      const t = c('option1')
      return (o, l) => {
        const h = e('PotRadio'),
          r = e('PotRadioGroup')
        return (
          p(),
          k('div', null, [
            i(
              r,
              {
                modelValue: t.value,
                'onUpdate:modelValue': l[0] || (l[0] = (E) => (t.value = E)),
              },
              {
                default: n(() => [
                  i(
                    h,
                    { value: 'option1' },
                    { default: n(() => [a('选项一')]), _: 1 },
                  ),
                  i(
                    h,
                    { value: 'option2' },
                    { default: n(() => [a('选项二')]), _: 1 },
                  ),
                  i(
                    h,
                    { value: 'option3' },
                    { default: n(() => [a('选项三')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            s('div', _, '你的选择为：' + y(t.value), 1),
          ])
        )
      }
    },
  }),
  m = s(
    'h1',
    { id: 'radio-单选框', tabindex: '-1' },
    [
      a('Radio 单选框 '),
      s(
        'a',
        {
          class: 'header-anchor',
          href: '#radio-单选框',
          'aria-label': 'Permalink to "Radio 单选框"',
        },
        '​',
      ),
    ],
    -1,
  ),
  b = s('p', null, '在一组备选项中进行单选', -1),
  P = s(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      a('基础用法 '),
      s(
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
  v = s(
    'p',
    null,
    '单选框不应该有太多的可选项， 如果你有很多的可选项，则应使用选择框',
    -1,
  ),
  C = u(
    `<details class="details custom-block"><summary>显示代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadioGroup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">checked</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项一&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项二&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;option3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;选项三&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">PotRadioGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;option1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="radiogroup-api" tabindex="-1">RadioGroup API <a class="header-anchor" href="#radiogroup-api" aria-label="Permalink to &quot;RadioGroup API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中项绑定值，必选</td><td><code>string</code></td><td>&#39;&#39;</td></tr></tbody></table><h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值，必选</td><td><code>string</code></td><td>&#39;&#39;</td></tr></tbody></table>`,
    7,
  ),
  R = JSON.parse(
    '{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md"}',
  ),
  A = { name: 'components/radio.md' },
  B = Object.assign(A, {
    setup(d) {
      return (t, o) => (p(), k('div', null, [m, b, P, v, i(F), C]))
    },
  })
export { R as __pageData, B as default }
