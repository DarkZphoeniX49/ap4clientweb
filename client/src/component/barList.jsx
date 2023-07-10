/** @format */

import React, { Component } from "react";
import { getAllBar } from "../API/barAPI";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import BarSelectorProduct from "./frame/barInfo/BarSelectorProduct";
import NavBar from "./frame/NavBar";
import { useState } from "react";
class BarList extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    getAllBar().then((bar) => {
      this.setState({
        items: bar,
        DataisLoaded: true,
        filter : "Tous"
      });
    });
  }

  render() {
    const { DataisLoaded, items, filter  } = this.state;
    
    if (!DataisLoaded) {
      return (
        <div>
          <h1>Please wait some time....</h1>
        </div>
      );
    }
    const filteredItems =
      filter === "Tous"
        ? items
        : items.filter((item) => item.typebar.NOM_TYPE === filter);

    return (
      <div className='App'>
        <NavBar />
        <br />
        <br />
        <div className='form-group'>
          <select onChange={(e) => this.setState({ filter: e.target.value })}>
            <option value='Tous'>Tous</option>
            {Array.from(new Set(items.map((item) => (item.typebar.NOM_TYPE)))).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <br></br>
        <div className='container'>
          <div className='row'>
            {filteredItems.map((item) => (
              <div className='col-sm-4' key={item.ID_BAR}>
                <div className='card'>
                  <img
                    src={item.PHOTOBAR}
                    className='card-img-top'
                    alt='Bar Image'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.NOMBAR}</h5>
                    <p className='card-text'>Ouverture: {item.OUVERTURE}</p>
                    <p className='card-text'>Fermeture: {item.FERMETURE}</p>
                    <p className='card-text'>Adresse: {item.ADRESSE}</p>
                    <p className='card-text'>Tribune: <Link to={'/Plan'}> {item.typebar.NOM_TYPE}</Link></p>
                    <Button>
                      <Link
                        style={{ textDecoration: "none", color: "#e8e8e8" }}
                        to={`/User/BarInfo/${item.ID_BAR}`}
                      >
                        Voir le bar
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default BarList;
