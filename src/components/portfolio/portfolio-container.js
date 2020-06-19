import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";

export default class PortfolioComponent extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "quip", catagory: "eCommerce" },
        { title: "Evenbrite", catagory: "Scheduling"}, 
        { title: "Ministry Safe", catagory: "Enterprise"},
        { title: "Swingway", catagory: "eCommerce"}
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState( {
      data: this.state.data.filter(item => {
        return item.catagory
      })
    })

  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title}/>;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
        <div>
          <h2>{this.state.pageTitle}</h2>

          <button onClick ={() => this.handleFilter('eCommercs')}>eCommerce
          </button>
          <button onClick ={() => this.handleFilter('Scheduling')}>Scheduling
          </button>
          <button onClick ={() => this.handleFilter('Enterprise')}>Enterprise
          </button>

            {this.portfolioItems()}
        </div>
    );
  }
}

