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
        }
    ],
};