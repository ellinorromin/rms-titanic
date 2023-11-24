import Header from "../components/header"
import "./Main.css"

function Main() {
  return (
    <>
      <Header />
      <main className="main">
          <h1>RMS Titanic</h1>
          <h2>RMS Titanic var ett skepp som sjönk den 15 April 1912 efter att ha kolliderat med ett isberg. Ombord fanns 2208 personer. 1496 miste livet.</h2>
          <img src="src/assets/rms titanic.jpeg" alt="Historisk bild på RMS Titanic." />
          <p>RMS Titanic - Royal Mail Ship Titanic - var en oceanångare som reste från Southampton till New York. Fartyget ritades av några av dåtidens bästa ingenjörer och utrustades med den mest avancerade teknik som fanns tillgänglig. Vid tiden för sjösättningen var Titanic, tillsammans med sitt systerskepp RMS Olympic, världens största passagerarfartyg. Titanic ägdes av White Star Line och byggdes vid Harland & Wolff i Belfast, Nordirland.</p>
          <p>Den 14 april kl. 23.40 upptäcktes ett isberg rakt framför fartyget. Man försökte styra åt sidan men istället blev vinkeln mycket olycklig: isberget gjorde en skada på fartyget på hela 90 meter, av ca 270 meter. Klockan 02.20 sjönk Titanic, och tusentals panikslagna människor hamnade i iskallt vatten. De allra flesta hade livbälten på sig, men frös ihjäl. Bara tre personer som hamnade i vattnet räddades.</p>
          <p>Ca 700 människor överlevde olyckan, och räddades av fartyget Carpathia, som plockade upp alla passagerare från livbåtarna.</p>
          <p>Beskedet om Titanickatastrofen spred sig över världen och blev en chock för många. Titanic var en symbol för den moderna tekniken, som man hade trott var ofelbar. Med Titanic lärde man sig att olyckor fortfarande kunde hända, även med den allra senaste tekniken. Många böcker har skrivits och filmer har gjorts om Titanic.</p>
          <p>Idag ligger Titanic i botten av Atlanten, på 3800 meters djup.</p>
          <h4>I videon nedan presenteras en trovärdig teori om hur Titanic sjönk efter kollisionen med isberget.</h4>
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