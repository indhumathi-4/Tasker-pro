

function addtask(){

    var taskname = document.getElementById("taskname").value;
var category = document.getElementById("category").value;

    if(taskname.trim() === "" || category.trim() === "") {
        alert("Enter task and category");
        return;
    }
    
    var listitems = document.getElementById("listitems");
    var list = document.createElement("p");
list.innerHTML = `
<div class = "first">
<div class="inputs">
<input type="radio" name="radio" class="radio">
</div>
<div class="example">
<div class="ex">
<h2>${taskname}</h2>
<br>
<label>
<p>${category}</label>
</div>
<div class="edit">
<label>
<button onclick = "edittask(event)"><img src="images/pencil.svg"></button>
<button onclick = "deleteitem(event)"><img src="images/trash2.svg"></button>
</label>
</div>
</div>
</div>`;
listitems.appendChild(list);
closepopup();
}

const maininput = document.querySelector("first");
let tasks =  JSON.parse(localStorage.getItem('tasks')) || []

if(localStorage.getItem('tasks')){
    tasks.map((task) => {
        createTask(task)
    })
}

first.addEventListener('addtask',(e) =>{
    e.preventDefault()

    const inputvalue = maininput.value;

    if(inputvalue == ''){
        return
    }

    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

    createTask(task)

    first.reset()
    maininput.focus()
})
function openpopup(){
    console.log("Popup opened");
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closepopup(){
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
function edittask(event) {
    var label = event.target.parentElement.parentElement.previousElement.children[0];
    var currenttask = label.innerText;
    label.innerHTML = `<input type = "text" class="edittask" value = "${currenttask}">`;
    label.firstchild.focus();
    label.firstchild.addEventListener("blur",function() {
        var newtask = label.firstchild.value;
        label.innerHTML = newtask;
    }
    );
}

function deleteitem(event){
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    
}

function logout(){
    window.location.href = 'index.html';
}