// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
// import Spinner from '../spinner/spinner';


const Record = ({item ,field , label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  constructor() {
    super();
    this.state = {
      item: null,
      image: null
    };
    this.swapiService = new SwapiService();
    this.isLoading = false;
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    this.isLoading = true;
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    this.isLoading = true;
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.isLoading = false;
        this.setState({
          item,
          image: getImageUrl(item)
        });
      });
  }

  render() {
    if (!this.state.item) {
      return <span>Select item</span>;
    }
    const { item, image } = this.state;
    const { name } = item;
    // const content = !this.isLoading ? <PersonCard item={item} image={image} /> : null;
    // const spinner = this.isLoading ? <Spinner /> : null;
    return (
      <div className="person-details card">
             <img className="person-image"
        src={image}
        alt="img" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">

          {React.Children.map(this.props.children,(child,idx)=>{
            return React.cloneElement(child,{ item });
          })}

        </ul>
      </div>
      </div>
    );
  }
}

// const PersonCard = ({ item, image }) => {
//   const { name, gender,
//     birthYear, eyeColor, id } = item;
//   return (

//       <img className="person-image"
//         src={image}
//         alt="img" />

//       <div className="card-body">
//         <h4>{name}</h4>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">
//             <span className="term">Gender</span>
//             <span>{gender}</span>
//           </li>
//           <li className="list-group-item">
//             <span className="term">Birth Year</span>
//             <span>{birthYear}</span>
//           </li>
//           <li className="list-group-item">
//             <span className="term">Eye Color</span>
//             <span>{eyeColor}</span>
//           </li>

//         </ul>
//       </div>

//   );
// };
