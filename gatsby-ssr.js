import React from "react"
import { RootWrapper } from "./src/components/RootWrapper";

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
    return (
        <RootWrapper>
            {element}
        </RootWrapper>
    );
}