import { useDispatch } from "react-redux";
import { logout } from "../redux/state";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";
import { useState } from "react";

const Footer = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="footer-container">
      {/* Left Section - Categories & Information */}
      <div className="footer-left">
        <div className="footer-column">
          <h3>DESIGNER WEAR</h3>
          <ul>
            <Link to="/product-listing">Sarees</Link>
            <Link to="/product-listing">Bridal Dresses</Link>
            <Link to="/product-listing">Celebrity Wear</Link>
          </ul>
        </div>

        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <Link to="/about-us">About Us</Link>

            <Link onClick={() => setIsOpen(true)}>Contact Us</Link>

            {/* <Button onClick={() => setIsOpen(true)}>Contact Us</Button> */}
            <ContactModal show={isOpen} onHide={() => setIsOpen(false)} />

            <Link to="/blogs">Blog</Link>
          </ul>
        </div>

        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/return-policy">Returns</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/payment-policy">Payment Policy</Link>
            <Link to="/#faq">FAQs</Link>
          </ul>
        </div>

        <div className="footer-column">
          <h3>MY ACCOUNT</h3>
          <ul>
            <Link to="/cart">Shopping Bag</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/orders">Order History</Link>
            {/* <Link to="/login">Login as Admin</Link> */}
            <Link to="/dashboard" className="account-dropdown-item">
              Admin Dashboard 
            </Link>
          </ul>
        </div>
      </div>
  
      <div className="footer-right">
        <div className="payment-section">
          <h3>SAFE & SECURE PAYMENT</h3>
          <div className="payment-icons"> 
            <img src="/images/visa.png" alt="" />
            <img src="/images/google-pay.png" alt="" />
            <img src="/images/payment.png" alt="" />
          </div>
          
        </div>
        
        <div className="social-media text-start">
          <h3>FOLLOW US</h3>
          
          <div className="social-icons"> 
            <Link to="https://www.instagram.com/kashvi_saree_/">
              <img src="/images/instagram.png" alt="" />
            </Link>
            <Link to="https://www.facebook.com/Kashvisaree/">
              <img src="/images/facebook.png" alt="" />
            </Link>
            <Link to="">
              <img src="/images/twitter.png" alt="" />
            </Link>
          </div>
        </div>
        {/* Contact & Email Sections */}
        <div className="contact-email-container">
          <div className="contact-section text-start">
            <h3>GET IN TOUCH</h3>
            <a href="tel:5775757575">
              <p>+91 57757 57575 </p>
            </a>
            <a href="tel:5775757575">
              <p>+91 57757 57575 </p>
            </a>
          </div>
        </div>
      </div>

      <p style={{ marginRight: "auto", fontSize: "12px", marginTop: "10px" }}>
        &copy; Kashvi Creation All Rights Reserved.
      </p>
      
      <a href="/DeveloperPage">meet developer</a>
      
    </footer>
  );
};

export default Footer;
