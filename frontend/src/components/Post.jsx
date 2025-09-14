import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-sm-12 col-md-3">
          <img
            className="img-fluid h-100 card-img-top"
            src={post.image || "https://via.placeholder.com/800x400"}
            alt={post.title}
          />
        </div>
        <div className="card-body col-md-9">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <Link to={`/posts/${post._id}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
