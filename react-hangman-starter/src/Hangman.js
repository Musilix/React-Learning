import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";

class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6],
    };

    constructor(props) {
        super(props);
        this.state = {
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord(),
            lost: false,
            won: false
        };
        this.handleGuess = this.handleGuess.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
    guessedWord() {
        return this.state.answer
            .split("")
            .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
    handleGuess(evt) {
        let ltr = evt.target.value;

        this.setState((prevState) => {
            let baseReturn = {
                guessed: prevState.guessed.add(ltr),
                nWrong: prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1),
            };

            // This may be overkill...
            // if (prevState.nWrong + (prevState.answer.includes(ltr) ? 0 : 1) === this.props.maxWrong) {
            //     // add all letters from the current word to the guessed array which gets used to render the current word in UI during the render() calls
            //     [...prevState.answer].forEach((ltr) => {
            //         prevState.guessed.add(ltr);
            //     });

            //     // re-use base return obj and override guessed val with newly edited guessed set from above
            //     return {
            //         ...baseReturn,
            //         guessed: prevState.guessed,
            //         lost: true,
            //     };
            // }

            return baseReturn;
        });
    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }

    restartGame() {
      this.setState({
        nWrong: 0,
        guessed: new Set(),
        answer: randomWord(),
        lost: false,
        won: false
      });
    }

    /** render: render game */
    render() {
      const gameOver = this.state.nWrong >= this.state.maxWrong;

      return (
        <div className="Hangman">
            <h1>Hangman</h1>
            <img
                alt={
                    this.state.nWrong > 0
                        ? `Hangman with ${this.state.nWrong} limbs`
                        : "Hangman setting with no man"
                }
                src={this.props.images[this.state.nWrong]}
            />
            <p className="Hangman-word-wrg-gses">{`Wrong Guesses: ${this.state.nWrong}`}</p>

            <p className="Hangman-word">{(!gameOver) ? this.guessedWord() : this.state.answer}</p>
            <p className="Hangman-btns" disabled={this.state.lost}>
                {(!gameOver) ? this.generateButtons() : "Aw damn... You really just lost. Better luck next time!"}
            </p>

            <div className="Hangman-restart-wrap">
                <button
                    className="Hangman-restart-btn"
                    onClick={this.restartGame}
                >
                    RESTART
                </button>
            </div>
        </div>
    );
  }
}

export default Hangman;
