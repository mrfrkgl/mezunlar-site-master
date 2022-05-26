import "./post.css"
import kahvaltı from "../../images/mezunlar-kahvaltı.jpg"

export default function post() {
  return (
      <div className="post">
          <img
              className="postImage"
              src={kahvaltı}
              alt=""
          />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Etkinlikler</span>
              </div>
              <span className="postTitle">
                  2014 - 2018 Mezunları Kahvaltısı
              </span>
              <hr />
              <span className="postDate">10.00AM 06.03.2022</span>
          </div>
          <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, magnam nulla quasi optio rem laborum aspernatur voluptatibus eligendi dolores cumque esse vero. Pariatur, dicta asperiores dolorum dolorem aspernatur ducimus explicabo!</p>
      </div>
  );
}
