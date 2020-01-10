import React, { Component } from 'react';

import Row from '../row/row';
import { StarshipList } from '../sw-components/item-lists';
import { StarshipDetails } from '../sw-components/details';


export default class StarshipPage extends Component {

    constructor() {
        super();
        this.state = {
            selectedItem: null
        };
        this.onItemSelected = (selectedItem) => {
            this.setState({ selectedItem });
        };
    }
    render() {

        const { selectedItem } = this.state;
        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        );

    }
}