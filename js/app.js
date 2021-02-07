var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input") 
var outputDiv = document.querySelector("#translate-output");

// var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL= "https://api.funtranslations.com/translate/minion.json"



function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
}

function clickEventHandler() {     
    // outputDiv.innerText= "Appended text is here " + txtInput.value; 
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText =json.contents.translated
        outputDiv.innerText = translatedText         
        })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickEventHandler)






