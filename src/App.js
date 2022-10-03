import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import FriendDetails from "./components/friendDetails/FriendDetails";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Product from "./components/Product/Product";
import Main from "./Layout/Main";
import PostDetails from "./PostDetails/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        
          <Main></Main>
       
      ),
      children: [
        {
          path: "/",
          element: (
            
              <Home></Home>
             
          ),
        },
        {
          path: "/home",
          element: (
            
              <Home></Home>
              
            
          ),
        },
        {
          path: "/about",
          element: (
           
              <About></About>
           
          ),
        },
        {
          path: "/friends",
          loader: () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: (   
              <Friends></Friends>
          ),
        },
        {
          path:`/friend/:friendId`,
          loader: async ({params})=>{
            console.log(params.friendId)
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:(<FriendDetails></FriendDetails>)
        },
        {
          path:"/posts",
          loader: async ()=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          },
          element:<Posts></Posts>
        },
        {
          path:"/post/:postId",
          loader: async ({params})=>{
            console.log(params.postId)
           return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element:<PostDetails></PostDetails>
          
        }
      ],
    },

    {
      path: "/product",
      element: (
       
          <Product></Product>
       
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <h4>This route is not found:404</h4>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
