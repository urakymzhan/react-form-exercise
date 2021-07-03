import "./App.css"; 

function App() {
  // 1. init states and store todos
    // fetch todos, carefully check data (it has comleted attribute in it)
    // API: http://jsonplaceholder.typicode.com/todos

  // 2. handle user search input
    // Hint: onChange, event.target.value


  // 3. filter data based on search input
    // Hint: filter()

  // 4. filter data to show completed only
    // filter()

  // HINTS:
    // change null values below with your code
    // use completed attribute from API data
    // on single todo click you can find single todo from data and update only it's completed value 

  // Things to consider:
    // What if your doesn't arrive from API
      // how do you handle it?
    
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input className="searchbar" type="text" placeholder="Search todos" onChange={null} value={null}/>
        </div>
        <div>
          <label>Show Comleted</label>
          <input className="showCompleted" type="checkbox" checked={null} onChange={null}/>
        </div>
      </header>
      <section>
        {/* map todos and show the result */}
      </section>
    </div>
  );
}

export default App;
