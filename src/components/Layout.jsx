import React from "react";

import Features from "./Features/Features";
import Header from "./Header/Header";
import Highlight from "./Highlight/Highlight";
import Jumbotron from "./Jumbotron/Jumbotron";

const Layout = () => {
    return (
        <div>
            <Header />
            <Jumbotron />
            <Features />
            <Highlight />
        </div>
    )
}

export default Layout;