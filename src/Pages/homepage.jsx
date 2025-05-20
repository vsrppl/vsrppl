import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import textbookicon from "../Images/textbook.jpeg"
import calendaricon from "../Images/calendars.jpeg"
import cartonsicon from "../Images/image.jpg"
import "./homepage.css"
import offsetimg from "../Images/cover1.jpg"
import laminateimg from "../Images/laminateimgs.png"
import pastingimg from "../Images/random.jpg"
import homeimg from "../Images/homeimage.jpeg"
import cartonimg from "../Images/cartons.jpg"
import booksimg from "../Images/books.jpeg"
import othersimg from "../Images/others.jpeg"
import cartonimage from "../Images/cover2.jpg"


const HomePage = () => {
    // Add navigate hook for redirection
    const navigate = useNavigate();
    
    // Function to handle carousel image click
    const handleCarouselImageClick = () => {
        // Navigate to contact page
        navigate('/contact');
    };

    return (
        <>
            <Navbar />
            <div className="main-home">
                {/* Hero Carousel Section */}
                <div className="hero-carousel">
                    <Carousel 
                        autoPlay={true} 
                        infiniteLoop={true}
                        interval={3000}
                        showStatus={false}
                        showThumbs={false}
                        showArrows={true}
                        swipeable={true}
                        emulateTouch={true}
                        dynamicHeight={false}
                        className="main-carousel"
                    >
                        <div className="carousel-slide" onClick={handleCarouselImageClick}>
                            <img src={offsetimg} alt="VSR Paper main visual" className="carousel-img" />
                        </div>
                        <div className="carousel-slide" onClick={handleCarouselImageClick}>
                            <img src={cartonimage} alt="VSR Paper carton products" className="carousel-img" />
                        </div>

                        <div className="carousel-slide" onClick={handleCarouselImageClick}>
                            <img src={pastingimg} alt="VSR Paper carton products" className="carousel-img" />
                        </div>

                         <div className="carousel-slide" onClick={handleCarouselImageClick}>
                            <img src={cartonimg} alt="VSR Paper carton products" className="carousel-img" />
                        </div>

                    </Carousel>
                </div>
                
                {/* Contact Us Button */}
                <div className="contact-button-container">
                    <Link to="/contact" className="contact-us-button">
                        <span>Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
                
                {/* Company Introduction */}
                <div className="company-introduction">
                    <h2 className="introduction-title">Welcome to VSR Paper and Packaging Limited</h2>
                    <div className="introduction-text">
                        <p>
                            VSR Paper and Packaging Ltd. (VSRPPL) is a Bangalore-based 
                            manufacturer of paper and paperboard products, printing and packaging 
                            materials manufactured at Hyderabad in premises extending up to  
                            30,000 sqft. The company established itself as a preferred 
                            vendor/supplier of a wide range of printing, packing and paper products 
                            to leading companies and traders in Andhra Pradesh, Telangana State 
                            and Abroad.
                        </p>
                        <p>
                            The company started its core manufacturing activity in 2021 with the 
                            main objective to manufacture and sell all kinds of paper and paperboard 
                            packaging items for various Pharmaceutical Packaging and 
                            promotional material, food & beverages, home & personal care 
                            sectors.
                        </p>
                        <p>
                            Our wide range of products also includes Letterheads, Leaflets, 
                            Notebooks, Calendars and diaries. Presently we are supplying all types 
                            of Corrugated Boxes, Mono cartons and E- flute cartons, with grey back, 
                            white back, cyber XL board, Sapphire Graphic boards and Kraft paper 
                            local and imported as well, along with 28 &40 GSM Bible Paper and 
                            Maplitho Paper of all GSM.
                        </p>
                    </div>
                </div>
                
                <div className="quality-text">Our Quality Offerings</div>
                <div className="quality-group-boxes">
                    <div className="quality-box">
                        <img src={ booksimg} alt="cartons" className="quality-boximg" />
                        <div>
                            <p className="quality-title">Books</p>
                            <p className="quality-description">Our wide range of books , includes any type of printed books  and note books  </p>
                        </div>
                    </div>
                    <div className="quality-box">
                        <img src={cartonsicon} alt="books" className="quality-boximg" />
                        <p className="quality-title">cartons</p>
                        <p className="quality-description">We provide foundational packaging solutions,  combining affordability and quality. Ideal for  businesses looking for essential packaging  supplies without compromising quality.</p>
                    </div>
                    <div className="quality-box">
                        <img src={othersimg} alt="others" className="quality-boximg" />
                        <p className="quality-title">Others</p>
                        <p className="quality-description">Our other products included, leaflets, calendars, diaries  and many other supplies without compromising quality.</p>
                    </div>
                </div>
                <br/>
            </div>
            <Footer />
        </>
    );
}
export default HomePage;