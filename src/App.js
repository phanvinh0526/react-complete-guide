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
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; => instead of using setState function in Component
    this.setState({
      persons: [
        { name: 'Maximilian', age: 38},
        { name: 'Manu', age: 39},
        { name: 'Stephanie', age: 36}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Hello React</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <h1>Use State property</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Manu" age="29">My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
