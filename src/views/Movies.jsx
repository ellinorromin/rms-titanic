import Header from "../components/header"
import Movie from "../components/Movie"

const titanic1996 = {
  title: "Titanic",
  year: "1996",
  info: "Kanadensisk-amerikansk miniserie (senare ihopsatt till film). Handlingen följer Isabella Paradine som träffar sin f.d. älskare, Wynn Park. Men även ficktjuven Jamie Perse, som blir kär i danskan Åsa Ludvigsen, och Simon Dooan som vill råna första klass.",
  img: "src/assets/Titanic 1996.jpg"
}

const aNightToRemember = {
  title: "A Night to Remember",
  year: "1958",
  info: "'Titanics Undergång' på svenska. Baserad på boken 'En natt att minnas' av Walter Lord. Har ingen specifik huvudperson, utan följer båtens öde ur olika passagerares perspektiv. Producenten William MacQuitty var särskilt mån om att filmen skulle bli så historiskt korrekt som möjligt och hade därför många överlevande från förlisningen som tekniska rådgivare under inspelningen.",
  img: "src/assets/A night to remember (1958).jpg"
}

const savedFromTheTitanic = {
  title: "Saved from the Titanic",
  year: "1912",
  info: "Den första filmen som gjordes om Titanic, med skådespelerskan Dorothy Gibson som själv var med ombord och överlevde olyckan. Filmen hade premiär i Maj 1912, knappt en månad efter att Titanic sjunkit. I filmen berättar Dorothy Gibson om katastrofen för sina föräldrar och fästman, med inklippta bilder på isberg, Titanics systerfartyg Olympic och fartygets kapten Edward Smith. För att ytterligare förstärka autenticitet bar Gibson samma kläder som hon bar natten då katastrofen inträffade. Den anses nu vara en förlorad film, enbart en del stillbilder återstår.",
  img: "src/assets/Saved from the titanic (1912).jpg"
}

function Movies() {
  return (
    <main className="movies__main">
        <Header />
        <h1 className="pageHeader">Filmer om Titanic</h1>
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