import React, { Component } from 'react';
import random from './random';


class Picture extends Component {
    constructor () {
        super();
        this.ref = (canvas) => {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        };
    }

    drawCanvas () {
        const {
             width,
             height,
             indexStep,
             colorStep,
             index,
             color
        } = this.props,
        {context} = this;

        if (!context) {
            return;
        }

        var z = random(0, 255);
        for (var y = 0; y < height; y += indexStep) {
            for (var x = 0; x < width; x += indexStep) {
                z = z + random(-1 * colorStep, colorStep);
                color[index] = z;
                context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                context.fillRect(x, y, indexStep, indexStep);
            }
         }
    }

    render () {
        window.requestAnimationFrame(() => this.drawCanvas());

        const {width, height} = this.props;

        return (
            <canvas id="photo"
                    width={width}
                    height={height}
                    ref={this.ref}>
            </canvas>
        );
    }
}

export default Picture;
