const todoLayout = (() => {
    const showList = async (page, todo) => {
        const tbody = document.querySelector("table.todo tbody");
        let text = ``;

        let pageSize = 20;
        let start = (page - 1) * pageSize;
        let end = page * pageSize;

        todo = todo.slice(start, end);
        todo.forEach((todo) => {
            console.log(todo)
            text += `
                <tr>
                    <td>${todo.userId}</td>
                    <td class="${todo.completed ? 'on' : 'off'}">${todo.title}</td>
                </tr>
            `;
        });

        tbody.innerHTML = text;
    };

    return { showList: showList };
})();
