import React from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";

export const UIFrame = ({changeTheme, dark}) => {
    return (
        <>
            <SideBar/>
            <TopBar changeTheme={changeTheme} dark={dark}/>
            <BottomBar/>
        </>
    )
}