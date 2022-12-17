//select element
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todoListEl = document.getElementById('todos-list');

const btnAdd = document.getElementById('addtodo');

//var
let todos = [];
//form submit, to prevent the form to refresh the page
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('the refresh is blocked');
    saveTodo();
    renderTodos();
})
// save the todo
/**
 * 1. the save will work everytime we hit the button
 */
function saveTodo(){
    //let[s retrieve the input
    const todoValue = todoInput.value;
    //console.log(todoValue);
    //we will save the todo as an
    //object😻

    //check for duplicate todo
    /** cette ligne verifie si une tache a ete duplicate. elle utilise la methode some, qui prend un callback todo(qui est dans notre cas l'objet, verifie si la valeur todo.value correspond a l;input todoValue)*/
    const isDuplicate =todos.some((todo)=> todo.value === todoValue);



    //control on sending empty todo
    const isEmpty = todoValue=== '';
    if(isEmpty){
        alert('todo cannot be empty');
        return;
    }else if(isDuplicate){
        alert('todo already exist');
        return;

    }else{
        const todo = {
            value : todoValue,
            checked :false,
            //genereate random colo, code by csstricks, bigshoutout to them✌️
            color :'#'+ Math.floor(Math.random()*16777215).toString(16)
        } ;
        //push the todo to the array
    todos.push(todo);
    //console.log(todos);
    }

}
//render todos on the ui

function renderTodos(){
    //clear element before rendering
    todoListEl.innerHTML = '';
    //render the todo
    todos.forEach((todo, index)=>{
        todoListEl.innerHTML += `
        <div class="todo" id="${index}">
            <i class="bi  ${todo.checked? 'bi-check-circle-fill' :' bi-circle'}" style= "color :${todo.color}" data-action = "check"></i>
            <p class="" data-action = "check">${todo.value}</p>
            <i class="bi bi-pencil-square" data-action = "edit"></i>
            <i class="bi bi-trash" data-action = "delete"></i>
        </div>
        `;
    });
}
//click event listener on all the todo
todoListEl.addEventListener('click', (event) =>{
    const target = event.target;
    const parentElement = target.parentNode;
    //controls on element selected
    if(parentElement.className !== 'todo')return;
    // t o d o id
    const todo = parentElement;
    const todoId = Number(todo.id);

    //target action
    //this i how we get the data-action attribute by using the dataset property
    const action = target.dataset.action;

    //if the action is check, we will check the todo, and so on
    action === "check" && checkTodo(todoId);
    // action === "edit" && editTodo(todoId);
    // action === "delete" && deleteTodo(todoId)

});

//check a todo
function checkTodo(todoId){
    todos = todos.map((todo,index ) =>
    ({
        ...todo,//spread operator
        checked: index ===todoId? !todo.checked : todo.checked
}));
    renderTodos();
}