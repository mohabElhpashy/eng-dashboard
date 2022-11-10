import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../Services";
const Header = () => {
  const navigate = useNavigate();
  const [currentList, setCurrentList] = useState("");
  const [slot, setslot] = useState();

  const Fetchdata = () => {
    service.get("profile").then((res) => {
      console.log("res", res);
      setCurrentList(res.name);
    });
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <div className=" bg-slate-200 shadow-lg shadow-amber-50">
      <div className="container m-auto p-4 flex justify-between">
        <h1 className=" text-4xl  text-slate-800 font-medium italic  ">
          <span className="font-normal font-thin decoration-wavy">eng/</span>
          {currentList}
        </h1>
        <button
          className="text-right decoration-solid	italic"
          onClick={() => window.location.assign("/dashoard_user/eng_profile")}
        >
          back
        </button>
      </div>
    </div>
  );
};
export default Header;
