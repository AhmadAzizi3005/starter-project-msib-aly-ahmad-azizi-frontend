import { useNavigate } from "react-router-dom";

export default function Buttom(props){
    const navigate = useNavigate()
    return(
       <button onClick={()=>navigate('/login')} className="bg-secondary text-white py-2 px-6
        rounded md:ml-8 hover:opacity-50 duration-500">
        {props.children}
       </button>
    )
}