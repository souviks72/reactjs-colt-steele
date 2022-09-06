import React, {Component} from 'react';

class CoinFace extends Component{
    render(){
        const uri = "https://tinyurl.com/react-coin-";

        return(
            <div>
                <img src={`${uri}${this.props.face}-jpg`} alt="face of a coin"/>
            </div>
        );
    }
}

export default CoinFace;