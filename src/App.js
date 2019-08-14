import React from 'react';
mport { connect } from 'react-redux'
import { addItemToCar, removeItemFromCar } from "./actions/";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeature = id => {
    props.removeItemFromCar(id);
  };

  const buyItem = item => {
    props.addItemToCar(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );

  const mapStateToProps = state => {
    console.log(state);
    return {
      additionalPrice: state.additionalPrice,
      car: state.car,
      store: state.store
    }
  }

  export default connect(mapStateToProps, { addItemToCar, removeItemFromCar })(App);
};

