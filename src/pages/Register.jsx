import {Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import img2 from "../assets/gambar2.png";
import google from "../assets/google.png";
import '../App.css'

export default function Register() {
  const navigate = useNavigate()
  return (
    <section className=" w-screen h-screen flex items-center justify-center">
      <div className="bg-white flex rounded-xl max-w-3xl md:pl-5 items-center justify-center ">
        <div className="md:w-1/2">
          <img
            src={logoImg}
            alt="LOGO"
            className="mx-auto mt-2"
          />
          <h1 className="font-bold text-2xl text-center mt-2 text-primary font-serif">Welcome to I’Market</h1>
          <p className="font-medium text-xs text-center mt-1 text-primary">Enter your personal data to create your account</p>
          <form
            action=""
            className="flex flex-col gap-2 mt-4"
          >
            <label
              htmlFor="name"
              className="text-sm text-primary"
            >
              Name
            </label>
            <input
              className="p-2 rounded-xl text-primary border-2 border-primary"
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
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
                class="bi bi-eye-fill absolute top-2/3 right-3 -translate-y-1/2 cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>
            <label
              htmlFor="email"
              className="text-sm text-primary"
            >
              Addres
            </label>
            <input
              className="p-2 rounded-xl text-primary border-2 border-primary"
              type="address"
              name="address"
              id="address"
              placeholder="Enter your address"
            />
            <label
              htmlFor="email"
              className="text-sm text-primary"
            >
              Handphone
            </label>
            <input
              className="p-2 rounded-xl text-primary border-2 border-primary"
              type="number"
              name="number"
              id="number"
              placeholder="Enter your number"
            />
            <button onClick={()=>navigate('/login')}
              type="submit"
              className="rounded-xl bg-secondary p-2 text-white mt-5"
            >
              Sign Up
            </button>
            <div className="relative">
              <button onClick={()=>navigate('/login')}
                type="submit"
                className="rounded-xl bg-white p-2 border-2 border-primary mt-1 w-full flex justify-center"
              >
                <img
                  src={google}
                  alt=""
                  width={25}
                  className="mr-1"
                />
                Sign Up With Google
              </button>
            </div>
            <p className="pt-2 text-center text-primary pb-5">
            Already have an account? ?{" "}
              <Link to='/login'
                href="#"
                className="text-primary font-bold"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
        <div className="md:w-1/2 ml-5 ">
          <img
            src={img2}
            alt="PP"
            className="custom-img rounded-xl md:block hidden"
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
