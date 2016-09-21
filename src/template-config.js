/**
 * Default options for the html-webpack-plugin HTML renderer
 *
 * See https://github.com/ampedandwired/html-webpack-plugin#configuration
 * for possible options. Any other options will be available to the template
 * under `htmlWebpackPlugin.options`
 */

module.exports = {
    // html-webpack-plugin options
    template: './src/template.ejs',
    inject: false,

    // Search and metadata
    title: 'Coding for Young Children',
    description:
        'With ScratchJr, young children (ages 5-7) can program their ' +
        'own interactive stories and games.',

    // override if mobile-friendly
    viewportWidth: 'device-width',

    // Open graph
    og_image: 'https://www.scratchjr.org/images/scratchjrlogo.png',
    og_image_type: 'image/png',
    og_image_width: 1337,
    og_image_height: 367,

    // Analytics & Monitoring
    ga_tracker: process.env.GA_TRACKER || ''
};
