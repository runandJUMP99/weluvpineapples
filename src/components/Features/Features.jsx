import React from "react";

import Feature from "./Feature/Feature";

import classes from "./Features.module.css";

const Features = () => {
    return (
        <div className={classes.FeaturesContainer}>
            <h1>Why do we <em>Luv</em> Pineapples?</h1>
            <div className={classes.Features}>
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    )
}

export default Features;