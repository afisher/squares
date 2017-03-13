import React, { Component } from 'react';


class Configurator extends Component {
    constructor () {
        super();
        this.state = {
            width: 600,
            height: 200,
            indexStep: 20
        };
    }

    // HAHAHA eat shit
    changeState (key, value) { this.setState({[key]: Number(value)}); }

    render () {
        return (
            <div id="configurator">
                <label>
                    width
                    <input type="number"
                           min="0"
                           step="1"
                           value={this.state.width}
                           onChange={(event) =>
                               this.changeState('width', event.target.value)}
                     />
                </label>

                <label>
                    height
                    <input type="number"
                           min="0"
                           step="1"
                           value={this.state.height}
                           onChange={(event) =>
                               this.changeState('height', event.target.value)}
                    />
                </label>

                <label>
                    square size
                    <input type="number"
                           min="0"
                           step="1"
                           value={this.state.indexStep}
                           onChange={(event) =>
                               this.changeState('indexStep', event.target.value)}
                    />
                </label>

                <button onClick={() => this.props.onSubmit(this.state)}>
                    Again!
                </button>
            </div>
        )
    }
}

export default Configurator;
