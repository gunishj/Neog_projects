var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input") 
var outputDiv = document.querySelector("#output");
outputDiv.innerText = "Gunish Jha"

console.log(outputDiv)


function clickEventHandler() {     
    outputDiv.innerText= "Appended text is here " + txtInput.value; 

};

btnTranslate.addEventListener("click", clickEventHandler)






