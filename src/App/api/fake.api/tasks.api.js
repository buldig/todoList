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
  console.log(count);
  tasks.push({ id: count++, name: name, completed: false });
};

export default {
  fetchAll,
  addTask,
};
