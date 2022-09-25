import classes from './TaskItem.module.css';

const TaskItem = (props) => {
    return (
        <li>
            <label htmlFor="item" className={classes.label}>{props.title}</label>
            <div className={classes.actions}>
              <input type="checkbox" id="item"></input>
              <button type="button" className={classes.edit}>Edit</button>
              <button type="button" className={classes.delete}>Delete</button>
            </div>
        </li>
    );
}

export default TaskItem;