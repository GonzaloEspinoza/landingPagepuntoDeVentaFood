import React from 'react';

import {motion} from 'framer-motion'

import './alert.css'

 const Alert=({tipoAlert, textAlert, position, showAlert })=>{

    console.log("this a alerts component")


    switch (tipoAlert) {

        case "info":
            return(
                  <motion.div 
                    initial ={{x:-200}}
                    animate={{ x:0}}
                    transition={{ ease: "easeOut", duration: 0 }}
                    className="notification-container w-11/12 sm:w-3/4 md:w-4/12 lg:w-4/12 static  text-center">
                    <div id="alerts" className="shadow-xl rounded-xl container-auto w-11/12 lg:w-3/4 mx-auto bg-blue-200 flex flex-col-1  gap-1 p-1 ">
                        <div>
                            <svg className="h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="text-left text-yellow-100 font-bold">
                            <div className="text-blue-600">
                                INFORMACIÓN
                            </div>
                            <div className="text-blue-500">
                                { textAlert ? textAlert:"Compruébe la alerta de información" }.
                            </div>
                        </div>
                    </div>
                </motion.div>
            );
        

        case "succes":
            return(
                <motion.div 
                    initial ={{x:-200}}
                    animate={{ x:0}}
                    transition={{ ease: "easeOut", duration: 0 }}
                     className="notification-container w-11/12 sm:w-3/4 md:w-4/12 lg:w-4/12 static  text-center">
                <div id="alerts" className="shadow-xl rounded-xl container-auto w-11/12 lg:w-3/4 mx-auto bg-green-300 flex flex-col-1  gap-2 p-1 ">
                    <div>
                        <svg className="h-10 w-10 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div className="text-left text-green-100 font-bold">
                        <div className="">
                            EXITOSO
                        </div>
                        <div>
                            {
                                textAlert ? textAlert:"Operación exitosa."
                            }
                           
                        </div>
                    </div>
                </div>
                </motion.div>
            );

        case "danger":
            return(
                <motion.div 
                 initial ={{x:-200}}
                    animate={{ x:0}}
                    transition={{ ease: "easeOut", duration: 0 }}
                    className="notification-container w-11/12 sm:w-3/4 md:w-4/12 lg:w-4/12 xl:w-4/12 static  text-center">
                <div id="alerts" className="shadow-xl rounded-xl container-auto w-11/12 lg:w-3/4 mx-auto bg-red-200 flex flex-col-1  gap-1 p-1 ">
                    <div>
                        <svg className="h-10 w-10 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div className="text-left text-red-100 font-bold">
                        <div className="text-red-600">
                            ERROR
                        </div>
                        <div className="text-red-600">
                            { textAlert ? textAlert:"Error compruebe los datos" }.
                        </div>
                    </div>
                </div>
                </motion.div>
            );
        case "warning":
            return(
                  <motion.div
                    initial ={{x:-200}}
                    animate={{ x:0}}
                    transition={{ ease: "easeOut", duration: 0 }}                  
                   className="notification-container static  text-center">
                    <div id="alerts" className="shadow-xl rounded-xl container-auto w-11/12 lg:w-3/4 mx-auto bg-yellow-200 flex flex-col-1  gap-3 p-3 ">
                        <div>
                            <svg className="h-10 w-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="text-left text-yellow-100 font-bold">
                            <div className="text-yellow-600">
                                ADVERTENCIA
                            </div>
                            <div className="text-yellow-500">
                                { textAlert ? textAlert:"Compruebe la alerta de advertencia" }.
                            </div>
                        </div>
                    </div>
                </motion.div>
            );
        

        default:
            return(
                <div>
                    parametros incorrectos
                </div>
            )
    }
 
      
    
}

export default Alert