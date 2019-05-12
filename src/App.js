import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 38},
        { name: event.target.value, age: 39},
        { name: 'Stephanie', age: 36}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
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
        {
          this.state.showPerson === true ?
        <div>
          <Person name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}>My hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div> : null
        }
      </div>
    );
  }
}

export default App;
