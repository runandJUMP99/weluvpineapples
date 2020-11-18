import React from "react";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <img src="https://firebasestorage.googleapis.com/v0/b/welovepineapples-50dbc.appspot.com/o/fruit-1853466_1920.jpg?alt=media&token=20861ffb-7d15-400e-a59d-b270ca1e886d" alt="Pineapples"/>
            <div className={classes.Text}>
                <h1>Is it truuuueeeee?</h1>
                <p>We do, we do, we do, we do - oooooo...</p>
                <button>Show Luv</button>
            </div>
        </div>
    );
}

export default Jumbotron;