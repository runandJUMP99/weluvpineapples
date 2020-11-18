import React from "react";

import classes from "./Highlight.module.css";

const Highlight = () => {
    return (
        <div className={classes.Highlight}>
            <img src="https://firebasestorage.googleapis.com/v0/b/welovepineapples-50dbc.appspot.com/o/pineapple-1149668_1920.jpg?alt=media&token=af1b6b71-dd03-4cc7-802c-28b4bfac2cb9" alt="Floating Pineapples"/>
            <div className={classes.Text}>
                <h1>Perfect. Always.</h1>
                <p>No matter the occasion, pineapples always find a way to put us at ease. That's we we <em>Luv</em> em.</p>
                <button>Show Luv</button>
            </div>
        </div>
    );
}

export default Highlight;