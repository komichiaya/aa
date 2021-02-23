const path = require("path");

module.exports = {
  productionSourceMap: false, //不生成map 文件
  // 只能写vue封装的配置

  runtimeCompiler: true,
  // 关闭EsLint的规则
  lintOnSave: false,

  configureWebpack: {
    // 内部写webpack原生配置
    resolve: {
      extensions: [".js", ".vue", ".json"], // 可以省略的后缀名
      alias: {
        // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
      },
    },
  },
};
