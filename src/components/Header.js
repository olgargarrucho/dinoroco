import '../styles/page/header.scss';
import logo from '../images/logo.png';

function Header () {
    return (
        <header className='header'>
            <img src={logo} className='header__logo' alt='Logo de Dinoroco SL' name='Logo de Dinoroco SL'/>
            <div className='header__texts'>
                <h1 className='header__texts--title'>Dinoroco</h1>
                <h3 className='header__texts--subtitle'>Studios</h3>
            </div>
        </header>
    )
}

export default Header;