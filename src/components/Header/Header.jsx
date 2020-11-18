import React from "react";

import CTAButton from "../UI/CTAButton/CTAButton";
import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo />
            <div className={classes.Links}>
                <Links />
                <CTAButton />
            </div>
        </div>
    );
}

export default Header;