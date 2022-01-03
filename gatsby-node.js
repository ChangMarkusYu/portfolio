const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = slugify(createFilePath({ node, getNode, basePath: `pages` }));
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
}

// Credit: Tania Rascia
// [https://github.com/taniarascia/taniarascia.com/blob/master/gatsby-node.js]
function slugify(str) {
    return (
        str &&
        str
            .match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map((x) => x.toLowerCase())
            .join('-')
    )
}