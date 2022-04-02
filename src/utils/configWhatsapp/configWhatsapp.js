
const configMessageWhatsappWeb =(userData)=>{

    console.log("hello from message 📦 🎁 📊  ✅")
    console.log(userData)
    var phonenNumberOwner = '69651053';
    var callingCode='+591';

    var message =`🖐️Hola%20soy%20${userData.name}%20soy%20de%20${userData.country.name}%0A
    Quiero%20una%20tienda%20en%20linea%20llamado:%20${userData.nameShope}%0A
    🕛tipo%20de%20plan:${userData?.plan}%0A
    ✅Token%20de%20solicitud:${userData?._id}%0A
    📦tipo%20de%20producto:${userData?.questionnaire?.whatSell}
    %0A%20%20%20====================%0A
    `

    var urlWeb = `https://web.whatsapp.com/send?phone=${callingCode}${phonenNumberOwner}&text=`;
    var urlMovil =`https://api.whatsapp.com/send?phone=${callingCode}${phonenNumberOwner}&text=`;
    

    if(/Windows/.test(navigator.userAgent)){
        // console.log("navegado web - laptp o pc");
        // console.log(urlWeb)
        // console.log(message.replace(/" "/gm,""))
        var messageWeb = `${urlWeb}${message.replace(/(\r\n|\n|\r)/gm,"")}`;
        window.location=messageWeb;
    }else{
        console.log('movil');
        var messageMovil = `${urlMovil}${message.replace(/(\r\n|\n|\r)/gm,"")}`;
        window.location=messageMovil;
    }
}


export default configMessageWhatsappWeb