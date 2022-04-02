import React,{useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import URL from '../../config/configServer'

import Marca from '../../marca/marca';
import imgForm from '../../../assets/DayflowTorso.png';
import './formContactUs.css';
import codePaisArea from '../../../utils/codePaisArea/codePaisArea.json'
import { div } from 'prelude-ls';
import configMessageWhatsappWeb  from '../../../utils/configWhatsapp/configWhatsapp';

const FormContactUs =()=>{


    var {plan} =useParams();
    console.log(plan?plan:'');

    
    // name       : String,
    // lastName   : String,
    // nameShope : String,
    // country    : Object,
    // phoneNumber: Number,
    // callingCode:String,
    // questionnaire:Object,

    const [stateReques, setsStateRequest]  = useState('');
    
    useEffect(() => {
        window.scrollTo(0,0)
        const storageD = JSON.parse(localStorage.getItem('requestData'));
        if(storageD!=null){
            setsStateRequest(storageD)
        }
    }, []);
    
    

    const [data, setData] = useState({
        name:'',
        lastName:'',
        nameShope:'',
        country:{},
        phoneNumber:'',
        callingCode:'',
        haveShop:'',
        whatSell:'',
        whatUseApp:'',
        plan:plan?plan:'plan no especificado'   

    });
    const [message, setMessage] = useState('');

        

    const handleCountry =(e)=>{

        var name = e.target.name;
        var value = e.target.value;
        if(name==="country" && value !=''){
            setData({
                ...data,
                [e.target.name]:codePaisArea[value],
                callingCode:codePaisArea[value].callingCodes[0]
            })
        }
    }

    const handleData =(e)=>{
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const [alert, setAlert] =useState(false)

    const sendData=async()=>{
        console.log(data)
        if(
            data.name !='' &&
            data.lastName !='' &&
            JSON.stringify(data.country) !='{}' &&
            data.phoneNumber !='' &&
            data.callingCode !='' &&
            data.nameShope !='' &&
            data.haveShop !='' &&
            data.whatSell !='' &&
            data.whatUseApp !=''
        ){

            console.log("los datos son completos")
            var url = URL.UrlRequestShop;
            var params ={
                method:'POST',
                url:url,
                headers:{
                    'Content-Type':'Application/json'
                },
                data:JSON.stringify(data)
            }
            var  result = await axios( url, params);
           
            console.log(result);
            if(result.status===200){
                configMessageWhatsappWeb(result.data.resuld)
                setsStateRequest(
                    result.data.resuld
                )
                setData({
                    name:'',
                    lastName:'',
                    nameShope:'',
                    country:{},
                    phoneNumber:'',
                    callingCode:'',
                    haveShop:'',
                    whatSell:'',
                    whatUseApp:'',
                    plan: ''
                })
                var dataR= JSON.stringify(result.data.resuld)
                localStorage.setItem('requestData',dataR)
            }

        }else{
            console.log("complete los campos requeridos");
            setMessage('Complete los campos requeridos');
            showAlert()
        }
    }

    const showAlert =()=>{
        setAlert(true);
        setTimeout(()=>{
            setAlert(false)
        },6000)
    }

    const componentAlert=()=>{
        return(
            <div className="">
                <motion.div initial={{opacity:0,y:60}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="bg-red-200 text-red-900 rounded-lg p-2">{message}</motion.div>
            </div>
        )
    }

    return(
        <div>
        
            <Link to="/"><Marca></Marca></Link>
            <div className=" h-full bg-white  pt-24 sm:tp-26 md:36">
                <div className="container mx-auto px-2 sm:px-4 md:px-10  lg:px-20">
                    <motion.h1  initial={{y:-200}}  animate={{y:0}} className="py-2  text-1xl sm:text-3xl  font-semibold sm:font-light">Empezar siempre es un reto, pero no te preocupes nuestro equipo esta listo para poder ayudarte en el proceso.</motion.h1>
                </div>
                <div id="content-form" className="container  h-full mx-auto w-10/12  sm:w-3/4 md:w-3/5 lg:w-2/5  text-center p-4  rounded-lg">
                    <div className="flex justify-center my-3 mb-2">
                                <div className=" h-48 w-48  text-white p-2">
                                    <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:1}} src={imgForm} alt="" />
                                </div>
                    </div>
                    <form action="" id="form-regsitro" className="m-1  mt-10 mb-36" autocomplete="off" >
                        <div>
                            <label className="flex flex-justify-start" htmlFor="">Tú Nombre</label>
                            <input 
                                onChange={(e)=>handleData(e)}
                                className=" border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full mb-3 w-full py-1 pl-2"
                                type="text" name="name" id="name" placeholder="Tú nombre" 

                            />
                        </div>
                        <div>
                            <label className="flex flex-justify-start" htmlFor="">Tú apellido</label>
                            <input 
                                onChange={(e)=>handleData(e)}
                                className="border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-full mb-3 w-full py-1 pl-2"
                                type="text" name="lastName" id="" placeholder="Tú apellido" 
                            />
                        </div>

                        <div>
                            <label className="flex flex-justify-start" htmlFor="">El nombre de tu negocio</label>
                            <input 
                                onChange={(e)=>handleData(e)}
                                type="text" name="nameShope" id="" placeholder="Nombre de tu negocio" 
                                    className="rounded-full mb-3 w-full py-1 pl-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                />
                        </div>

                        <label className="flex flex-justify-start" htmlFor="">Pais</label>
                        <div className="flex flex-rows-1 rounded-full py-1 mb-3 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600">
                            {
                                data?.country?.flag?
                                <div className="ml-1 my-auto">
                                    <img src={data?.country?.flag} className="h-6 w-10 rounded-lg" alt="" />
                                </div>
                                :''
                            }
                            <select 
                                onChange={(e)=>handleCountry(e)}
                                type="text" name="country" id="option-code-pais" placeholder="Nombre de tu negocio" 
                                className="rounded-full bg-white  w-full py-1 pl-2 focus:outline-none  focus:border-transparent"
                            >
                                <option className="text-gray-400" selected disabled hidden  value="n">Pais</option>
                                {
                                    codePaisArea.map((d,i)=>{
                                        return <>
                                            <option value={i}> {d.name}</option>
                                        </>
                                    })
                                }
                            </select>
                        </div>

                        <label className="flex flex-justify-start" htmlFor="">Tú Whatsapp?</label>
                        <div className="flex flex-rows-1 rounded-full border border-gray-500 mb-3  focus:ring-2 focus:ring-purple-600">
                            <div className="my-auto ml-2 ">{
                                data.country.callingCodes?
                                <select onChange={(e)=>handleData(e)} name="callingCode" id="" className="focus:outline-none bg-white">
                                    {
                                        data.country.callingCodes.map((d,i)=>{
                                            return <option value={d}>+{d}</option>
                                        })
                                    }
                                </select>
                                :
                                ''
                            }</div>
                            <input 
                                onChange={(e)=>handleData(e)}
                                type="Number" name="phoneNumber" id="" placeholder="Tu Whatsapp" 
                                    className="rounded-full w-full py-1 pl-2  focus:outline-none  focus:border-transparent"
                                />
                        </div>
                        <div>
                            <label className="flex flex-justify-start" htmlFor="">¿Ya tienes tu negocio?</label>
                            <select 
                                onChange={(e)=>handleData(e)}
                                type="haveShop" name="haveShop" id="" placeholder="Correo electronico" 
                                className="rounded-full bg-white mb-3 w-full py-1 pl-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                                <option disabled selected hidden value="">Seleccion una opcion</option>
                                <option value="si tengo un negocio">si tengo un negocio</option>
                                <option value="No aun no, pero este sera mi primer negocio">No aun no, pero este sera mi primer negocio</option>
                                
                            </select>
                        </div>
                        <div>
                            <label className="flex flex-justify-start" htmlFor="">¿Que producto o servicio estas vendiendo?</label>
                            <input 
                                onChange={(e)=>handleData(e)}
                                type="text" name="whatSell" id="" placeholder="Ej: Vendo comida, celulares, smartwaches, auricualres..." 
                                className="rounded-full mb-3 w-full py-1 pl-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                     
                            </input>
                        </div>

                        <div>
                            <label className="flex flex-justify-start" htmlFor="">¿Para vender haz utilizado?</label>
                            <select 
                                onChange={(e)=>handleData(e)}
                                 name="whatUseApp" id="" placeholder="Correo electronico" 
                                className="rounded-full bg-white mb-3 w-full py-1 pl-2 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                                <option disabled selected hidden value="">Seleccion una opcion</option>
                                <option value="ninguno">Ninguno</option>
                                <option value="whatsapp">Whatsapp</option>
                                <option value="tik-tok">tik tok</option>
                                <option value="facebook">Facebook</option>
                                <option value="e-commerce">E-commerce</option>
                                <option value="whatsapp,tik-tok">Whatsapp, tik tok</option>
                                <option value="whatsapp,facebook">Whatsapp, facebook</option>
                                <option value="whatsapp,e-commerce">Whatsapp, E-commerce</option>
                                <option value="facebook,e-commerce">Facebook, E-commerce</option>
                                <option value="facebook,tik-tok">Facebook, tik tok</option>
                                <option value="ecommerce,tik-tok">ecommerce, tik tok</option>


                            </select>
                        </div>
                        {
                            alert?
                            componentAlert()
                            :
                            <div className="p-5"></div>
                        }
                        <div>
                            {/* <label htmlFor=""></label> */}
                            <motion.div 
                                onClick={()=>sendData()}
                                whileTap={{scale:0.96}}
                                className=" border  hover:border-2 border-white-400 hover:bg-green-600 cursor-pointer bg-green-500 text-white font-semibold rounded-full mb-6 mt-3 w-full py-2 pl-2"
                            >
                             Contactactar ahora
                            </motion.div>
                        </div>

                        {
                            stateReques?._id?
                                <div>
                                    Tu solicitud se envio conrrectamente
                                </div>
                            :
                            ''
                        }
                        
                    </form>
                </div>
            </div>
        </div>

    );
}


export default FormContactUs;