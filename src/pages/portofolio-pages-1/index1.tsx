import React from 'react';
import './index1.css';

const LandingPage1: React.FC = () => {
    return (
        <div>
            <section className="bakery-header">
                <div className="bakery-logo">Bakery Delight</div>
                <nav className="bakery-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#products">Products</a>
                    <a href="#contact">Contact</a>
                </nav>
            </section>

            {/* Hero Section */}
            <section className="bakery-hero" id="home">
                <div className="bakery-hero-text">
                    <h1>Welcome to Bakery Delight</h1>
                    <p>Freshly baked goods just for you!</p>
                    <a href="#products" className="bakery-cta-btn">See our Products</a>
                </div>
                <div className="hero-image">
                    <img
                        src="https://d2w1ef2ao9g8r9.cloudfront.net/otl-images/_1600x847_crop_center-center_82_line/open-a-bakery-header.jpg"
                        alt="Bakery Image"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="bakery-about" id="about">
                <h2>About Us</h2>
                <p>We are passionate about bringing the freshest and most delicious baked goods to our community.</p>
            </section>

            {/* Products Section */}
            <section className="bakery-products" id="products">
                <h2>Our Products</h2>
                {/* Using grid to display products */}
                <div className="bakery-grid-container">
                    <div className="bakery-product-item">
                        <img
                            src="https://nibble-images.b-cdn.net/nibble/original_images/bakery_di_jakarta_paling_enak_00_2bea09be33_l7Q71Jcva.jpg"
                            alt="bread"
                        />
                        <h3>Delicious Bread</h3>
                    </div>
                    <div className="bakery-product-item">
                        <img
                            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg"
                            alt="cakes"
                        />
                        <h3>Delicious Cakes</h3>
                    </div>
                    <div className="bakery-product-item">
                        <img
                            src="https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_1080_850.jpg"
                            alt="cookies"
                        />
                        <h3>Homemade Cookies</h3>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bakery-contact" id="contact">
                <h2>Contact Us</h2>
                <form className="bakery-contact-form">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* Footer Section */}
            <footer className="bakery-footer">
                <p>&copy; 2024 Bakery Delight - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default LandingPage1;
