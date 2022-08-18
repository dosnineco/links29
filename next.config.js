module.exports = {
  optimizeFonts: true,
  swcMinify: true,
  images:{
    formats: ['image/avif', 'image/webp'],
    domains: ['https://image.shields.io/badge'],
  },
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js','html'],
 
 
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
         
          },
        }
      ]
    })

    return config
  }
}






