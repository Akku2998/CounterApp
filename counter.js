const counter=document.querySelector("#counter-view");
const dec=document.querySelector("#decrement");
const res=document.querySelector("#reset");
const inc=document.querySelector("#increment");
const aut=document.querySelector("#autoIncrement");
const stp=document.querySelector("#stop");
const autDec=document.querySelector("#autoDecrement");
const tim=document.querySelector("#time");

stp.disabled=true;
//console.log("this ...",counter);
//console.log("this decccc ...",dec);
dec.addEventListener("click",counterFunc);
res.addEventListener("click",counterFunc);
inc.addEventListener("click",counterFunc);
aut.addEventListener("click",counterFunc);
stp.addEventListener("click",counterFunc);
autDec.addEventListener("click",counterFunc);
tim.addEventListener("click",timeFunc);
let value=0;
let interval=0;
function timeFunc(event){
    console.log("time",value);
    const min=Math.floor((value % 3600)/60);
    const hours=Math.floor(value/3600);
    const sec=value % 60;
  /*const hours = Math.floor(value / 60);  
  const minutes = value % 60;
  const sec=Math.abs(60*minutes-value);*/
  return counter.textContent= hours + ":" + min + ":" + sec; 
}
function counterFunc(event){
    const id=event.target.id;
    //console.log("this id  ...",id);
    if(id==="decrement" && value>0 ){
        value--;
    }
   
    else if(id==="increment"){
        value++;
    }
    else if(id==="autoIncrement"){
        stp.disabled=false;
        dec.disabled=true;
        inc.disabled=true;
        aut.disabled=true;
        res.disabled=true;
        autDec.disabled=true;
        interval=setInterval(function(){
            value++;
            counter.textContent=value;
        },10)
        

    }
    else if(id==="autoDecrement" ){
        stp.disabled=false;
        dec.disabled=true;
        inc.disabled=true;
        aut.disabled=true;
        res.disabled=true;
        autDec.disabled=true;                        
        interval=setInterval(function(){
            if(value>0){
                value--;
                counter.textContent=value;
            }else{
                clearInterval(interval);
                stp.disabled=true;
                dec.disabled=false;
                inc.disabled=false;
                aut.disabled=false;
                res.disabled=false;
                autDec.disabled=false;
            }
            
        },500)
        

    }
    else if(id==="stop"){
        stp.disabled=true;
        dec.disabled=false;
        inc.disabled=false;
        aut.disabled=false;
        res.disabled=false;
        autDec.disabled=false;
        clearInterval(interval);

    }

    else{
        value=0;
    }

    /*if(value===10){
        return counter.textContent="BADMASH RAHUL";
    }*/
    counter.textContent=value;
    //console.log("counter value: ",counter);
}


