import React from "react";
import styles from '@/styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer Sections */}
      <div className={styles.footerSections}>
        {/* Fruits & Vegetables */}
        <div className={styles.footerColumn}>
          <h3>FRUIT & VEGETABLES</h3>
          <ul>
            <li><a href="#">Fresh Vegetables</a></li>
            <li><a href="#">Herbs & Seasonings</a></li>
            <li><a href="#">Fresh Fruits</a></li>
            <li><a href="#">Cuts & Sprouts</a></li>
            <li><a href="#">Exotic Fruits & Veggies</a></li>
            <li><a href="#">Packaged Produce</a></li>
            <li><a href="#">Party Trays</a></li>
          </ul>
        </div>
        
        {/* Breakfast & Dairy */}
        <div className={styles.footerColumn}>
          <h3>BREAKFAST & DAIRY</h3>
          <ul>
            <li><a href="#">Fresh Vegetables</a></li>
            <li><a href="#">Herbs & Seasonings</a></li>
            <li><a href="#">Fresh Fruits</a></li>
            <li><a href="#">Cuts & Sprouts</a></li>
            <li><a href="#">Exotic Fruits & Veggies</a></li>
            <li><a href="#">Packaged Produce</a></li>
            <li><a href="#">Party Trays</a></li>
          </ul>
        </div>
        
        {/* Meat & Seafood */}
        <div className={styles.footerColumn}>
          <h3>MEAT & SEAFOOD</h3>
          <ul>
            <li><a href="#">Fresh Vegetables</a></li>
            <li><a href="#">Herbs & Seasonings</a></li>
            <li><a href="#">Fresh Fruits</a></li>
            <li><a href="#">Cuts & Sprouts</a></li>
            <li><a href="#">Exotic Fruits & Veggies</a></li>
            <li><a href="#">Packaged Produce</a></li>
            <li><a href="#">Party Trays</a></li>
          </ul>
        </div>

        {/* Beverages */}
        <div className={styles.footerColumn}>
          <h3>BEVERAGES</h3>
          <ul>
            <li><a href="#">Fresh Vegetables</a></li>
            <li><a href="#">Herbs & Seasonings</a></li>
            <li><a href="#">Fresh Fruits</a></li>
            <li><a href="#">Cuts & Sprouts</a></li>
            <li><a href="#">Exotic Fruits & Veggies</a></li>
            <li><a href="#">Packaged Produce</a></li>
            <li><a href="#">Party Trays</a></li>
          </ul>
        </div>

        {/* Breads & Bakery */}
        <div className={styles.footerColumn}>
          <h3>BREADS & BAKERY</h3>
          <ul>
            <li><a href="#">Fresh Vegetables</a></li>
            <li><a href="#">Herbs & Seasonings</a></li>
            <li><a href="#">Fresh Fruits</a></li>
            <li><a href="#">Cuts & Sprouts</a></li>
            <li><a href="#">Exotic Fruits & Veggies</a></li>
            <li><a href="#">Packaged Produce</a></li>
            <li><a href="#">Party Trays</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="facebook">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagram">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="twitter">
          <FaTwitter />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="tiktok">
          <FaTiktok />
        </a>
      </div>

      {/* Copyright */}
      <p>© 2024 | ClassyShop | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
