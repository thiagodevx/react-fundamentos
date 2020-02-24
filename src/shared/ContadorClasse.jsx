import React, { Component } from 'react';

export default class ContadorClasse extends Component {

    state = {value: 0}
    incrementar = () => {
        this.setState({value: this.state.value + 1})
    }

    render(){
        return (
        <button onClick={this.incrementar}>
            {this.state.value}
        </button>
        )
    }
}