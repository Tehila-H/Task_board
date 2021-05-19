import { connect } from 'react-redux';
import { addTask } from '../store/actions';
import { useHistory } from "react-router-dom";
import './AddTask.css';
import './Form.css';
import { useState } from 'react';
import SweetAlert from 'sweetalert2-react';

const AddTask = (props) => {

    const history = useHistory();
    let [show, setShow] = useState(false);
    let [flag, setFlag] = useState(1);


    const [newTask, setNewTask] = useState({
        id: props.taskList.length + 1,
        userId: props.currentUser.div,
        "title": null,
        completed: false
    });

    // const flag=false;

    // const addT = () => {
    //     setShow(true);
    // }

    // const ok=()=>{
    //     props.addTask(newTask); 
    //     console.log("Ok from add");
    //     setShow(false);
    //     history.push("./tasklist");
    // }




    const addT=()=>{
        alert("Are you sure you want to add the task?");
        props.addTask(newTask); 
        console.log("Ok from add");
        setShow(false);
        history.push("./tasklist");
    }

    const changeTitle = (e) => {
        const task = { ...newTask };
        task.title = e.target.value;
        setNewTask(task);
        console.log("changes from add");
    }

    const cancal = () => {
        history.push("./taskList")
    }
    // className="body"
    return (<div className="form">
        <h2>Type your task here...</h2>
        <div>
            <input type="text" placeholder="Yuor Task" onKeyUp={changeTitle} />
        </div>
        <div>
            <input type="button" className="btn" value="add" onClick={addT} />
        </div>
        <div>
            <input type="button" className="btn" value="cancal" onClick={cancal} />
        </div>

        {/* {flag} */}

        <SweetAlert
            show={show}
            title="Hii!"
            text="Are you sure you want to add the task?"
            // onConfirm={() => {
            //     if(flag===1)
            //     props.addTask(newTask);
            //     console.log("Ok from add");
            //     setShow(false);
            //     setFlag(0);
            //     console.log(flag);
            //     history.push("./tasklist");
            // }}
        />
        {/* onConfirm={() => setShow( false )} */}


    </div>);
}
const myMapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        taskList: state.task.taskList
    }
}
export default connect(myMapStateToProps, { addTask })(AddTask);