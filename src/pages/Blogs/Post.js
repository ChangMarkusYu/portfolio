import React from "react";
import Typography from '@mui/material/Typography';
import { graphql } from 'gatsby'

const Post = () => {
    return (
    <>
    <Typography variant="h4" align="center" sx={{mb: 1}}>
        <b>Post</b>
    </Typography>
    <Typography variant="h6" align="center" sx={{mb: 5}}>
        Something will happen eventually...
    </Typography>
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