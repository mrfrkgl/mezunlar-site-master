import "./header.css";
import okul from "../../images/FSM-imamhatip-Lisesi.jpg";

export default function Header() {
    return (
        <div className="header">
            <img
                className="headerImage"
                src={okul}
                alt=""
            />
            <div className="headerTitles">
                <span className="headerTitleSmall">
                    Uluslararası Fatih Sultan Mehmet Anadolu İmam Hatip Lisesi
                </span>
                <span className="headerTitleLarge">
                    Mezunları ve Mensupları Derneği
                </span>
            </div>
        </div>
    );
}
