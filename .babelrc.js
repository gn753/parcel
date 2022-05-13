module.exports = { presets: ['@babel/preset-env'], plugins: [ ['@babel/plugin-transform-runtime'], [ '@emotion'],   [
    "module-resolver",
    {
      "alias": {
              "@src": "./src"
      }
    }
  ]]}