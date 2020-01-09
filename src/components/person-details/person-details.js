// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class PersonDetails extends Component {

  constructor() {
    super();
    this.state = {
      person: null
    };
    this.swapiService = new SwapiService();
    this.isLoading = false;
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    this.isLoading = true;
    if(this.props.personId !== prevProps.personId){
      this.updatePerson();
    }
  }

  updatePerson() {
    this.isLoading = true;
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.isLoading = false;
        this.setState({
          person
        });
      });
  }

  render() {
    if (!this.state.person) {
      return  <span>Select item</span>
    }
    const { person } = this.state;
    const content =!this.isLoading ?<PersonCard person={person}/>:null;
    const spinner = this.isLoading ? <Spinner /> :null;
    return (
      <div className="person-details card">
      {content}
      {spinner}
      </div>
    );
  }
}

const PersonCard  = ({person}) => {
  const { name, gender,
    birthYear, eyeColor, id } = person;
    return (
      <Fragment>
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="img" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        </Fragment>
    );
};
