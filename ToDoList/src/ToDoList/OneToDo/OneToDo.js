import React, {Component} from 'react';
import Update from '../Update/Update';
import Edited from '../Edited/Edited';

export default class OneToDo extends Component {
	constructor(props) {
		super(props);
		this.state = { editState: false, text: this.props.toDoText.text };
    	this.editStateChange = this.editStateChange.bind(this);
    	this.setText = this.setText.bind(this);
    }
    setText(value) {
    	value && this.setState({text: value});
    }
    editStateChange() {
    	this.setState({
    		editState: !this.state.editState,
    	})
    }
    render() {
			return (
				<div>
					{
						!this.state.editState &&
						<Edited
							editStateChange={this.editStateChange} 
							inputText={this.state.text}
						/>
					}
			        {
			        	this.state.editState &&
			        	<Update 
			        		inputText={this.state.text}
			        		editStateChange={this.editStateChange}
			        		setText={this.setText}
			        	/>
					}
				</div>
			);
	}	
}