import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="landing" id="/">
            <div className="background">
            </div>
            <div className="left">
                <h1>Commodo elit exercitation..</h1>
                <p>
                    Consequat occaecat reprehenderit nulla duis et laboris non
                    Lorem velit. Sunt reprehenderit elit voluptate sint aliquip
                    minim mollit eu exercitation duis consectetur.
                </p>
                <div className="buttons">
                    <Link to="soon">
                        <img
                            alt="Get it on Google Play"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        />
                    </Link>
                    <Link to="soon">
                        <img
                            alt="Get it app store"
                            src={require("../images/pngwing.com.png")}
                        />
                    </Link>
                </div>
            </div>
            <div className="right">
                <img src={require("../images/test1.png")} />
            </div>
        </div>
    );
}
