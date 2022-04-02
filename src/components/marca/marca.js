import React from 'react';
import {motion} from 'framer-motion';

import './marca.css'
const Marca =()=>{

    return(
        <div className="fixed top-0 left-0 h-16 w-40 mx-2 sm:mx-20">
            <div id="content-logo-marca" className="flex flex-rows-1 h-full ">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} id="title-navbar" className="font-extrabold text-3xl my-auto">NuxtBo  </motion.h1>
            </div>
        </div>
    );
}


export default Marca;
