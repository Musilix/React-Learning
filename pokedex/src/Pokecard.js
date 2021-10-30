import { Component } from 'react';

class Pokecard extends Component{

    render(){
        return (
            <div>
                <img alt="preview of a pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.stats.id}.png`}></img>
                <h3>{this.props.stats.name}</h3>
                <h4>{this.props.stats.type}</h4>
                <p>{this.props.stats.baseXp} experience pts</p>
            </div>
        );
    }
}

export default Pokecard;