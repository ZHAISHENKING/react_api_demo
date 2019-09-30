import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  increment = ()=> {
    // 1.得到选择增加数量
    const number = this.select.value*1
    this.props.increment(number)
  }

  deinc = ()=> {
    // 1.得到选择增加数量
    const number = this.select.value*1
    this.props.decrement(number)
  }

  odd = () => {
    const number = this.select.value*1
    // 2.得到原本
    const {count} = this.props
    if (count % 2 === 0){
      this.props.increment(number)
    }
  }
  async = () => {
    const number = this.select.value*1
    setTimeout(()=>{this.props.increment(number)}, 1000)
  }

  render () {
    const {count} = this.props
    return (
      <div>
        <p>click {count} times</p>
        <select ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.deinc}>-</button>&nbsp;
        <button onClick={this.odd}>偶数加</button>&nbsp;
        <button onClick={this.async}>模拟异步</button>&nbsp;
      </div>
    )
}
}

export default Counter;
