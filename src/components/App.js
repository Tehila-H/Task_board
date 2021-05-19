import './App.css';
import Login from './Login';
import TaskList from './TaskList';
import { Link, Route, Switch } from 'react-router-dom';
import Register from './Register';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import History from './History';
import LogOut from './LogOut';


function App(props) {
  let nav = (<div>
  <header className='navbar'>
  <div className='navbar__title navbar__item'>Hii!, Please login</div>
  <div  className='navbar__item'>
        <Link className="color" to="/login">Login</Link>
    </div>
    <div  className='navbar__item'>
        <Link className="color" to="/register">Register</Link>
    </div>
  </header></div>);
  let Route1 = (<Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>
  );
  
  if(props.currentUser&&props.currentUser.id!==-1) {
    Route1 = (<Switch><Route path="/taskList">
      <TaskList />
    </Route>
      <Route path="/addTask">
        <AddTask />
      </Route>
      <Route path="/taskHistory">
        <History/>
      </Route>
      <Route path="/logOut">
        <LogOut/>
      </Route>
      </Switch>
     );
    nav = (<header className='navbar'>
      <div className='navbar__title navbar__item'>Your Tasks-</div>
      <div  className='navbar__item'>
          <Link className="color" to="/taskList">TaskList</Link>
      </div>
      <div  className='navbar__item'>
          <Link className="color" to="/addTask">AddTask</Link>
      </div>
      <div  className='navbar__item'>
          <Link className="color" to="/taskHistory">TaskHistory</Link>
      </div>
      <div  className='navbar__item'>
          <Link className="color" to="/logOut">LogOut</Link>
      </div>
      </header>);
  }
  // Task History
  return (
    <div className="App">
      <nav>
        {nav}
      </nav>
      {Route1}
    </div>
  );
}

const myMapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}
export default connect(myMapStateToProps)(App);


