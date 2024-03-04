import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchText, SetSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/myJobs/wangecichristine39@gmail.com`).then(res => res.json()).then(data => {
            setJobs(data);
        });
    }, [])
    const handleSearch = () => {{
        const filter = jobs.filter((jobs) => jobs.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        // console.log(filter)
        setJobs(filter);
        setIsLoading(false)
    }}

    //delete function
    const handleDelete = (id) => {
        console.log(id)
    }

    // console.log(searchText)
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="my-jobs-container">
            <h1 className="text-center p-4">All My Jobs</h1>
            <div className="searc-box p-2 text-center mb-2">
                <input 
                onChange={(e) => SetSearchText(e.target.value)}
                type="text" name="search" id="search" className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"/>
                <button className="py-2 px-8 mb-4 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-pink" onClick={handleSearch}>Search</button>
            </div>

        </div>

        {/* table containg the data */}
        <section class="py-1 bg-blueGray-50">
<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">All Jobs</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
         <Link to="/post-job"> <button class="bg-blue text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button></Link>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          NO.
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         TITLE
                        </th>
           <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          COMPANY
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          SALARY
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          EDIT
                        </th>
          <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          DELETE
                        </th>
                        
                        
          </tr>
        </thead>

        <tbody>
            {
                jobs.map((job, index) => (
                    <tr key={index}>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                       {index + 1}
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      {job.jobTitle}
                    </td>
                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {job.companyName}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        ${job.minPrice} - ${job.maxPrice}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                         <button onClick={() =>handleDelete(job._id)} className="bg-red-700 py-2 px-6 text-white rounded-sm">Delete</button>
                    </td>
                    
                  </tr>
                ))
            }
         

        </tbody>

      </table>
    </div>
  </div>
</div>
<footer class="relative pt-8 pb-6 mt-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
    </div>
  )
}

export default MyJobs