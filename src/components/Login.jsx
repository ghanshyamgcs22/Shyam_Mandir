import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };


    try {
      const res = await axios.post("https://shyamji-backend.onrender.com/user/login", userInfo);
      const msg=res.data.success===true?res.data.message:res.data.data;
    //  alert(msg);
    res.data.success===true?toast.success(msg):toast.error(msg);
    //  toast.success(msg);
      localStorage.setItem("user", JSON.stringify(res.data.data)); 
    } catch (err) {
      const errorMessage = err.response?.data?.message ;
      // alert(errorMessage); 
      toast.error(errorMessage);
    }

    setTimeout(()=> {
      window.location.reload();
  }, 1000);
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={() => document.getElementById('my_modal_3').close()}>
              ✕
            </button>
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
                    type="email"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                </label>
                {errors.email && <p className=" mt-2">This field is required</p>}
              </div>
              <div>
                <label className="input input-bordered flex items-center gap-4 mt-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </label>
                {errors.password && <p className="mt-2">This field is required</p>}
              </div>
              {/* Button */}
              <div className="label mt-10">
                <button className="btn btn-active btn-secondary" type="submit">Login</button>
                
              </div>
            </div>
          </form>
        </div>
      </dialog>
     
    </div>
  );
}

export default Login;
