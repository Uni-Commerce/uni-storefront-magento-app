const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')

module.exports = (baseConfig) => {
  const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname))
  const {
    resolver: { assetExts, sourceExts }
  } = defaultConfig

  /**
   * Metro configuration
   * https://reactnative.dev/docs/metro
   *
   * @type {import('@react-native/metro-config').MetroConfig}
   */
  const config = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: true, // 启用动态导入支持
          inlineRequires: true // 提升性能
        }
      })
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg']
    }
  }

  return wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config))
}
