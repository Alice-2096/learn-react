import './Post.css';

//Post Component 
export default function Post({ heading, author, body }) {
  return (
    <div className="Post">
      <div className="postHeading">
        <h2 className="postTitle">{heading}</h2>
        <span className="byAuthor">
          By <span className="authorName">{author}</span>
        </span>
      </div>
      <p className="postContent">{body}</p>
    </div>
  );
}
