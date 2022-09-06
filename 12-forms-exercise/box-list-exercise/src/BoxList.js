import React, { Component } from 'react';

import {v4 as uuid} from "uuid";

import BoxForm from './BoxForm';
import Box from './Box';


class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        }
        this.createBox = this.createBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    createBox(height, width, color){
        let id = uuid();
        let box =  <Box deleteBox={this.deleteBox} id={id} key={id} height={height} width={width} color={color}/>;
        this.setState(st => ({
            boxes: [...st.boxes, box] 
        }));
    }

    deleteBox(id){
        this.setState(st =>({
            boxes: st.boxes.filter(box =>{
                console.log(box);
                return box.props.id !== id
            } )
        }))
    }

    render(){
        return(
            <div className="BoxList">
                <h1>Color Box List</h1>
                <BoxForm createBox={this.createBox}/>
                <ul>
                    {this.state.boxes}
                </ul>
            </div>
        );
    }
}

export default BoxList;