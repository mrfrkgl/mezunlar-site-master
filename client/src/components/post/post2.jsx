import "./post.css";
import resim1 from "../../images/14-18 kahvaltı.jpg";

export default function post2() {
    return (
        <div className="post">
            <img className="postImage" src={resim1} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Etkinlikler</span>
                </div>
                <span className="postTitle">
                    Mezunlar Kahvaltısı
                </span>
                <hr />
                <span className="postDate">15.00PM 06.03.2022</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, magnam nulla quasi optio rem laborum aspernatur
                voluptatibus eligendi dolores cumque esse vero. Pariatur, dicta
                asperiores dolorum dolorem aspernatur ducimus explicabo!
            </p>
        </div>
    );
}
