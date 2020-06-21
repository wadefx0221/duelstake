const mix = require('laravel-mix');
mix.options({
    postCss: [
        require('autoprefixer')({
            browsers: ['last 40 versions'],
        })
    ]
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(path.normalize('../public_html'));

mix.js('resources/js/app.js', 'js')
    .js('resources/js/bootstrap.js', 'js')
    .js('resources/js/laravel-echo-setup.js', 'js')
    .sass('resources/sass/app.scss', 'css');