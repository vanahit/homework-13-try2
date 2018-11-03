import React, {Component} from 'react';

export default class Update extends Component {
	constructor(props) {
		super(props);
		this.state = {text: this.props.inputText}
		this.toDoUpdate = this.toDoUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
    	this.setState({text: e.target.value});
    	if (this.state.text) {
    		this.updateBtn.removeAttribute('disabled');
    	}
    }
	toDoUpdate(e) {
    	if (this.state.text){
	    	this.props.editStateChange();
	    	this.props.setText(this.state.text);
	    } else {
    		e.target.disabled = 'disabled';
    	}
    }
	render() {
		return(
			<div className='todo-parent'>
				<div className='all-todos update'>
					<form>
						<input 
							placeholder='To Do text goes here' 
							className='text-input' 
							value={this.state.text} 
							onChange={this.handleChange}
						/>
							<button type='button' className='all-buttons create-button' 
							    ref = {(btn) => this.updateBtn = btn}
							    onClick={this.toDoUpdate}	
							>
							   	Update
							</button>
					</form>
				</div>
			</div> 	    
		);
	}
}