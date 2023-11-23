import "./Home.scss";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Presentation from "../../components/Presentation/Presentation";
import HouseHome from "../../components/HouseHome/HouseHome";
import HomeTitle from "../../components/HomeTitle/HomeTitle";

function Home() {
  return(
  <main className="homeMain">
    <HomeTitle />;
    <CountdownTimer />;
    <Presentation />;
    <HouseHome />;
  </main>)
}

export default Home;
