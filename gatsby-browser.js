import React from "react"
import { RootWrapper } from "./src/components/RootWrapper";
require("prismjs/themes/prism-okaidia.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./src/assets/prism-layout.css")

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    return (
        <RootWrapper>
            {element}
        </RootWrapper>
    );
}