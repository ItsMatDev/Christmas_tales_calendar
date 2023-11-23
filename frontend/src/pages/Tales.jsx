import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Tales() {
  const { id } = useParams();
  const [Calendarcase, setCalendarcase] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/tales")
      .then((response) => response.json())
      .then((data) => setCalendarcase(data));
  }, []);

  const calendarc = (Calendarcase || []).find((el) => el.id === parseInt(id, 10));

  return (
    <>
      <h1>Tales</h1>
      <p>{calendarc && calendarc.name}</p>
    </>
  );
}

export default Tales;
