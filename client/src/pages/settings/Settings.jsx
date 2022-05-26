import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import profilePhoto from "../../images/profile.jpg"

export default function Settings() {
  return (
      <div className="settings">
          <div className="settingsWrapper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">
                      {" "}
                      Hesap Bilgilerini Güncelle
                  </span>
              </div>
              <form className="settingsForm">
                  <label>Profil Fotoğrafı</label>
                  <div className="settingsPP">
                      <img src={profilePhoto} alt="" />
                      <label htmlFor="fileInput">
                          <i class="settingsPPIcon fa-solid fa-user"></i>
                      </label>
                      <input
                          type="file"
                          id="fileInput"
                          style={{ display: "none" }}
                      />
                  </div>
                  <label>Kullanıcı Adı</label>
                  <input type="text" placeholder="Ömer Faruk Gül" />
                  <label>E-mail</label>
                  <input type="email" placeholder="omergulfaruk05@gmail.com" />
                  <label>Şifre</label>
                  <input type="password" />
                  <button className="settingsSubmit">
                      <b>Güncelle</b>
                  </button>
              </form>
          </div>
          <Sidebar />
      </div>
  );
}