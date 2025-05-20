import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import "./contact.css";
import contactimg from "../Images/contactimg.png";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',  // Now optional
        message: '' // Now optional
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        // Only check required fields
        if (!formData.firstName || !formData.lastName || !formData.phone) {
            return false;
        }
        
        // Basic phone validation
        const phonePattern = /^\+?[0-9\s-]{10,15}$/;
        if (!phonePattern.test(formData.phone)) {
            return false;
        }
        
        // Email validation only if provided
        if (formData.email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                return false;
            }
        }
        
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }
        
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/vsrppl.marketing@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error(data.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="contact-form">
                <div className="contact-text-left">
                    <div className="contact-text">Contact VSR Paper and Packaging</div>
                    <div className="contact-title">
                        We invite you to reach out for any inquiries regarding our paper
                        and paperboard manufacturing. Expect timely responses regarding your needs and our services.
                        Please ensure you select a suitable method for your submissions.
                    </div>
                    <br />
                    <div className="contact-email">
                        <a className="reach-color" target="_blank" rel="noreferrer" href="mailto:info@vsrppl.com">info@vsrppl.com</a>
                    </div>
                    <div className="contact-phone">
                        <a className="reach-color" href="tel:+914042300206">+91 40 4230 0206</a>, <a className="reach-color" href="tel:+917674800206">+91 76748 00206</a>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {submitStatus === 'success' && (
                        <div className="success-message">
                            <p>Thank you for your message!</p>
                            <p>Your information has been submitted successfully.</p>
                            <p>We'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => setSubmitStatus(null)}
                                className="reset-form-btn"
                            >
                                Submit another message
                            </button>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="error-message">
                            <p>There was an error processing your submission. Please try again or contact us directly at info@vsrppl.com.</p>
                        </div>
                    )}

                    {submitStatus !== 'success' && (
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_subject" value="New Contact Form Submission" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />

                            {/* First row: First Name and Last Name */}
                            <div className="contact-details-row">
                                <div className="contact-field-container">
                                    <div>First Name</div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="textfield"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="contact-field-container">
                                    <div>Last Name</div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="textfield"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <div>Phone Number</div>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="textfieldemail"
                                    placeholder="+91 XXXXX XXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email field (optional) */}
                            <div>
                                <div>Email (optional)</div>
                                <input
                                    type="email"
                                    name="email"
                                    className="textfieldemail"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message field (optional) */}
                            <div>
                                <div>Message (optional)</div>
                                <textarea
                                    name="message"
                                    className="textfieldemail"
                                    rows="4"
                                    cols="60"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contact-sendbtn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    )}
                </div>
                <br />
                <div className="contact-img-right">
                    {/* Image will only display on larger screens */}
                    <img src={contactimg} alt="contactimg" className="contactpage-img desktop-only" />
                </div>
            </div>
        </>
    );
};

export default ContactPage;
