import React, { Component } from 'react';
import EditForm from './EditForm';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            showEditForm: false
        }
        this.deleteTodo = this.deleteTodo.bind(this);
        this.showTodo = this.showTodo.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    deleteTodo(e){
        this.props.deleteTodo(this.props.id);
    }

    enableEdit(e){
        this.setState({showEditForm: true});
    }

    showTodo(){
        this.setState({showEditForm: false});
    }

    toggleDone(){
        this.props.toggleDone(this.props.id);
    }

    render(){
        let {id,todo,isDone} = this.props;
        let isDoneStyle = {textDecoration: 'line-through'};
        return(
            <div onClick={this.toggleDone} style={{display:'flex', justifyContent:'center', gap:'5px'}}>
                {
                    this.state.showEditForm? 
                    <EditForm showTodo={this.showTodo} editTodo={this.props.editTodo} todo={todo} id={id} isDone={isDone}/>:
                        isDone? 
                            <li onClick={this.toggleDone} style={isDoneStyle}>{todo}</li>:
                            <li onClick={this.toggleDone}>{todo}</li>
                }
                <button onClick={this.deleteTodo}>Delete</button>
                <button 
                    onClick={this.enableEdit}
                    disabled={isDone}
                >Edit</button>
            </div>
        )
    }
}

export default Todo;