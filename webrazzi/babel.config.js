module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
          pages: "./app/pages",
          components: "./app/components",
          support: "./app/support"
        }
      }
    ]
  ]
};
