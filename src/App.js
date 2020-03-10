import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import PrivateRoute from "./Route/PrivateRoute";
import LoginPage from './pages/LoginPage'
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/'>
          <ul>
            <li><Link to='/'>主页</Link></li>
            <li><Link to='/message'>消息</Link></li>
            <li><Link to='/search'>发现</Link></li>
            <li><Link to='/my'>我的</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/message' component={MessagePage}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/my' component={MyPage}/>
          </Switch>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default App;