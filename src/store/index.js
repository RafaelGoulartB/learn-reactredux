import { createStore } from 'redux';

const INITAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
        id: 1,
        title: 'Modulo 1',
        lessons: [
          {id: 1, title: 'Primeira aula'},
          {id: 2, title: 'Segunda aula'},
        ]
      },
      {
        id: 1,
        title: 'Modulo 2',
        lessons: [
          {id: 2, title: 'Terceira aula'},
          {id: 3, title: 'Quarta aula'},
        ]
      },
    ]
}

function reducer(state = INITAL_STATE, action) {
  if(action.type === 'TOGGLE_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    }
  }
  
  return state;
  
}


const store = createStore(reducer);

export default store;