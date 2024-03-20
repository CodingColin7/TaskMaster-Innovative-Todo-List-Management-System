const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//Getting the Constants from HTML document
function addTask(){
    if(inputBox.value === ''){
        alert("Type a daily task!")
    }
    else{ ///For list: you can input the items and it will be displayed in the list, also with a x
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //created span element thats not in HTML code
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
    //clears the text after being inputed intp the text box.
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();