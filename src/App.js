import React, { useState } from 'react'
import People from './People'
import data from './data/data'
import './style/style.css'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App">
     <h1> {people.length} Birthdays today</h1>
     <People people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
