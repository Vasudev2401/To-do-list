const inputField = document.querySelector("#taskInput")
const addButton = document.querySelector("#addButton")


inputField.addEventListener('change',()=>{
  console.log(inputField.value)
})

const taskList = document.querySelector("#taskList")

addButton.addEventListener('click',()=>{
    taskList.innerHTML = ""
const newDiv = document.createElement('div')
newDiv.setAttribute('id','tasks')
newDiv.innerHTML=`<input class="taskCheck" class="taskCheck" type="checkbox">
      &nbsp; &nbsp;${inputField.value}`

      taskList.appendChild(newDiv);
      inputField.value = ""
})


taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('taskCheck')) {
      console.log("Task checked");
      const taskDiv = e.target.parentNode;
      taskDiv.remove();
    }
  });
