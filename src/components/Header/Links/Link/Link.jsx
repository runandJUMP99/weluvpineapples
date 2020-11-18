import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
    return  (
        <div className={classes.Link}>
            {props.name}
        </div>
    );
}

export default Link;