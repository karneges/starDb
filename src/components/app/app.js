/* eslint-disable no-unused-vars */
import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import { Record } from '../item-details/item-details';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details';


class App extends React.Component {


  render() {
    

    return (
      <div className="stardb-app">
        <Header />
        <PersonDetails itemId={2}/>
        <PlanetDetails itemId={3}/>
        <StarshipDetails itemId={5}/>
        <PersonList/>
        <PlanetList/>
        <StarshipList/>
      </div>
    );
  }
}

export default App;