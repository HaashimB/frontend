import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class Bubble extends Component {
    constructor(props){
        super(props);
        this.createBubble = this.createBubble.bind(this)
    }
    componentDidMount() {
        this.createBubble()
    }
    componentDidUpdate() {
        this.createBubble()
    }
    randomNumGen(num, axis, info, firstAccess){
        let locX, locY = [];
        if(firstAccess === true){
            locX = Math.floor(Math.random() * num);
            locY = Math.floor(Math.random() * num);
            if(axis === 'x'){
                console.log('locX: ' + locX + ' Sent with ' + info);
                return locX;
            } else if(axis === 'y'){
                console.log('locY: ' + locY + ' Sent with ' + info);
                return locY;
            }
        }else{
            if(axis === 'x'){
                console.log('locX: ' + locX + ' Sent with ' + info);
                return locX;
            } else if(axis === 'y'){
                console.log('locY: ' + locY + ' Sent with ' + info);
                return locY;
            }
        }
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let  color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    createBubble() {
        const node = this.node;
        const dataMax = max(this.props.data);
        const text = this.props.text;
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]]);
        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .enter()
            .append('circle')
            .append('text');

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .exit()
            .remove();

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .style('fill',() => this.getRandomColor())
            .attr('cx', () => this.randomNumGen(1300,'x', 'circle x axis', true) + 50)
            .attr('cy', () => this.randomNumGen(700,'y', 'circle y axis', true) + 50)
            .attr('r', (d) => yScale(d)/10)
            .on('mouseover', () => select('circle').style('fill', 'orange'))
            .on('mouseout', () => select('circle').style('fill', this.getRandomColor()));

        select(node)
            .selectAll('text')
            .data(this.props.data)
            .text('yoooo')
            .attr('text-anchor','middle')
            .attr('x', () => this.randomNumGen(1300, 'x', 'Text x axis', false) + 50)
            .attr('y', () => this.randomNumGen(700,'y', 'Text y axis', false) + 50);
    }

    render() {
        return <svg ref={node => this.node = node}
                    width={1520} height={800}>
        </svg>
    }
}
export default Bubble