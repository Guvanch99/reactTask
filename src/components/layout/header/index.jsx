import {Link} from 'react-router-dom'
const Header = () => {
    return (
 <header className="header">
          <div className="avatar">
           <div className="avatar__logo"></div>
        <h3 className="avatar__name">Exposit</h3>
        </div>
        <Link target="_blank" to='SinUp' className="header__link"> <i className="fab fa-google"></i><span
        className="text">SingUp</span></Link>
</header>  
    )
}

export default Header;