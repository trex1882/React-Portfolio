import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";

export default class PortfolioComponent extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "",
      isLoading: false,
      data: [
        { title: "quip", catagory: "eCommerce", slug: "quip" },
        { title: "Evenbrite", catagory: "Scheduling", slug: "Eventbrite"}, 
        { title: "Ministry Safe", catagory: "Enterprise", slug: "Ministry Save"},
        { title: "Swingway", catagory: "eCommerce", slug: "Swingway"}
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

