let timer = null;
let countdownNumber = 10;

const changeState = (state) => {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    //countdown
    if(state === 2){
        timer = setInterval( () => {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML = countdownNumber;

            if(countdownNumber <= 0){
                changeState(3);
            };
        }, 500);
    } else if (state === 3){
        let success = setTimeout( () => {
            let randomNumber = Math.round(Math.random()*10);

            console.log('randomNumber:', randomNumber);
        }, 2000);
            
       
    };
}