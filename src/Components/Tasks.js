import classes from './Tasks.module.css';
import { useEffect } from 'react';
const FIREBASE_DOMAIN = "https://test-95985-default-rtdb.firebaseio.com/";

const Tasks = (props) => {
    const fetchTasks = async () => {

    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className={classes.container}>
            <div className="filter">
                <button type="button" className={classes.button}>All</button>
                <button type="button" className={classes.button}>Active</button>
                <button type="button" className={classes.button}>Completed</button>
            </div>
            <div className={classes.tasks}>
                <h3>3 Tasks Remaining</h3>
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    );
}

export default Tasks;