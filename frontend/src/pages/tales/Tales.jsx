import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Text from "../../components/text/Text";
import "./Tales.scss";

function Tales() {
  const { id } = useParams();
  const [Calendarcase, setCalendarcase] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/noel")
      .then((response) => response.json())
      .then((data) => setCalendarcase(data));
  }, []);

  const calendarc = (Calendarcase || []).find((el) => el.id === parseInt(id, 10));

  return (
    <main className="tales__page">
      <Text />
    </main>
  );
}

export default Tales;
