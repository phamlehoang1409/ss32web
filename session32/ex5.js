function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        console.log("Nhập nhiệm vụ");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    
    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    
    let closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.className = "close";
    closeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(closeBtn);
    document.getElementById("taskList").appendChild(li);

    
    taskInput.value = "";
}