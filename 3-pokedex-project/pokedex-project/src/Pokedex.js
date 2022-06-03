import React, {Component} from 'react';

import Card from './Card';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        const {pokeList, isWinner, totalExp} = this.props;
        let L = pokeList.map(pokemon => <Card data={pokemon}/>);
        let msg = isWinner? "Winning Hand" : "Loosing Hand";
        return(
            <div className='Pokedex'>
                <p>{msg}</p>
                <p>Total Exp: {totalExp}</p>
                <div className='Pokedex-cards'>
                    {L[0]}
                    {L[1]}
                    {L[2]}
                    {L[3]}
                </div>
            </div>
        );
    }
    
}

export default Pokedex;