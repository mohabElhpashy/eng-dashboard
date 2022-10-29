import React from "react"
import { Navigate,Outlet } from "react-router-dom"
import { connect } from 'react-redux'; 
 
const ProtectedRoutes=({islogin})=>{
    const isAuth={token:true}
    console.log("asdasdasdsa",islogin)
    return isAuth.token?<Outlet/>:<Navigate to="/" />
}

const mapStateToProps=(state)=>{
    return {
        islogin:state.Log_out.islogin,
     }
}
 
export default  connect(mapStateToProps,null) (ProtectedRoutes)