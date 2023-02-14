//get input data
let inputValue = document.querySelector("div.container input")
//send the input data to be validated
let calc = document.querySelector("div.container button")
// get the click and execute the function
calc.addEventListener("click", () => {
    if (inputValue.value < 1)
    // if the data is not correct, print the error message and print it to the console
        console.log("Please only use numbers greater than ZERO.")
    else {
        // create array with numbers from 1 to 10 
        for (i = 1; i <= 10; i++) {
            // use the input number multiplied for each number in the array
            let calculator = i + " x " + inputValue.value + " = " + i * inputValue.value
            // print to console
            console.log(calculator)
        }
    }
})