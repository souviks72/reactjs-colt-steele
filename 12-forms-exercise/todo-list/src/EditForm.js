import React, { Component } from 'react';

class EditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.todo
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
        let newTodo = {id: this.props.id, todo: this.state.todo, isDone:this.props.isDone};
        this.props.editTodo(newTodo);
        this.setState({todo:""});
        this.props.showTodo();
    }

    render(){
        return(
            <div className='Form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='todo' 
                        id='todo' 
                        value={this.state.todo}
                        type='text'
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditForm;