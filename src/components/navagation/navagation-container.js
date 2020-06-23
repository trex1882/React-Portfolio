import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class NavagationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <NavLink exact to="/">
                home
            </NavLink>
            <NavLink to="/about-me">
                about
            </NavLink>
            <a href="/">Wrong Home</a>


            <button>Contact</button>
            <button>Blog</button>
           {true ? <button>Add Blog</button>  : null }
            </div>
        )
    }
}