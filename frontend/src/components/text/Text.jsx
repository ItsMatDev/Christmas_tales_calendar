import "./Text.scss";

function Text({ content }) {
  console.log(content);
  return (
    <div className="pageconte">
      <h1 className="pageconte__titre">
        <span>{content.title[0]}</span>
        <span>{content.title.slice(1)}</span>
      </h1>
      <p className="pageconte__text">
        <span className="firstLetter">{content.tale.firstPart[0]}</span>
        <span className="otherLetter">{content.tale.firstPart.slice(1)}</span>
      </p>
      <p className="pageconte__text">{content.tale.secondPart}</p>
      <p className="pageconte__text">{content.tale.thirdPart}</p>
    </div>
  );
}

export default Text;
