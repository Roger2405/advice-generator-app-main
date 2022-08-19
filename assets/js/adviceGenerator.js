const quoteElement = document.querySelector('.quote');
const titleElement = document.querySelector('.title');

var id;
var quote;
var adviceObject;


export function requestAdvice() {
    var adviceRequest = new XMLHttpRequest();
    adviceRequest.open("GET", "https://api.adviceslip.com/advice");
    adviceRequest.addEventListener("load", () => {
        if(adviceRequest.status == 200){
            var response = adviceRequest.responseText;
            console.log(response);
            console.log(typeof response);
            adviceObject = JSON.parse(response);

            id = adviceObject.slip.id;
            quote = adviceObject.slip.advice;

            quoteElement.textContent = quote;
            titleElement.textContent = `Advice #${id}`;
        }
        else{
            console.log(adviceRequest.status);
        }
        
    });
    adviceRequest.send();
}




