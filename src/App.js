import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
