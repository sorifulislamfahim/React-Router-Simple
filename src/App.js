import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './componants/Home/Home';
import About from './componants/About/About';
import Header from './componants/Header/Header';
import Products from './componants/Products/Products';
import Main from './layOut/Main';
import Friends from './componants/Friends/Friends';
import FriendDetails from './componants/FriendDetails/FriendDetails';
import Posts from './componants/Posts/Posts';
import PostDetails from './componants/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <Main></Main>, children: [
      {path: "/home", element: <Home></Home>},
      {path: "/products", element: <Products></Products>},
      {path: "/friends", 
      loader: async () => {
      return  fetch('https://jsonplaceholder.typicode.com/users')
      },
      element: <Friends></Friends>},
      {
        path: "/friend/:friendId", 
        loader: async ({params}) => {
          // console.log(params.friendId)
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element: <FriendDetails></FriendDetails>
      },
      {
        path: "/posts", 
        loader: async () => {
          return fetch ('https://jsonplaceholder.typicode.com/posts')
        },
        element: <Posts></Posts>
      },
      {
        path: "/post/:postId",
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <PostDetails></PostDetails>
      }
    ]},
    
    
    {path: "/about", element: <About></About>},
    {path: "*", element: <div>This is not found</div>} 
  ]);
  
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
