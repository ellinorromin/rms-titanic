import { useNavigate } from "react-router"
import './Header.css'

function Header() {

const navigate = useNavigate();

  return (
    <header className="header">
        <img 
        className="header__img"
        src="../src/assets/titanic-header.jpg"
        alt="Bild på skeppet RMS Titanic" /> {/*bild på titanic*/}
        <nav className="navbar">
            <ul className="navbar__ul">
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/")
                    }}
                >
                    Home
                </li>
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/people")
                    }}
                >
                    People
                </li>
                <li
                    className="navbar__li"
                    onClick={()=>{
                        navigate("/movies")
                    }}
                >
                    Movies
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header