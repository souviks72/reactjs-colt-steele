import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class VendingMachine extends Component{
    render(){
        return(
            <div>
                Welcome to the VendingMachine.<br></br>
                We serve:
                <ul>
                    <NavLink to="/coke">Coke</NavLink>
                    <NavLink to="/chips">Chips</NavLink>
                    <NavLink to="/kitkat">Kitkat</NavLink>
                </ul>
            </div>
        )
    }
}

export default VendingMachine;