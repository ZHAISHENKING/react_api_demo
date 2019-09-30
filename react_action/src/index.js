import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import store from './redux/store'

function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()
console.log(store)
// 状态监听重绘
store.subscribe(render)