function dealy(){
    let counter = 3;
    const interval = setInterval(() => {
      let timerDisplay = document.querySelector("#timer");
      timerDisplay.innerHTML = counter;
      counter--;
    
      if (counter < 0 ) {
        clearInterval(interval);
      timerDisplay.innerHTML = "🫶";

        }
      },1000);
    
    setTimeout(()=>{
        let textMyDarling = document.querySelector("h1");
        textMyDarling.setAttribute("id","styleHeading");
        textMyDarling.textContent = "I ❤️ U";
        document.textMyDarling.appendChild(textMyDarling);
    },4000);

}



