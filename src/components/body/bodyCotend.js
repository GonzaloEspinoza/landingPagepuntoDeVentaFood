import React,{useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import iphoneImg from '../../assets/iphoneSinNoch5.svg';
import subirCatalogos from '../../assets/subirCatalogos.png';
import imgLaptopAndImage from '../../assets/laptopAndMobile.png';
import imgMobileOwner from '../../assets/mobileOwner.png';
import './bodyContend.css'
import FormContactUs from '../contactUs/formContactUse/formContactUs';
import { Link } from 'react-router-dom';
import pngComputer from '../../assets/sistemaPuntoVenta.png';
import VideoDemo from './videoDemo';
import dataCaracteristicas from './dataCaracteristicas';
import WhatsappContact from '../whatsappContact/whatsappConatct';



const BodyContent =()=>{


    return(
        <div>
            <section id="section-1"  className=" w-full h-auto sm:h-full pb-28  sm:pb-20 pt-2 sm:pt-20 " >


                {/* animacion de la burbuja green */}
                {/* <div id="esfersAmorfa" className=" h-60"></div> */}
                {/* <div  id="p2" className="absolute  top-0 right-0 right-0"></div> */}

                <div className="flex flex-col sm:flex-row  justify-between">
                    <div className="margin-top w-full sm:w-2/4 lg:mt-20   sm:mt-10 mb-10 lg:mb-32 sm:mx-10">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="h-full font-bold">
                            <h1  className="text-gray-800 text-4xl sm:text-5xl font-black"><span id="text-online" className="text-green-400">Sistema punto de ventas</span>, emición de tickets <span id="text-online" className="text-green-500">y gestion de clientes </span> </h1>
                            <h2 className="text-gray-500 text-lg mt-4">Toma el control de tus ventas.</h2>
                            <h3 className="text-gray-500 text-lg">Sistema diseñado para apoyarte en el proceso de ventas de tu negocio. </h3>
                            <div className="hidden sm:inline">
                              <Link to="/contactus/mensual">
                                <motion.button whileTap={{scale:0.97}}  initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-60 focus:outline-none border-2 border-green-600 rounded-xl font-bold">
                                    Empezar
                                </motion.button>
                              </Link>
                            </div>
                        </motion.div>
                    </div>
                    <div className=" w-full sm:w-2/4 ">
                        <motion.div id="content-demo" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="mx-auto">
                            <div id="container">
                                <div id="content-img-demo">
                                    <img  className="mx-auto" src={pngComputer} width="285" height="400" alt="" />
                                </div>
                                {/* <img src="https://mybuecket-test1.s3.amazonaws.com/9012.gif" className="mx-auto pt-4" width="258" height="400" alt="" /> */}
                                {/* <VideoDemo></VideoDemo> */}
                            </div>
                        </motion.div>

                        <div  className="flex justify-center sm:hidden mt-10">
                        <Link to="/contactus">
                            <motion.div whileTap={{scale:0.97}} initial={{opacity:0,y:400}} animate={{opacity:1,y:0}} transition={{duration:1}} id="btn-empezar" className="p-2 mt-3 bg-white shadow-2xl w-80 focus:outline-none border-2 border-green-600 rounded-xl font-bold">
                                Empezar
                            </motion.div>
                        </Link>
                        </div>
                    </div>
                </div>

            </section>

            <section id="section-como-funciona" className=" h-auto  pb-44 pt-40">
                <div>
                    <div>
                        
                    </div>
                    {/* <div className="figura"></div> */}
                    <div className="mb-20">
                        <h1 className="text-3xl text-dark mx-2 sm:mx-20 font-bold">Características del sistema punto de ventas y emisión de tickets</h1>
                    </div>
                    <div className=" grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 sm:gap-3 p-3 w-full h-auto ">
                      
                        {
                            dataCaracteristicas.map((item,index)=>{
                                return(
                                    <div className="rounded-lg shadow-2xl text-left   relative  w-72 h-full p-3">
                                        <div className="mt-14 ml-5 text-left flex">
                                            <ul className="font-semibold" >
                                                <li className="text-dart"> ✔️ {item.title}</li>
                                            </ul>
                                        </div>
                                        
                                        <div className='caracteristicas-description'>
                                            <motion.span id="btn-step" animate={{rotate:360}}  className="absolute shadow-2xl top-0 left-0  text-white p-2 rounded-xl">Propiedad {index+1}</motion.span>
                                            <h6>
                                                {
                                                    item.description
                                                }
                                            </h6>
                                        </div>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
            </section>

            {/* <section id="section-video" className="h-screen sm:h-auto  flex justify-center">
                <div className="w-full h-auto py-10 pt-20 my-auto">
                    <div className="pb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white" >¿Como funciona Nuxtbo?</h2>
                    </div>
                    <div className="embed-container pb-10">
                        <iframe className="mx-auto"  allowfullscreen="1"
                            // src="https://www.youtube.com/embed/sX5hzEMMQAI" 
                            src="https://www.youtube.com/embed/HFfNicNhBz8"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            >
                        </iframe>
                    </div>
                </div>
            </section> */}

            <section id="section-pacing" className="section-pacing-1 relative bg-gray-00 pb-36">
                <div id="title-seccion-precing" className="text-white  font-bold text-4xl py-20">
                    Encuentra el plan adecuado para tu negocio
                </div>
                
                <div className="container   mx-auto bg-gray-00">

                <div id="contents-cards"  className=" w-full h-auto text-left">
                    
                   {/* <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className="font-extrabold text-xl">Plan mensual</div>
                                        <div className="text-2xl pt-2 font-semibold text-blue-500">18 USD / month</div>
                                        <div>124 Bs / mes</div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className="px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Tienda en linea conectado a tu Whatsapp.
                                                    </li>
                                                    <li>
                                                        Interfaz de usuario adaptado a la web y dispositivos moviles.
                                                    </li>
                                                    <li>
                                                        Sin limite de productos.
                                                    </li>
                                                    <li>
                                                        Incluye carrito de compras.
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-mensual">
                                    <motion.div id="btn-empezar-promo" whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-600 mx-8 text-white text-center">
                                    👉Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div> */}

                     
                   {/* <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card relative">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className="font-extrabold text-xl">Plan anual</div>
                                        <div className="text-2xl pt-2 font-semibold text-blue-500">166 USD / year</div>
                                        <div>1152 Bs / anual</div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className=" px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Tienda en linea conectado a tu Whatsapp.
                                                    </li>
                                                    <li>
                                                        Interfaz de usuario adaptado a la web y dispositivos moviles.
                                                    </li>
                                                    <li>
                                                        Nombre de dominio personalizado .com .shop...
                                                    </li>
                                                    <li>
                                                        Incluye carrito de compras.
                                                    </li>
                                                    <li>
                                                        Sin limite de productos.
                                                    </li>
                                                </ul>
                                                <div className="absolute text-green-300 top-0  text-xl font-bold">
                                                    Incluye 3 meses gratis
                                                </div>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-anual">
                                    <motion.div id="btn-empezar-promo" whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-600 mx-8 text-white text-center">
                                    👉Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div> */}

                      
                   <div className="mx-auto pb-10">
                   <motion.div whileHover={{scale:1.01}} 
                    animate={{scale:[1,1.02,1,1.02,1],}} 
                    transition={{duration:2,ease:"easeInOut", times:[0,0.2,0.5,0.8],repeatDelay:1, loop:Infinity}}
                    id="content-cart-precio" className="relative  w-80 mx-1 sm:mx-2 sm:w-72 lg:w-72  rounded-lg">
                        <div className="card card-promo">
                            <div className="content-card">
                                <div className="text-center mt-10">
                                    <div id="tile-precing" className=" font-extrabold text-xl">Precio de promoción</div>
                                        <div className='precios-content grid justify-items-center flex justify-around  grid-cols-2'>
                                            <div>
                                                <div className="text-2xl line-through pt-2 text-white font-semibold">600 USD</div>
                                                <div className="text-white line-through">4000 Bs </div>
                                            </div>
                                            <div>
                                                <div className="text-2xl pt-2 text-white font-semibold">430 USD</div>
                                                <div className="text-white">2999 Bs </div>
                                            </div>
                                        </div>
                                </div>
                                    <hr className="border border-b-1 border-green-500 my-5" />
                                    <div className="bg-gray-00 py-10">
                                        <div className="px-7">
                                                <ul className=" px-2 text-left">
                                                    <li>
                                                        Inlcuye todas las caracteristicas mencionadas.
                                                    </li>
                                                    <li>
                                                        Inplementacion del sistema en su negocio.
                                                    </li>
                                                    <li>
                                                        Capacitacion del personal que utilizara el sistema.
                                                    </li>
                                                    <li>
                                                        Soporte técnico por parte nuestro equipo de desarrollo por un 1 mes.
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                                <div className="my-10">
                                <Link to="/contactus/plan-promo">
                                    <motion.div id="btn-empezar-promo" whileTap={{scale:1.06}} whileHover={{scale:0.95}} className="rounded-full cursor-pointer border border-green-200 mx-8 text-white text-center">
                                    💪Empezar
                                    </motion.div>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   </div>
             
                </div>
                </div>
            </section>

            <section>
     
            </section>

            {/* form contact us */}

            {/* <div id="container-model-contactus" className="fixed z-10  w-full h-full top-0 left-0 right-0 bottom-0"> */}
                {/* <FormContactUs></FormContactUs> */}
            {/* </div> */}
            {/* --------------- */}

            <WhatsappContact>
                
            </WhatsappContact>
        </div>
    )
}


export default BodyContent;