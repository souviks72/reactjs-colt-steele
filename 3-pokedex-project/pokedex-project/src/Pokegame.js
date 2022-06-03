import React, {Component} from "react";

import Pokedex from "./Pokedex";

class Pokegame extends Component{
    render(){
        const pokeList = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ];

        let l1=[],l2=[], exp1=0,exp2=0;
        pokeList.forEach((pokemon,i) => {
            if (i%2 === 0) {
                l1.push(pokemon);
                exp1 += pokemon.base_experience;
            }
            else {
                l2.push(pokemon);
                exp2 += pokemon.base_experience;
            }
        });
        let winner = exp1 > exp2? 1:2;
        
        return(
            <div>
                <Pokedex pokeList={l1} isWinner={winner === 1} totalExp={exp1}/>
                <Pokedex pokeList={l2} isWinner={winner === 2} totalExp={exp2}/>
            </div>
        );
    }
}

export default Pokegame;