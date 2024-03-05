import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Createjob from "../Pages/Createjob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdatedJob from "../Pages/UpdatedJob";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home/> },
        {
          path: "/post-job",
          element: <Createjob/>
        },

        {
          path: "/my-job",
          element: <MyJobs/>
        },

        {
          path: "/salary",
          element: <SalaryPage/>
        },

        {
          path: "/edit-job/:id",
          element: <UpdatedJob/>,
          loader:({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
      ],
    },
  ]);
  
  export default router;