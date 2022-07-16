var btntranslate = document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/ferb-latin.json";

function constructURL(text){
    return serverURL + "?" + "text=" + text
}
//function errorhandler(error) {
  // console.log("error occured",error);
   //alert("some thing went wrong please try again later");
//}
function clickHandler(){
    var inputtxt=txtinput.value

    fetch(constructURL(inputtxt))
    .then(response => response.json())
    .then(json => {
          
        txtoutput.innerText = json.contents.translated})
   //.catch(errorhandler);

    }
    


btntranslate.addEventListener("click",clickHandler);