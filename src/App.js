import React, { Component } from 'react';


class App extends Component {
    constructor () {
        super();
        this.state = {
                width: 200,
                height: 200,
                indexStep: 20,
                colorStep: 15,
                index: this.random(0, 2),
                color: this.makeColors()
        };
        this.onClick = () => { this.changeColors() };
        this.ref = (canvas) => {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        };
    }
    makeColors () {
        return [
            this.random(0, 255), // red
            this.random(0, 255), // green
            this.random(0, 255), // blue
        ];
    }
    changeColors () {
        this.setState({color: this.makeColors()});
    }
    random (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    drawCanvas () {
        const {
             width,
             height,
             indexStep,
             colorStep,
             index,
             color
         } = this.state,
         {random, context} = this;

         if (!context) {
             return;
         }

         var drawPixel = function (x, y, z) {
             if (x >= width) {
                 y = y + indexStep;
                 x = 0;
             }
             if (y >= height) {
                 return;
             }

             var newZ = z + random(-1 * colorStep, colorStep);
             drawPixel(x + indexStep, y, newZ);

             color[index] = newZ;
             context.beginPath();
             context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
             context.fillRect(x, y, indexStep, indexStep);
         };

         drawPixel(0, 0, this.random(0, 255));

    }
    render () {
        window.requestAnimationFrame(() => this.drawCanvas());
        return (
            <div className="App">
                <canvas id="photo"
                        width="200"
                        height="200"
                        ref={this.ref}>
                </canvas>
                <button onClick={this.onClick}>
                    Again!
                </button>
            </div>
        );
    }
}

export default App;
