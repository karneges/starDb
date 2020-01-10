import React ,{Component} from 'react';
import { PersonDetails } from '../sw-components/details';
import { PersonList } from '../sw-components/item-lists';
import Row from '../row/row';

export default class PeoplePage extends Component{

    constructor(){
        super();
        this.state = {
            selectedItem:null
        };
        this.onItemSelected = (selectedItem) => {            
            this.setState({ selectedItem }); 
        };
    }
    render() {
       
        const {selectedItem} = this.state;
        return(
            <Row
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId={selectedItem} />}
          />
        );

    }
}