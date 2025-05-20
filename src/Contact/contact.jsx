import React, { useState, useRef } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Replace these with your actual EmailJS service ID, template ID, and Public Key
        emailjs.sendForm(
            'YOUR_SERVICE_ID', 
            'YOUR_TEMPLATE_ID', 
            form.current, 
            'YOUR_PUBLIC_KEY'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setSubmitStatus({
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, (error) => {
            console.error('Failed to send email:', error.text);
            setSubmitStatus({
                success: false,
                message: 'Sorry, something went wrong. Please try again later.'
            });
        })
        .finally(() => {
            setIsSubmitting(false);
            // Clear status message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        });
    };

    return (
        <>
            <div className="contact">
                <div className="contact-title">
                    VSR PAPER AND PACKAGING LIMITED
                </div>
                <br />
                <br />
                <div className="contact-tiles">
                    <div>
                        <div className="contact-text-left">
                            <br />
                            <div className="contact-email"> 
                                <a className="reach-color" target="_blank" rel="noreferrer" href="mailto:info@vsrppl.com">
                                    info@vsrppl.com
                                </a>
                            </div>
                            <br />
                            <div className="contact-phone">
                                <a className="reach-color" href="tel:+914042300206">+91 40 4230 0206</a>, 
                                <a className="reach-color" href="tel:+917674800206">+91 76748 00206</a>
                            </div>

                            {/* Add WhatsApp button here */}
                            <div className="whatsapp-contact">
                                <a 
                                    href="https://wa.me/917674800206?text=I'm%20interested%20in%20your%20products" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-contact-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="24" height="24">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                    </svg>
                                    Chat with us on WhatsApp
                                </a>
                                <span className="whatsapp-note">Quick response via WhatsApp!</span>
                            </div>
                            
                            {/* Add contact form here */}
                            <div className="contact-form-container">
                                <h3>Send us a message</h3>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <div className="contact-form-item">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="contact-form-item">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Your Email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="contact-form-item">
                                        <input 
                                            type="tel" 
                                            name="phone" 
                                            placeholder="Your Phone" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="contact-form-item">
                                        <textarea 
                                            name="message" 
                                            placeholder="Your Message" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="contact-form-button">
                                        <button type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                    
                                    {submitStatus && (
                                        <div className={`submission-message ${submitStatus.success ? 'success' : 'error'}`}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                        <div className="contact-img-right">
                            {/* Image will only display on larger screens */}
                            <img src={contactimg} alt="contactimg" className="contactpage-img desktop-only" />
                        </div>
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <div className="contact-tile-1">
                            <p className="contact-tile-title">Explore</p>
                            <p className="contact-tile-name" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                                navigate("/")
                            }}>Home</p>
                            <p className="contact-tile-name" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                                navigate("/about")
                            }}>About Us</p>
                            <p className="contact-tile-name" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                                navigate("/products")
                            }}>Products</p>
                            <p className="contact-tile-name" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                                navigate("/machinery")
                            }}>Machinery</p>
                            <p className="contact-tile-name" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                                navigate("/contact")
                            }}>Contact</p>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="contact-tile-2">
                            <p className="contact-tile-title">Contact</p>
                            <p className="contact-tile-name">Email</p>
                            <p className="contact-tile-name">Facebook</p>
                            <p className="contact-tile-name">Instagram</p>
                        </div>
                    </div>
                    <br />
                    <div>
                        <iframe title="vsrpplmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.898205646904!2d78.4366051!3d17.4645856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb911e430101ad%3A0xf18c74ceee66c008!2sVSR%20Paper%20and%20Packaging%20Ltd.!5e0!3m2!1sen!2sin!4v1721223294492!5m2!1sen!2sin" className="contact-maps" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
