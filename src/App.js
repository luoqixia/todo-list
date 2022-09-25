function App(props) {
  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <form>
        <h2>
            <label htmlFor="add-new-item">What needs to be done?</label>
        </h2>
        <input type="text" id="add-new-ttem"></input>
        <button type="submit" class="btn__add">Add</button>
      </form>
      <div class="filter">
        <button type="button" class="btn__filter">All</button>
        <button type="button" class="btn__filter">Active</button>
        <button type="button" class="btn__filter">Completed</button>
      </div>
      <div class="tasks">
        <h2>3 Tasks Remaining</h2>
        <ul>
          <li>  
            <input type="checkbox" id="item1"></input>
            <label htmlFor="item1">Eat</label>
            <div class="item-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </li>
          <li>
            <input type="checkbox" id="item1"></input>
            <label htmlFor="item1">Eat</label>
            <div class="item-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </li>
          <li>
            <input type="checkbox" id="item1"></input>
            <label htmlFor="item1">Eat</label>
            <div class="item-actions">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
