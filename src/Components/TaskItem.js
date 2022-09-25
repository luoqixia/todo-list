import classes from './TaskItem.module.css';

const TaskItem = (props) => {
    return (
        <li>
            <input type="checkbox" id="item"></input>
            <label htmlFor="item">{props.title}</label>
            <div class="item-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
        </li>
    );
}

export default TaskItem;