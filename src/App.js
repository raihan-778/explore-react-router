import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Main from "./Layout/Main";
import Friends from "./components/Friends/Friends";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Main></Main>
        </div>
      ),
      children: [
        {
          path: "/",
          element: (
            <div>
              <Home></Home>
              this is homepage
            </div>
          ),
        },
        {
          path: "/home",
          element: (
            <div>
              <Home></Home>
              this is homepage
            </div>
          ),
        },
        {
          path: "/about",
          element: (
            <div>
              <About></About>
            </div>
          ),
        },
        {
          path: "/friends",
          loader: () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: (
            <div>
              <Friends></Friends>
            </div>
          ),
        },
      ],
    },

    {
      path: "/product",
      element: (
        <div>
          <Product></Product>
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div>
          <h4>This route is not found</h4>
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
