const todoService = (() => {
    const getList = async (page, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();

        if (callback) {
            callback(page, todos);
        }
    };

    return { getList: getList };
})();
