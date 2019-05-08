import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old</p>
            <p>My name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
