import "./register.css"

export default function Register() {
  return (
      <div className="register">
          <div>
              <pan className="registerTitle">Kayıt Ol</pan>
              <form className="registerFormL">
                  <label> E-mail:* </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="E-mailinizi giriniz..."
                  />
                  <label> Şifre:* </label>
                  <input
                      type="password"
                      className="registerInput"
                      placeholder="Şifrenizi giriniz..."
                  />
                  <label> Şifre Tekrar:* </label>
                  <input //şifreler aynı mı deneme
                      type="password"
                      className="registerInput"
                      placeholder="Şifrenizi tekrar giriniz..."
                  />
                  <label> Adınız ve Soyadınız:*</label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Adınızı giriniz..."
                  />
                  <label> Liseden Mezun Olduğunuz Yıl:* </label>
                  <input //yıllar listesi
                      type="text"
                      className="registerInput"
                      placeholder="Yılı Giriniz..."
                  />
              </form>
          </div>
          <div>
              <form className="registerFormCL">
                  <label> Üniversite:* </label>
                  <input //üniversite listesi
                      type="text"
                      className="registerInput"
                      placeholder="Üniversitenizi Giriniz..."
                  />
                  <label> Bölüm:* </label>
                  <input //bölüm listesi
                      type="text"
                      className="registerInput"
                      placeholder="Bölüm Giriniz..."
                  />
                  <label>
                      {" "}
                      Üniversiteden Mezun Olduğunuz/Olacağınız Yıl:*{" "}
                  </label>
                  <input //şuan ki yılı geçmişse yüksek lisans menüsü çıksın
                      type="text"
                      className="registerInput"
                      placeholder="Yılı Giriniz..."
                  />
                  <label> Yüksek Lisans Yapıyor Musunuz:* </label>
                  <input //evet hayır seçenekleri
                      type="text"
                      className="registerInput"
                      placeholder=" Giriniz..."
                  />
                  <label> Yüksek Lisans Yaptığınız Üniversite: </label>
                  <input //üniversite listesi
                      type="text"
                      className="registerInput"
                      placeholder="Üniversite Giriniz..."
                  />
                  <label> Yüksek Lisans Yaptığınız Bölüm: </label>
                  <input //bölüm listesi
                      type="text"
                      className="registerInput"
                      placeholder="Bölüm Giriniz..."
                  />
                  <button className="registerLoginButton">Zaten Hesabım Var </button>
              </form>
          </div>
          <div>
              <form className="registerFormCR">
                  <label> Çalışıyorsanız Çalıştığınız Kurum:* </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Kurum Giriniz..."
                  />
                  <label> Çalıştığınız Alan:* </label>
                  <input //bölüm listesi
                      type="text"
                      className="registerInput"
                      placeholder="Alan Giriniz..."
                  />
                  <label> 1. Telefon Numaranızı Giriniz:* </label>
                  <input //bunu girince ekle seçeneği çıksın sonra yeni numara yeri
                      type="text"
                      className="registerInput"
                      placeholder="Numaranızı Giriniz..."
                  />
                  <label> 2. Telefon Numaranızı Giriniz: </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Numaranızı Giriniz..."
                  />
                  <label> Memleketiniz:* </label>
                  <input //ülke listesi
                      type="text"
                      className="registerInput"
                      placeholder="Ülkenizi Giriniz..."
                  />
                  <button className="registerButton">Kayıt Ol</button>
              </form>
          </div>
          <div>
              <form className="registerFormR">
                  <label> Açık Adresinizi Giriniz (Türkiye): </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Adresi Giriniz..."
                  />
                  <label> Açık Adresinizi Giriniz (Uluslararası): </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Adresi Giriniz..."
                  />
                  <label> Kaldığınız Yer:* </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Yaşadığınız Yeri Giriniz..."
                  />
                  <label> Bildiğiniz Diller:* </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Bildiğiniz Dilleri Giriniz..."
                  />
                  <label> Medeni Hal:* </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Medeni Halinizi Giriniz..."
                  />
                  <label>
                      UFSM Öğrencilerine Katkıda Bulunabileceğiniz Alanlar:*
                  </label>
                  <input
                      type="text"
                      className="registerInput"
                      placeholder="Medeni Halinizi Giriniz..."
                  />
              </form>
          </div>
      </div>
  );
}
