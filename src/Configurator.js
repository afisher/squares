import React, { Component } from 'react';


class Configurator extends Component {
    constructor () {
        super();
        this.state = {
            width: 600,
            height: 200,
            indexStep: 20,
            colorStep: 15,
            firstColor: null,
            error: false
        };
    }

    // HAHAHA eat shit
    changeState (key, value) { this.setState({[key]: value}); }

    changeColor (value) {
        var error = !/^#?[a-fA-F\d]{6}/.test(value) && value;
        this.setState({error: error});

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
        var color = result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;

        this.changeState('firstColor', color);
    }

    render () {
        return (
            <div id="configurator" className="mw6">
            <div className="pa3 mv2">
                <div className="fl w-40">
                    width
                </div>
                <div className="fl w-30">
                    <input className="code fl w-100 tr bg-near-black near-white b--white-30 ba pv1"
                            type="number"
                            min="0"
                            step="1"
                            value={this.state.width}
                            onChange={(event) =>
                                this.changeState('width', Number(event.target.value))}
                        />
                </div>
            </div>
            <div className="pa3 mv3">
                <div className="fl w-40">
                    height
                </div>
                <div className="fl w-30">
                    <input className="code fl w-100 tr bg-near-black near-white b--white-30 ba pv1"
                           type="number"
                           min="0"
                           step="1"
                           value={this.state.height}
                           onChange={(event) =>
                               this.changeState('height', Number(event.target.value))}
                    />
                </div>
            </div>
            <div className="pa3 mv3">
                <div className="fl w-40">
                    square size
                </div>
                <div className="fl w-30">
                    <input className="code fl w-100 tr bg-near-black near-white b--white-30 ba pv1"
                           type="number"
                           min="0"
                           step="1"
                           value={this.state.indexStep}
                           onChange={(event) =>
                               this.changeState('indexStep', Number(event.target.value))}
                    />
                </div>
            </div>
            <div className="pa3 mv3">
                <div className="fl w-40">
                    start color
                </div>
                <div className="fl w-30">
                    <input className="code pr3 fl w-100 tr bg-near-black near-white b--white-30 ba pv1"
                           type="text"
                           value={this.state.colorStart}
                           onChange={(event) =>
                               this.changeColor(event.target.value)}
                    />
                </div>
            </div>
            <div className="pa3 mv3">
                <div className="fl w-40">
                    variation
                </div>
                <div className="fl w-30">
                    <input className="code fl w-100 tr bg-near-black near-white b--white-30 ba pv1"
                           type="number"
                           min="0"
                           step="1"
                           value={this.state.colorStep}
                           onChange={(event) =>
                               this.changeState('colorStep', Number(event.target.value))}
                    />
                </div>
            </div>
            <div className="pa3 mt4 ma2 tr w-70">
                <button className="w-100 bn bg-green white br2 ttu b pv2 ph3" onClick={() => this.props.onSubmit(this.state)}>
                    Again!
                </button>
            </div>
            </div>
        )
    }
}

export default Configurator;
