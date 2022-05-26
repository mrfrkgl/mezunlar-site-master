import "./sidebar.css";
import iyc from "../../images/İlim_Yayma_Cemiyeti_logo.png";
import ufsm from "../../images/ufsm.png";

export default function Sidebar() {
  return (
      <div className="sidebar">
          <div className="sidebarItem">
              <span className="sidebarTitle">Hakkımızda</span>
              <p className="sidebarText">
                  UFSM MEZUNLAR sitesi, Uluslararası Fatih Sultan Mehmet Anadolu
                  İmam Hatip Lisesi mezunları ve mensuplarının birbirleri ile
                  iletişimde kalıp; etkinlik, haber ve toplantılardan haberdar
                  olmaları için oluşturulmuş bir sitedir.
              </p>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">Kategoriler</span>
              <ul className="sidebarList">
                  <li className="sidebarListItem">Etkinlikler</li>
                  <li className="sidebarListItem">Haberler</li>
                  <li className="sidebarListItem">Toplantılar</li>
                  <li className="sidebarListItem">Resimler</li>
              </ul>
          </div>
          <div className="sidebarItem">
              <span className="sidebarTitle">
                  <h3>Bizi Takip Edin</h3>
              </span>
              <div className="sidebarSocial">
                  <a
                      className="top-link active"
                      href="https://www.facebook.com/uluslararasifsm/"
                  >
                      <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                  </a>
                  <a
                      className="top-link active"
                      href="https://www.instagram.com/ufsmmezun/"
                  >
                      <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                  </a>
                  <a
                      className="top-link active"
                      href="https://twitter.com/ufsm_aihl"
                  >
                      <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                  </a>
              </div>
          </div>
          <div className="sidebarLogos">
              <img className="sidebarLogo" src={iyc} alt="" />
              <img className="sidebarLogo" src={ufsm} alt="" />
          </div>
          <p className="maker">
              <a className="top-link active" href="https://www.linkedin.com/company/teknofsm/">
                  Made by TeknoFSM
              </a>
          </p>
      </div>
  );
}
