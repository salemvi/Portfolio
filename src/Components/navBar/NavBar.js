import { NavLink } from 'react-router-dom';
import BtnSunMoon from '../btnSunMoon/BtnSunMoon';
import './navBar.css';


const NavBar = () => {
    const activeLink = "nav-list__link nav-list__link--active";
    const usuallyLink = "nav-list__link";
    return (
        <nav className="nav">
         <div className="container">
            <div className="nav-row">
            <NavLink to='/' className="logo">
                <strong>Frontend</strong> VI
            </NavLink>

                <BtnSunMoon/>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to='/' className={({isActive}) => isActive ? activeLink: usuallyLink}>
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/projects" className={({isActive}) => isActive ? activeLink: usuallyLink}>
                            Projects
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink: usuallyLink}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
              </div>
          </div>
      </nav>

    );
}
export default NavBar;