import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";
import portfolioItem from './portfolio-item';

export default class PortfolioComponent extends Component {
  constructor() {
    super();
    console. log( "Portfolio Container has rendered")
  }
  
  PortfolioItems() {
    const data = ["quip", "Evenbrite", "Ministry Safe"];

    return data.map(item => {
      return <portfolioItem />;
    })
  }

  render() {
    return (
        <div>
            <h2>Portfolio Items Go Here</h2>
        </div>
    );
  }
}

