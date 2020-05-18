const buttonadd = document.querySelector(".but");
const list = document.querySelector(".ulli");
const input = document.querySelector(".input");
const trash = document.querySelector(".trash");

let LIST, id;

//get item
let data = localStorage.getItem("todo");
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}
else{
    LIST = [];
    id = 0;
}

function checkList(array){
    let isDeletedList = [];
    array.forEach(function(item){
        isDeletedList.push(item.isDeleted);
    })
    let checker = arr => arr.every(v => v === true);
    if(checker(isDeletedList)){
        localStorage.removeItem("todo");
    }
}

function loadList(array) {
    array.forEach(function(item) {
        addItem(item.id, item.text, item.complete, item.isDeleted);
    }); 
    checkList(array);
}

buttonadd.addEventListener("click", function() {
        const todo = input.value;
        if(todo){
        addItem(id, todo, false, false);       
        LIST.push({
            id: id,
            text: todo,
            complete: false,
            isDeleted: false         
        });
        localStorage.setItem("todo", JSON.stringify(LIST));
        id++;
        }
        input.value = "";
}, false);

document.addEventListener("keyup", function(e){
    if(e.keyCode == 13){
        const todo = input.value;
        if(todo){
        addItem(id, todo, false, false);

        LIST.push({
            id: id,
            text: todo,
            complete: false,
            isDeleted: false
            
        });
        id++;
        localStorage.setItem("todo", JSON.stringify(LIST));        
        }
        input.value = "";
    }
    
}, false)


list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;
    console.log(elementJob)
    
    if (elementJob == "delete"){
        deleteItem(element);
            
    }
    if (elementJob == "complete"){
        completeTodo(element);
    }
})
function addItem(id, inp, completed, isDeleted){  
    let DONE = "";
    let CHECK = "";
    if(isDeleted) { return; }
    if (completed){
        DONE = "check-";
        CHECK = "non";
    }
    
    const text = `<li class="${CHECK}unchecked">                   
                    <span>${inp}</span>
                    <i class="far fa-trash-alt" job="delete" id=${id}></i>
                    <i class="far fa-${DONE}circle" job="complete" id="${id}"></i>
                    
                           
                </li>`

    const pos = "afterbegin"
    list.insertAdjacentHTML(pos, text);
  
}

function completeTodo(element){
    element.className = "far fa-check-circle";
    element.parentNode.className = "nonunchecked";
    console.log(element.id);
    console.log(LIST.indexOf(element.id));
    LIST[element.id].complete = true;
    
    localStorage.setItem("todo", JSON.stringify(LIST));
}

function checker(element){
    return element;
}


function deleteItem(element){     
    element.parentNode.parentNode.removeChild(element.parentNode);
    if(LIST[element.id]){
    LIST[element.id].isDeleted = true;
    localStorage.setItem("todo", JSON.stringify(LIST));
}
    
}


