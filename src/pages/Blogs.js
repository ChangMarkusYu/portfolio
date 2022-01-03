import React from "react";
import Typography from '@mui/material/Typography';
import { graphql } from 'gatsby'

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
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: node.html }}/>
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
                    html
                }
            }
        }
    }
`

export default Blogs;