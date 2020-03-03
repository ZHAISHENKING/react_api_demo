import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
// import {BrowserRouter} from 'history'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import MessagePage from './pages/MessagePage'
import MyPage from './pages/MyPage'
import LoginPage from './pages/LoginPage'

function App(){
    return (
        <BrowserRouter>
        <ul>
            <li><Link to='/'>主页</Link></li>
            <li><Link to='/message'>消息</Link></li>
            <li><Link to='/search'>发现</Link></li>
            <li><Link to='/my'>我的</Link></li>
            <li><Link to='/login'>登录</Link></li>
            
        </ul>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/message' component={MessagePage}/>
                <Route path='/search' component={SearchPage}/>
                <Route path='/my' component={MyPage}/>
                <Route path='/login' component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;