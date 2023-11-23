import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Text from "../../components/text/Text";
import "./Tales.scss";
import noel from "../../assets/perenoel.png";

function Tales() {
	const { id } = useParams();
	const [Calendarcase, setCalendarcase] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/noel")
			.then((response) => response.json())
			.then((data) => setCalendarcase(data));
	}, []);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "visible";
		};
	}, []);

	const calendarc = (Calendarcase || []).find(
		(el) => el.id === parseInt(id, 10)
	);

	return (
		<div className="backgroundor">
			<img className="peretraineau" src={noel} alt="" />
			<main className="tales__page">
				<Text />
				<Link to="/Calendar">
					<button className="returnToMain">X</button>
				</Link>
			</main>
		</div>
	);
}

export default Tales;
