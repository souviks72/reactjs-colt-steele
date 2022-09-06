import React, { Component } from 'react';

class Die extends Component{
    render(){
        let numToWord={
            1: "one", 2: "two", 3: "three", 4:"four", 5: "five", 6:"six"
        }
        return(
            <i 
                className={
                    `fas fa-dice-${numToWord[this.props.num]} ${this.props.isRolling? 'shaking': ''}`
                }
            >
            </i>
        )
    }
} 

export default Die;