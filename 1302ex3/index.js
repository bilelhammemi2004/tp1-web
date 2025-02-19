document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const contentInput = document.getElementById('contentInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const clearButton = document.getElementById('clearButton');

    addButton.addEventListener('click', function() {
        const name = nameInput.value;
        const content = contentInput.value;

        if (name && content) {
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            todoItem.textContent = `${name}: ${content}`;
            todoList.appendChild(todoItem);
            nameInput.value = '';
            contentInput.value = '';
        }
    });

    clearButton.addEventListener('click', function() {
        todoList.innerHTML = '';
    });
});