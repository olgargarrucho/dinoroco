import '../styles/page/header.scss';
import logo from '../images/logo.png';

function Header () {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='Logo de Dinoroco SL' name='Logo de Dinoroco SL'/>
        </header>
    )
}

export default Header;