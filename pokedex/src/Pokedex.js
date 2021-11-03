import {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    totalExperience = 0;
    deckStatus = (this.props.winner) ? "WINNER" : "LOSER";

    getStatusStyles(){
        if(this.deckStatus === "WINNER"){
            return {
                color: "green"
            }
        }else if(this.deckStatus === "LOSER"){
            return {
                color: "red"
            }
        }
    }

    render(){
        let pokeCards = [];
        let pokeDeckReadout = [];
        const statusMessageStyles = this.getStatusStyles();

        // line up cards for pokedex
        this.props.cards.forEach((pokemonStats) => {
            pokeCards.push(
                <li key={pokemonStats.id.toString()}>
                    <Pokecard stats={pokemonStats} />
                </li>
            );
        });

        //lay out pokedex + total xp + winning/losing status into 1 element
        pokeDeckReadout.push(
            <>
                <h1>{`Total Experience: ${this.props.totXp.baseXp}`}</h1>
                <h2 style={statusMessageStyles}>{this.deckStatus}</h2>
                <ul className="poke-dex">{pokeCards}</ul>
            </>
        )
   
        //return pokedeck readout
        return (
            <>
                {pokeDeckReadout}
            </>
        );
    }
}

export default Pokedex;