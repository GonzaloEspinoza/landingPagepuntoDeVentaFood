import React,{useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import URL from '../config/configServer';
import CodePais  from '../../utils/codePaisArea/codePaisArea.json'

import svgSignup from '../../assets/completeElRegistro.svg'
import Alert from '../alert/alert'
import './signup.css';
import Marca from '../marca/marca';

const SignUpForm =(props )=>{

    const  {idrequest} = useParams();
    console.log(idrequest);
    

    const [dataUser, setDataUser] = useState({
        name:'',
        lastName: '',
        email: '',
        phoneNumber:'',
        codePaisArea:'',
        country:{},
        password:'',

        nameShope:''
    })

    const [requestData, setDataRequest] = useState('')

    const [alert,setAlert] = useState(false);
    const [alaertSucces, setAlertSucces] = useState(false);
    const [ alertEmail, setAlertEmail ] = useState({state:false, message:''})

    useEffect(()=>{
        peticionServer();
    },[])


    const peticionServer=()=>{

        var url = URL.UrlShowIdRequest;
        var params ={
            method:'POST',
            url:url,
            headers:{
                'Conetent-Type':'Application/json'
            },
            data:({idrequest})
        }

        axios(params)
        .then(res=>{
            console.log(res);
            console.log(res.data.result.name)
            if(res.status==200){
                setDataUser({
                    name: res.data.result.name,
                    lastName: res.data.result.lastName,
                    email: '',
                    phoneNumber:res.data.result.phoneNumber,
                    codePaisArea:res.data.result.callingCode,
                    country:res.data.result.country,
                    nameShope:res.data.result.nameShope,
                    password:'',
                })
                setDataRequest(res.data.result)
            }
        })
        .catch(err=>{
            console.log(err);

        })
        
    }

    const handleCoutry =(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        var countrySlug = e.target.value;
        if(countrySlug==="")return ;
        var aux= CodePais.map((d,i)=>{
            if(d.slug===countrySlug){
                const pais ={
                    name:d.name,
                    slug:d.slug,
                    flag:d.flag,
                    callingCodes:d.callingCodes
                }
                setDataUser({
                    ...dataUser,
                    country:pais,
                    codePaisArea:d.callingCodes[0]
                })
            }
        })
    }

    const onChange=(e)=>{
        // console.log(e)
        // console.log(e.target.value)
        setDataUser({
            ...dataUser,
            [e.target.name]:e.target.value
        })
    }


    const showAlertDanger =()=>{

    //    return <Alert tipoAlert="info" textAlert="debe llenar los campos vacios"></Alert>
        if(alert){
            setTimeout(() => {
                setAlert(false)
            }, 4000)
            // console.log("----show alert");
            return(
                <div className="z-50">

                <Alert tipoAlert="danger" textAlert="Complete los campos requerido"></Alert>
                </div>

            )
        }
        else
        return <div>

        </div>
    }

    const showAlertDangerEamil =()=>{

            if(alertEmail.state){
                setTimeout(() => {
                    setAlertEmail({
                        state:false,
                        message:''
                    })
                }, 4000)
                // console.log("----show alert");
                return(
                
                    <Alert tipoAlert="danger" textAlert={alertEmail.message}></Alert>
    
                )
            }
            else
            return <div>
    
            </div>
    }

    const showAlertSucces =()=>{

            if(alaertSucces){
                setTimeout(() => {
                    setAlertSucces(false)
                }, 5000)
                // console.log("----show alert");
                return(
                
                    <Alert tipoAlert="succes" textAlert="Registro realizado"></Alert>
    
                )
            }
            else
            return <div>
            </div>
    }    

    const sendDataUser =(e)=>{
        e.preventDefault();
        console.log(dataUser);
        if(dataUser.name==="" || dataUser.lastName ==="" || dataUser.phoneNumber ==="" || JSON.stringify(dataUser.country)==='{}' || dataUser.email ==="" || dataUser.password ===""){
            setAlert(true)
        }
        else{
            

            const url = URL.UrlAddNewUserAndCreateShop;
            const config = {
                headers:{
                    'Content-Type':'Application/json'
                }
            }

            axios.post(url, dataUser, config)
            .then(res=>{
                setAlertSucces(true)
                if(res.status===200){
                    var url = URL.UrlRequestUpdare;
                    var data ={
                        idrequest: requestData._id,
                        stateRequest:'creation'
                    }
                    var params = {
                        method:'PUT',
                        url:url,
                        headers:{
                            'Content-type':'Application/json'
                        },
                        data:JSON.stringify(data)
                    }
                    axios(params)
                    .then(resData=>{
                        if(resData.status===200){
                            setDataRequest(
                                resData.data.dataResult
                            )
                        }
                    })
                }
            })
            .catch(err=>{
                if(err?.response?.data?.error){
                    setAlertEmail({
                        state:true,
                        message:err?.response?.data?.error
                    })
                }
            })
            
            
        }
  
    }

    if(idrequest===undefined || idrequest === '' || idrequest.length!=24  ){
        return (
            <div className="fixed top-0 left-0 bottom-0 right-0 w-sreen h-sreen flex justify-center">
             <Marca></Marca>
                <div className="w-80 my-auto">
                        <div className="my-auto bg-red-300 rounded-lg">
                            <div className="py-10">parametros incompletos</div>
                        </div>
                </div>
            </div>
        )
    }
    if(requestData?.stateRequest==="creation"){
        return(
            <div className="fixed top-0  left-0 bottom-0 right-0 w-sreen h-sreen flex justify-center">
             <Marca></Marca>
            <div className=" my-auto">
                    
                    <div className="my-auto px-4 py-2 bg-green-300 rounded-lg">
                        <div>Hola estimado <span className="font-bold">{requestData.name}</span></div>
                        <div className="py-10">En este momnento estamos en el proceso de creacion de su tienda online <span className="font-semibold">{requestData?.nameShope}</span> </div>

                        <div className="text-left text-white">Este proceso puede tomar algo de tiempo...</div>
                    </div>
            </div>
        </div>
        )
    }

    // cuando la tienda ya fue creada 
    if(requestData?.stateRequest==="approved"){

        return (
            <div className="w-screen h-screen flex justify-center">
                <Marca></Marca>
                <div className="bg-green-300 my-auto h-60 flex justify-center rounded-lg">
                    <div className="mx-20 my-auto">
                        <div className="text-white font-bold">Tu tienda online fue creada exitosamente</div>
                        <div >¡Felicitaciones ahora puedes empezar a vender como un pro 😎!</div>
                        <div >Este es el link de tu tienda online: 👉
                                {/* aqui ira e link de la tienda online del cliente*/}
                            <a className="text-blue-600 pl-3 hover:text-blue-500" href={requestData.urlShop} target="_blank">Ir a mi tienda</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="center-parent-form-singup">
           <Marca></Marca>
            <div id="containner-signup" className="bg-gray-00 bg-opacity-75 h-full w-full my-14 flex flex-justify-around  ">
              
                <div id="form-signup" className="container my-auto  mx-auto w-10/12 sm:w-3/5  md:w-2/4 lg:w-2/5 text-center p-4  rounded-lg">
                    {/* <div id="container-tbn-signup" className="bg-green-800 relative right-0">
                        <a id="btn-close-signup" className=" right-0 absolute font-bold text-white shadow-2xl" href="#" style={{top:'-14px',right:'-7px'}}>X</a>
                    </div> */}
                            <h1  id="title-signup" className="py-2 text-white font-bold">Complete el resgistro de sus datos</h1>
                    <div className="flex justify-center my-3 mb-10">
                                {/* <div className=" rounded-full h-28 w-28 bg-green-600 text-white p-2"> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg> */}
                                    <img src={svgSignup} width="230" height="200" alt=""/>
                                {/* </div> */}
                    </div>
                    <form onSubmit={(e)=>sendDataUser(e)} className="m-1  md:m-10" autocomplete="off" >
                        <div className="text-left">
                            <label className="text-white text-sm pl-2" htmlFor="name">Nombre de tú tienda</label>
                            <input 
                                className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full mb-1 w-full py-1 pl-2"
                                type="text" 
                                name="nameShope" id="name" placeholder="Nombre *" 
                                value={dataUser.nameShope}
                                // onChange={(e)=>onChange(e)}

                             />
                        </div>
                        <div className="text-left">
                            <label className="text-white text-sm pl-2" htmlFor="name">Tú nombre</label>
                            <input 
                                className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full mb-2 w-full py-1 pl-2"
                                type="text" 
                                name="name" id="name" placeholder="Nombre *" 
                                value={dataUser.name}
                                onChange={(e)=>onChange(e)}

                             />
                        </div>
                        <div className="text-left">
                            <label className="text-white text-sm pl-2" htmlFor="name">Tus apellidos</label>
                            <input 
                                className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full mb-3 w-full py-1 pl-2"
                                type="text" name="lastName" id="" placeholder="Apellido *" 
                                value={dataUser.lastName}
                                onChange={(e)=>onChange(e)}
                            />
                        </div>
                        
                        <div className="text-left">
                            <label className="text-white text-sm pl-2 text-letf" htmlFor="name">País donde operara tu tienda</label>
                            <div className="flex flex-rows-1 mb-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                {
                                    dataUser.country.flag?
                                    <img  className="w-8 h-6 my-auto ml-1 rounded-md" src={dataUser.country.flag} alt="" /> 
                                    :''
                                }
                                <select onChange={(e)=>handleCoutry(e)} className="w-full focus:outline-none rounded-xl p-1" name="country" id="">
                                        <option key={dataUser?.country?.name} id="option-pais" disabled selected hidden value={dataUser?.country?.name}> {dataUser.country.name}</option>
                                    {
                                        CodePais.map((d,i)=>{
                                            return <option key={d.slug} value={d.slug}>{d.name}</option>
                                        })
                                    }
                                </select>

                            </div>
                        </div>

                        <div className="text-left">
                            <label className="text-white text-sm" htmlFor="">{dataUser.phoneNumber <1 ?'Tú número de Whatsapp': (/[0-9]{8}/.test(dataUser.phoneNumber) ? <div className="text-green-400 ml-2">Número de Whatsapp correcto</div> :<div  className="text-red-400 ml-2">Número de Whatsapp incorrecto</div>)}</label>
                            <div className="flex flex-rows-1 bg-white rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                <select onChange={(e)=>onChange(e)} className="rounded-xl" name="codePaisArea" id="">
                                    {
                                        dataUser?.country?.callingCodes?
                                        dataUser.country.callingCodes.map((d,i)=>{
                                            return <option key={d} value={d}>+{d}</option>
                                        })
                                        :''
                                    }
                                </select>
                                <input 
                                    type="number" 
                                    name="phoneNumber" id="" placeholder="Whatsapp *" 
                                    className="rounded-full  w-full py-1 pl-2 border border-transparent focus:outline-none  focus:border-transparent"
                                    value={dataUser.phoneNumber}
                                    onChange={(e)=>onChange(e)}
                                />
                            </div>
                        </div>
                        <div className="text-left">
                        <label className="text-white text-sm pl-2 text-letf" htmlFor="name">Tú correo electronico</label>
                            <input 
                                type="email" 
                                name="email" id="" placeholder="Correo electronico *" 
                                className="rounded-full mb-3 w-full py-1 pl-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                onChange={(e)=>onChange(e)}

                            />
                        </div>
                        <div className="text-left">
                             <label className="text-white text-sm pl-2 text-letf" htmlFor="name">Nueva contraseña</label>
                            <input 
                                type="password" 
                                name="password" id="" placeholder="Contraseña *" 
                                className="rounded-full mb-3 w-full py-1 pl-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                onChange={(e)=>onChange(e)}

                            />
                        </div>
                        {showAlertDanger()}
                        {showAlertSucces()}
                        {showAlertDangerEamil()}
                        <div>
                            {/* <label htmlFor=""></label> */}
                            <button    
                               
                                className=" focus:outline-none    hover:border-2 border-white-400  hover:bg-green-800 cursor-pointer bg-green-600 text-white font-semibold rounded-full my-6 w-full py-2 pl-2"
                            >
                            Registrar
                            </button>
                        </div>
                        
                        {/* <div className="mb-6">
                            <motion.div 
                                animate={{scale:[1,0.9, 0.9,1,1]}}
                                transition={{duration:2, ease:'easeInOut',times:[0,0.2,0.5,0.8,1], loop:Infinity,repeatDelay:1}}
                                onClick={()=>props.switchAcces(true)}
                                className="text-blue-100 hover:text-blue-200 cursor-pointer underline">
                                ¿Ya tengo una cuenta?, iniciar sesión
                            </motion.div>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    );

}


export default SignUpForm;