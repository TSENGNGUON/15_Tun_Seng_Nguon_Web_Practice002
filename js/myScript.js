const buttonAddTask = document.getElementById("btnAddNewTask");
const tbody = document.getElementById("tbody");
let dateNow = new Date();
let fullYear = dateNow.getFullYear();
let month = dateNow.getMonth();
let day = dateNow.getDay();
let date = `${fullYear}/${month}/${day}`;
var taskContainer = [
    {
        taskName:"JavaScript",
        dateTime: date,
        priority: "High",
        status: "Pending",
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
                <td style="color:${taskContainer[i].priority == 'High'?"red" : (taskContainer[i].priority == "Low" ? "green":"orange")}">${taskContainer[i].priority} </td>
                <td><span class="pending">${taskContainer[i].status}</span> </td>
                </tr>
                `
                }
                tbody.innerHTML = dataRowCol;
                
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
            display();
            var taskName = document.getElementById("task-name");
            taskName.value = null;
            var date = document.getElementById("date");
            date.value = null;
     
        }



        
    }





