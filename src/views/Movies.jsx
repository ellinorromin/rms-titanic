import Header from "../components/header"
import Movie from "../components/Movie"

function Movies() {
  return (
    <main>
        <Header />
        <ul>
          <li>
            <Movie prop={"Titanic 1996"}/>
          </li>
          <li>
            <Movie prop={"Titanic 1997"}/>
          </li>
          <li>
            <Movie prop={"Saved from the Titanic 1912"}/>
          </li>
        </ul>
    </main>
  )
}

export default Movies