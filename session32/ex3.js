function addSubject() {
    let input = document.getElementById("subjectInput");
    let subject = input.value; 

    if (subject === "") {
        alert("Tên môn học không được để trống");
        return;
    }

    let list = document.createElement("li");
    list.textContent = subject;

    document.getElementById("subjectList").appendChild(list);
    input.value = ""; 
    input.focus();
}