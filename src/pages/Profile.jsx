import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import pp from "../assets/pp.jpg";

export default function Profile() {
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar />
      <div className="pt-36 pb-10 flex flex-col justify-center items-center">
        <div className="md:w-[800px] w-[450px] md:h-[200px] h-[150px] bg-secondary shadow-xl rounded-2xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl text-white font-[Poppins]">My Profile</h1>
        </div>
        <div className="w-[450px] h-[350px] md:w-[650px] md:h-[400px] md:-mt-16 p-2 justify-center items-center bg-white shadow-xl border rounded-[25px] mt-5 ml-4">
          <div className="flex gap-2 items-center justify-center m-3 md:m-3">
            <div className="md:w-1/2 w-1/2">
              <a
                href=""
                className="md:py-2 md:px-7 py-2 px-4 flex items-center justify-center rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Change Password
              </a>
            </div>
            <div className="md:w-1/2 w-1/2">
              <a
                href=""
                className="md:py-2 md:px-7 py-2 px-4 flex items-center justify-center rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Transaction History
              </a>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col items-center justify-center">
              <img
                src={pp}
                alt="Foto Profile"
                className="rounded-full object-cover w-20 h-20 md:w-36 md:h-36 m-3 md:mt-0"
              />
              <a
                href=""
                className="md:py-[5px] md:px-4 py-1 px-4 rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Change Profile
              </a>
            </div>
            <div className="w-1/2">
            
            <div className="m-3 flex flex-col gap-y-2 md:flex md:flex-col md:gap-y-3 md:mt-4">
            <div>
              <label
                htmlFor="name"
                className="md:text-base text-sm text-black"
              >
                Name
              </label>
              <div className=" flex items-center justify-between ">
                <p className="md:text-lg text-sm text-black font-semibold">Ahmad Azizi</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-base text-black"
              >
                Email
              </label>
              <div className=" flex items-center justify-between">
                <p className="text-lg text-black font-semibold">zizi@gmail.com</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="number"
                className="text-base text-black"
              >
                Phone Number
              </label>
              <div className=" flex items-center justify-between">
                <p className="text-lg text-black font-semibold">+62 987271726</p>
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-base text-black"
              >
                Address
              </label>
              <div className=" flex items-center justify-between">
                <p className="text-lg text-black font-semibold">Jl.Kenari 52</p>
              </div>
            </div>
            </div>
         
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
