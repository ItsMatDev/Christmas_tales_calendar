import { Link } from "react-router-dom";
import Calendarcase from "../../components/Calendar/Calendarcase";
import "./Calendar.scss";
import Lightrope from "../../components/Lightrope/Lightrope";

function Calendar() {
  return (
    <main className="calendarMain">
      <Lightrope />
      <Calendarcase />
      <Link to="/">
        <button className="returnToMain">X</button>
      </Link>
    </main>
  );
}

export default Calendar;
