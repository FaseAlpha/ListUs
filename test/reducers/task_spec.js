import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from '../../src/reducers/task.js';
import { addTask, removeTask, editTask } from '../../src/actions';
import { task } from '../../src/utils/examples.js';
import { getId } from '../../src/utils';

describe('reducer', () => {

  it('ADD_TASK ', () => {

    const id = getId();
    const idList = 0;
    const nextState = reducer({}, addTask(idList, 'Real Madrid'));

    expect(Object.keys(nextState).length).to.eql(Object.keys({
      [id]:{
        id,
        idList,
        'title': 'Real Madrid'
      }
    }).length);
  });

  it('REMOVE_TASK', () => {
    const id = getId();
    const idList = 0;
    const initialState = {
          [id]:{
            id,
            idList,
            title: 'Real Madrid'
          },
          2:{
              id:2,
              idList,
              title: 'ATM'
            }
      };
    const nextState = reducer(initialState, removeTask(id));

    expect(nextState).to.eql({
      2:{
          id:2,
          idList,
          title: 'ATM'
        }
    });

  });

  it('EDIT_TASK', () => {
    const id = getId();
    const idList = 0;
    const initialState = {
        [id]:{
            id,
            idList,
            title: 'Real Madrid'
          }
      };
    const nextState = reducer(initialState, editTask(id, 'x'));

    expect(nextState).to.eql({
        [id]:{
            id,
            idList,
            title: 'x'
          }
      });
  });



});
