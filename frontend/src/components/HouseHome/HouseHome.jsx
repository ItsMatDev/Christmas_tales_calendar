import "./HouseHome.scss";
import picture from "../../assets/houseHome.png";
import {Link} from "react-router-dom";

function HouseHome () {
  return (
    <Link to="/Calendar">
    <img className="HouseHomeImg" src={picture} alt="Une maison sous la neige"/>
    </Link>
  )
}

export default HouseHome;