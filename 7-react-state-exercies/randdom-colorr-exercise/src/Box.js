import React, { Component } from 'react';
import {choice} from "./helpers";
import "./Box.css"

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.allColors)};
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor(){
        let newColor;
        do{
            newColor = choice(this.props.allColors);
        }while(newColor === this.state.color)   
        this.setState({color: newColor});
    }

    handleClick(e){
        this.pickColor();
    }

    render(){
        return(
            <div 
                className='Box' 
                style={{backgroundColor: this.state.color}}
                onClick={this.handleClick}>
            </div>
        )
    }
}

export default Box;