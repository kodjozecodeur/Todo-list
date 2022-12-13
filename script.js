//select element
const form = document.getElementById('todoform');
const todoInput = document.getElementById('newtodo');
const todos = [];
//form submit, to prevent the form to refresh the page
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('the refresh is blocked');
    saveTodo();
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


    //control on sending empty todo
    const isEmpty = todoValue=== '';
    if(isEmpty){
        alert('todo cannot be empty');
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
    console.log(todos);
    }

}