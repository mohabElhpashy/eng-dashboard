import React, { useState, useEffect } from "react";
import Service from "../../Services";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Radio, Space, Card, Select, message } from "antd";
 
import Style from "../Taskeen/Taskeen.module.css";
import service from "../../Services";
const { Option } = Select;
const Taskeen = () => {
  const navigate = useNavigate();
 
  const [currentList, setCurrentList] = useState([]);
  const [slot,setslot]=useState()
   

  
  const Fetchdata = () => {
    Service.get("profile").then((res) => {
      console.log("res",res)
      setCurrentList(res.assign_areas)});
  };

  const addPiece=(id)=>
  {
    alert(id)
    Service.post("/add/peace",{name:slot,area_id:id})
    .then(res=>{
      message.success({ content: "Piece Added",  duration: 2 });

      // navigate('/dashoard_user/eng_profile')
      window.location.assign("/dashoard_user/eng_profile");

    })
  }
  
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <>
      {/* <h1>Profile</h1> */}
      <div className={Style.content}>
        {currentList.map((area, index) => (
          <div className={`${Style.box} sm:h-96`} key={index}>
            <h1               
              onClick={e=>navigate('/dashoard_user/pieces')}>{`${area.area.area_name}`} </h1>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-2">

          
              <input  onChange={(e)=>setslot(e.target.value)} placeholder="Slot name" className="w-full rounded-md 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "/>
              <Button
              type="primary"
              className="rounded-md"
              onClick={()=>addPiece(area.area.id)}
             >
              create slot
            </Button>
              </div>
           
          </div>
        ))}
         
      </div>
    </>
  );
};
export default Taskeen;
