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
        <Typography variant="body1" align="left">
        {
            data.allFile.nodes.map(node => (
            <li key={node.name}>
                {node.name}
            </li>
            ))
        }
        </Typography>
        </ul>
        </>
    )
}

export const query = graphql`
    query MyQuery {
        allFile(filter: {name: {ne: ".git"}}) {
            nodes {
                name
            }
        }
    }
`

export default Blogs;