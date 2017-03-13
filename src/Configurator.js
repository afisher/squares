import React, { Component } from 'react';


class Configurator extends Component {
    constructor () {
        super();
        this.state = {
            width: 600,
            height: 200,
            indexStep: 20,
            colorStep: 15
        };
    }

    // HAHAHA eat shit
    changeState (key, value) { this.setState({[key]: Number(value)}); }

    render () {
        return (
            <div id="configurator">
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
                <label>
                    color variation
                    <input type="number"
                           min="0"
                           step="1"
                           value={this.state.colorStep}
                           onChange={(event) =>
                               this.changeState('colorStep', event.target.value)}
                    />
                </label>

                <button onClick={() => this.props.onSubmit(this.state)}>
                    Again!
                </button>
            </div>
            </div>
        )
    }
}

export default Configurator;
