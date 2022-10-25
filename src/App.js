import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register';
import HomeHeader from './components/home/HomeHeader';
import { useState, useEffect } from 'react';
import { auth } from './components/config/firebase';
import { onAuthStateChanged } from '@firebase/auth';
import Sidebar from './components/sidebar/Sidebar';
import Sidebar2 from './components/sidebar/Sidebar2';
import Posts from './components/post/Posts';
import Profile from './components/profile/Profile';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser) {
        setUser(authUser)
      } else {
        setUser(false)
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route path='/:username/:uid'>
            <div className='app__prof'>
            <HomeHeader user={user} />
            <Profile user={user} />
            </div>
          </Route>
          <Route exact paqth='/'>
            <HomeHeader user={user} selected />
            <div className='app__page'>
              <Sidebar user={user}  />
              <div className='app__posts'>
                <Posts user={user} />
              </div>
              <Sidebar2 user={user} />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
