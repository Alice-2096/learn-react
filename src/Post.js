import './Post.css';

export default function Post(object) {
  return (
    <div className="Post">
      <div className="postHeading">
        <h2 className="postTitle">{object.heading}</h2>
        <span className="byAuthor">
          By <span className="authorName">{object.author}</span>
        </span>
      </div>
      <p className="postContent">{object.body}</p>
    </div>
  );
}
