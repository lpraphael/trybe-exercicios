import React from 'react';
import './App.css';


class App extends React.Component {
  constructor () {
    super ()

    this.handleClick1 = this.handleClick1.bind(this)
    this.state = {
      numeroDeCliques1: 0
    }

  }
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 +1
    }))
    console.log('clicou no botão 1!')
  }
    
    render() {
    console.log(this);
    return (
      <div className="App">
        <button onClick={this.handleClick1} >você me clicou {this.state.numeroDeCliques1} vezes!</button>
      </div>
    );
  }
}

export default App;
