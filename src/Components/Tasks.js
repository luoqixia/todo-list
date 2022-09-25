import classes from './Tasks.module.css';

const Tasks = (props) => {
    return (
        <>
            <div class="filter">
                <button type="button" class="btn__filter">All</button>
                <button type="button" class="btn__filter">Active</button>
                <button type="button" class="btn__filter">Completed</button>
            </div>
            <div class="tasks">
                <h2>3 Tasks Remaining</h2>
                <ul>
                    {props.children}
                </ul>
            </div>
        </>
    );
}

export default Tasks;