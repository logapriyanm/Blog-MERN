import './App.css'
import PostDetail from './Pages/PostDetail';
import PostList from './Pages/PostList'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CategoryPosts from './Pages/CategoryPosts';

function App() {
 

  return (
    <>
      <Router>
    <Header/>
        <Routes>
          <Route path='/' element={<PostList/>}/>
          <Route path='/posts/:id' element={<PostDetail/>}/>
          <Route path='/posts/category/:id' element={<CategoryPosts/>}/>
        </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
