import "./Home.scss";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Presentation from "../../components/Presentation/Presentation";
import HouseHome from "../../components/HouseHome/HouseHome";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
function Home() {

  return (
    <main className="homeMain">
      <div className="HomeTitle">
        <HomeTitle />
      </div>
      ;
      <div className="CountdownTimer">
        <CountdownTimer />
      </div>
      ;
      <div className="Presentation">
        <Presentation />
      </div>
      ;
      <div className="HouseHome">
        <HouseHome />
      </div>
      ;
    </main>
  );
}
export default Home;
