

      let minutes = 0;
      let seconds = 0;
      let hours= 0;
      let minutesel = document.querySelector('#minutes');
      let hoursele = document.querySelector('#hours');
      let Secondsel = document.querySelector('#seconds');
      let startBtn = document.querySelector('#start');
      let stopBtn = document.querySelector('#stop');
      let resetBtn = document.querySelector('#reset');
      let Interval;
      startBtn.addEventListener("click",()=>{
        startBtn.disabled=true;
        Interval=setInterval(() => {
            seconds++;
            if(seconds==60){
                seconds=0;
                minutes++;
            }
            if(minutes==60){
                minutes=0;
                hours++;
            }
            if(hours<=9){
                hoursele.innerHTML= "0"+ hours   ;
            }
            else{
                hoursele.innerHTML= hours  ;
            }
            if(minutes<=9){
                minutesel.innerHTML= '0' + minutes ;
            }
            else{
                minutes.innerHTML= minutes  ;
            }
            if(seconds<=9){
                Secondsel.innerHTML= '0' + seconds ;
            }
            else{
                Secondsel.innerHTML= seconds;
            }
        }, 1000); 
      });
      stopBtn.addEventListener("click",()=>{
        clearInterval(Interval);
        startBtn.disabled=false;
    });
      
      resetBtn.addEventListener("click",()=>{
        clearInterval(Interval);
        startBtn.disabled=false;
        hoursele.textContent = '00';
        minutesel.textContent = '00';
        Secondsel.textContent = '00';
         minutes = 0;
         seconds = 0;
        hours= 0;
    });
  