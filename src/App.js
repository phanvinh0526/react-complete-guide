import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'Some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; => instead of using setState function in Component
    this.setState({
      persons: [
        { name: newName, age: 38},
        { name: 'Manu', age: 39},
        { name: 'Stephanie', age: 36}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    }); // get person index if it's exist in the state
    const person = [...this.state.persons[personIndex]];
    
    person.name = event.target.value;

    // Update state by Index filter
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

    this.setState({
      persons: [
        { id: '1', name: 'Max', age: 38},
        { id: '2', name: event.target.value, age: 39},
        { id: '3', name: 'Stephanie', age: 36}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (perIndex) => {
    // const persons = this.state.persons; -- this approach is unsafe - it can damage the state
    const persons = [...this.state.persons]; // SAFE: clone a new state for const persons
    persons.splice(perIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // Inline styles
    const style1={
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '2x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const style2={
      backgroundColor: 'organ',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    // Render ST conditionally
    if(this.state.showPerson){
      persons=(
        <div>
          {/* Map: gives element and index, to scan each State element */}
          {this.state.persons.map((person, index) => { // index: is not a safe method in case we delete element in the state stree
            return 
            <ErrorBoundary key={person.id}>
            <Person name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(person.id)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} /> // To handle the error function
            </ErrorBoundary>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, Hello React</h1>
        <p>This is really working!</p>
        <button 
          style={style1}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <button
          style={style2}
          onClick={this.togglePersonHandler}>Switch Condition Handler</button>
        {persons}
      </div>
    );
  }
}

export default App;
