const buttonAddTask = document.getElementById("btnAddNewTask");
const table = document.querySelector("table");
let dateNow = new Date().toDateString();
var taskContainer = [
    {
        taskName:"JavaScript",
        dateTime: dateNow,
        priority: "High",
        status: "Pending"
    },

];


function display(){
   
    var dataRowCol = "";
                for(let
                    i = 0; i < taskContainer.length ; i ++){
                dataRowCol += `
                <tr>
                <td>${taskContainer[i].taskName}</td>
                <td>${taskContainer[i].dateTime}</td>
                <td>${taskContainer[i].priority} </td>
                <td><span class="pending">${taskContainer[i].status}</span> </td>
                </tr>
                `
                }
                table.innerHTML = dataRowCol;
}
display();

buttonAddTask.addEventListener("click", addTask)

function addTask(){
        var taskName = document.getElementById("task-name").value.trim();
        var date = document.getElementById("date").value;
        var priority = document.getElementById("priority").value;
    
        // Push Object to array
        
        if (taskName == "" || date == "" || priority == ""){
            alert("Fill all Feilds");
        }else{
            taskContainer.push({taskName:taskName,dateTime: date, priority: priority,status: "Pending"})
            console.log(taskContainer);
            display();
            var taskName = document.getElementById("task-name");
            taskName.value = null;
            var date = document.getElementById("date");
            date.value = null;
     
        }



        
    }





