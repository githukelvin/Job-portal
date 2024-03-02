import React from 'react'
import { useForm } from "react-hook-form"

const Createjob = () => {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{ 
        console.log(data)
      };
    
      // console.log(watch("example")) 
  return (
    <div className="max-w-screen-2xl  container mx-auto xl:px-24 px-4">
        {/* form */}
        <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" >
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Job Title
              </label>
               <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")}  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"/>
            </div>
            {/* company name */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Company Name
              </label>
               <input type="text" placeholder="Ex: Microsoft" {...register("companyName")}  className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"/>
            </div>

          </div>
          {/* 2nd row */}

          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Minimum Salary
              </label>
               <input type="text" placeholder="$20k" {...register("minPrice")}  className="create-job-input"/>
            </div>
            {/* company name */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Maximum Salary
              </label>
               <input type="text" placeholder="$200k" {...register("maxPrice")}  className="create-job-input"/>
            </div>

          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Salary Type
              </label>
              <select {...register("salaryType")} className="create-job-input">
        <option value="">Choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
            </div>
            {/* company name */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Job Location
              </label>
               <input type="text" placeholder="Ex: Kenya" {...register("jobLocation")}  className="create-job-input"/>
            </div>

          </div>

          {/* 4th row */}
          <div className="create-job-flex">

          <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Job Posting Date
              </label>
               <input type="date" placeholder="Ex: 2024-01-05" {...register("postingDate")}  className="create-job-input"/>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">
                Experience Level
              </label>
              <select {...register("salaryType")} className="create-job-input">
        <option value="">Choose your Experience</option>
        <option value="No experience">Any experience</option>
        <option value="Internship">Internship</option>
        <option value="Work remotely">Work remotely</option>
      </select>
            </div>
            {/* company name */}
            

          </div>

          <input type="submit" className=" block mt-12 bg-blue text-white hover:bg-pink font-semibold px-8 py-2 rounded-sm cursor-pointer" />
         </form>
        </div>
    </div>
  )
}

export default Createjob