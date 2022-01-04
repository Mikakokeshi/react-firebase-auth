// import logo from './logo.svg';
// import './App.css';

import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/app.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserRoute from './components/UserRoute';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { setUser } from './redux/action'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) =>{
      if(authUser) {
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <UserRoute exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/Register" component={Register}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
