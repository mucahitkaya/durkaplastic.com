import "./comm.css";

import {
  PhoneOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Comm() {
  return (
    <>
      <div className="commcontainer">
        <div className="commtitle">
          <h1>Durka Plastik İletişim Bilgileri</h1>{" "}
        </div>
        <div className="commparagraph">
          <p>
            Ulucan Plastik ve ürünlerimiz ile ilgili bilgi almak veya şikâyet ve
            önerilerinizi paylaşmak için aşağıda verdiğimiz telefon
            numaralarından bizlere ulaşabilir, e-mail atabilir veya
            paylaştığımız adresten yönetim adresimize gelerek yetkililerimizle
            yüz yüze görüşebilir, WhatsApp, Instagram, Facebook, Youtube gibi
            sosyal medya hesaplarımızı takip ederek firmamız ve sektörle ilgili
            gelişmelerden anında haberdar olabilirsiniz.
          </p>
        </div>
        <div className="commmap">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.313206907962!2d35.250135515150006!3d36.97845637991229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152887f58970584d%3A0xcce81ef12854e08a!2sDurka%20Plastik%20Makine!5e0!3m2!1sen!2str!4v1631813497821!5m2!1sen!2str"
            id="mapframe"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className="mapaddress">
            <div className="mapaddressitemcontainer">
              <a
                className="navigation-link"
                href="https://goo.gl/maps/MisgNoeY7AGQKjGP8"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inner-container">
                  <EnvironmentOutlined id="commicons" />
                  <h4>
                    Adres: <p>Yeşiloba cart curt</p>
                  </h4>
                </div>
              </a>
            </div>
            <div className="mapaddressitemcontainer">
              <a
                className="navigation-link"
                href="tel:0532 643 72 33"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inner-container">
                  <PhoneOutlined id="commicons" />
                  <h4>
                    Tel No: <p>0563 765 66 44</p>
                  </h4>
                </div>
              </a>
            </div>
            <div className="mapaddressitemcontainer">
              <a
                className="navigation-link"
                href="mailto:durkaplasrikmak@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inner-container">
                  <MailOutlined id="commicons" />
                  <h4>
                    Mail Adresi:{" "}
                    <p id="serefsiz">buralardutluktu@hotmail.com</p>
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comm;
