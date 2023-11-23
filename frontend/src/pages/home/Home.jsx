import "./Home.scss";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Presentation from "../../components/Presentation/Presentation";
import HouseHome from "../../components/HouseHome/HouseHome";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import Snow from "../../components/Snow";
import Smoke from "../../components/Smoke/Smoke";

function Home() {

  return (
     <>
      <Smoke />
      <Snow />
    <main className="homeMain">
      <div className="HomeTitle">
        <HomeTitle />
      </div>
      <div className="CountdownTimer">
        <CountdownTimer />
      </div>
      <div className="Presentation">
        <Presentation />
      </div>
      <div className="HouseHome">
        <HouseHome />
      </div>
      <audio className="audio" autoPlay controls src="/src/sound/musicnoel.mp3"></audio>;
    </main>
   </>
  );
}

export default Home;
