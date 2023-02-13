let startTime = 10
let recurence
counter.innerHTML = "Click on the button to start"
function countdown(){
    if(startTime == 0){
        counter.innerHTML = "Seu tempo acabou!<br/>Tente novamente!"
        console.log('Seu tempo acabou!! Tente novamente!!')
        clearTimeout(recurence)
    }
    else{
        let counter = document.getElementById("counter")
        counter.innerText = startTime --
        console.log(startTime)
    }    
}

function restart(){
    startTime = 10
    recurence = setInterval(countdown, 1000)
}