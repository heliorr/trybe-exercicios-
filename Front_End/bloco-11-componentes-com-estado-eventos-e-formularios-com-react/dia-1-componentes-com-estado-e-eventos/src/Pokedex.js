import React from 'react';
import './pokedex.css';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    state = {
        numberPokemon: 0,
        filter: ''
    };
    atualizaNumber = () => {
        if(this.state.numberPokemon === this.props.pokemons.length - 1){
            return;
        }
        this.setState((estadoAnterior, _props) => ({
            numberPokemon: estadoAnterior.numberPokemon + 1
          }));
    }
    atualizaType = (event) => {
        this.setState({
            numberPokemon: 0,
            filter: event.target.innerText
        });
    }
    resetType = () => {
        this.setState({
            numberPokemon: 0,
            filter: ''
        });
    }
    render() {
        return (
            <>
            <div className="pokedex">
                {this.props.pokemons.filter((pokemon) => pokemon.type.includes(this.state.filter))
                .reduce((acc, pokemon, index) => {
                    if(index === this.state.numberPokemon){
                        acc.push(<Pokemon key={pokemon.id} pokemon={pokemon} />);
                    }
                    return acc;
                }, [])}
            </div>
            <div>
                <button className="type" onClick={this.resetType}>All</button>
                <button className="type" onClick={this.atualizaType}>Electric</button>
                <button className="type" onClick={this.atualizaType}>Fire</button>
                <button className="type" onClick={this.atualizaType}>Bug</button>
                <button className="type" onClick={this.atualizaType}>Poison</button>
                <button className="type" onClick={this.atualizaType}>Psychic</button>
                <button className="type" onClick={this.atualizaType}>Normal</button>
                <button className="type" onClick={this.atualizaType}>Dragon</button>
            </div>
            <button onClick={this.atualizaNumber}>Proximo Pokemon</button>
            </>
        );
    }
}

export default Pokedex;