import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../../Services";
import { Drawer, Space, Button } from "antd";
import moment from "moment";
import service from "../../Services";

const Pieces = () => {
  const dateFormat = "YYYY/MM/DD";

  const [Pieces, setPieces] = useState([]);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const [oop, setoop] = useState({
    farmer_name: "",
    phone: "",
    supplier: "",
    visit_date: "",
    crop: "",
    item: "",
    area: "",
    planting_date: "",
    expected_collection_date: "",
    peace_id: "",
  });
  const showDrawer = (id) => {
    setoop({ ...oop, peace_id: id });

    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const sedREq = (id) => {
    console.log(oop);
    service
      .post("add/firstVisit", oop)
      .then((res) => window.location.assign("/dashoard_user/eng_profile"));
  };
  useEffect(() => {
    Service.get(`/area/peaces/${id}`).then((res) => setPieces(res.records));
  }, []);
  const Pieces_Pieces = ["one", "two", "three", "four", "Five", "Six"];
  return (
    <div>
      <div
        className="container  
       m-auto p-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 
       
       align-middle py-6 justify-items-center gap-14
       place-items-center
       "
      >
        {Pieces.map((ele, index) => (
          <div
            className="bg-slate-600	
                    h-40 w-64
                    rounded-md
                    border-slate-800
                    py-2
                    before:content[''] before:w-full before:h-1 before:bg-black
             relative before:absolute before:top-0 before:left-0 overflow-hidden
                    "
          >
            <h1
              className="text-slate-200 decoration-double
              bg-cyan-700
"
            >
              {" "}
              {ele.name}
            </h1>
            <div className="flex flex-col justify-evenly h-28 container">
              <button
                onClick={() => showDrawer(ele.id)}
                className="bg-white rounded-md h-8 font-bold  pointer-events-auto"
              >
                Add Basic Visit
              </button>
              <button className="bg-white rounded-md font-bold	h-8">
                Add Check Visit
              </button>
              <button className="bg-white rounded-md  font-bold  h-8	">
                Add Collection Visit
              </button>
            </div>
          </div>
        ))}
      </div>

      <Drawer
        title="Basic  visit"
        placement={placement}
        height="95%"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <Button onClick={onClose}>x</Button>
            <Button type="primary" onClick={sedREq}>
              Add
            </Button>
          </Space>
        }
      >
        <div className="container flex flex-col gap-2	">
          <input
            onChange={(e) => setoop({ ...oop, farmer_name: e.target.value })}
            placeholder="farmer_name"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />

          <input
            onChange={(e) => setoop({ ...oop, phone: e.target.value })}
            placeholder="phone"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />

          <input
            onChange={(e) => setoop({ ...oop, supplier: e.target.value })}
            placeholder="supplier"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />

          <label className="font-medium">visit_date:</label>
          <input
            type="date"
            onChange={(e) => setoop({ ...oop, visit_date: e.target.value })}
            placeholder="visit_date"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          <input
            onChange={(e) => setoop({ ...oop, crop: e.target.value })}
            placeholder="crop"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          <input
            onChange={(e) => setoop({ ...oop, item: e.target.value })}
            placeholder="item"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          <input
            onChange={(e) => setoop({ ...oop, area: e.target.value })}
            placeholder="area"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          <label className="font-medium">planting_date:</label>

          <input
            type="date"
            onChange={(e) => setoop({ ...oop, planting_date: e.target.value })}
            // onChange={(e) => setslot(e.target.value)}
            placeholder="planting_date"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          <label className="font-medium">expected_collection_date:</label>
          <input
            type="date"
            onChange={(e) =>
              setoop({ ...oop, expected_collection_date: e.target.value })
            }
            // onChange={(e) => setslot(e.target.value)}

            placeholder="expected_collection_date"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          />
          {/* <input
             placeholder="phone"
            className="w-full 
              
              placeholder:italic placeholder:text-slate-400 block bg-white   border border-slate-300 rounded-md py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
              "
          /> */}
        </div>
      </Drawer>
    </div>
  );
};
export default Pieces;
