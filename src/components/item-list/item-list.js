// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
// eslint-disable-next-line no-unused-vars
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: null
    };
    this.swapiService = new SwapiService();
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  rendeItems(arr) {
    return arr.map((person) => {
      return(
      <li className="list-group-item"
        key={person.id}
        onClick={() => this.props.onItemSelected(person.id)}>
        {person.name}
      </li>
    );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.rendeItems(peopleList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
