import {Component} from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

class Pokegame extends Component{
    static defaultProps = {
        decks: [
            [
                {id: 4, name: "Charmander", type: "Fire", baseXp: 62},
                {id: 7, name: "Squirtle", type: "Water", baseXp: 73},
                {id: 11, name: "Metapod", type: "Bug", baseXp: 25}
            ],
            [
                {id: 18, name: "Pigeota", type: "Wind", baseXp: 29},
                {id: 29, name: "Raquaza", type: "Rat", baseXp: 12},
                {id: 2, name: "Venasaur", type: "Leaf", baseXp: 55}
            ]
        ]
    };

    calcDeckExperiences(){
        let deckXps = this.props.decks.map((deck) => {
            let deckXp = deck.reduce((prevCard, currCard) => {
                return {
                    baseXp: prevCard.baseXp + currCard.baseXp
                }
            })

            return deckXp;
        });

        return deckXps;
    }

    getTopDeck(deckXps){
        if(deckXps[0].baseXp > deckXps[1].baseXp){
            return 0;
        }else if(deckXps[0].baseXp < deckXps[1].baseXp){
            return 1;
        }else{
            //equal!?
            return -1;
        }
    }

    render(){
        let pokeDex = [];
        const deckXps = this.calcDeckExperiences();
        const topDeck = this.getTopDeck(deckXps);

        this.props.decks.forEach((deck, i) => {
            pokeDex.push(
                <li key={deck[0].id.toString()}>
                    <Pokedex cards = {deck} totXp = {deckXps[i]} winner={i === topDeck}/>
                </li>
            );
        });

        return (
            <section id="poke-game"><ul>{pokeDex}</ul></section>
        );
    }
}

export default Pokegame;