import { getId } from './index';

export const lists = [
  {
    id: getId(),
    title: 'Spanish Political Parties'
  },
  {
    id: getId(),
    title: 'Programming Languages'
  }
];

export const tasks = {
	0: {
    id: '0',
		idList: lists[1].id,
		title: 'Java'
	},
  1: {
    id: '1',
    idlists: lists[1].id,
    title: 'JavaScript'
  },
  2: {
    id: '2',
    idList: lists[1].id,
    title: 'PHP'
  },
  3: {
    id: '3',
    idList: lists[1].id,
    title: 'C#'
  },
  4: {
    id: '4',
    idList: lists[1].id,
    title: 'Python'
  },
  5: {
    id: '5',
    idList: lists[1].id,
    title: 'Ruby'
  },
  6: {
    id: '6',
    idList: lists[1].id,
    title: 'Haskell'
  },
  7: {
    id: '7',
    idList: lists[0].id,
    title: 'PP'
  },
  8: {
    id: '8',
    idList: lists[0].id,
    title: 'C\'s'
  },
  9: {
    id: '9',
    idList: lists[0].id,
    title: 'Podemos.'
  },
  10: {
    id: '10',
    idList: lists[0].id,
    title: 'PSOE'
  }
};

export const aside = {display: false};

export const calendar = {display: true};

export const initialState =  { lists, tasks, aside, calendar };
