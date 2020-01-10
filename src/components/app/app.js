/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components/details';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planets-page';
import StarshipPage from '../pages/starships-page';


class App extends React.Component {
  constructor() {
    super();
    this.swapiService = new SwapiService();
  }

  render() {

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value={this.swapiService}>

          <Header />

          <RandomPlanet />
          <PeoplePage/>
          <PlanetPage/>
          <StarshipPage/>
        </SwapiServiceProvider>

      </div>
    );
  }
}

export default App;