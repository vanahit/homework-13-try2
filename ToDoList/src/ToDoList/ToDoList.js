import React, {Component} from 'react';
import ToDos from './ToDos/ToDos';
import Title from './Title/Title';
import './style.css';

export default class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDos: [],
			uniqueKey : 0,
			toDoText : ''
		};
		this.addToDo = this.addToDo.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
      	this.setState({ toDoText: e.target.value});
    }
	addToDo(e) {
		if (this.state.toDoText !== '') {
			let newToDo = {
				text:this.state.toDoText,
				key: this.state.uniqueKey,
			};
			this.setState((prevState) => {
				return {
					toDos : prevState.toDos.concat(newToDo),
					uniqueKey : !this.state.toDos.length ?  1 : this.state.uniqueKey + 1,
				}
			});
		}
		this.setState({toDoText: ''});
		e.preventDefault();
	}
	render() {
    return (
	    	<div>
		    	<main>
			    	<div className='title-left'>
			    		<Title count={this.state.uniqueKey}/>
			    	</div>
			    	<div className='todo-parent'>
			    		<div className='all-todos todo-input'>
			    			<form>
			    				<input 
			    					value={this.state.toDoText} 
						    		onChange={this.handleChange}
			    					placeholder='To Do text goes here' 
			    					className='text-input' />
			    				<button type='button' 
			    					className='all-buttons create-button'
			    					onClick ={this.addToDo}	
			    				>
			    					Create
			    				</button>
			    			</form>
			    		</div>
			    	</div> 
			   		<ToDos 
				   		details={this.state.toDos}
				   	/>
			   	</main>
			</div>
        )
	}
}