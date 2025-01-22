var TodoList = [
    {
        name: ``,
        date: ``
    }
] 


function addTodo(){
    const con = document.getElementById("container");
    let clickBtn = document.querySelector(`#adTodo-btn`);
    let clickInputName = document.querySelector(`#input-name-js`);
    let clickInputDate = document.querySelector(`#input-date-js`);
    //Get value
    let getValueName = clickInputName.value;
    let getValueDate = clickInputDate.value;

    TodoList.push(
        {
        name: getValueName,
        date: getValueDate
        }
    );

    let currentHeight = parseInt(window.getComputedStyle(con).height); // Get current height as a number
    con.style.height = (currentHeight + 30) + "px"; // Add 50px to the current height

    clickInputName.value = ``;
    clickInputDate.value = ``;
    showTodo();
}

function showTodo(){
    let list = document.querySelector(`#list-js`);
    let CreateList = ``;

    for(let i = 1; i < TodoList.length; i++){
        const todoObj = TodoList[i];
        const {name} = TodoList;
        const {date} = TodoList;
        const html = `
            <div class="list-todo">
                ${i}. ${todoObj.name}
            </div>
            <div class="list-todo">
                ${todoObj.date}
            </div> 
            <div>
                <input type="checkbox">
            </div>
            <div>
                <button id="delete-btn" onclick="
                    TodoList.pop(${i}); showTodo(); dec();
                ">
                    DELETE
                </button>
            </div>
        `
        CreateList += html;
    }
    list.innerHTML = CreateList;
}
function dec(){
    const con = document.getElementById("container");
    let currentHeight = parseInt(window.getComputedStyle(con).height); // Get current height as a number
    con.style.height = (currentHeight - 30) + "px";
}