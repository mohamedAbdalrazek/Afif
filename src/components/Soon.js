import React from "react"; 
import { Link } from "react-router-dom";

export default function Soon(){
    return(
        <div className="soon">
            <img src={require("../images/logo.png")} />
            <p>
                Coming Soon...
            </p>
            <Link to="/">
                Go Back
            </Link>
        </div>
    )
}