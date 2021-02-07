var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input") 


function clickEventHandler() {     
    console.log("clcked");
    console.log("input",txtInput.value)

};

btnTranslate.addEventListener("click", clickEventHandler)

// 1. document.querySelector ("textarea")
// 2. .btn-primary
// 3. #input-btn
// 4. "input[name='translator']"

// document.querySelectorAll(".artdeco-button__text").forEach(item=> setTimeout(item.click(), Math.random*1000))




