import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Text from "../../components/text/Text";
import PictureTales from "../../components/picturetales/PictureTales";
import "./Tales.scss";

function Tales() {
  const { id } = useParams();
  const [Calendarcase, setCalendarcase] = useState();

  useEffect(() => {
    fetch("http://localhost:5010/tales")
      .then((response) => response.json())
      .then((data) => setCalendarcase(data));
  }, []);

  const calendarc = (Calendarcase || []).find(
    (el) => el.id === parseInt(id, 10)
  );

  return (
    <main className="tales__page">
      <Text />
      <PictureTales />
    </main>
  );
}

export default Tales;
