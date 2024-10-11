let FormTasks = document.querySelector('#task-form');
        let FormTaskElement = document.querySelector('#input-box');
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        FormTasks.addEventListener('submit', function (e) {
            
            let task = FormTaskElement.value.trim();
            taskList.unshift(task);
            localStorage.setItem('tasks', JSON.stringify(taskList));
            FormTaskElement.value = '';
            displayTask();
        });

        function displayTasks()
        {
            let addTask='';
            taskList.forEach((task,index)=> 
            {
                addTask+=`<li>
                            <span>${task}</span>
                            <div><button class="float-end icon" onclick="deleteTask(${index})">
                                    <i class="bi bi-trash"></i>
                            </button>
                            <button class="float-end me-2 icon">
                                <i class="bi bi-pen"></i>
                            </button><div/>
                        </li>` 
            });
            document.getElementById('item-list').innerHTML=addTask;
        }
        displayTasks();
        document.getElementById('item-list').addEventListener("click",function(e){
            if(e.target.tagName==="LI"){
                e.target.classList.toggle("checked");
            }
        },false);
        
        function deleteTask(index) {
            taskList.splice(index , 1);  
            localStorage.setItem('tasks', JSON.stringify(taskList)); 
            displayTasks(); 
        }






