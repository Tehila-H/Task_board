import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { getAllTasks, deleteTask, saveAllTasks, updateTask } from '../store/actions';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';
import './TaskList.css';
// import { Button } from 'semantic-ui-react';

const TaskList = (props) => {
    let [listToDo, setListToDo] = useState([]);
    let [show, setShow]=useState(false);
    let [id, setId]=useState(null);

    // props.user.id
    useEffect(() => {
        console.log("useEffect");
        //     props.getAllTasks(props.currentUser&&props.currentUser.id);
        if (props.taskList.length === 0) {
            axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${props.currentUser.id}`)
                .then(response => {
                    console.log(response.data);
                    setListToDo(response.data);
                    props.saveAllTasks(response.data);
                })
                .catch(err => {
                   console.log(err);
                })
        }
    }, []);

    console.log(props.taskList);

    const ok=()=>{
        props.updateTask(id);
        console.log("ok from task list");
        setShow(false);
    }

    return (<div>
<div className="null"></div>
        {  props.taskList.map((item, i) => {
            if (item.completed === false)
                return (

                    <div key={i}><Task task={item} />
                        <div className="div">
                            <input type="button" className="button" value="delete" onClick={() => { props.deleteTask(item.id) }} />
                        {/* </div>
                        <div> */}
                            <input type="button" className="button" value="Done?" onClick={() => { setId(item.id); setShow(true) }} />
                        </div>
                    </div>)
            else return null;
        })}

{/* // <div class="ui buttons">
//   <button class="ui button">Cancel</button>
//   <div class="or"></div>
//   <button class="ui positive button">Save</button>
// </div> */}

        <SweetAlert
        show={show}
      //  title={props.currentUser.userName}
        text="Did you complete the task?"
        onConfirm={ok}
      />
    </div>);
}

const myMapStateToProps = (state) => {
    return {
        taskList: state.task.taskList,
        currentUser: state.user.currentUser
    }
}
export default connect(myMapStateToProps, { getAllTasks, deleteTask, saveAllTasks, updateTask })(TaskList);

