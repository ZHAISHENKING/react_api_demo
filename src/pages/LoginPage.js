import React, {Component} from 'react';
import {connect} from "dva";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  submit = () => {
    const {username, password} = this.state;
    if (username === 'admin' && password === 'admin') {
      this.props.login()
      this.props.history.push('/')
    }
  }

  render() {
    let {username, password} = this.state;
    return (
      <div>
        <h1>登录</h1>
        <form>
          账号
          <input type="text" value={username} onChange={e => {
            this.setState({username: e.target.value})
          }}/>
          密码
          <input type="password" value={password} onChange={e => {
            this.setState({password: e.target.value})
          }}/>
          <div onClick={this.submit}>提交</div>
        </form>
      </div>
    )
  }
}

export default connect(
  ({user}) => ({isLogin: user.isLogin}),
  {login: () => ({type: 'user/success'})}
)(LoginPage)
