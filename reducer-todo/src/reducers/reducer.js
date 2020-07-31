export const initialList = {
     todo: [
       {
         what: 'Learn about reducers',
         id: 1,
         finished: false
       },
       {
        what: 'Take a nap',
        id: 3,
        finished: false
      },
      {
        what: 'Wake up',
        id: 4,
        finished: false
      },
      {
        what: 'Take another nap',
        id: 5,
        finished: false
      }
     ]
   }

   export const reducer = (state, action) => {

     switch (action.type) {
       case 'ADD_TASK':
         return {
           ...state,
           todo: [...state.todo,
           {
             what: action.payload,
             id: Date.now(),
             finished: false
           }
           ]
         }
       case 'CLEAR_ALL':
         return {
           ...state,
           todo: state.todo.filter(item => !item.finished)
         }
       case 'TOGGLE_IT':  // is each case basically a function 
         return {
           ...state,  // what does the spread operator specifically do? It returns copy of whole object?
           todo: state.todo.map(item => {
             if (action.payload === item.id) {   // how does the payload correelate to the id
               return {
                 ...item,
                 finished: !item.finished 
               }
             }
             return {
               ...item 
             }
           })

         }
       default:
         return state;
     }

   };