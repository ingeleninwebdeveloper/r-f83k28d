import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state={
      count:0
    }
  }

  onclick(type){
      this.setState(prevState => {
         return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
      });
  }

  render() {
    return (
      <div>
        <span className="value" id="prueba">{this.state.count}</span>
        <button id="inc" onClick={this.onclick.bind(this, 'add')}>Incrementa</button>
      </div>
    );
  }


}


export default App;
