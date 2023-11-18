import Header from "../components/header"
import Person from "../components/Person"
import './People.css'

function People() {

  const bruceIsmay = {
    name: "Bruce Ismay",
    role: "Owner of the White Star Line",
    survived: true,
    info: "The owner of the company that owned the Titanic. Helped people onboard lifeboats until the last one was off. Entered that one himself. Good for you, Bruce! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "../src/assets/Bruce_Ismay.jpeg"
  }

  const thomasAndrews = {
    name: "Thomas Andrews",
    role: "Main architect of the Titanic",
    survived: false,
    info: "Managing director and head of the drafting department of the shipbuilding company Harland and Wolff in Belfast, Ireland. Last seen standing in the dining room looking at the clock.",
    img: "../src/assets/Thomas_Andrews.jpg"
  }

  const edwardSmith = {
    name: "Edward J. Smith",
    role: "Captain of the Titanic",
    survived: false,
    info: "The Captain of the ship, who was meant to retire just after the maiden voyage. Did not enter a lifeboat. Also ignored iceberg warnings, so... that happened.",
    img: "../src/assets/edward_j_smith.jpg"
  }

  return (
    <main>
      <Header />
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