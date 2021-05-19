import { loginUser } from '../store/actions';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import './Form.css';

const Login = (props) => {
    const [userName, setUserName] = useState(null);
    const [mail, setMail] = useState(null);

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeMail = (e) => {
        setMail(e.target.value);
    }
    const history=useHistory();
    useEffect(()=>{

        console.log("useEffect",props.currentUser);
       
    },[props.currentUser])
 if(props.currentUser&&props.currentUser.id===-1){

        history.push("/register");
        }
        return (<div className="form">
            <div>
                <input type="text" placeholder="userName" onKeyUp={changeUserName} />
                {userName===null || userName===""  && <div className="err">*Invalid userName</div>} 
            </div>
            <div>
                <input type="text" placeholder="mail" onKeyUp={changeMail} />
                {mail===null || mail===""  && <div className="err">*Invalid email</div>} ‏
            </div>
            <div>
                <input type="button" value="login" className="btn" onClick={() => {
                    if(userName!==null && mail!==null && userName!=="" && mail!=="")
                        props.loginUser({ name: userName, mail: mail })
                    else
                        alert("The form is invalid");
                }} />
            </div>
        </div>);
}


const mapDispachToprops = (state) => {
    return {
        currentUser: state.user.currentUser,
        haveRegister:state.user.haveRegister
    }
}
export default connect(mapDispachToprops, { loginUser })(Login);

// ;if(currentUser===undefined)