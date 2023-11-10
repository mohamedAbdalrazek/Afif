import React from "react";
import { Link } from "react-scroll";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    document.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
            if (isScrolled === false) {
                setIsScrolled(true);
                setShowNav(false)
            }
        } else {
            setIsScrolled(false);
        }
    });
    console.log();
    const scrollStyle = {
        backgroundColor: "rgba(0, 58, 64, 1)",
        paddingTop: "10px",
        paddingBottom: "10px",
    };
    const [showNav, setShowNav] = React.useState(false);
    const navClasses = classNames({
        nav: true,
        show: showNav,
    });
    const isSmall = window.screen.width <= 768
    return (
        <div >
            {isSmall && (
                <FontAwesomeIcon
                    icon={faBars}
                    className="open"
                    onClick={() => setShowNav(true)}
                />
            )}
            <div className={navClasses} style={isScrolled ? scrollStyle : {}}>
                {isSmall && (
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="close"
                        onClick={() => setShowNav(false)}
                    />
                )}
                <div className="logo">
                    <img src={require(!isSmall ? "../images/logo.png" : "../images/logo1.png")} />
                </div>

                <div className="links">
                    <Link
                        activeClass="active"
                        to="/"
                        smooth={true}
                        duration={500}
                        // onSetActive={handleSetActive}?
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}
                        // onSetActive={handleSetActive}?
                    >
                        Services
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}
                        // onSetActive={handleSetActive}?
                    >
                        About
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-85}
                        duration={500}
                        // onSetActive={handleSetActive}?
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
