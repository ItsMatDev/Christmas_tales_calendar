import { Link } from "react-router-dom";
import Calendarcase from "../../components/Calendar/Calendarcase";
import "./Calendar.scss";

function Calendar() {
	return (
		<main className="calendarMain">
			<Calendarcase />
			<Link to="/">
				<button className="returnToMain">X</button>
			</Link>
		</main>
	);
}

export default Calendar;
