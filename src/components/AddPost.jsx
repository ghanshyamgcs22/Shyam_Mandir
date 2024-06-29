import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

import toast from "react-hot-toast";

function AddPost() {
    const location =useLocation();
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || "/";
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      const userInfo = {
        category: data.category,
        image: data.image,
      };
  
      await axios
        .post("https://shyamji-backend.onrender.com/book/addbook", userInfo)
        .then((res) => {
          
          
          if (res.data) {
            // alert(res.data.message);
            toast.success(res.data.message);
            navigate(from,{replace:true})
            // console.log(res.data.message)
          } 
          localStorage.setItem("user", JSON.stringify(res.data));
          
        })
        .catch((err) => {
          if(err.response){
            // alert("Error "+ "User already exists " )
            toast.error("Error "+ "User already exists ");
            
          }
         
          
        
          
  
        });
    };
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-700 p-8 rounded shadow-md w-full max-w-md relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">AddPost</h3>
              <div className="mt-10 m-10">
                <div>
                  <label className="input input-bordered flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Category"
                      {...register("category", { required: true })}
                    />
                  </label>
                  {errors.email && (
                    <p className="mt-2 text-red-500">This field is required</p>
                  )}
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-4 mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Photo Link"
                      {...register("image", { required: true })}
                    />
                  </label>
                  {errors.username && (
                    <p className="mt-2 text-red-500">This field is required</p>
                  )}
                </div>
                
                {/*Button  */}
                <div className="label mt-10">
                  <button type="submit" className="btn btn-active btn-secondary">
                    AddPost
                  </button>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
        <Login />
      </>
    );
}

export default AddPost