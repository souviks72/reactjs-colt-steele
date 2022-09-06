import React, { Component } from 'react';

class Dog extends Component {
    render(){
        console.log(this.props);
        let {name, age, src, facts} = this.props.dogs.filter(dog => dog.src === this.props.match.params.dogName)[0];
        return(
            <div className='Dog'>
                <img src="put-img-src-here" alt={`${name}`}/>
                <div className='Dog-intro'>
                    <h4>{name}</h4>
                    <p>{age} years old</p>
                </div>
                <div className='Dog-facts'>
                    {
                        facts.map(fact => <p className='Dog-fact'>{fact}</p>)
                    }
                </div>
                <button
                    className='back-btn' 
                    onClick={this.props.history.goBack}
                >Go Back</button>
            </div>
        )
    }
}

export default Dog;