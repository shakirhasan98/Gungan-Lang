var btntranslate = document.querySelector("#btn-translate");
var txtArea=document.querySelector("#inputText");
var outputDiv= document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/gungan.json"


function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after sometime")
}



function clickHandler() {
    var inputTxt = txtArea.value;

    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText= json.contents.translated;
            outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)
};

btntranslate.addEventListener("click", clickHandler)