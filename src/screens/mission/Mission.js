import "./mission.css";
import backgrnd from "../../images/backgrnd.jpg";

function Mission() {
  return (
    <div className="missionpagecontainer">
      <div></div>
      <div className="contentcontainer">
        <div className="missiontitlecontainer">
          <h2 className="missiontitle">Durka Plastik Kurumsal</h2>
        </div>
        <div className="missionimagecontainer">
          <img src={backgrnd}></img>
        </div>
        <div className="missionparagraphcontainer">
          <p className="missionparagraph">
            Hakkımızda Sertifikalarımız İnsan Kaynakları Kvkk Ulucan Plastik
            Hakkımızda Ulucan Plastik Kurumsal Plastik sektörüne Adana'da 1992
            yılında granül (hammadde) imalatı ile adım atan ULUCAN Plastik, 1994
            yılında ise poşet imalatına başlamıştır.
          </p>
          <p className="missionparagraph">
            Yıllar içerisinde artan üretim kapasitesi ve beraberinde ihtiyaç
            duyulan daha geniş mekânla birlikte büyüyen firmamız, yönetim
            merkezimizin de bulunduğu poşet imalatı yapılan 3000 metrekare
            kapalı alanı bulunan fabrikası ve geri dönüşüm hammaddesinin
            işlendiği 1500 metrekare kapalı alanı bulunan şubesi olmak üzere iki
            farklı mekânda toplam 4500 metrekare kapalı alanda deneyimli
            personelleriyle hizmet vermektedir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
