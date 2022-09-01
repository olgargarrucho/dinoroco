import { NavLink } from 'react-router-dom';
import '../styles/page/footer.scss';

function Footer () {
    return (
        <>
        
        <footer className='footer'>
        <div className='footer__container'>
            <small className='footer__container--copy'>&copy; 2022 Dinoroco</small>
            <section className='footer__rrss'>
            <a href='https://github.com/olguita2412' className='footer__rrss--link' target='_blank' rel="noreferrer">
                <i className='icon fab fa-github-square'></i>
            </a>
            <a href='https://www.linkedin.com/in/olguita2412/' className='footer__rrss--link' target='_blank' rel="noreferrer">
                <i className='icon fab fa-linkedin'></i>
            </a>
            <a href='https://twitter.com/olguiita24' className='footer__rrss--link' target='_blank' rel="noreferrer">
                 <i className='icon fab fa-twitter-square'></i>
            </a>
        </section>
        </div>
        
        <nav>
        <ul className='footer__menu'>
          <li className="footer__menu--item">
            <NavLink className="footer__menu--link" to="/">
              Home
            </NavLink>
          </li>
          <li className="footer__menu--item">
            <NavLink className="footer__menu--link" to="/aboutus">
              About us
            </NavLink>
          </li>
          <li className="footer__menu--item">
            <NavLink className="footer__menu--link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
            

        </footer>
        </>
    )
}

export default Footer;