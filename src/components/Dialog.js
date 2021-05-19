import {Link,Redirect,Router} from 'react-router-dom';
const Dialog = () => {
    const enter=()=>{
        // <Redirect to={{pathname:"./taskList"}}/>

    }
    return ( <div>
        <h1>נרשמת בהצלחה</h1>
        <input type="button" value="אישור" onClick={enter}/>

     
    </div> );
}
 
export default Dialog;