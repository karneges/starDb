/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planets-page";
import StarshipPage from "../pages/starships-page";
import { HashRouter as Router, Route } from "react-router-dom";
import { StarshipDetails } from "../sw-components/details";

class App extends React.Component {
  constructor() {
    super();
    this.swapiService = new SwapiService();
  }

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <Route path="/" exact render={() => <h2>Welcome to StarDb!</h2>} />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" exact component={StarshipPage} />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
