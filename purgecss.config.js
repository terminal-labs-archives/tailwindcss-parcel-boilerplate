module.exports = {
  content: ['./src/**/*.html', './src/**/*.svg', './src/**/*.js'],
  css: ['css/codemirror.css'],
  extractors: [
    {
      extensions: ['html', 'svg', 'js'],
      extractor: class TailwindExtractor {
        static extract (content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || []
        }
      },
    },
  ],
}
