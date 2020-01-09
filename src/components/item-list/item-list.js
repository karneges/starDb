// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      itemList: null
    };

  }

  componentDidMount() {

    const { getData } = this.props;

      getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  rendeItems(arr) {
    return arr.map((person,index) => {
      const {id} = person
      const label = this.props.children(person)
      if(index>=5){
        return;
      }
      return(
      <li className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(person.id)}>
        {label}
      </li>
    );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.rendeItems(itemList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
