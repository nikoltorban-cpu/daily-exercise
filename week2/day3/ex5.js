function alertOnTime(){
    alert('Hello World');
}

function addNewParagraph(){
    const paragraph = document.getElementById('container');
    paragraph.innerHTML += "<p>Hello World</p>";
}

function addNewParagraphEvery2Seconds(){
    const paragraphs = document.getElementById('container');
    paragraphs.innerHTML += "<p>Hello World</p>";
    count++;
    if(count == 5){
        clearInterval(timer);
    }

}

function onClick(){
    clearInterval(timer);
}

setTimeout(alertOnTime, 2000);
setTimeout(addNewParagraph, 2000);

let count = 1;
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', onClick);
const timer = setInterval(addNewParagraphEvery2Seconds, 2000);
