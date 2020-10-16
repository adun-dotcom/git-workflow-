
function finishFunction() {
    var buttonElement = document.getElementById("button");
    var changeButton = prompt("submit details");
    buttonElement.innerText = changeButton
}


function headerFunction() {
    var headerFunction = document.getElementById("header");
    var newHeader = alert("change me");
    headerFunction.innerHTML = newHeader;
}

function titleFunction() {
    var title = document.getElementById("title");
    var newTitle = prompt("change title");
    title.innerText = newTitle
}

document.getElementById("topic").innerHTML = "Adunola's Journal";