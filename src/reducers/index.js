export const ADD_ITEM_TO_CAR = "ADD_ITEM_TO_CAR";
export const REMOVE_ITEM_FROM_CAR = "REMOVE_ITEM_FROM_CAR";

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CAR:
            return { ...state, car: { ...state.car, features: [ ...state.car.features, action.payload ] } };
        case REMOVE_ITEM_FROM_CAR:
                return { ...state, car: { ...state.car, features: state.car.features.filter(feature => feature.id !== action.payload) } };
        default: return state;
    }
}