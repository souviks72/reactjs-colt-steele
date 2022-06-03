import React, {Component} from 'react';

import './Card.css'

class Card extends Component{
    render(){
        const {id, name, type, base_experience: exp} = this.props.data;
        const addPadding = (id) => '0'.repeat(3-(id).length)+id;
        let paddedID = addPadding(''+id);
        console.log(paddedID)
        return(
            <div className='Card'>
                <h6>{name}</h6>
                <img className='Card-img' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedID}.png`}/>
                <p>Type: {type}</p>
                <p>EXP: {exp}</p>
            </div>
        );
    }
}

export default Card;