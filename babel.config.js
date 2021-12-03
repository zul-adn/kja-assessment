module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
    env: {
      production: {},
    },
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json", ".svg"],
          alias: {
            "@images": "./assets/images",
            "@svg": "./assets/svg",
            "@components": "./app/components",
            "@config": "./app/config",
            "@translate": "./app/i18n",
            "@models": "./app/models",
            "@navigators": "./app/navigators",
            "@screens": "./app/screens",
            "@api": "./app/services/api",
            "@theme": "./app/theme",
            "@utils": "./app/utils",
          },
          root: ["./"],
        },
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          runtime: "automatic",
        },
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      ["@babel/plugin-proposal-optional-catch-binding"],
      ["react-native-reanimated/plugin"],
    ],
  }
}
// module.exports = {
//   presets: [
//     'babel-preset-expo',
//     'module:metro-react-native-babel-preset',
//   ],
//   env: {
//     production: {},
//   },
//   plugins: [
//     [
//       'module-resolver',
//       {
//         extensions: [
//           '.ios.js',
//           '.android.js',
//           '.js',
//           '.ts',
//           '.tsx',
//           '.json',
//           '.svg',
//         ],
//         alias: {
//           '@images': './assets/images',
//           '@svg': './assets/svg',
//           '@components': './app/components',
//           '@config': './app/config',
//           '@translate': './app/i18n',
//           '@models': './app/models',
//           '@navigators': './app/navigators',
//           '@screens': './app/screens',
//           '@api': './app/services/api',
//           '@theme': './app/theme',
//           '@utils': './app/utils',
//         },
//         root: ['./'],
//       },
//     ],
//     [
//       '@babel/plugin-transform-react-jsx',
//       {
//         runtime: 'automatic',
//       },
//     ],
//     [
//       '@babel/plugin-proposal-decorators',
//       {
//         legacy: true,
//       },
//     ],
//     ['@babel/plugin-proposal-optional-catch-binding'],
//   ],
// };
