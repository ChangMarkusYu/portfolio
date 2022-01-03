const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        let slug = createFilePath({ node, getNode, basePath: `pages` });
        slug = slug.slice(1, slug.length - 1);
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
}