import './Task.css';

const Task = (props) => {

    return ( <div className="main">
        <h3>{props.task.id}</h3>
        <h3>{props.task.title}</h3>
        <h3>{props.task.completed}</h3>
        {/* <div>
        <input type="button" checked={props.task.completed} onChange={()=>console.log("hhh")}/>
        </div> */}
    </div> );
}
 
export default Task;