import "./PictureTales.scss";

function PictureTales({ content }) {
  return <img className="pictureconte" src={`http://localhost:5010${content.imgSrc}`} alt="" />;
}

export default PictureTales;
