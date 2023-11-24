import "./PictureTales.scss";
import borderLight from "../../assets/border-light.png";
function PictureTales({ content }) {
  return (
    <div>
    <img className="border__img" src={borderLight}/>
  <img className="pictureconte" src={`http://localhost:5010${content.imgSrc}`} alt="" />;
  </div>
  )
}

export default PictureTales;
