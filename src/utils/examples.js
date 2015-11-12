import { getId } from './index.js';

export const list = [
  {
    id: getId(),
    title: 'Real Madrid',
    undoTasks: 10
  },
  {
    id: getId(),
    title: 'Barcelona',
    undoTasks: 0
  }
];

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

export const comments = {
  1: [ 
    { idList:1, user:'pepe', date:'12/7/2015', msg:'eeeeee'},
    { idList:1, user:'juan', date:'12/7/2015', msg:'wwww'}
  ],
  2: [ 
    { idList:2, user:'pepe', date:'13/7/2015', msg:'goewjpe'}, 
    { idList:2, user:'juan', date:'13/7/2015', msg:'trtrt'}
  ]
};

export const friends = [
  {
    id: 1,
    nombre: 'Pepe',
    grupos: ['IES ZAYAS']
  },
  {
    id: 2,
    nombre: 'Pepa',
    grupos: ['IES ZAYAS']
  },
  {
    id: 3,
    nombre: 'Juan',
    grupos: ['Boxeo', 'IES ZAYAS']
  }

];

export const initialState = {
  list, task, comments, friends
};



