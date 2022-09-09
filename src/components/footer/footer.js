import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  CaretRightFilled,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { React } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="columncontainer">
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
            <Link to="/TarimGrubu" id="footerlink">
              <p>
                <CaretRightFilled />
                Tarım Grubu
              </p>
            </Link>
            <Link to="/KimyaGrubu" id="footerlink">
              <div>
                <p>
                  <CaretRightFilled />
                  Kimya Grubu
                </p>
              </div>
            </Link>
            <Link to="/MutfakGrubu" id="footerlink">
              <div>
                <p>
                  <CaretRightFilled />
                  Mutfak Grubu
                </p>
              </div>
            </Link>
            <Link to="/TemizlikGrubu" id="footerlink">
              <div>
                <p>
                  <CaretRightFilled />
                  Temizlik Grubu
                </p>
              </div>
            </Link>
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
                Yeşiloba Mahallesi 46103 sokak Uzun Kavak Sanayi Sitesi D.No:
                26/A
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
                  <a href="https://youtube.com">
                    <FacebookOutlined id="socialicons" />
                  </a>
                  <a href="https://youtube.com">
                    <InstagramOutlined id="socialicons" />
                  </a>
                  <a href="https://youtube.com">
                    <WhatsAppOutlined id="socialicons" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
