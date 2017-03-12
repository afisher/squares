import React, { Component } from 'react';
import Picture from './Picture';
import Configurator from './Configurator';
import random from './random';


class App extends Component {
    constructor () {
        super();
        this.state = {
                width: 200,
                height: 200,
                indexStep: 20,
                colorStep: 15,
                index: random(0, 2),
                color: this.makeColors()
        };
    }

    generate (configState) {
        this.setState(configState);
        this.changeColors();
    }

    makeColors () {
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
             color
         } = this.state;
         return (
            <div className="App">
                <Configurator onSubmit={(s) => this.generate(s)}/>

                <Picture width={width}
                         height={height}
                         indexStep={indexStep}
                         colorStep={colorStep}
                         index={index}
                         color={color}
                />
            </div>
        );
    }
}

export default App;
