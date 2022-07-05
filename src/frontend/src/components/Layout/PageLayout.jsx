import React from "react";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => (
    <div className="layout">
        <Sidebar />
        {children}
    </div>
);


export default PageLayout;