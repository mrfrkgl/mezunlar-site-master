import "./post.css";
import toplantı from "../../images/mezunlar-toplantı.jpg";

export default function post1() {
    return (
        <div className="post">
            <img className="postImage" src={toplantı} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Toplantılar</span>
                </div>
                <span className="postTitle">
                    2022 Mezunlar Buluşması
                </span>
                <hr />
                <span className="postDate">07.01.2022</span>
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
