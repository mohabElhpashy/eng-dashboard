import React,{useEffect} from "react";
import {message} from "antd"; 
import {useForm} from 'react-hook-form' 
import { useNavigate} from "react-router-dom";
import { connect } from 'react-redux'; 
 import {AiOutlineUser,AiOutlineLock} from 'react-icons/ai'
  import 'antd/dist/antd.css';
import {LOGOUT} from '../../redux/Logout/Logout_action'
 
import Service from "../../Services/Services";
import Style from '../Login/Login.module.css';
const AddUser=({Login})=>{
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} =useForm({
        defaultValues:{
            phone:"",
            password:"",
 
        }
    });
 
    

     
return (
    <div className={Style.MAIN}>
    <div className={Style.Wrapper}>
        <div className={Style.title}><span>Login</span></div>
         
         <form    
         className={Style.form}
        onSubmit={handleSubmit((data)=>
            Service.post('login',data)
            .then(res=>
                {
                         console.log("res",res)
                        message.success({ content: "Login Sucess  ✔",  duration: 2 });
                        localStorage.setItem('AUTH_TOKEN',res.data.authorisation.token)

                        navigate('/dashoard_user/eng_profile')
                        Login()
              
                })
                .catch(error=>{
                    message.success({ content: "Login Failed Check password or phone ! ❌",  duration: 2 });

                })
                

            )}
            >
             
            <div className={Style.Row}>
                <AiOutlineUser className={Style.icon}/>
            <input
            // onChange={e=>setUserdata({password:e.target.value})}

            {...register("phone",{required:'this is required',minLength:{
                value:11,
                message:'Min Phone length is 11 !!'
            }})} type='text'  placeholder="phone"/>
            </div>
     
            <div className={Style.Row}>
            <AiOutlineLock  className={Style.icon}/>

            <input
            // onChange={e=>setUserdata({password:e.target.value})}
type="password"
            {...register("password",{required:'this is required'})}  placeholder="password"/>
        <p>{errors.password?.message}</p>
            </div>
 
       
<div className={Style.Row_button}>
<input  value={"Login"} type="submit"/>

</div>
 
<div className={Style.Row_Error}>{errors.phone?.message}</div>


 
        </form>
        </div>
    
    </div>
    

)


}
 
const mapDispatchToProps=dispatch=>{
    return{
        Login:( )=>dispatch(LOGOUT()),
 
    }
}
export default  connect(null,mapDispatchToProps) (AddUser)