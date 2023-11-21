import Header from "../components/header"
import Movie from "../components/Movie"

const titanic1996 = {
  title: "Titanic",
  year: "1996",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "src/assets/Titanic 1996.jpg"
}

const aNightToRemember = {
  title: "A Night to Remember",
  year: "1958",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "src/assets/A night to remember (1958).jpg"
}

const savedFromTheTitanic = {
  title: "Saved from the Titanic",
  year: "1912",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  img: "src/assets/Saved from the titanic (1912).jpg"
}

function Movies() {
  return (
    <main>
        <Header />
        <ul>
          <li>
            <Movie prop={titanic1996}/>
          </li>
          <li>
            <Movie prop={aNightToRemember}/>
          </li>
          <li>
            <Movie prop={savedFromTheTitanic}/>
          </li>
        </ul>
    </main>
  )
}

export default Movies