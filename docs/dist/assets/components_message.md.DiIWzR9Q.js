import { a as t } from './chunks/theme.D_nzjXxa.js'
import {
  d as o,
  M as c,
  o as p,
  a as k,
  k as a,
  w as e,
  b as s,
  e as i,
  $ as g,
} from './chunks/framework.CD4fBMdo.js'
const y = o({
    __name: 'basic',
    setup(d) {
      function l() {
        t({ type: 'info', message: '这是一条Info类型的消息' })
      }
      function h() {
        t({ type: 'success', message: '这是一条Success类型的消息' })
      }
      function r() {
        t({ type: 'error', message: '这是一条Error类型的消息' })
      }
      function E() {
        t({ type: 'warning', message: '这是一条Warning类型的消息' })
      }
      return (b, B) => {
        const n = c('PotButton')
        return (
          p(),
          k('div', null, [
            a(n, { onClick: l }, { default: e(() => [s('info')]), _: 1 }),
            a(n, { onClick: h }, { default: e(() => [s('success')]), _: 1 }),
            a(n, { onClick: r }, { default: e(() => [s('error')]), _: 1 }),
            a(n, { onClick: E }, { default: e(() => [s('warning')]), _: 1 }),
          ])
        )
      }
    },
  }),
  u = i(
    'h1',
    { id: 'message-消息提示', tabindex: '-1' },
    [
      s('Message 消息提示 '),
      i(
        'a',
        {
          class: 'header-anchor',
          href: '#message-消息提示',
          'aria-label': 'Permalink to "Message 消息提示"',
        },
        '​',
      ),
    ],
    -1,
  ),
  F = i(
    'p',
    null,
    '常用于主动操作后的反馈提示，一共有四种状态「消息、成功、错误、警告」',
    -1,
  ),
  _ = i(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      s('基础用法 '),
      i(
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
  m = i(
    'p',
    null,
    [
      s('从顶部出现，默认只显示3秒（当参数'),
      i('code', null, 'duration'),
      s('设置为0时，提示框需要调用返回的'),
      i('code', null, 'close'),
      s('方法，才会消失）'),
    ],
    -1,
  ),
  f = g(
    `<details class="details custom-block"><summary>显示代码</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  PotMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;info&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一条Info类型的消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  PotMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一条Success类型的消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  PotMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一条Error类型的消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> warning</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  PotMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;warning&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;这是一条Warning类型的消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>提示类型，非必选</td><td><code>string</code></td><td><code>info</code></td></tr><tr><td>message</td><td>消息内容，必选</td><td><code>string</code></td><td>-</td></tr><tr><td>duration</td><td>消息停留时间，非必选</td><td><code>number</code></td><td><code>3000</code></td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><p>调用<code>PotMessage</code>或者<code>getCurrentInstance().appContext.config.globalProperties.$message</code>（完整导入可用）会返回当前 Message 的实例</p><p>如果需要手动关闭实例，可以调用它的 close 方法</p><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>close</td><td>关闭当前Message</td><td><code>Function</code></td></tr></tbody></table>`,
    8,
  ),
  x = JSON.parse(
    '{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md"}',
  ),
  C = { name: 'components/message.md' },
  A = Object.assign(C, {
    setup(d) {
      return (l, h) => (p(), k('div', null, [u, F, _, m, a(y), f]))
    },
  })
export { x as __pageData, A as default }
