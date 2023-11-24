import { Link } from "react-router-dom";
import Calendarcase from "../../components/Calendar/Calendarcase";
import "./Calendar.scss";
import Lightrope from "../../components/Lightrope/Lightrope";
import Stars from "../../components/Stars/Stars";

function Calendar() {
	return (
		<main className="calendarMain">
<<<<<<< Updated upstream
			<p className="titrelivre">Hackathon</p>
			<p className="titrelivre2">En Avent Noël</p>
=======
			<p className="titrelivre">hackathon</p>
			<p className="titrelivre2">En avent Noël</p>
>>>>>>> Stashed changes
			<Stars />
			<Lightrope />
			<Calendarcase />
			<Link to="/">
				<button className="returnToMain">X</button>
			</Link>
		</main>
	);
}

export default Calendar;
