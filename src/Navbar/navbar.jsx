import React, { useState, useEffect } from "react";
import MainLogo from "../Images/mainlogo.png";
import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ color }) => {
    const [mobilenav, setmobilenav] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    let link = location.pathname.split("/")[1];

    // Disable scroll when mobile nav is open
    useEffect(() => {
        if (mobilenav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobilenav]);

    // Handler for navigation to prevent multiple clicks
    const handleNavigation = (path) => {
        setmobilenav(false); // Close menu after clicking
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        navigate(path);
    };

    return (
        <>
            <div className="nav" style={{ color: color ? color : "black" }}>
                <div className="nav-title">
                    <div className="nav-left-title" onClick={() => navigate("/")}>
                        <div>
                            <img src={MainLogo} alt="mainlogo" className="mainlogo-img" />
                        </div>
                        <div>
                            VSR PAPER AND PACKAGING LIMITED
                        </div>
                    </div>
                    <div className="group-bars" onClick={() => setmobilenav(true)}>
                        <hr className="hr-bars" />
                        <hr className="hr-bars" />
                    </div>
                </div>
                <div className="nav-content">
                    <p className="nav-button" style={{ textDecoration: link === "" ? "underline" : "" }} onClick={() => navigate("/")}>Home</p>
                    <p className="nav-button" style={{ textDecoration: link === "about" ? "underline" : "" }} onClick={() => navigate("/about")}>About</p>
                    <p className="nav-button" style={{ textDecoration: link === "products" ? "underline" : "" }} onClick={() => navigate("/products")}>Products</p>
                    <p className="nav-button" style={{ textDecoration: link === "machinery" ? "underline" : "" }} onClick={() => navigate("/machinery")}>Machinery</p>
                    <p className="nav-button" style={{ textDecoration: link === "contact" ? "underline" : "" }} onClick={() => navigate("/contact")}>Contact</p>
                </div>
                {mobilenav && (
                    <div className="nav-mobile-content">
                        <div className="nav-mobile-title">
                            <div>VSR PAPER AND PACKAGING</div>
                            <div className="nav-mobile-close" onClick={() => setmobilenav(false)}>
                                &#10005;
                            </div>
                        </div>
                        <div className="nav-mobile-navs">
                            <p 
                                className="nav-mobile-button" 
                                style={{ textDecoration: link === "" ? "underline" : "" }} 
                                onClick={() => handleNavigation("/")}
                            >
                                Home
                            </p>
                            <p 
                                className="nav-mobile-button" 
                                style={{ textDecoration: link === "about" ? "underline" : "" }} 
                                onClick={() => handleNavigation("/about")}
                            >
                                About
                            </p>
                            <p 
                                className="nav-mobile-button" 
                                style={{ textDecoration: link === "products" ? "underline" : "" }}
                                onClick={() => handleNavigation("/products")}
                            >
                                Products
                            </p>
                            <p 
                                className="nav-mobile-button" 
                                style={{ textDecoration: link === "machinery" ? "underline" : "" }}
                                onClick={() => handleNavigation("/machinery")}
                            >
                                Machinery
                            </p>
                            <p 
                                className="nav-mobile-button" 
                                style={{ textDecoration: link === "contact" ? "underline" : "" }}
                                onClick={() => handleNavigation("/contact")}
                            >
                                Contact
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar;
