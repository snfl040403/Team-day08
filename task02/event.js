const button = document.getElementById("get-todos");
const input = document.querySelector("input[type=text]");

button.addEventListener("click", (e) => {
    todoService.getList(input.value, todoLayout.showList);
});
