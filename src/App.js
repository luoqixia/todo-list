import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import { useSelector } from 'react-redux';

function App() {
  const items = useSelector(state => state.tasks.tasks);
  const tasks = (
    <ul>
      {items.map(item => <TaskItem key={item.id} id={item.id} title={item.title} />)}
    </ul>
  );
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
