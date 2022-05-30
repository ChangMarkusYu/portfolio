import React from "react"
import { Layout } from "./src/components/Layout";
require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./src/assets/prism-layout.css")

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
    return (
        <Layout>
            {element}
        </Layout>
    );
}