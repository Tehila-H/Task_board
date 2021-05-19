import { connect } from "react-redux";
import Task from './Task';

const History = (props) => {
    return (<div>
        <div>History</div>

        {  props.taskList.map((item, i) => {
            if (item.completed === true)
                return (
                    <div key={i}><Task task={item} />
                    </div>)
            else return null;
        })}
    </div>);
}

const myMapStateToProps = (state) => {
    return {
        taskList: state.task.taskList
    }
}
export default connect(myMapStateToProps)(History);