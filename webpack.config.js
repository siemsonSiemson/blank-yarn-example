var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('init', './assets/js/init.js')
    .addEntry('app', './assets/js/app.js')

    // .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
