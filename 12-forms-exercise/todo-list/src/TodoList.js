import React, { Component } from 'react';

import Form from './Form';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [{id:0, todo:"Wake up", isDone: true}, {id:1, todo:"Go to sleep", isDone: false}]
        }
        this.addNewTodo = this.addNewTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addEditedTodo = this.addEditedTodo.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    addNewTodo(newTodo){
        this.setState(st => ({todos: [...st.todos, newTodo]}));
    }

    deleteTodo(id){
        this.setState(st => ({
            todos: st.todos.filter(t => t.id !== id)
        }))
    }

    addEditedTodo(todo){
        this.setState(st => ({
            todos: st.todos.map(t => {
                if (t.id === todo.id)
                    return todo;
                return t;
            })
        }));
    }

    toggleDone(id){
        let updatedTodos = this.state.todos.map(t => {
            if (t.id===id){
                return {id:t.id, todo:t.todo,isDone: !t.isDone};
            }  
            return t;
        });
        this.setState({todos:updatedTodos})
    }

    render(){
        return(
            <div className='Todolist'>
                <header>
                    <h3>Todo List!</h3>
                    <p>A simple React Todo List App.</p>
                </header>
                <ul>
                    {this.state.todos.map(t => 
                        
                        (<Todo  
                            key={t.id} 
                            {...t} 
                            editTodo={this.addEditedTodo}
                            deleteTodo={this.deleteTodo} 
                            toggleDone={this.toggleDone}
                        />)
                    )}
                </ul>
                <Form addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
}

export default TodoList;