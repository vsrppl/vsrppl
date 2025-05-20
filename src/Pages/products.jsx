import React from "react";
import Navbar from "../Navbar/navbar";
import "./products.css"
import cartonimg from "../Images/cartons.jpg"
import booksimg from "../Images/books.jpeg"
import othersimg from "../Images/others.jpeg"
import Footer from "../Footer/footer";


const Products = () => {

    return (
        <>
            <Navbar />
            <div className="main-home">
                <h1 className="page-title">Our Products</h1>
                <div className="products-text">Our Products</div>
                <div className="quality-group-boxes">
                    <div className="quality-box">
                        <div className="image-container">
                            <img src={cartonimg} alt="cartons" className="quality-boximg" />
                        </div>
                        <h2 className="quality-title">Cartons</h2>
                        <p className="quality-text">We provide foundational packaging solutions, combining affordability and quality. Ideal for businesses looking for essential packaging supplies without compromising quality.</p>
                    </div>
                    <div className="quality-box">
                        <div className="image-container">
                            <img src={booksimg} alt="books" className="quality-boximg" />
                        </div>
                        <h2 className="quality-title">Books</h2>
                        <p className="quality-text">Our wide range of books, includes any type of printed books and note books</p>
                    </div>
                    <div className="quality-box">
                        <div className="image-container">
                            <img src={othersimg} alt="others" className="quality-boximg" />
                        </div>
                        <h2 className="quality-title">Others</h2>
                        <p className="quality-text">Our other products included, leaflets, calendars, diaries and many other supplies without compromising quality.</p>
                    </div>
                </div>
                <br/>
            </div>
            <Footer />
        </>
    );
}
export default Products;
