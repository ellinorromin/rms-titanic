import { useNavigate } from "react-router"

function Header() {

const navigate = useNavigate();

  return (
    <header>
        <img src="" alt="Bild på skeppet RMS Titanic" /> {/*bild på titanic*/}
        <nav>
            <ul>
                <li
                    onClick={()=>{
                        navigate("/")
                    }}
                >
                    Home
                </li>
                <li
                    onClick={()=>{
                        navigate("/people")
                    }}
                >
                    People
                </li>
                <li
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