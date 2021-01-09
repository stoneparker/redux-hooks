import { createStore } from 'redux';

const INITIAL_STATE = {
   data: [
      'React Native',
      'ReactJS',
      'Node.js',
   ],
}

function coursesReducer(state = INITIAL_STATE, action) {
   switch(action.type) {
      case 'ADD_COURSE':
         return { ...state, data: [...state.data, action.title] };
      default: 
         return state;
   }
}

const store = createStore(coursesReducer);

export default store;