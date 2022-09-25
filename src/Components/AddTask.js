import classes from './AddTask.module.css';

const AddTask = () => {
    return (
    <form>
        <h2>
            <label htmlFor="add-new-item">What needs to be done?</label>
        </h2>
        <input type="text" id="add-new-ttem"></input>
        <button type="submit" class="btn__add">Add</button>
    </form>
    );
}

export default AddTask;
