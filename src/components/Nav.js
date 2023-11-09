import React from "react";
import { Link } from "react-scroll";

export default function Nav() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    document.addEventListener("scroll", () => {
        if (window.scrollY > 1) {
            if (isScrolled === false) {
                setIsScrolled(true);
            }
        } else {
            setIsScrolled(false);
        }
    });
    const scrollStyle = {
        backgroundColor: "rgba(0, 58, 64, 1)",
        paddingTop: "10px",
        paddingBottom: "10px",
    };
    return (
        <div className="nav" style={isScrolled ? scrollStyle : {}}>
            <div className="logo">
                <img src={require("../images/logo.png")} />
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
    );
}
