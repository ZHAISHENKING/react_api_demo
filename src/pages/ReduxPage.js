import React, {Component} from 'react';
import store from '../store';

class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    add = ()=>{
        store.dispatch({type:"ADD"})
    };
    minus=()=>{
        store.dispatch({type: "MINUS"})
    };
    asyAdd=()=>{
        store.dispatch(dispatch=>{
            setTimeout(()=>{
                dispatch({type:"ADD"})
            },1000)
        })
    }
    render() {
        return (
            <div>
              <h3>ReduxPage</h3>
              {/* getState获取数据 */}
              <p>{store.getState()}</p>
              <button onClick={this.add}>add</button>
              <button onClick={this.minus}>minus</button>
              <button onClick={this.asyAdd}>asyAdd</button>
            </div>
          );
    }
}

export default ReduxPage;