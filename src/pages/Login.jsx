import {Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import img from "../assets/gambar1.png";
import google from "../assets/google.png";


export default function Login() {
  const navigate = useNavigate()
  return (
   <section className=" w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-xl max-w-3xl justify-center items-center md:pl-5">
        <div className="md:w-1/2 ">
          <img
            src={logoImg}
            alt="LOGO"
            className="mx-auto mt-2"
          />
          <h1 className="font-bold text-2xl text-center mt-2 text-primary font-serif">Welcome Back to I’Market</h1>
          <p className="font-medium text-xs text-center mt-1 text-primary">The faster you fill up, the faster you can get what you want</p>
          <form
            action=""
            className="flex flex-col gap-2 mt-4"
          >
            <label
              htmlFor="email"
              className="text-sm text-primary"
            >
              Email
            </label>
            <input
              className="p-2 rounded-xl text-primary border-2 border-primary"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <div className="relative">
              <label
                htmlFor="password"
                className="text-sm text-primary"
              >
                Password
              </label>
              <input
                className="p-2 rounded-xl text-primary border-2 border-primary w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <svg
                id="toggle-password"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                className="bi bi-eye-fill absolute top-2/3 right-3 -translate-y-1/2 cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="mr-2"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm text-primary"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text"
              >
                Forget Password?
              </a>
            </div>
            <button onClick={() => navigate('/profile')}
              type="submit"
              className="rounded-xl bg-secondary p-2 text-white mt-5"
            >
              Sign In
            </button>
            <div className="relative">
            <button onClick={() => navigate('/profile')}
              type="submit"
              className="rounded-xl bg-white p-2 border-2 border-primary mt-3 w-full flex justify-center"
            >
                <img src={google} alt="" width={25} className="mr-1 "/>
              Sign In With Google
            </button>
            </div>
            <p className="pt-16 text-center text-primary pb-5">
              Don’t have an account?{" "}
              <Link to='/register'
                href="#"
                className="text-primary font-bold"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="md:w-1/2 ml-5">
          <img
            src={img}
            alt="PP"
            className="md:block hidden rounded-xl object-cover h-full"
          />
        </div>
      </div>
    </section> 
  )
}
