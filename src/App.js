import TaskItem from './Components/TaskItem';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';

function App(props) {
  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <AddTask />
      <Tasks>
          <TaskItem title="Eat" />
          <TaskItem title="Sleep" />
          <TaskItem title="Repeat" />
      </Tasks>
    </div>
  );
}

export default App;
