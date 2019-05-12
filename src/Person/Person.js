import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old</p>
            <p>My name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <br/>
        </div>
    );
};

export default person;
