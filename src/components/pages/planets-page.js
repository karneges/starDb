import React, { Component } from 'react';

import Row from '../row/row';
import { PlanetList } from '../sw-components/item-lists';
import { PlanetDetails } from '../sw-components/details';

export default class PlanetPage extends Component {

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
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );

    }
}