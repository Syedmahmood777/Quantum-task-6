// // let modify=videojs('vid');
// // let modify2=videojs('vids');
// let addvid=document.createElement("video");
// addvid.innerHTML="<source  src='./pexels-creativ-medium-7529127.mp4' type='video/mp4' > ";
// addvid.classList.add("video-js");
// addvid.classList.add("vjs-default-skin");
// addvid.classList.add("py-5");
let myvid=document.getElementById('myvid');
let ad=document.getElementById('ad');
let maindoc=document.getElementById("main_vid")
let addoc= document.getElementById("advid")

let adplayed=false;
// ad.addEventListener("timeupdate",adchange,false);
// document.getElementById('boiler').appendChild(addvid);

// console.log(viddur);
// console.log(adstart);
myvid.addEventListener("timeupdate",changes,false);
ad.addEventListener("ended",end,false);
myvid.addEventListener("ended",startover,false);




function changes(){
    
    
    let currt=myvid.currentTime;
    let durt=myvid.duration;
    let adstart;
    adstart=Math.round(durt/2);
    
    // console.log(myvid.duration);
    // console.log(currt);
    if(!isNaN(durt) && currt>=adstart && !adplayed ){
        console.log("Ad playss");
        
        myvid.pause();
        // myvid.parentElement.setAttribute("hidden","hidden");
        maindoc.setAttribute("hidden","hidden");
        addoc.removeAttribute("hidden");
        ad.play();
        
        adplayed=true;
        
        
        
        
    }
    
    
    
}



function end(){
    
    addoc.setAttribute("hidden","hidden");
    maindoc.removeAttribute("hidden");
    myvid.play();
    

}
function startover(){
    
   adplayed=false;
    

}
