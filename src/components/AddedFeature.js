import React from 'react';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      
      <button className="button" onClick = {_ => props.removeFeature(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};
export default AddedFeature;
