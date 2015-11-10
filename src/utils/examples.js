

export const lists = [
  {id:0, title: 'Taller', date: '01/11/2015'},
  {id:1, title:'Piscina', date: '05/11/2015'},
  {id:2, title:'Trabajo', date: '10/11/2015'} 
];
export const photo = 'femwarr.jpg';

/*export const tasks = {
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
};*/

export const tasks = {
	0: [
  		{idTask: 0, title:'Obra'},
  		{idTask: 1, title:'Horario'}
  ],
  1: [
      {idTask: 0, title:'Precio'},
      {idTask: 1, title:'Horario'}
  ],
  2: [
      {idTask: 0, title:'Fecha'},
      {idTask: 1, title:'Tarea'}
  ]
};


export const initialState = {
   lists, tasks
};