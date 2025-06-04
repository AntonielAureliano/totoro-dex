import logo from "../../assets/logo.png";
import "../../styles/global.css";

export const Header = () => {

    return (
        <header className="headerMenu">
            <div>
                <a href="">
                    <img src={logo} alt="TotoroDex logo" />
                </a>
            </div>
            <nav className="headerMenuNav">
                <ul className="headerMenuItem">
                    <li>
                        <a href="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Personagens
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Sobre
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}