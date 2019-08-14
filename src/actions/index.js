import { ADD_ITEM_TO_CAR, REMOVE_ITEM_FROM_CAR } from "../reducers/"

export const addItemToCar = item => {
    return { type: ADD_ITEM_TO_CAR, payload: item }
}

export const removeItemFromCar = id => {
    return { type: REMOVE_ITEM_FROM_CAR, payload: id };
}