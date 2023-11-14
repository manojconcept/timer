console.log("Linked");
const hourSpan  = document.querySelector(".h");
const minSpan = document.querySelector(".min");
const secSpan = document.querySelector(".sec");
const amSpan = document.querySelector(".am");
const pmSpan = document.querySelector(".pm");

setInterval(()=>{
    const time = new Date();
    const hour = time.getDate();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    console.log(hour-12,mins,sec);
    if(hour > 12){
        pmSpan.className = 'pm active';
        amSpan.className = "am";
        if(hour>12){
            hourSpan.innerText = hour-12;

        }else{
            hourSpan.innerText = hour;
        }


    }else{
        amSpan.className = "am active";
        pmSpan.className = "pm";
        if(hour==0){
            hourSpan.innerText = hour + 12;
        }else{
            hourSpan.innerText = hour;
        }
    }
    minSpan.innerText = mins;
    secSpan.innerText = sec;
},1000);

