import {Link} from 'react-router-dom'
import { linktext } from '../../linkdata';
import './index.scss'
const Nav = () => {
    return(
        <section className="sidebar">
        <nav className="menu">
            <ul className="menu__list">
                {
                    linktext.links.map((item,index)=>{
                        return(
                            <li key={index} class="menu__list-item">
                            <Link target="_blank" to={item.link} className='link'> <i className={`fab fa-${item.name}`}></i><span
                                    className="text">{item.name.toUpperCase()}</span></Link>
                             </li>
                        )
                    })
                }
             </ul>
        </nav>
    </section>
    )
}

export default Nav;