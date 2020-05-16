const buttonadd = document.querySelector(".but");
const list = document.querySelector(".ulli");
const input = document.querySelector(".input");
const trash = document.querySelector(".trash");


buttonadd.addEventListener("click", function() {
    addItem();
}, false);

document.addEventListener("keyup", function(e){
    if(e.keyCode == 13){
        addItem();
    }
    
}, false)



list.addEventListener("click", function(event){
    let element = event.target;
    console.log(element)
    if (element.className == "far fa-trash-alt"){
        deleteItem(element);
    }
   
    if (element.className == "far fa-circle"){
       element.className = "far fa-check-circle";
       element.parentNode.className = "checked";
    }
   

})
function addItem(){  
    const text = `<li class="unchecked">                   
                    <span>${input.value}</span>
                    <i class="far fa-trash-alt"></i>
                    <i class="far fa-circle"></i>
                    
                           
                </li>`

    const pos = "afterbegin"

    if(input.value !== ''){

    list.insertAdjacentHTML(pos, text);
    }
    input.value = '';
}

function deleteItem(element){
    console.log(element.parentNode);
    console.log(element.parentNode.parentNode);
    
      
    element.parentNode.parentNode.removeChild(element.parentNode);
}
