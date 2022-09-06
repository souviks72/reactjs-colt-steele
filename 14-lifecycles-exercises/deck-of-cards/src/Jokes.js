import axios from 'axios';
import React, {Component} from 'react';

class Jokes extends Component{
    constructor(props){
        super(props);
        this.state = {
            jokesList: []//{id: 1, likes: 2, joke: "jbvjvbjvb"}
        }
    }

    async componentDidMount(){
        for(let i=0;i<10;i++){
            let joke = await axios.get("https://icanhazdadjoke.com/");
            console.log(joke);
        }
    }

    render(){
        return(
            <div className='Jokes'>
                <ul>
                    <li>Jokes List</li>
                </ul>
            </div>
        )
    }
}

export default Jokes;