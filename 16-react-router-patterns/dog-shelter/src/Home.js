import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        console.log(this.props.match);
        return(
            <div className='Home'>
                <h1 className='Home-heading'>Click a Dog!</h1>
                <div className='Home-dogs'>
                    {
                        this.props.dogs.map((dog,idx) => (
                            <Link 
                                to={`/${dog.src}`}
                                exact
                                key={idx}
                            >
                                <img 
                                    className='Home-dog__img' 
                                    src={`./imgs/hazel.jpg`} 
                                    alt={`a dog named ${dog.name}`}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Home;