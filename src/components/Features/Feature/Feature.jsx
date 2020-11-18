import React from "react";

import classes from "./Feature.module.css";

const Feature = () => {
    return (
        <div className={classes.Feature}>
            <i className="fas fa-seedling"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis viverra massa. Sed nec rhoncus enim, sit amet efficitur erat.</p>
        </div>
    );
}

export default Feature;