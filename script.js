const display = document.getElementById("display");

let currentInput = "";


const buttons = document.querySelectorAll("button");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        
        if(value === "C"){
            currentInput = "";
            display.value = "";
        }

      
        else if(value === "="){
            try{
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            }
            catch{
                display.value = "Error";
            }
        }

       
        else{
            currentInput += value;
            display.value = currentInput;
        }

    });

});