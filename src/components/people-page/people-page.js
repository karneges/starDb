import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    );
};

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };

    }
    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return this.props.children;
    }
}
export default class PeoplePage extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerson: 3

        };
        this.onPersonSelected = (id) => {
            this.setState({
                selectedPerson: id
            });
        };

        this.swapiService = new SwapiService();

    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople} >

                {(i) => (`${i.name} (${i.birthYear})`)}

            </ItemList>
        );
        const personDitails =
            <PersonDetails personId={this.state.selectedPerson} />;
        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDitails} />
            </ErrorBoundry>
        );
    }
}