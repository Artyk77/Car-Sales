import React, { useEffect, useState } from 'react';

import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  const [unusedParts, setUnusedParts] = useState(props.store);

    useEffect(_ => {
        let newArr = [];

        props.store.forEach(part => {
            let found = false;

            props.car.features.forEach(feature => {
                if(part.id === feature.id) found = true;
            })

            if(!found) newArr.push(part);
        })

        setUnusedParts(newArr);
    }, [props.car]);

    return (
        <div className="content">
            <h4>Additional Features</h4>
            {unusedParts.length ? (
                <ol type="1">
                    {unusedParts.map(item => (
                        <AdditionalFeature key={item.id} feature={item} buyItem = {props.buyItem} />
                    ))}
                </ol>
            ) : (
                    <p>Nice looking car!</p>
                )}
        </div>
    );
  
};

const mapStateToProps = state => {
  return {
      store: state.store,
      car: state.car
  }
}

export default connect(mapStateToProps, {  })(AdditionalFeatures);