import React, { Component } from "react";
import GameComponent from './GameComponent';
import '../component_css/Button.css';
import Button from './Button';

class Game extends Component {
constructor (props) {
  super(props)

  this.state = {
    mount: false
  }

  this.startGame = () => this.setState({mount: true})
  this.endGame = () => this.setState({mount: false})
}

  render () {
    return (
      <div className="App">
        {!this.state.mount ?
        <Button onclickprop={this.startGame} titleprop="Start Game"></Button>
        : null}
        {this.state.mount ?
        <Button onclickprop={this.endGame} titleprop="End Game"></Button>
        : null}
        {this.state.mount ? <GameComponent/> : null}
      </div>
    );
  }
}

export default Game;