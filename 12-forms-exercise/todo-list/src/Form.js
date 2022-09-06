import React, { Component } from 'react';

import {v4 as uuid} from 'uuid';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let newTodo = {id: uuid(), todo: this.state.todo, isDone:false};
        this.props.addNewTodo(newTodo);
        this.setState({todo:""});
    }

    render(){
        return(
            <div className='Form'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='todo'>New Todo</label>
                    <input 
                        name='todo' 
                        id='todo' 
                        placeholder='New Todo'
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.todo}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;