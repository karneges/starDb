import React from 'react';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helper/with-data';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const { getAllPeople,
    getAllStarships,
    getAllPlanets } = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({name,model}) => <span>{`${name} and (${model})`}</span>;


const PersonList = withData(
    withChildFunction(ItemList, renderName)
    , getAllPeople);

const PlanetList = withData(
    withChildFunction(ItemList, renderName)
    , getAllPlanets);

const StarshipList = withData(
    withChildFunction(ItemList, renderNameAndModel)
    , getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
};