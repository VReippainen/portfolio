/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
})
