import { useEffect, useState } from "react";
import "./Calendarcase.scss";
import { Link } from "react-router-dom";

function Calendarcase() {
	const [Calendarcase, setCalendarcase] = useState();

	useEffect(() => {
		fetch("http://localhost:5010/tales")
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
    <>
      <img className="testfloc" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc1" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc2" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc3" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc4" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc5" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc6" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc7" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc8" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc9" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <img className="testfloc10" src="https://usagif.com/wp-content/uploads/gif/snwflks-29.gif" alt="" />
      <div className="parent">
        {Calendarcase &&
          Calendarcase.map((calendarcas) => {
            const indiceAleatoire = genererIndiceAleatoire();

            return (
              <>
                <section key={calendarcas.id} className={calendarcas.Name} style={{ order: indiceAleatoire }}>
                  <section key={calendarcas.id} className="open">
                    <Link to={`/Tales/${calendarcas.id}`}>
                      <p>{calendarcas.id}</p>
                    </Link>
                  </section>
                </section>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Calendarcase;
