// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import './item-list.css';


const ItemList = (props) => {

    const { data ,onItemSelected,
    children: renderLabel } = props;

    const items = data.map((item, index) => {
      const { id } = item;
      const label = renderLabel(item);
      if (index >= 5) {
        return;
      }
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  };


  export default ItemList;