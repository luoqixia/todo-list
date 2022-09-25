import classes from './AddTask.module.css';

const AddTask = () => {
    return (
    <form>
        <p>
            <label htmlFor="add-new-item">What needs to be done?</label>
        </p>
        <input type="text" id="add-new-item" className={classes.newtaskbox}></input>
        <div className={classes.buttoncontainer}>
            <button type="submit" className={classes.button}>Add</button>
        </div>
    </form>
    );
}

export default AddTask;
