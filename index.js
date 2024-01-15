let body = document.querySelector(".container")
let modeScript =document.getElementById("modeScript")
let layout = document.querySelector(".layout")
let header = document.querySelector("header")
let input = document.getElementById("input")
let addBtn = document.getAnimations("addBtn")
let listContainer = document.getElementById("listContainer")
let numOfTask = document.getElementById("numOfTask")
let icon = document.getElementById("modeIcon")


var change = true
function changeMode(){
    let li = document.querySelectorAll("li")

    if (change){
        icon.className = "fa-regular fa-moon"
        change=!change
        body.style.backgroundColor = "rgb(3,12,57)"
        modeScript.style.color = "white"
        layout.style = "color:white;"
        layout.style.backgroundColor = "black"
        layout.style.border = "3px solid white"
        input.style.backgroundColor = "white"
        input.style.color="black"
        header.style.backgroundColor = "white"
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "white";
            li[i].style.color = "black"
            li[i].style.transition = "all 0.3s"
        }
        body.style.transition = "all 0.3s"
        icon.className.transition = "all 0.3s"
        modeScript.transition = "all 0.3s"
        layout.transition = "all 0.3s"
        input.transition = "all 0.3s"
    }
    else{
        icon.className = "fa-solid fa-sun"
        change=!change
        body.style.backgroundColor = "pink"
        modeScript.style.color = "black"
        layout.style = "color:black;"
        layout.style.backgroundColor = "white"
        layout.style.border = "3px solid black"
        input.style.backgroundColor = "black"
        input.style.color="white"
        input.style = "backgroundColor:black"
        header.style.backgroundColor = "black"
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "black";
            li[i].style.color = "white"
            li[i].style.transition = "all 0.3s"
        }
        body.style.transition = "all 0.3s"
        icon.className.transition = "all 0.3s"
        modeScript.transition = "all 0.3s"
        layout.transition = "all 0.3s"
        input.transition = "all 0.3s"
    }
}

function addTask(){
    if(input.value===""){
        alert("You should assign atleast one task....")
    }
    else{
        let list = document.createElement("li") 
        listContainer.appendChild(list)

        let chkBox = document.createElement("input")
        chkBox.type = "checkbox"
        chkBox.checked = false
        list.appendChild(chkBox)

        let task = document.createElement("span")
        task.innerHTML = input.value
        list.appendChild(task)

        let trash = document.createElement("i")
        trash.className = "fa-solid fa-trash delete"
        trash.setAttribute("role", "button"); 
        list.appendChild(trash);

        counts()
    }
    input.value = ""
    saveData()
}
var count = 0
function counts() {
    count++;
    numOfTask.innerHTML = count;
}

listContainer.addEventListener("click", function (event) {
    var clickedElement = event.target;

    if (clickedElement.tagName === "INPUT") {
        // Clicked on the checkbox
        var task = clickedElement.nextElementSibling; 

        if (clickedElement.checked) {
            task.style.textDecoration = "line-through";
        } else {
            task.style.textDecoration = "none";
        }
        saveData()
    } else if (clickedElement.tagName === "SPAN") {
        // Clicked on the task
        var checkbox = clickedElement.previousElementSibling; 

        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            clickedElement.style.textDecoration = "line-through";
        } else {
            clickedElement.style.textDecoration = "none";
        }
        saveData()
    } else if (clickedElement.classList.contains("delete")) {
        // Clicked on the delete icon
        clickedElement.parentElement.remove();
        count-- 
        numOfTask.innerHTML = count;
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");

    count = listContainer.getElementsByTagName("li").length;
    numOfTask.innerHTML = count;
}
showData()


