import { expect } from 'chai';
import commentReduce from '../../src/reducers/comment';
import {addComment, removeComments } from '../../src/actions';
import { comments } from '../../src/utils/examples';

describe('COMENT_TEST', () => {

  it('ADD_COMMENT EMPTY', () => {

    const initialState = {};
    const newState = commentReduce(initialState, addComment(1, 'pepe', '12/7/2016', 'fwoiehgfew'));

    expect(newState).to.eql( { 1:[{idList: 1, user: 'pepe', date: '12/7/2016', msg: 'fwoiehgfew'} ] } );
  });
});
