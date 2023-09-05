import '../style/Footer.css';
import Facebook from '../Images/Icons/Facebook.png';
import GitHub from '../Images/Icons/GitHub.png';
import Instagram from '../Images/Icons/Instagram.png';
import Twitter from '../Images/Icons/Twitter.png';

const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <li>
                    <img src={Facebook} alt="Social media Icon" />
                </li>
                <li>
                    <img src={GitHub} alt="Social media Icon" />
                </li>
                <li>
                    <img src={Instagram} alt="Social media Icon" />
                </li>
                <li>
                    <img src={Twitter} alt="Social media Icon" />
                </li>
            </ul>
        </div>
    )
}

export default Footer;