import {Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    static defaultProps = {
        pokemon: [
            {id: 4, name: "Charmander", type: "Fire", baseXp: 62},
            {id: 7, name: "Squirtle", type: "Water", baseXp: 73},
            {id: 11, name: "Metapod", type: "Bug", baseXp: 25}
        ]
    };

    render(){
        let pokeCards = [];
        this.props.pokemon.map((pokemonStats) => {
            pokeCards.push(
                <li>
                    <Pokecard stats={pokemonStats} />
                </li>
            );
        });
   

        return (
            <div>{pokeCards}</div>
        );
    }
}

export default Pokedex;