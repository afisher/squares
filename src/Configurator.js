import React, { Component } from 'react';


class Configurator extends Component {
    constructor () {
        super();
        this.state = {
            width: 200,
            height: 200,
        };
    }

    // HAHAHA eat shit
    changeState (key, value) { this.setState({[key]: value}); }

    render () {
        return (
            <div id="configurator">
                <label>
                    width
                    <input type="number"
                           min="0"
                           step="1"
                           onChange={(event) =>
                               this.changeState('width', event.target.value)}
                     />
                </label>

                <label>
                    height
                    <input type="number"
                           min="0"
                           step="1"
                           onChange={(event) =>
                               this.changeState('height', event.target.value)}
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
