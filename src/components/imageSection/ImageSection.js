import "./styles.css";
import cover from "../../images/cover.jpg";
import textUnderline from "../../images/textUnderline.svg";

function ImageSection() {
  return (
    <div className="sectioncontainer">
      <img id="anasayfaresmi" alt="şişirme ürünleri" src={cover}></img>
      <div className="linecontainer">
        <p id="line">PLASTİK BİDON TEDARİKÇİNİZ</p>
        <img id="linesdc" alt="linesdc" src={textUnderline}></img>
      </div>
    </div>
  );
}

export default ImageSection;
