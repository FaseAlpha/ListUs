import { getId } from './index';

export const list = [
  {
    id: getId(),
    title: 'Spanish Political Parties'
  },
  {
    id: getId(),
    title: 'Programming Languages'
  }
];

export const task = {
	0: {
    id: '0',
		idList: list[1].id,
		title: 'Java'
	},
  1: {
    id: '1',
    idList: list[1].id,
    title: 'JavaScript'
  },
  2: {
    id: '2',
    idList: list[1].id,
    title: 'PHP'
  },
  3: {
    id: '3',
    idList: list[1].id,
    title: 'C#'
  },
  4: {
    id: '4',
    idList: list[1].id,
    title: 'Python'
  },
  5: {
    id: '5',
    idList: list[1].id,
    title: 'Ruby'
  },
  6: {
    id: '6',
    idList: list[1].id,
    title: 'Haskell'
  },
  7: {
    id: '7',
    idList: list[0].id,
    title: 'PP'
  },
  8: {
    id: '8',
    idList: list[0].id,
    title: 'C\'s'
  },
  9: {
    id: '9',
    idList: list[0].id,
    title: 'Podemos.'
  },
  10: {
    id: '10',
    idList: list[0].id,
    title: 'PSOE'
  }
};


export const initialState =  { list, task };
