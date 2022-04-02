import React from 'react';
import imgWhatsapp from '../../assets/whatsapp.png'
import './whatsappContact.css';
import {motion} from 'framer-motion';

export default function WhatsappContact(){


    return (
        <div>
            <motion.div onClick={()=>sendMessageWhatsapp()} whileHover={{scale:1.06}} whileTap={{scale:0.9}} className='content-whatsapp cursor-pointer'>
                <img src={imgWhatsapp}></img>
            </motion.div>
        </div>
    )
} 


const sendMessageWhatsapp =()=>{

    
    var phonenNumberOwner = '69651053';
    var callingCode='+591';

    var message =`🖐️Hola%20me%20gustaria%20tener%20más%20información%20sobre%20el%20sistema%20*punto%20de%20de%20ventas*%0A
    %0A%20%20%20====================%0A
    `

    var urlWeb = `https://web.whatsapp.com/send?phone=${callingCode}${phonenNumberOwner}&text=`;
    var urlMovil =`https://api.whatsapp.com/send?phone=${callingCode}${phonenNumberOwner}&text=`;
    

    if(/Windows/.test(navigator.userAgent)){

        var messageWeb = `${urlWeb}${message.replace(/(\r\n|\n|\r)/gm,"")}`;
        window.location=messageWeb;
    }else{
        console.log('movil');
        var messageMovil = `${urlMovil}${message.replace(/(\r\n|\n|\r)/gm,"")}`;
        window.location=messageMovil;
    }
}