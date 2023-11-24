import "./Text.scss";

function Text({ content }) {
  console.log(content);
  return (
    <div className="pageconte">
      <h1 className="pageconte__titre">{content.title}</h1>
      <p className="pageconte__text">{content.tale.firstPart}</p>
      <p className="pageconte__text">{content.tale.secondPart}</p>
      <p className="pageconte__text">{content.tale.thirdPart}</p>
    </div>
  );
}

export default Text;
