import { createStore } from 'redux';
import reducer from '../reducers';
import { initialState } from '../utils/'



export default function configureStore(initialState = {}){
  return createStore(reducer, initialState);
}
