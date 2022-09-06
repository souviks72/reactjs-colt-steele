import React, { Component } from 'react';
import CoinFace from './CoinFace';


class Flipper extends Component{
    constructor(props){
        super(props);
        this.state = {
            face: 'heads',
            flips: 0,
            heads: 0,
            tails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const x = Math.floor(Math.random()*2);
        if (x===0){
            this.setState(curState => ({
                flips: curState.flips+1,
                heads: curState.heads+1,
                face: 'heads'
            }));
        } 
        else{
            this.setState(curState => ({
                flips: curState.flips+1,
                tails: curState.tails+1,
                face: 'tails'
            }));
        }
    }

    render(){
        let {flips, heads, tails} = this.state;
        return(
            <div className='Flipper'>
                <h1>Let's flip a coin</h1>
                <CoinFace face={this.state.face}/>
                <button onClick={this.handleClick}>Flip Meee</button>
                <p>Out of {flips} fliips, there have been {heads} heads and {tails} tails.</p>
            </div>
        );
    }
}

export default Flipper;