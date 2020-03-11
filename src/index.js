import React from 'react';
import App from './App';
import dva from 'dva'

const app = dva();

app.model({
  namespace: 'user',
  state: {
    isLogin: false
  },
  reducers: {
    success(){
      return {isLogin: true}
    },
  }
})

app.router(() => (<App />))
app.start('#root')