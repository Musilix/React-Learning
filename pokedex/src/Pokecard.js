import { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    // call this for "fancier" images
    padId(id){
        const hundreds = Math.floor(id / 100);
        const tens = Math.floor((id - (100 * hundreds)) / 10);
        const ones = Math.floor((id - (10 * tens + 100 * hundreds)) / 1);

        let placeValues = [hundreds, tens, ones];

        let paddedId = placeValues.map((placeVal) => {
            return placeVal > 0 ? placeVal.toString() : '0';
        });

        return paddedId.join("");
    }

    render(){
        const cleanerPokePix = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        return (
            <div className="poke-card">
                {/* <img alt="preview of a pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.stats.id}.png`}></img> */}
                <img alt="preview of a pokemon" src={`${cleanerPokePix + this.padId(this.props.stats.id)}.png`}></img>
                <img className="chibi" alt="preview of a chibi pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.stats.id}.png`}></img>
                <h3>{this.props.stats.name}</h3>
                <h4>{this.props.stats.type}</h4>
                <p>{this.props.stats.baseXp} experience pts</p>
            </div>
        );
    }
}

export default Pokecard;