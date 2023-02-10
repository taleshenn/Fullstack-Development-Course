let startTime = 10

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
let recurence = setInterval(countdown, 1000)

//countdown()

// let startTime = 10

// function countdown(){
//     if(startTime == 0){
//         console.log('Seu tempo acabou!! Tente novamente!!')
//         clearTimeout(recurence)
//     }
//     else{
//         startTime --
//         console.log(startTime)
//     }    
// }
// let recurence = setInterval(countdown, 1000)

// countdown()