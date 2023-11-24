import Header from "../components/header"
import Person from "../components/Person"
import './People.css'

function People() {

  const bruceIsmay = {
    name: "Bruce Ismay",
    role: "Ägaren för White Star Line",
    survived: true,
    info: "Ägaren för White Star Line, rederiet som ägde Titanic. Under natten båten sjönk hjälpte Bruce Ismay människor ombord i livbåtarna, tills han stod ensam kvar. Då hoppade han ner i en livbåt, trots att det fanns fler ombord som behövde räddas. När båten sjönk har han sagt i intervjuer att han vände sig bort; han klarade inte av att se det. Han förlöjligades sedan i pressen, och kallades för 'Brute' Ismay. Hans biografi, 'How to Survive the Titanic', är skriven av Frances Wilson.",
    img: "../src/assets/Bruce_Ismay.jpeg"
  }

  const thomasAndrews = {
    name: "Thomas Andrews",
    role: "Fartygskonstruktör för Titanic",
    survived: false,
    info: "Andrews var med och skapade 'de tre systrarna' (bestående av RMS Olympic, HMHS Britannic och RMS Titanic). Andrews, tillsammans med andra Harland and Wolff arbetare, brukade närvara på deras fartygs jungfruresor. Titanic var inget undantag, så han reste med fartyget den 10 april 1912. när Titanic kolliderade med ett isberg den 14 april kl. 23:40 kände Andrews kollisionen från sin hytt. Kapten Edward Smith tillkallade sig Andrews för att få klarhet i hur allvarlig skadan var. Andrews talade då om efter några snabba matematiska beräkningar att Titanic skulle sjunka inom en till två timmar. Under det aktiva räddningsarbetet gick han omkring och samtalade med passagerarna och hjälpte dem i livbåtarna. Andrews drog sig sedan undan. Vittnen skall ha sett honom befinna sig i första klass rökrum där han tålmodigt väntade in sin död.",
    img: "../src/assets/Thomas_Andrews.jpg"
  }

  const edwardSmith = {
    name: "Edward J. Smith",
    role: "Titanics kapten",
    survived: false,
    info: "Titanics kapten, som gick med på att arbeta på Titanics jungfrufärd som ett sista ärofyllt uppdrag innan sin pension. När den slutgiltiga förlisningen närmade sig befriade han besättningsmännen från sina poster. Han gick in till radiorummet och sade åt telegrafisterna att det nu var upp till dem att rädda sig själva. Steward Edward Brown berättade att kaptenen gick förbi honom på båtdäcket medan han och andra besättningsmän arbetade med en hopfällbar livbåt under förlisningens slutskede. Han ska ha sagt 'gör ert bästa för kvinnorna och barnen, och se efter er själva'. Han ska sedan ha gått mot kommandobryggan. Besättningsmannen Samuel Hemming vittnade om att han såg Smith ensam på bryggan kort innan fartyget gick under. Sedan skiljer sig vittnesmålen kraftigt åt om vad som hände med honom. Många myter som inte har kunnat verifieras har kretsat kring Smiths sista handlingar på fartyget och hans kropp blev aldrig återfunnen.",
    img: "../src/assets/edward_j_smith.jpg"
  }

  //className="people__main"

  return (
    <main>
      <Header /> 
      <h1 className="pageHeader">Viktiga personer ombord RMS Titanic</h1>
      <ul>
        <li>
          <Person prop={bruceIsmay}/>
        </li>
        <li>
          <Person prop={thomasAndrews}/>
        </li>
        <li>
          <Person prop={edwardSmith}/>
        </li>
      </ul>
    </main>
  )
}

export default People