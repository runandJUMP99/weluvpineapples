import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <div className={classes.Links}>
            <Link name="Link1" />
            <Link name="Link2" />
            <Link name="Link3" />
        </div>
    );
}

export default Links;