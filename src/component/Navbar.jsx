import { useState } from "react";
import logoImg from "../assets/logo.png";
import Button from "./Button"
export default function Navbar(){
  let Links=[
    {name:"Home",link:""},
    {name:"Vegetables",link:""},
    {name:"Fruits",link:""},
    {name:"Profile",link:"/profile"},
  ];
  let[open,setOpen]=useState(false);


  return (

   <div className="shadow-md w-full fixed top-0 left-0 z-50">
    <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
      <div>
        <img src={logoImg} alt="logo" width={100}/>
      </div>


      <div onClick={()=>setOpen(!open)} className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
      <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
        {
          Links.map((link)=>(
            <li key={link.name} className="ml-10 text-xl font-[Poppins] md:my-0 my-7">
            <a href={link.link} className="text-primary hover:text-secondary duration-500 active:text-secondary">{link.name}</a>
          </li>
          ))
        }
        <Button >
          Log Out
        </Button>
      </ul>
    </div>
    </div>
  )
}
