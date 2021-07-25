import {Link} from 'react-router-dom'

import './index.scss'

const Header = () => ( 
 <header className="header">
            <div className="avatar">
           <div className="avatar__logo"></div>
           <h3 className="avatar__name">Exposit</h3>
        </div>
        <Link target="_blank" to='/registration' className="header__link"> <i className="fas fa-sign-in-alt"></i><span
        className="text">SingUp</span></Link>
</header>  
    )

export default Header;