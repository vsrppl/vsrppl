import React from "react";
import Navbar from "../Navbar/navbar";
import "./machinery.css"
import machinery1 from "../Images/machinery1.jpeg"
import machinery2 from "../Images/machinery2.jpeg"
import machinery3 from "../Images/machinery3.jpeg"
import machinery4 from "../Images/machinery4.jpeg"
import machinery5 from "../Images/machinery5.jpeg"
import machinery6 from "../Images/machinery6.jpeg"
import Footer from "../Footer/footer";


const Machinery = () => {

    return (
        <>
            <Navbar />
            <div className="our-images">
                <br />
                <br />
                <br />
                <div className="machinery-imgs">
                    <div className="machinery-box">
                        <img src={machinery1} alt="cartons" className="machinery-boximg" />
                    </div>
                    <br />
                    <div className="machinery-box">
                        <img src={machinery2} alt="books" className="machinery-boximg" />
                    </div>
                </div>
                <br />
                <div className="machinery-imgs">
                    <div className="machinery-box">
                        <img src={machinery3} alt="cartons" className="machinery-boximg" />
                    </div>
                    <br />
                    <div className="machinery-box">
                        <img src={machinery4} alt="books" className="machinery-boximg" />
                    </div>
                </div>
                <br />
                <div className="machinery-imgs">
                    <div className="machinery-box">
                        <img src={machinery5} alt="cartons" className="machinery-boximg" />
                    </div>
                    <br />
                    <div className="machinery-box">
                        <img src={machinery6} alt="books" className="machinery-boximg" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Machinery
