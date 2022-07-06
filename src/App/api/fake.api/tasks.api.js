let count = 0;
const tasks = [
  { id: count++, name: "Task 1", completed: false },
  { id: count++, name: "Task 2", completed: false },
];

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const fetchAll = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};

const addTask = (name) => {
  console.log(name);
  tasks.push({ id: count++, name: name, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const editTask = (id, name) => {
  tasks.find((task) => task.id === id).name = name;
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const deleteTask = (id) => {
  let index = tasks.findIndex((task) => task.id === id);
  console.log(index);
  tasks.splice(index, 1);
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default {
  fetchAll,
  addTask,
  deleteTask,
  editTask,
};
