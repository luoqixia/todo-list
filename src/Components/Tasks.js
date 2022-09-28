import classes from './Tasks.module.css';

const Tasks = (props) => {
   
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