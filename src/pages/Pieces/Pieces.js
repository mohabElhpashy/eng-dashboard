import React from "react";

const Pieces =()=>{
const Pieces_Pieces=["one","two","three","four","Five","Six"]
    return(
        <div >
                    <div className="container   m-auto p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 align-middle py-6 justify-items-center gap-8">

            {
                Pieces_Pieces.map((ele,index)=>(
                    <div className="bg-green-600	
                    h-14 w-64
                    rounded-md
                    border-slate-800
                    py-2
                    before:content[''] before:w-full before:h-1 before:bg-sky-500
             relative before:absolute before:top-0 before:left-0 overflow-hidden
                    ">
                        
                       <h1 className="text-slate-200 decoration-double
"> {ele}</h1>
                       <div style={{display:"flex",justifyContent:"space-around"}}>
                       <button className="bg-white ">Add first Visit</button>
                       <button className="bg-white ">Add sec Visit</button>
                       <button className="bg-white ">Add th Visit</button>

                       </div>

                       
                    
                    
                    
                    </div>
                ))
            }

                    </div>
        </div>
    )
}
export default Pieces