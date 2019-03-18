import React, { useState, useReducer } from 'react';
import './App.css';

export default function () {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD':
        return state;
      case 'FETCH':
        return state;
      default:
        return state;
    }
  }, {
      name: '',
      namesList: []
    })

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleCreateTask = (e) => {
    state.namesList.push(name);
    setName('');
    dispatch({ type: 'ADD' });
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <strong className="Title">TODO</strong>
          <form onSubmit={handleCreateTask}>
            <input value={name} onChange={handleNameChange} autoFocus />
            <button>Add</button>
          </form>
          {state.namesList.map((name, index) => (
            <div key={index}>{name}</div>
          ))
          }
        </div>
      </header>
    </div>
  );
}
