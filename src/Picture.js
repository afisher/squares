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

         var drawPixel = function (x, y, z) {
             if (x >= width) {
                 y += indexStep;
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

         drawPixel(0, 0, random(0, 255));
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
