import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts/${id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="container my-4">
      <div className="row">
        <article className="col-lg-8">
          <h2 className="blog-post-title">{post.title}</h2>
          <p className="blog-post-meta">
            {formattedDate} by <a href="#">{post.author}</a>
          </p>
          <img className="mb-3 img-fluid" src={post.image || "/placeholder.png"} alt="" />
          <div className="blog-post-content">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PostDetail;
