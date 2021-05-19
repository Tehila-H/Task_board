import * as ActionTypes from '../actionTypes';
import axios from 'axios';

export const getAllTasks=(id)=>{
    console.log("getAllTask");
    return (dispach) => {
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then(response => {console.log(response.data);
            dispach(saveAllTasks(response.data));
        })
        .catch(err=>{
            {console.log(err);}
        })}
}

export const saveAllTasks=(tasks)=>{
    console.log("save all tasks");
    
    console.log(tasks);
    return{
        type: ActionTypes.SAVE_ALL_TASKS,
        payload: tasks
    }
}
export const deleteTask=(id)=>{
    console.log("del from action");
    return{
        type:ActionTypes.TASK_DELETED,
        payload:id
    }
}
export const addTask=(task)=>{
    return{
        type:ActionTypes.TASK_ADD,
        payload:task
    }
}
export const updateTask=(id)=>{
    return{
        type:ActionTypes.TASK_UPDATE,
        payload:id
    }
}