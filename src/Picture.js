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
             error
        } = this.props,
        {context} = this,
        color = this.props.color.slice(0);

        if (!context || error) {
            return;
        }

        var z = color[index];

        for (var y = 0; y < height; y += indexStep) {
            for (var x = 0; x < width; x += indexStep) {

                if (random(0, 2) === 1) {
                    color[0] += random(-1 * colorStep, colorStep);
                }
                if (random(0, 2) === 1) {
                    color[1] += random(-1 * colorStep, colorStep);
                }
                if (random(0, 2) === 1) {
                    color[2] += random(-1 * colorStep, colorStep);
                }

                z += random(-1 * colorStep, colorStep);
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
