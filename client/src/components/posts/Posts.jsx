import Post from "../post/post";
import Post1 from "../post/post1";
import Post2 from "../post/post2";
import "./posts.css";

export default function Posts() {
  return (
      <div className="posts">
        <a className="top-link active" href="/post/:post1">
          <Post />
        </a>
          <Post1 />
          <Post2 />
          <Post />
          <Post1 />
          <Post2 />
          <Post />
          <Post1 />
          <Post2 />
      </div>
  );
}
