const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true, // 启用动态导入支持
        inlineRequires: true // 提升性能
      }
    })
  }
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
