/* eslint-disable @typescript-eslint/no-var-requires */
// 引入 CDN 资源
const { CDN } = require("./examples/utils/cdn");

// 引入path模块
const path = require("path");
// 设置绝对路径
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: "./",
  // 静态资源目录
  assetsDir: "assets",
  // 配置 scss 预置数据
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/common/index.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias.set("@", resolve("./examples"));

    // 配置 svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("svg-sprite-loader").loader("svg-sprite-loader").options({
      symbolId: "icon-[name]",
    });

    // 添加配置对 packages 目录的支持
    config.module
      .rule("js")
      .include.add("/packages/")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });

    // 配置 markdown 文档
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader(path.resolve(__dirname, "./examples/utils/md-loader/index.js"))
      .options({
        raw: true,
      });
  },
  configureWebpack: {
    // 忽略打包第三方库
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      "vue-i18n": "VueI18n",
    },
  },
  pages: {
    // 首页配置CDN
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"],
      cdn: CDN[process.env.VUE_APP_ENV],
    },
  },
};
