module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: 
            {
                icon: 'src/assets/favicon.png',      
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: 
            {
                name: `content`,
                path: `${__dirname}/content`,
            }
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: 
            {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: 
                        {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: true,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
                            escapeEntities: {},
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: 
                        {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
    ],
};