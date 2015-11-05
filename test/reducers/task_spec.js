import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from '../../src/reducers/task.js';
import { addTask, removeTask, editTask } from '../../src/actions';
import { task } from '../../src/utils/examples.js';
import { getId } from '../../src/utils';

describe('reducer', () => {

  it('ADD_TASK ', () => {

    const initialState = Map();
    const id = getId();
    const idList = 0;
    const nextState = reducer(initialState, addTask(idList, 'Real Madrid'));

    expect(Object.keys(nextState).length).to.eql(Object.keys(Map({
        [id]:Map({
            id,
            idList,
            title: 'Real Madrid'
          })
      })).length);
  });

  it('REMOVE_TASK', () => {
    const id = getId();
    const idList = 0;
    const initialState = Map({
        [id]:Map({
            id,
            idList,
            title: 'Real Madrid'
          }),
          2:Map({
              id:2,
              idList,
              title: 'ATM'
            })
      });
    const nextState = reducer(initialState, removeTask(id));

    expect(nextState).to.eql(Map({
      2:Map({
          id:2,
          idList,
          title: 'ATM'
        })
    }));
  });

  it('EDIT_TASK', () => {
    const id = getId();
    const idList = 0;
    const initialState = Map({
        [id]:Map({
            id,
            idList,
            title: 'Real Madrid'
          }),
          2:Map({
              id:2,
              idList,
              title: 'ATM'
            })
      });
    const nextState = reducer(initialState, editTask(id, 'x'));

    expect(nextState).to.eql(Map({
        [id]:Map({
            id,
            idList,
            title: 'x'
          }),
          2:Map({
              id:2,
              idList,
              title: 'ATM'
            })
      }));
  })



});
