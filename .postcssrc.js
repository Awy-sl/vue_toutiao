/*
 * postcss 配置
 */
module.exports = {
  plugins: {
    // "autoprefixer": {
    //   browsers: ["Android>=4.0", "ios>=8"]
    // },
    'postcss-pxtorem': {
      // 看文档 还能设置函数
      // rootValue: 37.5,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
