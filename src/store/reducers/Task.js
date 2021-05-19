import * as ActionTypes from '../actionTypes';

const initialState = {

    taskList: []

    // {
    //     "userId": 1,
    //     "id": 5,
    //     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    //     "completed": false
    //   },
    //   {
    //     "userId": 1,
    //     "id": 6,
    //     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    //     "completed": false
    //   }
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_ALL_TASKS:
            console.log(action.payload);

            return {
                ...state,
                taskList: action.payload
            }
        case ActionTypes.TASK_DELETED:
            const tasks = state.taskList.filter(p => p.id !== action.payload);
            return {
                ...state,
                taskList: tasks
            }
        case ActionTypes.TASK_ADD:

            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }
        case ActionTypes.TASK_UPDATE:
            let arr=state.taskList.map((item)=>{if (item.id === action.payload) {
                // This isn't the item we care about - keep it as-is
                item={...item,completed:true};
              
              }
               return item;});
          
              // Otherwise, this is the one we want - return an updated value
             
          
            return {
                ...state,
                taskList:arr
            }
        default: return state;
    }

    // return state;

}