import { expect } from 'chai';
import friendReduce from '../../src/reducers/friend';
import { addFriend, removeFriend } from '../../src/actions';
import { friends } from '../../src/utils/examples';

describe('FRIEND_TEST', () => {

  it('ADD_FRIEND', () => {

    const initialState = [];
    const newState = friendReduce(initialState, addFriend('pepe'));

    expect(newState.length).to.eql([{id:1, name:'pepe'}].length);
  });

  it('REMOVE_FRIENDS', () => {

    const initialState = friends;
    const newState = friendReduce(initialState, removeFriend(1));

    expect(newState).to.eql(
      [{
        id: 2,
        nombre: 'Pepa',
        grupos: ['IES ZAYAS']
      },
      {
        id: 3,
        nombre: 'Juan',
        grupos: ['Boxeo', 'IES ZAYAS']
      }]
    );
  });
});
