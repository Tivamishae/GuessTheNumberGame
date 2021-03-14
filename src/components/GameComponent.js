import React, { Component } from "react";
import '../component_css/Paragraphs.css';
import '../component_css/Input.css';
import Button from './Button.js';
import Input from './Input.js';


class GameComponent extends Component {
    constructor(props) {
        super(props);

        this.generateNumber = this.generateNumber.bind(this);
        this.playersHaveEntered = this.playersHaveEntered.bind(this)
        this.getHelp = this.getHelp.bind(this)
        this.calculateWinner = this.calculateWinner.bind(this)
        this.resetGame = this.resetGame.bind(this)
        this.alertThankYou = this.alertThankYou.bind(this)
        this.state = {
            lockIn: true,
            generate: true,
            number: 0,
            player1: true,
            player2: true,
            isGenerated: "Generate a number.",
            howToPlay_madeByHugo: true,
            helperParagraph: false
        };
        this.inititalState = this.state;
        
    }

    generateNumber() {
        const min = 0;
        const max = 99;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        if (rand === 0) {
            this.setStategenerateNumber();
        }
        this.setState({
            number: this.state.number + rand,
            player1: !this.state.player1,
            player2: !this.state.player2,
            isGenerated: "A number has been generated. Now guess it.",
            generate: !this.state.generate,
            lockIn: !this.state.lockIn
        });
    }
    playersHaveEntered() {
        if ((document.getElementById('player2Input').value > 100 || document.getElementById('player2Input').value < 0) && (document.getElementById('player1Input').value > 100 || document.getElementById('player1Input').value < 0)) {
            this.setState({
                isGenerate: "Please enter a number within 0 and 100 player 1 and player 2"
            });
        } else if ((document.getElementById('player2Input').value > 100 || document.getElementById('player2Input').value < 0) && (document.getElementById('player1Input').value - 0 === 0)) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1 and player 2."
            });
            return;
        } else if ((document.getElementById('player1Input').value > 100 || document.getElementById('player1Input').value < 0) && (document.getElementById('player2Input').value - 0 === 0)) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1 and player 2."
            });
            return;
        } else if (document.getElementById('player2Input').value > 100 || document.getElementById('player2Input').value < 0) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 2."
            });
            return;
        } else if (document.getElementById('player1Input').value > 100 || document.getElementById('player1Input').value < 0) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1."
            });
            return;
        } else if (document.getElementById('player2Input').value - 0 === 0 && document.getElementById('player1Input').value - 0 === 0) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1 and player 2."
            });
            return;
        }  else if (document.getElementById('player2Input').value - 0 === 0) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 2."
            });
            return;
        } else if (document.getElementById('player1Input').value - 0 === 0) {
            this.setState({
                isGenerated: "Please enter a number within 0 and 100 player 1."
            });
            return;
        } else {
            this.setState({
                lockIn: !this.state.lockIn,
                howToPlay_madeByHugo: false,
                helperParagraph: false
            });
            this.calculateWinner();
        }
    }
    
    getHelp() {
        this.setState({
            helperParagraph: !this.state.helperParagraph
        })
    }

    resetGame() {
        this.setState(this.inititalState);
    }

    alertThankYou() {
        alert("Thank you for playing.");
    }

    render() {
        return (
            <div>
                {this.state.helperParagraph ?
                <p id="helperParagraph" style={{ color: this.state.helperColor }}>Firstly, generate a number. Then both player guesses which number has been generated. The player who comes the closest wins. (The number generated is always between 0 and 100.</p>
                : null}

                {this.state.howToPlay_madeByHugo ?
                <Button titleprop="How to play" onclickprop={this.getHelp}></Button>
                : null}

                {!this.state.howToPlay_madeByHugo ?
                <Button titleprop="This was made by Hugo Duran" onclickprop={this.alertThankYou}></Button>
                : null}

                <p className="hiddenParagraph">Taking up space ---------------------------------------------------------------------------------------------------------------------------------------</p>

                {!this.state.player1 ?
                <Input idprop="player1Input" titleprop="Player1"></Input>
                : null}

                {!this.state.player2 ?
                <Input idprop="player2Input" titleprop="Player2"></Input>
                : null}

                {!this.state.lockIn ? 
                <Button titleprop="Lock in answers" onclickprop={this.playersHaveEntered}></Button>
                : null}

                <p className="hiddenParagraph">Taking up space</p>

                
                {this.state.generate ?
                <Button titleprop="Generate Number" onclickprop={this.generateNumber}></Button>
                : null}
                
                <p className="hiddenParagraph">Taking up space</p>
                <p className="hiddenParagraph">Taking up space</p>

                <div className="generateParagraph">
                    <p>{this.state.isGenerated}</p>
                </div>

                <p className="hiddenParagraph">Taking up space</p>

                <Button onclickprop={this.resetGame} titleprop="Restart game"></Button>
            </div>

        )
    }
    calculateWinner() {
        var player1Input = (document.getElementById('player1Input').value);
        var player2Input = (document.getElementById('player2Input').value);
        var player1EndingNumber = Math.pow((this.state.number - player1Input), 2);
        var player2EndingNumber = Math.pow((this.state.number - player2Input), 2);
        if (player1EndingNumber < player2EndingNumber) {
            this.setState({
                isGenerated: "Player 1 won. The number was: " + this.state.number,
                player1: true,
                player2: true
            });
        } else if (player1EndingNumber === player2EndingNumber) {
                this.setState({
                    isGenerated: "Both choose the same number, its a tie. The number was: " + this.state.number,
                    player1: true,
                    player2: true
                });
        } else {
            this.setState({
                isGenerated: "Player 2 won. The number was: " + this.state.number,
                player1: true,
                player2: true
            });
        }
    }
}


export default GameComponent;