import { useEffect, useState } from "react";
import "./Calendarcase.scss";
import { Link } from "react-router-dom";

function Calendarcase() {
	const [Calendarcase, setCalendarcase] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/noel")
			.then((response) => response.json())
			.then((data) => setCalendarcase(data));
	}, []);

	console.info(Calendarcase);

	const genererIndiceAleatoire = () => {
		if (Calendarcase) {
			const indiceAleatoire = Math.floor(
				Math.random() * Calendarcase.length
			);
			return indiceAleatoire;
		}
		return 0;
	};

	return (
		<div className="parent">
			{Calendarcase &&
				Calendarcase.map((calendarcas) => {
					const indiceAleatoire = genererIndiceAleatoire();

					return (
						<>
							<section
								key={calendarcas.id}
								className={calendarcas.Name}
								style={{ order: indiceAleatoire }}
							>
								<Link to={`/Tales/${calendarcas.id}`}>
									{calendarcas.id}
								</Link>
							</section>
						</>
					);
				})}
		</div>
	);
}

export default Calendarcase;
