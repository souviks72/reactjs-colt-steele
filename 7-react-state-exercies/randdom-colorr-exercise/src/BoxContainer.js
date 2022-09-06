import React, { Component } from 'react';
import Box from "./Box";

class BoxContainer extends Component{
    static defaultProps = {
        allColors: ["purple", "magenta", "lilac", "pink", "blue", "cyan", "black", "red", "orange",
            "green", "yellow", "indigo", "grey", "darkgreen", "gold", "silver", "ivory", "skyblue"],
        numBoxes: 18 
    }
   
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
            () => <Box allColors={this.props.allColors}/>
        )
        return(
            <div className='BoxContainer'>{boxes}</div>
        );
    }
}

export default BoxContainer;