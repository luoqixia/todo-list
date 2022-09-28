import classes from './Tasks.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { useEffect } from 'react';
import { taskActions } from '../Store/tasks-slice';

const FIREBASE_DOMAIN = "https://test-95985-default-rtdb.firebaseio.com/";

const Tasks = () => {
    const dispatch = useDispatch();

    const fetchTasks = async () => {
        const response = await fetch(`${FIREBASE_DOMAIN}/tasks/main.json`);
        const responseData = await response.json();
    
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
    
    useEffect(() => {
        const loadedTasks = fetchTasks();
        loadedTasks.then(loadedTasks => {
            for (const key in loadedTasks) {
                const taskObj = {
                    id: key,
                    title: loadedTasks[key].title,
                    status: loadedTasks[key].status
                };
                dispatch(taskActions.addTask(taskObj));
            };
        })
    }, []);

    const items = useSelector(state => state.tasks.tasks);
    let tasks = (
      <ul>
        {items.map(item => <TaskItem key={item.id} id={item.id} title={item.title} />)}
      </ul>
    );
   
    return (
        <div className={classes.container}>
            <div className="filter">
                <button type="button" className={classes.button}>All</button>
                <button type="button" className={classes.button}>Active</button>
                <button type="button" className={classes.button}>Completed</button>
            </div>
            <div className={classes.tasks}>
                <h3>3 Tasks Remaining</h3>
                {tasks}
            </div>
        </div>
    );
}

export default Tasks;