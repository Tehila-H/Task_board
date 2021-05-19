
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions';
import './Form.css';
const Register = (props) => {

    // useEffect(() => {
    //     props.currentUser = null;
    //     console.log(props.currentUser + "from regis");
    // });

    let[dialog, setDialog] = useState(false);
    let [userName, setUserName] = useState();
    let [city, setCity] = useState();
    let [adress, setAdress] = useState();
    let [mail, setMail] = useState();
    let [phone, setPhone] = useState();
    let [lng, setLng] = useState();
    let [lat, setLat] = useState();

    let user = {
        "id": props.userList.length + 8,
        "username": userName,
        "email": mail,
        "city": city,
        "adress": adress,
        "phone": phone
    }

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeCity = (e) => {
        setCity(e.target.value);
    }

    const changeAdress = (e) => {
        setAdress(e.target.value);
    }

    const changeMail = (e) => {
        setMail(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value);
    }

    const changeLng = (e) => {
        setLng(e.target.value);
    }

    const changeLat = (e) => {
        setLat(e.target.value);
    }

    const registUser = () => {
        console.log(user);
        if(userName!==null && city!==null && adress!==null && mail!==null && phone!==null &&
             userName!=="" && city!=="" && adress!=="" && mail!=="" && phone!=="")
            props.registerUser(user);
        else
            alert("The form is invalid");
    }

    // const tryW=()=>{
    //     console.log(user);
    //     props.registerUser(user);
    //     setDialog(true);
    // }
    // if(dialog){

    // }
    return (<div className="form">
        <form>
            <div>
                <input type="text" placeholder="username" onKeyUp={changeUserName} />
                {userName===null || userName===""  && <div className="err">*Invalid userName</div>} 
            </div>
            <div>
                <input type="text" placeholder="city" onKeyUp={changeCity} />
                {city===null || city===""  && <div className="err">*Invalid city</div>} 
            </div>
            <div>
                <input type="text" placeholder="adress" onKeyUp={changeAdress} />
                {adress===null || adress===""  && <div className="err">*Invalid adress</div>} 
            </div>
            <div>
                <input type="text" placeholder="mail" onKeyUp={changeMail} />
                {mail===null || mail===""  && <div className="err">*Invalid mail</div>} 
            </div>
            <div>
                <input type="text" placeholder="phone" onKeyUp={changePhone} />
                {phone===null || phone===""  && <div className="err">*Invalid phone</div>} 
            </div>
            <div>
                <input type="text" placeholder="Longitude point" onKeyUp={changeLng} />
            </div>
            <div>
                <input type="text" placeholder="Latitude" onKeyUp={changeLat} />
            </div>
            {/* <div>
                <input type="button" value="קבלת מיקום אוטומטי" onClick={tryW}/>
            </div> */}
            <div>
                <input type="button" className="btn" value="Save" placeholder="register" onClick={registUser} />
            </div>
        </form>
    </div>);
}

const myMapDispachToProps = (state) => {
    return {
        userList: state.user.userList,
        currentUser: state.user.currentUser
    }
}

export default connect(myMapDispachToProps, { registerUser })(Register);