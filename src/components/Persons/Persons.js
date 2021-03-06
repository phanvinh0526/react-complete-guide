import React, { Component } from 'react';

import Person from './Person/Person';


class Persons extends Component{

  // componentWillReceiveProps(props){

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentWillUpdate(){

  }
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render(){
    console.log('[Persons.js] redering....');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });

  }

}


// const persons = props => {
//   console.log('[Persons.js] rendering...');
//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={event => props.changed(event, person.id)}
//       />
//     );
//   });
// };

// export default persons;
