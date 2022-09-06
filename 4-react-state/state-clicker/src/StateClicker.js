import React, { Component } from 'react';

class StateClicker extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1, isWinner: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let n = Math.floor(Math.random()*10)+1;
        if (n!=7){
            this.setState({num: n});
        }else{
            this.setState({num: n, isWinner: true})
        }
    }

    render(){
        return(
            <div>
                <h1>The Number is {this.state.num}</h1>
                {
                    this.state.isWinner ? 
                        <p>You are a Winner!!!</p>: 
                        <button onClick={this.handleClick}>Click Me!</button>
                }
            </div>
        )
    }
        
    
}

export default StateClicker;