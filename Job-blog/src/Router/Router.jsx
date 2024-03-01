import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Createjob from "../Pages/Createjob";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/> },
        {
          path: "post-job",
          element: <Createjob/>
        }
      ],
    },
  ]);
  
  export default router;