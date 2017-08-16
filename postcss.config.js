module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-hexrgba'),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 9'],
      features: {
        applyRule: true,
        calc: true,
        autoprefixer: true
      },
      warnForDuplicates: false
    }),
    require('cssnano')({zIndex: false})
  ]
};
