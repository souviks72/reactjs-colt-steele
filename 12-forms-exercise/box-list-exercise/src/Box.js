import React, { Component } from 'react';

class Box extends Component{
    constructor(props){
        super(props);
        this.deleteBox = this.deleteBox.bind(this);
    }

    deleteBox(e){
        this.props.deleteBox(this.props.id);
    }

    render(){
        let css = {height: `${this.props.height}px`, width: `${this.props.width}px`, backgroundColor: this.props.color}
        return(
            <div>
                <div style={css}></div>
                <button onClick={this.deleteBox}>X</button>
            </div>
            
        );
    }
}

export default Box;