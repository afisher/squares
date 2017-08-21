import React, { Component } from 'react';
import Picture from './Picture';
import Configurator from './Configurator';
import random from './random';


class App extends Component {
    constructor () {
        super();
        this.state = {
                width: 600,
                height: 200,
                indexStep: 20,
                colorStep: 15,
                index: random(0, 2),
                color: this.makeColors(),
                firstColor: null,
                error: false
        };
    }

    generate (configState) {
        this.setState({error: configState.error});

        if (!configState.error) {
            // setState is async, WOW
            this.setState(configState, () => this.changeColors());
        }
    }

    makeColors () {
        if (this.state && this.state.firstColor) {
            return this.state.firstColor;
        }
        return [
            random(0, 255), // red
            random(0, 255), // green
            random(0, 255), // blue
        ];
    }

    changeColors () {
        this.setState({color: this.makeColors()});
    }

    render () {
        const {
             width,
             height,
             indexStep,
             colorStep,
             index,
             color,
             error
         } = this.state;
         let message = error ? 'Color must be a valid hex code or blank' : null;
         return (
            <div className="App sans-serif f4 b moon-gray">
                <Configurator onSubmit={(s) => this.generate(s)}/>
                <div className="error">
                    {message}
                </div>

                <Picture width={width}
                         height={height}
                         indexStep={indexStep}
                         colorStep={colorStep}
                         index={index}
                         color={color}
                         error={error}
                />
            </div>
        );
    }
}

export default App;
