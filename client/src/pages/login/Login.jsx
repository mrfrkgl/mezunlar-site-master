import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <pan className="loginTitle">Giriş Yap</pan>
            <form className="loginForm">
                <label> E-mail </label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="E-mailinizi giriniz..."
                />
                <label> Şifre </label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Şifrenizi giriniz..."
                />
                <button className="loginButton">Giriş Yap</button>
                <button className="loginRegisterButton">Yeni Hesap Oluştur</button>
            </form>
        </div>
    );
}
