import React, {Component} from 'react';
import './style.css';
import OneToDo from '../OneToDo/OneToDo';

export default class ToDos extends Component {
  constructor(props) {
    super(props);
    this.createToDo = this.createToDo.bind(this);
  }
  createToDo(toDo) {
    return (
      <li key={toDo.key}>
          <OneToDo 
            toDoText={toDo}
            stateChange={this.stateChange}
          />
      </li>
    )
  }
  render() {
    let toDoDetails = this.props.details;
    let toDoList = toDoDetails.map(this.createToDo);
    return (
      <ul className='todo-list'>
        {toDoList}
      </ul>
    )
  }
}

  