import { useNavigate } from "react-router"
import './Header.css'

function Header() {

const navigate = useNavigate();

  return (
    <header className="header">
        <img 
        className="header__img"
        src="../src/assets/titanic-cropped.png"
        alt="Bild på skeppet RMS Titanic" />
        <nav className="navbar">
            <ul className="navbar__ul">
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/")
                    }}
                >
                    Start
                </li>
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/people")
                    }}
                >
                    Personer
                </li>
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/movies")
                    }}
                >
                    Filmer
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header