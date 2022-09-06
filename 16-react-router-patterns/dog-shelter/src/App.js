import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Dog from './Dog';

import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: "hazel",
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <ul className='Nav'>
          {
            this.props.dogs.map((dog,idx) => <NavLink key={idx} exact to={`/${dog.src}`}/>)
          }
        </ul>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} dogs={this.props.dogs}/>}
          />
          <Route
            exact
            path="/:dogName"
            render={(routeProps)=> <Dog {...routeProps} dogs={this.props.dogs}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
