
let lightButton = document.getElementsByClassName("sun");
let darkButton = document.getElementsByClassName('moon');
let theme = document.getElementsByClassName('theme');
let input = document.getElementsByClassName('input');
let buttons = document.getElementsByClassName('buttons');
let body = document.getElementById("body")
let primaryInput = document.getElementById("primary-input")
let secondaryInput = document.getElementById("secondary-input")
let btns = document.getElementsByTagName("button");
let screenValue = "";
let backSpace = document.getElementById("backspace");
let options = document.getElementById("options");
let backBoolean = false;
let optionBoolean = false;

computeArray = ["+", "-", "÷", "×", "%","."];

lightButton[0].addEventListener("click", function () {
    console.log("light-theme");
    body.classList.remove("dark");
    body.classList.add("light");

    lightButton[0].classList.remove("dark-sun");
    lightButton[0].classList.add("light-sun");

    theme[0].classList.remove("dark-theme");
    theme[0].classList.add("light-theme");

    input[0].classList.remove("dark-input");
    input[0].classList.add("light-input");

    buttons[0].classList.remove("dark-buttons");
    buttons[0].classList.add("light-buttons");
    

    
})
darkButton[0].addEventListener("click", function () {
    console.log("dark-theme");
    body.classList.remove("light");
    body.classList.add("dark");

    darkButton[0].classList.remove("light-moon");
    darkButton[0].classList.add("dark-moon");

    theme[0].classList.remove("light-theme");
    theme[0].classList.add("dark-theme");

    input[0].classList.remove("light-input");
    input[0].classList.add("dark-input");

    buttons[0].classList.remove("light-buttons");
    buttons[0].classList.add("dark-buttons");
   
})

backSpace.addEventListener("click", () => {
    backBoolean = true;
})
options.addEventListener("click", () => {
    optionBoolean = true;
})



for (const item of btns) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "C") {
            screenValue = "";
            secondaryInput.value = screenValue;
            primaryInput.value = screenValue

        }else if (computeArray.includes(buttonText) && computeArray.includes(screenValue.charAt(screenValue.length-1))) {
            screenValue = screenValue.slice(0, -1);
            screenValue += buttonText;
            secondaryInput.value = screenValue
        }
        else if (buttonText == "=") {
            temp = screenValue;
            temp = temp.replaceAll("÷","/")
            temp = temp.replaceAll("×", "*")
            
            if (computeArray.includes(screenValue.charAt(screenValue.length - 1))){
                temp = "";
                screenValue=""
                secondaryInput.value = "";
            }
            ans = eval(temp);
            if (ans == undefined) {
                ans = "";
            }
            primaryInput.value = ans;
            if (ans != "") {
                secondaryInput.value += "=" + ans
            }
            // screenValue = "";
           
        } else if (optionBoolean) {
            console.log("options");
            optionBoolean=false
        } else if (backBoolean) {
            screenValue = screenValue.slice(0, -1);
            secondaryInput.value = screenValue
            backBoolean = false;
        }
        else {
            primaryInput.value=""
            screenValue += buttonText;
            secondaryInput.value = screenValue;
        }
    })
}
