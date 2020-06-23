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
                Home
            </NavLink>
            <NavLink to="/about-me">
                About
            </NavLink>
            <NavLink to="/Contact">
                Contact
            </NavLink>
            <NavLink to="/Blog">
                Blog
            </NavLink>
           {true ? <button>Add Blog</button>  : null }
            </div>
        )
    }
}