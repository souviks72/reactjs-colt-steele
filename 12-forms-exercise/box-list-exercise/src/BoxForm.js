import React, { Component } from 'react';

class BoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: "",
            height: 0,
            width: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let {height,width,color} = this.state;
        this.props.createBox(height, width, color);
        this.setState({
            color: "",
            height: 0,
            width: 0
        });
    }

    render(){
        return(
            <div className='BoxForm'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='color'>Color:</label>
                    <input id="color" name="color" value={this.state.color} onChange={this.handleChange}/>

                    <label htmlFor='height'>Height:</label>
                    <input id='height' name='height' value={this.state.height} onChange={this.handleChange}/>

                    <label htmlFor='width'>Width:</label>
                    <input id='width' name='width' value={this.state.width} onChange={this.handleChange}/>

                    <button>Add color box!!</button>
                </form>
                
            </div>
        )
    }
}

export default BoxForm;