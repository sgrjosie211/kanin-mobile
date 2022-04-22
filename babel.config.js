module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/env',
      {
        forceAllTransforms: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: { version: '3.18.1', proposals: true },
      },
    ],
    ['@babel/react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
  ],
}
