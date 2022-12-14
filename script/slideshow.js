let prev = document.getElementById("prev")
let forw = document.getElementById("next")
let slideimg = document.getElementById("slideshowimage");

let arr =["https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-3392/app_cover/1440x8102a557f472d8447feb0fbb6f82cddd65c.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/app_cover/1440x810e4bfb0c900f843039c693aaa42b7e5d9.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250012/app_cover/1440x810dbe94e41d25841ad85f2cd742c4bb08c.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264517/app_cover/1440x810f5c26a53988643c1aa476d31119af0ef.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-366/app_cover/1440x810671bbd9b62df45bcb7801c9b6e11cac0.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/app_cover/1440x8101b42d6d099714d97ac0b60f7f6fe68ae.jpg","https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/app_cover/1440x810d24028bfaafa417d9ef3a5668186ba02.jpg"]
let x =0;
setInterval(()=>{
if(x!=arr.length-1){
        slideimg.src = arr[x++]
    }else{
        x=0
    }
},5000)
prev.addEventListener("click",()=>{
    if(x!=0){
        slideimg.src = arr[x--]
    }else{
        x=arr.length-1
    }
})
forw.addEventListener("click",()=>{
    if(x!=arr.length-1){
        slideimg.src = arr[x++]
    }else{
        x=0
    }
})
 