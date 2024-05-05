import { useNavigate } from "react-router-dom";

export default function Buttom(props){
    const navigate = useNavigate()
    return(
       <button onClick={()=>navigate('/login')} className="bg-secondary text-lg text-white py-2 px-4
        rounded md:ml-8 hover:bg-secondary/50 duration-500">
        {props.children}
       </button>
    )
}