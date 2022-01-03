import React from "react";
import Typography from '@mui/material/Typography';
import { Link, graphql } from 'gatsby'

const Blogs = ({ data }) => {
    return (
        <>
        <Typography variant="h4" align="center" sx={{mb: 1}}>
            <b>Blogs</b>
        </Typography>
        <Typography variant="h6" align="center" sx={{mb: 5}}>
            Silly things that I wrote
        </Typography>

        <ul>
        {
            data.allMarkdownRemark.edges.map(({node}) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/Blogs/${node.fields.slug}`}>
                        {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))
        }
        </ul>
        </>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default Blogs;