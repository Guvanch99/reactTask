import {Link} from 'react-router-dom'
import './index.scss'
const Footer = () => {
return(
    <footer className="footer">
    <Link to='contactUs' className="footer__link">Contact</Link>
    <h3 className='footer__text'>&copy; Copyright by Guvanch</h3>
</footer>
)
}
export default Footer;