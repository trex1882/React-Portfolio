import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavagationContainer from "./navagation/navagation-container"
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match.js";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavagationContainer />

        <Router>
        <div>
        <h1>Jacob Colby Web page</h1>
       <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <NavagationContainer />

        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/about-me" component={about} />
          <Route path="/contact" component={contact} />
          <Route path="/blog" component={blog} />
          <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
          <Route component={NoMatch} />
        </Switch>
        </div>
        </Router>

      </div> 
    );
  }
}
