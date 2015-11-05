import {fromJS} from 'immutable';
import { getId } from './index.js';
import { Map, List } from 'immutable';

export const list = [
  {
    id: getId(),
    title: 'Real Madrid'
  },
  {
    id: getId(),
    title: 'Barcelona'
  }
];

const id = getId();
const id2 = getId();
const idList = 0;

export const taskInitialState = Map({
  [id]:Map({
    id,
    idList,
    title: 'Real Madrid'
  }),
  [id2]:Map({
    id: id2,
    idList,
    title: 'ATM'
  })
});



export const task = {
  0: {
    id: '0',
		listId: list[0].id,
		title: 'Benzema'
	},
  1: {
    id: '1',
    listId: list[0].id,
    title: 'James'
  },
  2: {
    id: '2',
    listId: list[0].id,
    title: 'Cristiano'
  },
  3: {
    id: '3',
    listId: list[1].id,
    title: 'Messi'
  },
  4: {
    id: '4',
    listId: list[1].id,
    title: 'Suarez'
  },
  5: {
    id: '5',
    listId: list[1].id,
    title: 'Neymar'
  }
};

export const initialState = {
  list, task
};
