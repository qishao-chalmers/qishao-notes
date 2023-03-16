const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "qishao-notes",
  description: 'vdoing博客主题模板',
  base: '/qishao-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "bf6ab1891433c9f0a781",
        clientSecret: "6dc23551d5b49b91364fb55d0ab5163c3f5cd9e0",
        owner: "hitqshao",
        repo: "qishao-notes",
      },
    ],
  ],
  themeConfig,
}
