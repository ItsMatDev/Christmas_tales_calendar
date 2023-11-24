import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Text from "../../components/text/Text";
import PictureTales from "../../components/picturetales/PictureTales";
import Candle from "../../components/Candle/Candle";
import pictureCandle from "../../assets/candle.png";
import "./Tales.scss";

function Tales() {
  const { id } = useParams();
  const [Calendarcase, setCalendarcase] = useState();

  useEffect(() => {
    fetch("http://localhost:5010/tales")
      .then((response) => response.json())
      .then((data) => setCalendarcase(data));
  }, []);

  const calendarc = (Calendarcase || []).find((el) => el.id === parseInt(id, 10));

  return (
    <>
      {calendarc && (
        <main className="tales__page">
          <Text content={calendarc} />
          <PictureTales content={calendarc} />
          <img className="bodyCandle" src={pictureCandle} alt="le corp d'une bougie"/>
          <Link to="/Calendar">
            <button className="returnToMain">X</button>
          </Link>
        </main>
      )}
    </>
  );
}

export default Tales;
