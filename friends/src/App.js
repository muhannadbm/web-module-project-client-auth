import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute';
import FriendsList from './Components/FriendsList';
import Logout from './Components/Logout';
import AddFriend from './Components/AddFriend';
import { useEffect, useState } from 'react';

function App() {
  const [isloggedin, setIsLoggedin] = useState(true)
useEffect(()=> {

}, [isloggedin])
  return (
    <div className="App">
      <Router>
<Link to="/login"> Login</Link>

{localStorage.getItem('token') && 
<div><Link to="/add"> Add Friend</Link> <Link to="/logout"> Logout</Link> <Link to="/friendslist">FriendsList</Link></div>}

        

<Switch>
  <Route  path="/login" component={Login} />
  <PrivateRoute  path="/friendslist" component={FriendsList} />
  <PrivateRoute  path="/add" component={AddFriend} />
  <PrivateRoute  path="/logout" component={Logout} />
  <Route  path="/"/>
</Switch>

</Router>
</div>
  );
}

export default App;
