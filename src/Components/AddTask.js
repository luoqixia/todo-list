import classes from './AddTask.module.css';
import { taskActions } from '../Store/tasks-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

const AddTask = () => {
    const dispatch = useDispatch();
    const newTaskRef = useRef();
    const quantity = useSelector(state => state.tasks.quantity);
    const items = useSelector(state => state.tasks.tasks);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(taskActions.addTask({title: newTaskRef.current.value, status: "active", id: quantity}));
        newTaskRef.current.value = ""; // Is this ok? 
    };

    return (
    <form onSubmit={submitHandler}>
        <p>
            <label htmlFor="add-new-item">What needs to be done?</label>
        </p>
        <input 
            type="text" 
            id="add-new-item"
            className={classes.newtaskbox} 
            ref={newTaskRef}
            >
        </input>
        <div className={classes.buttoncontainer}>
            <button type="submit" className={classes.button}>Add</button>
        </div>
    </form>
    );
}

export default AddTask;
