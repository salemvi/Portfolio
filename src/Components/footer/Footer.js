import './footer.css';

import vk from '../../img/icons/vk.svg';
import insta from '../../img/icons/instagram.svg';
import linkedIn from '../../img/icons/linkedIn.svg';
import gitHub from '../../img/icons/gitHub.svg';

const Footer = () => {
 return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/viviviss"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/vzamanovv"><img src={insta} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/salemvi"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 vi-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
 )
}
export default Footer;