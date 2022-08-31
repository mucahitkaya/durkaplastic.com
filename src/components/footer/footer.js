import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  CaretRightFilled,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { React } from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="footeritemcolumn">
        <div>
          <h2 className="titles">Durka Hakkında</h2>
          <hr className="titleunderline"></hr>
        </div>
        <div className="contents">
          <p>
            <CaretRightFilled />
            Müşteri memnuniyeti odaklı üretim anlayışıyla yeni makine ve
            ustalarıyla daima hizmetinizde.
          </p>
        </div>
      </div>
      <div className="footeritemcolumn">
        <div>
          <h2 className="titles">Ürün Grupları</h2>
          <hr className="titleunderline"></hr>
        </div>
        <div className="contents">
          <a id="footerlink">
            <p>
              <CaretRightFilled />
              Şişirme
            </p>
          </a>
          <a id="footerlink">
            <div>
              <p>
                <CaretRightFilled />
                Enjeksiyon
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="footeritemcolumn">
        <div>
          <h2 className="titles">İletişim</h2>
          <hr className="titleunderline"></hr>
        </div>
        <div className="contents">
          <div className="hoverkey">
            <a
              id="footerlink"
              href="https://goo.gl/maps/MisgNoeY7AGQKjGP8"
              target="_blank"
              rel="noreferrer"
            >
              <EnvironmentOutlined id="adressicon" />
              Yeşiloba Mahallesi 46103 sokak Uzun Kavak Sanayi Sitesi D.No: 26/A
              <b>Seyhan/ADANA</b>
            </a>
          </div>
          <div>
            <div>
              <a id="footerlink" href="tel:0532 643 72 33">
                <PhoneOutlined id="phone" />
                0532 643 72 33
              </a>
            </div>
            <div id="social">
              <p>
                <FacebookOutlined />
                <InstagramOutlined />
                <WhatsAppOutlined />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
