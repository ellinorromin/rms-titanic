import Header from "../components/header"
import "./Main.css"

function Main() {
  return (
    <>
      <Header />
      <main className="main">
          <h1>RMS Titanic</h1>
          <h2>En båt som sjönk</h2>
          <img src="src/assets/rms titanic.jpeg" alt="Historisk bild på RMS Titanic. Svartvit." />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <h4>I videon nedan presenteras en trovärdig teori om hur Titanic sjönk</h4>
          <video controls>
            <source src="src/assets/video_how_titanic_sank.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
          <p>Läs mer på <a href="https://www.titanicnorden.com/">Titanicnorden.se!</a></p>
      </main>
    </>
  )
}

export default Main