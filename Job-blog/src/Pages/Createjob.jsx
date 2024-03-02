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
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input type="submit" />
         </form>
        </div>
    </div>
  )
}

export default Createjob