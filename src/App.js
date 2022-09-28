import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const FIREBASE_DOMAIN = "https://test-95985-default-rtdb.firebaseio.com/";

function App() {

  const fetchTasks = async () => {
    const response = await fetch(`${FIREBASE_DOMAIN}/tasks/main.json`);
    const responseData = await response.json();
    console.log(responseData);

    const loadedTasks = [];
    for (const key in responseData) {
        const taskObj = {
            id: key,
            ...responseData[key]
        };
        loadedTasks.push(taskObj);
    }
    return loadedTasks;
  };

  const loadedTasks = fetchTasks();
  console.log(loadedTasks);
  // let loadedTasks;
  // useEffect(() => {
  //     loadedTasks = fetchTasks();
  // }, []);

  const items = useSelector(state => state.tasks.tasks);
  let tasks = (
    <ul>
      {items.map(item => <TaskItem key={item.id} id={item.id} title={item.title} />)}
    </ul>
  );
  // const tasks = [...loadedTasks, ...addedTasks];
  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <AddTask />
      <Tasks>
          {tasks}
      </Tasks>
    </div>
  );
}

export default App;
