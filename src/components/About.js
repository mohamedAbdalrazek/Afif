import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div className="about">
            <h1 className="special-heading">About Us</h1>
            <div className="about-content">
                <div className="left">
                    <img src={require("../images/test about1.png")} />
                </div>
                <div className="right">
                    <p>
                        Pariatur velit duis sint consectetur reprehenderit
                        fugiat consequat dolore dolor est sunt tempor. Voluptate
                        veniam quis dolor tempor elit ipsum officia cillum. Id
                        esse veniam tempor eiusmod eu ad exercitation eu elit
                        cillum labore. Ex culpa tempor Lorem aliqua ex ea magna
                        cupidatat ullamco in labore.
                    </p>
                    <h3>
                        Contact:
                    </h3>
                    <div className="email">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href = "mailto: support@afif.ai">support@afif.ai</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
