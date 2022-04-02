import React, {useEffect, useState} from 'react';

const VideoDemo =()=>{
    // const [etiquetaVideo,setEtiquetaVideo] = useState()
    // useEffect(()=>{
    //     etiquetaVideo
    // },[])

    return <>
     <video  
        key="video-demos"
        poster="https://mybuecket-test1.s3.amazonaws.com/snapshotNuxtbo.png"
        className="mx-auto my-auto my-auto pt-3 rounded-2xl " 
        type="video/mp4"  width="262.4" height="800" 
        loop autoPlay muted playsInline
        src="https://mybuecket-test1.s3.amazonaws.com/nuxtboVideoDemo.mp4" />
    </>
}

export default VideoDemo;