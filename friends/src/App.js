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
  const [isloggedin, setIsLoggedin] = useState(false)

useEffect(()=> {

}, [isloggedin])
  return (
    <div className="App">
      <Router>
        <div className="links">
<Link to="/login"> Login</Link>

{isloggedin &&
[<Link to="/add"> Add Friend</Link> , <Link to="/logout"> Logout</Link> ,<Link to="/friendslist">FriendsList</Link> ]}

</div>

<Switch>
  <Route  path="/login"   render={(props) => (
    <Login {...props} login = {isloggedin} setIsLoggedin= {setIsLoggedin}/>
  )} />
  <PrivateRoute  path="/friendslist" component={FriendsList} />
  <PrivateRoute  path="/add" component={AddFriend} />
  <PrivateRoute setIsLoggedin= {setIsLoggedin} path="/logout" component={Logout} />
  <Route  path="/" render={(props) => {
    return <div>Welcome to Our Home Page please log in</div>

  }}/>
</Switch>

</Router>
</div>
  );
}

export default App;
