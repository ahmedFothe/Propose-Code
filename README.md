# Create Just for Fun 

### Html markup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Please Check</title>
</head>
<body>
    <section class="card">
        <div class="circle__counter"><strong id="timer" class="count__time">3</strong></div>
        <button onclick="dealy()" class="touch__btn">click please</button>
        <h1 id="styleHeading" class="gift">*********</h1>
    </section>

    <script src="script.js"></script>
</body>
</html>
```

---

### Css style

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100vw;
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #2b2b2b;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    width: 50%;
    height: 50%;
    border-radius: 1rem;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 100px rgb(123, 145, 0);
}
.circle__counter{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 174, 159);
    margin-bottom: 1rem;
}
.count__time{
    padding: 0.5rem;
    font-size: 1.5rem;
}
.touch__btn{
    padding: 0.5rem;
    color: #fff;
    outline: none;
    border: 1px solid #2b2b2b;
    font-size: 1rem;
    border-radius: 1rem;
    background-color: rgb(124, 0, 138);
    cursor: pointer;
    transform: scale(1);
    transition: 0.2s ease-in-out;

}
.touch__btn:hover{
    transform: scale(0.9);
    color: rgb(255, 0, 68);
    background-color: transparent;
    border: 1px solid rgb(156, 34, 66);

}
#styleHeading{
    font-weight: 400;
}
.gift{
    color: rgb(255, 72, 72);
    margin-top: 1rem;
}
```

---

### Javascript code
```js
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




```
