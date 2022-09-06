import React, {Component} from 'react';

import Die from './Die';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            d1: 1,
            d2: 2,
            isRolling: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let _d1 = Math.floor(Math.random()*6)+1;
        let _d2 = Math.floor(Math.random()*6)+1;
        this.setState({d1:_d1, d2:_d2, isRolling: true});
        setTimeout(()=>{this.setState({isRolling:false})},3000);
    }

    render(){
        
        return(
            <div className='RollDice'>
                <Die num={this.state.d1} isRolling={this.state.isRolling}/>
                <Die num={this.state.d2} isRolling={this.state.isRolling}/>
                <button 
                    onClick={this.handleClick} 
                    disabled={this.state.isRolling}
                    className='RollDice-btn'>
                        {this.state.isRolling? 'Rolling...': 'Roll Dice'}
                </button>
            </div>
            
        )
    }
}

export default RollDice;