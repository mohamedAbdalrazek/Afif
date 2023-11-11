import React from "react"; 
import { Link, useNavigate } from "react-router-dom";

export default function Soon(){
    return(
        <div className="soon">
            <img src={require("../images/logo.png")} />
            <p>
                Coming Soon...
            </p>
            <Link to="/" replace>
                Go Back
            </Link>
        </div>
    )
}