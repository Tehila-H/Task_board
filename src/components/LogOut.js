import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import {logOutUser} from '../store/actions';
import './Form.css';
const LogOut = (props) => {
    // useEffect=()=>{

    // }
    
    let history=useHistory();

    const ok=()=>{
        props.logOutUser();
        history.push("./login");
    }

    const cancal=()=>{
        history.push("./taskList");
    }


    return ( <div className="form">
        <h1>Are you sure you want to exit the site?</h1>
        <div>
            <input type="button" className="btn" value="OK" onClick={ok}/>
            <input type="button" className="btn" value="cancal" onClick={cancal}/>
        </div>
    </div> );
}
 
export default connect(null, {logOutUser})(LogOut);