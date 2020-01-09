/* eslint-disable no-unused-vars */
import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../item-details';

import './app.css';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';

class App extends React.Component {
  constructor() {
    super();
   this.state = {

   };
 this.swapiService = new SwapiService();

}

  render() {
    return (
      <div>

        <Header />
        <RandomPlanet />
        <PeoplePage/>
      </div>
    );
  }
}

export default App;