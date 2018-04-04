let mix = require('laravel-mix');

mix.disableNotifications();
mix.setPublicPath('dist/');

mix.js('src/scripts/main.js', '')
    .sass('src/styles/main.scss', '')
    .sourceMaps()
    .version()
    .browserSync({
        proxy: 'lyricalscience.localhost',
        files: [
            'src/scripts/**/*.js',
            'src/styles/**/*.scss',
            'src/scripts/**/*.vue',
            '*.html'
        ],
        notify: false,
    });

mix.copyDirectory('./src/images', './dist/images');