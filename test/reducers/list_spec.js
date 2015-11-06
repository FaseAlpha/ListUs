import { expect } from 'chai';

import { Map, List } from 'immutable';

import { getId } from '../../src/utils';
import {  addList, removeList, editList} from '../../src/actions';
import reducer from '../../src/reducers/list.js';

describe('LIST_TEXT', () => {

  it('ADD_LIST', () => {

    const initialState = [];
    const nextState = reducer( initialState, addList('James'));
    expect((nextState).length).to.eql( [{
      id:1,
      title: 'James'
    }].length);
  });

  it('REMOVE_LIST', () => {
    const id = getId();
    const initialState = [ { id:1, title: 'James' }, { id, title: 'Benzema' }];
    const nextState = reducer( initialState, removeList(id));

    expect(nextState).to.eql([ { id:1, title: 'James' } ]);
  });

  it('EDIT_LIST', () => {
    const id = getId();
    const initialState = [ { id:1, title: 'James' }, { id, title: 'Benzema' }];
    const nextState = reducer( initialState, editList(id, 'Keylor'));

    expect(nextState).to.eql([ { id:1, title: 'James' }, { id, title: 'Keylor' }])
  });
});

