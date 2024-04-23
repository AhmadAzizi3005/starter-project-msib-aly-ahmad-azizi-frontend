import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import pp from "../assets/pp.jpg";

export default function Profile() {
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar />
      <div className="pt-36 pb-32 relative">
        <div className="md:w-[900px] w-[450px] md:h-[200px] h-[150px] bg-secondary shadow-xl rounded-2xl mx-auto flex justify-center items-center relative">
          <h1 className="text-2xl text-white font-[Poppins]">My Profile</h1>
        </div>
        <div className="w-[500px] h-[450px] md:w-[700px] md:h-[550px]  p-2 md:absolute md:left-[500px] md:top-[264px] bg-white shadow-xl border rounded-[25px] mt-5 ml-4">
          <div className="flex justify-center items-center mt-3">
            <img
              src={pp}
              alt="Foto Profile"
              className="rounded-full object-cover w-20 h-20 md:w-24 md:h-24 mt-3 md:mt-0"
            />
          </div>
          <div className="flex gap-2 items-center justify-center m-3 md:m-3">
            <div className="md:w-1/3">
              <a
                href=""
                className="md:py-2 md:px-7 py-1 px-4 flex items-center justify-center rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Change Profile
              </a>
            </div>
            <div className="md:w-1/3">
              <a
                href=""
                className="md:py-2 md:px-7 py-1 px-4 flex items-center justify-center rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Change Password
              </a>
            </div>
            <div className="md:w-1/3">
              <a
                href=""
                className="md:py-2 md:px-7 py-1 px-4 flex items-center justify-center rounded-lg bg-secondary text-white text-sm md:text-lg"
              >
                Transaction History
              </a>
            </div>
          </div>
          <div className="m-3 md:flex flex-col gap-y-5 md:mt-4">
            <div>
              <label
                htmlFor="name"
                className="md:text-base text-sm text-black"
              >
                Name
              </label>
              <div className=" flex items-center justify-between ">
                <p className="md:text-lg text-sm text-black font-semibold">Ahmad Azizi</p>
                <a
                  href=""
                  className="p-2 text-sm md:text-base font-semibold bg-primaryfocus/50 rounded-2xl"
                >
                  Edit
                </a>
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
                <a
                  href=""
                  className="p-2 text-sm md:text-base font-semibold bg-primaryfocus/50 rounded-2xl"
                >
                  Edit
                </a>
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
                <a
                  href=""
                  className="p-2 text-sm md:text-base font-semibold bg-primaryfocus/50 rounded-2xl"
                >
                  Edit
                </a>
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
                <a
                  href=""
                  className="p-2 text-sm md:text-base font-semibold bg-primaryfocus/50 rounded-2xl"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
