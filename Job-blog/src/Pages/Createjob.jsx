import React from 'react'
import { useForm } from "react-hook-form"

const Createjob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example")) 
  return (
    <div className="max-w-screen-2xl  container mx-auto xl:px-24 px-4">
        {/* form */}
        <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue="test" {...register("example")} />

     
      <input {...register("exampleRequired", { required: true })} />
      
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
        </div>
    </div>
  )
}

export default Createjob