import * as ActionTypes from '../actionTypes';
import axios from 'axios';

export const loginUser=(user)=>{
    return (dispach)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?username=${user.name}&email=${user.mail}`)
            .then(response => {
          // const user=response.data.length===0?null:response.data[0]
          const user1=response.data[0];
          if(response.data.length===0){
                dispach(saveUser({"id":-1}))
         }
         else
                dispach(saveUser(user1))

            }).catch(err =>{
                console.log(err+"tttttttttttttt")
            })
    }
}

export const saveUser=(user)=>{
    console.log("save from action");
    return{
        type: ActionTypes.SAVE_USER,
        payload: user
    }
}
// export const RegisterSend=(user)=>{
//     console.log("save from action");
//     return{
//         type: ActionTypes.Se,
//         payload: user
//     }
// }
export const registerUser=(user)=>{
    
        return{
        type: ActionTypes.REGISTER,
        payload: user
    }
}

export const logOutUser=()=>{
        return{
            type:ActionTypes.LOG_OUT,
        }
}
