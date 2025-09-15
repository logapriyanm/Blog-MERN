import { useEffect, useState } from "react"
// import Post from "../components/Post"
import axios from "axios";
import { useParams } from "react-router-dom";
import Post from "../components/Post";


const CategoryPosts = () => {

    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState([]);
    const {id} = useParams()

  const fetchPosts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/category/${id}`);
    setPosts(response.data);
}

const fetchCategory = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/categories/${id}`);
    setCategory(response.data);
}



    useEffect(() => {
        fetchPosts();
        fetchCategory();
    }, [])

     if (!category) {
    return <p>Loading...</p>
  }


    return (
        <>

            <main>
                <div className="container mt-4">
                    <div className="row">

                        <div className="col-lg-8">
                            <h1 className="mb-4">{category.name}</h1>


                             {
                                posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h3>No Posts available</h3>
                            }



                        </div>


                    </div>
                </div>
            </main>


        </>
    )
}

export default CategoryPosts
