import React from "react";
import MainLogo from "../Images/mainlogo.png"
import "./about.css";
import aboutmainimg from "../Images/aboutmainimg.jpeg"
import aboutrightimg from "../Images/aboutusrightimg.jpeg"
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";



const About = () => {
    const navigate = useNavigate();

    const handleViewProducts = () => {
        window.scrollTo(0, 0);
        navigate('/products');
    };

    return (
        <>
            <div className="about">
                <Navbar />
                <div className="about-img">
                    <img src={aboutmainimg} alt="main-img" className="blurred-image" />
                    <div className="content">
                        <div className="about-img-title">Explore Our Products</div>
                        <button 
                            className="about-viewbtn" 
                            onClick={handleViewProducts}
                            aria-label="View our products page"
                        >
                            View Our Products
                        </button>
                    </div>
                </div>
                <div className="about-data">
                    <div className="about-para-data">
                        <p className="about-para-title">About Us</p>
                        <p className="about-para-text">VSR Paper and Packaging Ltd. (VSRPPL) was established in Bangalore with the aim of delivering
                            high-quality printing of paper and paperboard products. Our skilled team is committed to excellence
                            in manufacturing, ensuring that our products meet rigorous standards.</p>
                        <p className="about-para-text">We take pride in our innovation and responsiveness to customer needs, distinguishing our story
                            within a competitive industry. Our facilities in Hyderabad are dedicated to producing reliable
                            printing and packaging materials that cater to various requirements</p>
                    </div>
                    <div className="about-para-data-img">
                        <img src={aboutrightimg} alt="about-img" className="about-para-img"/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
