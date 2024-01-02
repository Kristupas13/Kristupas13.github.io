import { FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    const redirectToFacebookPage = () => {
        // Replace 'your-facebook-page-url' with the actual URL of your Facebook page
        window.open('https://www.facebook.com/profile.php?id=61552746337962');
    };

    return (
        <footer className="footer" onClick={redirectToFacebookPage}>
            Daugiau informacijos <FaFacebook className="facebook-icon" />
        </footer>
    )
}

export default Footer;