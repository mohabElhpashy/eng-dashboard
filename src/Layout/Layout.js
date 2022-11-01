import Sidebar from "../Components/Sidebar/Sidebar";
import Eng_profile from '../pages/Taskeen/Taskeen'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 import Header from '../Components/Header'
 import Pieces from '../pages/Pieces/Pieces'

const Layout=()=>{

return (
  <div 
  // style={{display:"flex",justifyContent:"space-around",width:"100%"}}
  >

{/* <Sidebar/> */}
<Header/>
<Routes>

 <Route path="/eng_profile" element={<Eng_profile/>}/>
 <Route path="/pieces" element={<Pieces/>}/>

{/* Areas
// <Route path="/All_Areas" element={<All_Areaas/>}/>
// <Route path="/Create_Areas" element={<Create_Areas/>}/>
// <Route path="/Singlearea/:id" element={<Singlearea/>}/>
// <Route path="/Editarea/:id" element={<Edit_area/>}/>



// <Route path="/All_Farms" element={<AllFarms/>}/>
// <Route path="/Create_Farm" element={<Create_Farm/>}/>
// <Route path="/Singlefarm/:id" element={<Singlefarm/>}/>
// <Route path="/Editfarm/:id" element={<Editfarm/>}/>



// <Route path="/All_Crops" element={<AllCrops/>}/>
// <Route path="/Create_Crops" element={<Create_Crop/>}/>
// <Route path="/Singlecrops/:id" element={<Single_Crops/>}/>
// <Route path="/Editcrops/:id" element={<Edit_crops/>}/>




// <Route path="/All_PlantingBassins" element={<All_PlantingBassins/>}/>
// <Route path="Create_PlantinfBassins" element={<AddPlantingBassins/>}/>
// <Route path="/Singleplanting/:id" element={<Singleplanting/>}/>
// <Route path="/Editplanting/:id" element={<Editplanting/>}/>



//  <Route path="/Create_Eng" element={<Add_Eng/>}/>
//  <Route path="/All_Eng" element={<All_eng/>}/>
//  <Route path="/Singleeng/:id" element={<View_Eng/>}/>
//  <Route path="/EditSingleeng/:id" element={<EditUser/>}/>

//  <Route path="/Taskken" element={<Taskken/>}/> */}




</Routes>
  </div>
           
          
 )
}

export default Layout;