import "../styles/page/header.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          className="header__logo"
          alt="Logo de Dinoroco SL"
          name="Logo de Dinoroco SL"
        />
      </Link>
    </header>
  );
}

export default Header;
