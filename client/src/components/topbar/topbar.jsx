import "./topbar.css";
import logo from "../../images/favicon.ico";
import profilePhoto from "../../images/profile.jpg";

export default function TopBar() {
    /*user set*/
    const user = false;
    return (
        <div className="top">
            <div className="topSocial">
                <a
                    className="top-link active"
                    href="https://www.facebook.com/uluslararasifsm/"
                >
                    <i className="topIcon fa-brands fa-facebook-square"></i>
                </a>
                <a
                    className="top-link active"
                    href="https://www.instagram.com/ufsmmezun/"
                >
                    <i className="topIcon fa-brands fa-instagram-square"></i>
                </a>
                <a
                    className="top-link active"
                    href="https://twitter.com/ufsm_aihl"
                >
                    <i className="topIcon fa-brands fa-twitter-square"></i>
                </a>
            </div>
            <div className="topLeft">
                <a className="top-link active" href="/">
                    <img className="logo" src={logo} alt="" />
                </a>
                <div className="siteName">
                    <a className="top-link active" href="/">
                        UFSM MEZUNLAR
                    </a>
                </div>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <a className="top-link active" href="/">
                            Ana Sayfa
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link active" href="/haberler">
                            Haberler
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/kadro">
                            İdari Kadro
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/iletisim">
                            İletişim
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/mezunlar">
                            {user && "Mezunlar"}
                        </a>
                    </li>
                    <li className="topListItem">
                        <a className="top-link" href="/galeri">
                            {user && "Galeri"}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImage" src={profilePhoto} alt="" />
                ) : (
                    <div className="topListItem">
                        <a className="top-link active" href="/login">
                            Giriş Yap
                        </a>
                    </div>
                )}
                {user ? (
                    <div className="username">Ömer Faruk Gül</div>
                ) : (
                    <div className="topListItem">
                        <a className="top-link active" href="/register">
                            Kayıt Ol
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
