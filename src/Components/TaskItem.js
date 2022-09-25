import classes from './TaskItem.module.css';
import { useDispatch } from 'react-redux';
import { taskActions } from '../Store/tasks-slice';

const TaskItem = (props) => {
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(taskActions.removeTask({ id: props.id }));
    };

    return (
        <li>
            <label htmlFor="item" className={classes.label}>{props.title}</label>
            <div className={classes.actions}>
              <input type="checkbox" id="item"></input>
              <button type="button" className={classes.edit}>Edit</button>
              <button type="button" className={classes.delete} onClick={deleteTask}>Delete</button>
            </div>
        </li>
    );
}

export default TaskItem;