const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, //正则表达式
        // 1.loader的写法(语法糖)
        // loader: "css-loader"

        // 2.完整的写法, 写成数组的格式是因为加载css文件的时候css-loader搞不定(只加css-loader可能样式无效,这个loader只是可以加载css文件,还要使用style-loader生成一个style标签添加到dom里面才生效),还要加其他loader
        // use: "css-loader"
        use: [
         // 在use里面使用多个loader, 是有执行顺序的, 从后面开始执行, css-loader要写在style-loader后面
          // {loader: "css-loader"}  可以这样写
          "style-loader", // 也可以这样写
          "css-loader",
          "postcss-loader"
          // {   // 有时候要给loader进行配置一些参数, 所以要写成对象的格式, 这个loader的配置写在了外面postcss.config.js 这个文件, postcss-loader发现这里没有配置信息就去外面找, 都写在这里不好维护
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer")
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "less-loader"
      //   ]
      // }
    ]
  }
}
