 var rightNow = new Date();
 document.getElementById("date").innerHTML=rightNow


var list =document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    var li =document.createElement('li');
    li.setAttribute('class', 'li')
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onClick","deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onClick" , "editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)
    todo_item.value=""
    console.log(li)
}
function deleteItem(e){
    e.parentNode.remove()
}
function editItem(e){
    var val = prompt("Enter update value ",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
function deleteAll(){
    list.innerHTML=""
}


