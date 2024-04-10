import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/potati-ui/',
  outDir: './dist',
  title: 'Potati UI',
  description: '一个Vue3组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/index' },
      { text: '组件库', link: '/components/button' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Icon 图标', link: '/components/icon' },
          ],
        },
      ],

      '/guide/': [
        {
          text: '快速开始',
          link: '/guide/index',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})