import React from "react";
import Typography from '@mui/material/Typography';
import { Link, graphql } from 'gatsby'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Blogs = ({ data }) => {
    return (
        <>
        <Typography variant="h4" align="center" sx={{mb: 1}}>
            <b>Blogs</b>
        </Typography>
        <Typography variant="h6" align="center" sx={{mb: 5}}>
            Silly things that I wrote
        </Typography>

        <Stack direction="column">
        {
            data.allMarkdownRemark.edges.map(({node}) => (
                <Button variant="text" key={node.id} color="inherit" component={Link} to={`/Blogs/${node.fields.slug}`}>
                    <Stack flexGrow={1} direction="row" justifyContent="space-between">
                        <Typography variant="body1">{node.frontmatter.title}</Typography>
                        <Typography variant="caption">{node.frontmatter.date}</Typography>
                    </Stack>
                </Button>
            ))
        }
        </Stack>
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
                        date(formatString: "MMM DD, YYYY")
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