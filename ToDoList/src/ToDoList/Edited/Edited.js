import React, {Component} from 'react';
import img from './img/edit_40.png';

export default class Edited extends Component {
	constructor(props) {
		super(props);
		this.state = { toDoLabel: false, text: this.props.inputText};
    	this.labelStatusChange = this.labelStatusChange.bind(this);
    	this.editIconShow = this.editIconShow.bind(this);
    	this.editIconHide = this.editIconHide.bind(this);
    	this.editState = this.editState.bind(this);
    }
    editState() {
    	this.props.editStateChange();
    	this.setState({
	      toDoLabel : false,
	    });
    }
    labelStatusChange() {
	    this.setState({
	      toDoLabel : !this.state.toDoLabel,
	    });
	}
	editIconShow() {
	    this.setState({
	      toDoEdit: true,
	    });
	    this.editImg.style.display = 'inline-block';
	}
	editIconHide() {
	    this.setState({
	      toDoEdit: false,
	    });
	    this.editImg.style.display = 'none';
	}
	render() {
			return (
				!this.state.editState &&
						<div className='todo-parent' onMouseOver={this.editIconShow} onMouseOut={this.editIconHide}>
				            <div className='all-todos todo'>
				                <div className='todo-text'>
				                  {this.state.text} 
				                    <img 
				                    	className='edit-img'
				                    	alt='edit Icon'
				                      	src={img} 
				                      	onClick={this.editState}
				                      	ref = {(img) => this.editImg = img}
				                     /> 
				                    </div>
				                    {
				                        !this.state.toDoLabel && 
				         
				                        <div className='done-new new'>
				                          <button  onClick = {this.labelStatusChange}> New </button>
				                        </div>
				                    }
				                    {
				                        this.state.toDoLabel && 
				         
				                        <div className='done-new done'>
				                          <button  onClick = {this.labelStatusChange}> Done </button>
				                        </div>
				                    }
				            </div>
			            </div>
		      
			);
	}	
}