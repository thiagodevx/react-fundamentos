import React from 'react';

export default class ContadorClasse extends React.Component {
    constructor() {
        super()
        this.state = {value:0}
    }
    render(){
        return <button onClick={()=>this.setState({value: this.state.value+1})}>{this.state.value}</button>
    }
}