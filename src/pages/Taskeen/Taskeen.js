import React, { useState, useEffect } from "react";
import Service from "../../Services";
import { useNavigate } from "react-router-dom";
import { Button, Drawer, Radio, Space, Card, Select, message } from "antd";
 
import Style from "../Taskeen/Taskeen.module.css";
const { Option } = Select;
const Taskeen = () => {
  const navigate = useNavigate();
 
  const [currentList, setCurrentList] = useState([]);
  const [currentList_eng, setCurrentList_eng] = useState([]);
  const [planting_basin, setplanting_basin] = useState([]);
  const [crops, setcrops] = useState([]);

  const [postObject, setPostObject] = useState({
    name: "",
    engineer_id: "",
  });
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");

  const showDrawer = (data) => {
    setCurrentList_eng(data);
    setOpen(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    //   setCurrentList (null)
    //   setCurrentList_eng (null)
    //  setplanting_basin (null)
    setOpen(false);
  };

  const Add = (area_id) => {
    let assigns = [{ engineer_id: postObject.engineer_id, area_id: area_id }];
    Service.post("assign/engineer", { assigns: assigns }).then((res) => {
      message.success({ content: "Done!", duration: 2 });
      setPostObject({});
      // navigate('/dashoard/Taskken')
      window.location.assign("/dashoard/Taskken");
    });
  };

  const GetData = (data) => {
    console.log(data);
  };
  const Fetchdata = () => {
    Service.get("profile").then((res) => setCurrentList(res.assign_areas));
  };

  const GetPlanting = (AllDAta, id) => {
    // console.log("all data",AllDAta)
    setplanting_basin(AllDAta.planting_basin);
  };

  const getCrops = (data) => {
    // console.log("data",data)
    setcrops(data.crops);
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <>
      {/* <h1>Profile</h1> */}
      <div className={Style.content}>
        {currentList.map((area, index) => (
          <div className={Style.box} key={index}>
            <h1                 onClick={e=>navigate('/dashoard_user/pieces')}
>{`${area.area.area_name}`} </h1>
            {/* <Button
              type="primary"
              onClick={() => showDrawer(area.area.farms)}
              className={Style.My_button}
            >
              Add Visit
            </Button> */}
          </div>
        ))}
        <Drawer
          // title="Drawer with extra actions"
          placement={placement}
          width={`60%`}
          height={`80%`}
          onClose={onClose}
          open={open}
          // extra={
          //   <Space>
          //     <Button onClick={onClose}>Cancel</Button>
          //     <Button type="primary" onClick={onClose}>
          //       OK
          //     </Button>
          //   </Space>
          // }
        >
          <div className={Style.Farms}>
            <div className={Style.Farm_main_div}>
              {currentList_eng.map((ele, index) => (
                <div
                  className={Style.Farms_div}
                  onClick={() => GetPlanting(ele, ele.id)}
                  key={index}
                >
                  {ele.name}
                </div>
              ))}
            </div>

            <div className={Style.Farm_planting}>
              {planting_basin.map((ele, index) => (
                <div
                  key={index}
                  className={Style.Farms_div_plnt}
                  onClick={() => getCrops(ele)}
                >
                  {ele.name}
                </div>
              ))}
            </div>

            {/* <hr/> */}
            <div className={Style.Farm_planting}>
              {crops.map((ele, index) => (
                <div
                  key={index}
                  className={Style.Farms_div_crops}
                  // onClick={()=>getCrops(ele)}
                >
                  {ele.name}
                </div>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};
export default Taskeen;
