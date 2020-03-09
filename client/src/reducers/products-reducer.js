import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = {products: [], count: 0}, action) { //state = {}
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    default: 
      return state;
  } 
}