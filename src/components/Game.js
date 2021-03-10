import React, { Component } from "react";
import GameComponent from './GameComponent';

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
        <button onClick={this.startGame} disabled={this.state.mount}>Start Game</button>
        <button onClick={this.endGame} disabled={!this.state.mount}>End Game</button>
        {this.state.mount ? <GameComponent/> : null}
      </div>
    );
  }
}

export default Game;