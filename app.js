let bg=document.querySelector(".bg-image");
let text=document.querySelector(".text");

// console.log(bg);
let load=0;

let int=setInterval(()=>{
    load++
    if(load>99){
        clearInterval(int);
    }
    // console.log(load);
    text.style.opacity=30/load;
    
    text.innerHTML=`${load} %`;

    
    bg.style.opacity=`${load/100}`
   
    load/100===1 ? text.style.visibility= "hidden" : text.innerHTML=`${load} %`
    
},30)
