import React, { Component } from 'react';
import axios from 'axios';

class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            deckId: ""
        }

        this.fetchNewCard = this.fetchNewCard.bind(this);
    }

    async componentDidMount(){
        const deckData = (await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/")).data;
        this.setState({deckId: deckData["deck_id"]});
    }

    async fetchNewCard(evt){
        const card = (await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)).data.cards[0];
        card.rotation = (this.state.cards.length+ (Math.random()*30))*Math.random();
        this.setState(st => ({cards: [...st.cards, card]}))
        console.log(this.state);
    }

    render(){
        return(
            <div className='Deck'>
                <button onClick={this.fetchNewCard}>Give me a card</button>
                <div className='Deck-cards'>
                    {
                        this.state.cards.map((card,idx) => (
                            <img 
                                key={idx} 
                                src={card.image} 
                                alt={`${card.value} of ${card.suit}`}
                                style={{
                                    zIndex:idx+1,
                                    transform: `rotate(${card.rotation}deg)`
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Deck;