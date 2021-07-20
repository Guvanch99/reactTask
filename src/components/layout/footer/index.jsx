import {Link} from 'react-router-dom'
const Footer = () => {
return(
    <footer className="footer">
    <Link to='contactUs' className="footer__link">Contact</Link>
    <h3 className='footer__text'>&copy; Copyright bt Guvanch</h3>
</footer>
)
}
export default Footer;