var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input") 


function clickEventHandler() {     
    console.log("clcked");
    console.log("input",txtInput)

};

btnTranslate.addEventListener("click", clickEventHandler)


