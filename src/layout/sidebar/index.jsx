import { LINKS } from '../../data';

import './index.scss'

const {links}=LINKS

const Nav = () => (
        <section className="sidebar">
        <nav className="menu">
            <ul className="menu__list">
                {
                    links.map(({link,name})=>(
                            <li key={name} class="menu__list-item">
                            <a  href={link} className='link'> 
                            <i className={`fab fa-${name}`}/>
                            <span className="text">{name.toUpperCase()}</span>
                            </a>
                            </li>
                         ))
                }
             </ul>
        </nav>
    </section>
    
)

export default Nav;