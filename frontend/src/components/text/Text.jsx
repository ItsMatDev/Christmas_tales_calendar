import { useState } from "react";
import "./Text.scss";
import arrow from "../../assets/arrow.svg";

function Text({ content }) {
  const [nexttest, setNexttext] = useState(1);
<<<<<<< Updated upstream
  const [sound, setSound] = useState(false);
=======
>>>>>>> Stashed changes
  console.log(content);
  const handleClick = () => {
    setNexttext(nexttest + 1);
  };
  const handleClickmoins = () => {
    setNexttext(nexttest - 1);
  };
<<<<<<< Updated upstream

  return (
    <div className="pageconte">
      <h1 className="pageconte__titre">{content.title}</h1>
      {nexttest === 3 ? null : <img className="nextpage" onClick={handleClick} src={arrow} alt="" />}
      {nexttest === 1 ? null : <img className="nextpagemoins" onClick={handleClickmoins} src={arrow} alt="" />}

=======
  return (
    <div className="pageconte">
      <h1 className="pageconte__titre">{content.title}</h1>
      {nexttest === 3 ? null : (
        <img
          className="nextpage"
          onClick={handleClick}
          src="https://assets.stickpng.com/images/6002fc0c51c2ec00048c6c7b.png"
          alt=""
        />
      )}
      {nexttest === 1 ? null : (
        <img
          className="nextpagemoins"
          onClick={handleClickmoins}
          src="https://assets.stickpng.com/images/6002fc0c51c2ec00048c6c7b.png"
          alt=""
        />
      )}

>>>>>>> Stashed changes
      {content && nexttest === 1 && (
        <>
          <p className="pageconte__text">
            <span className="firstLetter">{content.tale.firstPart[0]}</span>
            <span className="otherLetter">{content.tale.firstPart.slice(1)}</span>
          </p>
          <p className="partietext"> Pages 1 </p>
<<<<<<< Updated upstream
          <audio autoPlay={true} controls src="/src/sound/turning-pages.mp3"></audio>
=======
>>>>>>> Stashed changes
        </>
      )}
      {content && nexttest === 2 && (
        <>
          <p className="pageconte__text">
            <span className="firstLetter">{content.tale.secondPart[0]}</span>
            <span className="otherLetter">{content.tale.secondPart.slice(1)}</span>
          </p>
          <p className="partietext"> Pages 2 </p>
<<<<<<< Updated upstream
          <audio autoPlay={true} controls src="/src/sound/turning-pages.mp3"></audio>
=======
>>>>>>> Stashed changes
        </>
      )}
      {content && nexttest === 3 && (
        <>
          <p className="pageconte__text">
<<<<<<< Updated upstream
=======
            {" "}
>>>>>>> Stashed changes
            <span className="firstLetter">{content.tale.thirdPart[0]}</span>
            <span className="otherLetter">{content.tale.thirdPart.slice(1)}</span>
          </p>
          <p className="partietext"> Pages 3</p>
<<<<<<< Updated upstream
          <audio autoPlay={true} controls src="/src/sound/turning-pages.mp3"></audio>
=======
>>>>>>> Stashed changes
        </>
      )}
    </div>
  );
}

export default Text;
