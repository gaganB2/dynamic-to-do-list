document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const themeSwitcher = document.getElementById('themeSwitcher');
    let isDarkMode = false;

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);
    themeSwitcher.addEventListener('click', toggleTheme);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.classList.add('done-btn');
        li.appendChild(doneBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('done-btn')) {
            e.target.parentElement.classList.toggle('completed');
            e.target.textContent = e.target.textContent === 'Done' ? 'Undo' : 'Done';
        } else if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;
        themeSwitcher.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }
});
