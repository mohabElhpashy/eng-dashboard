import React from "react"
import { useNavigate} from "react-router-dom";

const Header =()=>{
    const navigate = useNavigate();

return (

    <div className=" bg-slate-200 shadow-lg shadow-amber-50">
        <div className="container m-auto p-4">
                <h1
                 className="text-left text-4xl  text-slate-800 font-medium italic " ><span className="font-normal">eng/</span>Mohab Elhbashy</h1>
        </div>
    </div>
)


}
export default Header