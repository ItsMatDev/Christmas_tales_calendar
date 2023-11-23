import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/tales.scss";

function Tales() {
	const { id } = useParams();
	const [Calendarcase, setCalendarcase] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/noel")
			.then((response) => response.json())
			.then((data) => setCalendarcase(data));
	}, []);

	const calendarc = (Calendarcase || []).find(
		(el) => el.id === parseInt(id, 10)
	);

	return (
		<div>
			<img
				src="https://previews.123rf.com/images/pixdesign123/pixdesign1231311/pixdesign123131100141/23664806-p%C3%A8re-no%C3%ABl-avec-son-tra%C3%AEneau.jpg"
				alt=""
			/>
			<h1 className="title">Tales</h1>
			<p>{calendarc && calendarc.name}</p>
		</div>
	);
}

export default Tales;
