import React, { Component } from 'react';
import axios from "axios"

import PortfolioItem from "./portfolio-item";

export default class PortfolioComponent extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "",
      isLoading: false,
      data: []
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
getPortfolioItems() {
  axios.get("https://jacobcolby.devcamp.space/portfolio/portfolio_items")
  .then(response => {
    console.log("response data", response);
    this.setState({
      data: response.data.portfolio_items
    })
  })
  .catch(error => {
    console.log(error);
  })
}

  portfolioItems() {
    //Data that we will need:
    // -Background image: thumb_image_url
    //-logo
    //- description: description
    // - id: id
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id}/>;
    });
  }



componentDidMount() {
  this.getPortfolioItems();
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
        </div>
    );
  }
}

