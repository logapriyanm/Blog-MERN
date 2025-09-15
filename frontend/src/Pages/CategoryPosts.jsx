import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts/category/${id}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/categories/${id}`);
      setCategory(response.data);
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategory();
  }, [id]);

  if (!category) return <p>Loading...</p>;

  return (
    <main>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-4">{category.name}</h1>
            {posts.length > 0 ? posts.map((post) => <Post key={post._id} post={post} />) : <h3>No Posts available</h3>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPosts;
