import {useNavigate} from "react-router-dom"
import logo from "../assets/cyberfortress.jpg"
import { FaFacebookF, FaXTwitter,FaLinkedinIn, FaInstagram, FaYoutube} from "react-icons/fa6";
export default function Footer() {
    const navigate = useNavigate()
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img 
                src={logo}
                alt='logo at the footer'
            />
        </div>
        <div className='footer-main-content'>
            <div className='links'>
                <p>Quick Links</p>
                <ul>
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li>About us</li>
                    <li onClick={()=>{navigate("/security-infrastruture")}}>Services</li>
                    <li>Resources</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='findus'>
                <p>Find Us</p>
                <ul>
                    <li>
                        Lagos Office: Lekki Lagos Nigeria.
                    </li>
                    <li>
                        United Kingdom Office: Montrose Scotland United Kingdom
                    </li>
                </ul>
            </div>
            <div className='socials'>
                <p>Follow Us</p>
                <div className='social-account'>
                    <FaFacebookF  />
                    <FaXTwitter   />
                    <FaLinkedinIn />
                    <FaInstagram  />
                    <FaYoutube   />
                </div>
            </div>
        </div>
    </div>
  )
}
