import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from '../../src/reducers/list.js';
import { addList, removeList } from '../../src/actions';
import { getId } from '../../src/utils';


describe('listReducers', () => {

  it('ADD_LIST', () => {

    const initialState = Map();
    const id = getId();
    
    const nextState = reducer(initialState, addList(id, 'Real Madrid'));

    expect(nextState.size).to.eql(initialState.size+1);

	});

	it('REMOVE_LIST', () => {

		const id = getId();
		const id2 = getId();
		const initialState = Map({
        [id]:Map({
            id,
            title: 'Real Madrid'
          })
    });

		const nextState = reducer(initialState, removeList(id));

		expect(nextState.size).to.eql(Map({}).size);

	});
});