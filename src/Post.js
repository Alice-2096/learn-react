import './Post.css';

//Post Component
export default function Post({ heading, author, tag, date, body }) {
  return (
    <div className="Post">
      <div className="postHeading">
        <h2 className="postTitle">{heading}</h2>
        <span className="byAuthor">
          By <span className="authorName">{author}</span>|{' '}
          <span className="tag">{tag}</span>| Posted on <span>{date}</span>
        </span>
      </div>
      <p className="postContent">{body}</p>
    </div>
  );
}
