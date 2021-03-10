import React, { Component } from "react";

class GameComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.player1Entered = this.player1Entered.bind(this)
        this.player2Entered = this.player2Entered.bind(this)
        this.getHelp = this.getHelp.bind(this)
        this.calculateWinner = this.calculateWinner.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.state = {
            number: 0,
            mount: true,
            player1: true,
            player2: true,
            helperColor: '#FFFFFF',
            isGenerated: "Generate a number.",
            player1Checker: false,
            player2Checker: false,
            i: 0
        };
        this.inititalState = this.state;
        
    }

    handleClick() {
        const min = 0;
        const max = 99;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        this.setState({
            number: this.state.number + rand,
            mount: !this.state.mount,
            player1: !this.state.player1,
            player2: !this.state.player2,
            isGenerated: "A number has been generated. Now guess it.",
            player1Checker: !this.state.player1,
            player2Checker: !this.state.player1
        });
    }

    player1Entered() {
        if (document.getElementById('player1Input').value > 100) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1."
            });
            return;
        } else if (document.getElementById('player1Input').value < 0){
            return;
        }
        this.setState({
            player1: !this.state.player1,
            player1Checker: !this.state.player1Checker
        }, () => {
            this.calculateWinner();
        });
    }

    player2Entered() {
        if (document.getElementById('player2Input').value > 100) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 2."
            });
            return;
        } else if (document.getElementById('player2Input').value < 0){
            return;
        }
        this.setState({
            player2: !this.state.player2,
            player2Checker: !this.state.player2Checker
        }, () => {
            this.calculateWinner();
        });
    }
    
    getHelp() {
        this.setState({
            helperColor: '#000000'
        })
    }

    resetGame() {
        this.setState(this.inititalState);
    }

    render() {
        return (
            <div>
                <p id="helperParagraph" style={{ color: this.state.helperColor }}>Firstly, generate a number. Then both player guesses which number has been generated. The player who comes the closest wins. (The number generated is always between 0 and 100.</p>
                <button onClick={this.getHelp}>How to play</button>
                <p style={{ color: 'white' }}>Taking up space</p>

                <p>Player 1</p>
                <input type="number" id="player1Input" placeholder="Enter a number" disabled={this.state.player1}></input>
                <button onClick={this.player1Entered} disabled={this.state.player1}>Enter</button>

                <p>Player 2</p>
                <input type="number" id="player2Input" placeholder="Enter a number"disabled={this.state.player2}></input>
                <button onClick={this.player2Entered} disabled={this.state.player2}>Enter</button>

                <p style={{ color: 'white' }}>Taking up space</p>

                <button onClick={this.handleClick}
                disabled={!this.state.mount}
                >Generate Number</button>

                <p style={{ color: 'white' }}>Taking up space</p>
                <p style={{ color: 'white' }}>Taking up space</p>
                <p>{this.state.isGenerated}</p>
                <p style={{ color: 'white' }}>Taking up space</p>
                <button onClick={this.resetGame}>Restart Game</button>

            </div>

        )
    }
    calculateWinner() {
        var player1Input = (document.getElementById('player1Input').value);
        var player2Input = (document.getElementById('player2Input').value);
        var player1EndingNumber = Math.pow((this.state.number - player1Input), 2);
        var player2EndingNumber = Math.pow((this.state.number - player2Input), 2);
        if (this.state.player1Checker === this.state.player2Checker && this.state.player2Checker === true) {
            if (player1EndingNumber < player2EndingNumber) {
                this.setState({
                    isGenerated: "Player 1 won. The number was: " + this.state.number
                });
            } else {
                this.setState({
                    isGenerated: "Player 2 won. The number was: " + this.state.number
                });
            }
        } else {
                return;
        }
    }
}

export default GameComponent;