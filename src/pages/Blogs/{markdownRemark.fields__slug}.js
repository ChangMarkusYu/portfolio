import React from "react";
import Typography from '@mui/material/Typography';
import { graphql } from 'gatsby'

const Post = ({ data }) => {
    const node = data.markdownRemark;

    return (
    <>
    <Typography variant="h4" align="center" sx={{mb: 1}}>
        <b>{node.frontmatter.title}</b>
    </Typography>
    <Typography variant="h6" align="center" sx={{mb: 5}}>
        Written by Chang Yu, {node.frontmatter.date}
    </Typography>
    <div dangerouslySetInnerHTML={{ __html: node.html }}/>
    </>
    )
}

export const query = graphql`
    query ($id: String) {
        markdownRemark(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            html
        }
    }
`

export default Post;