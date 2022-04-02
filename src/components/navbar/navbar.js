import React from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
import './navbar.css';


const Navbar =()=>{

    return(
        <div id="navbar" className="flex flex-rows-1 h-14   bg-gray-800 px-5 sm:px-20">
            
                    <div id="content-text-nav" className="flex flex-rows-1 h-full ">
                        <h1 id="title-navbar" className="font-extrabold text-3xl my-auto">NuxtBo  </h1>
                    </div>

                    <div className="flex flex-rows-1 justify-end  w-full h-full">
                        <Link to="/contactus" className="my-auto" >
                            <motion.div whileTap={{scale:0.97}} className="rounded-full hover:bg-green-500 cursor-pointer my-auto bg-green-400 px-4 sm:px-14 py-1 text-white font-semibold">
                                Comenzar
                            </motion.div>
                        </Link>
                    </div>
        
        </div>
    );
}


export default Navbar;