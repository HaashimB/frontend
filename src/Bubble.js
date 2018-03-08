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

    createBubble() {
        const node = this.node;
        const dataMax = max(this.props.data);
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]]);
        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .enter()
            .append('circle');

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .exit()
            .remove();

        select(node)
            .selectAll('circle')
            .data(this.props.data)
            .style('fill', '#3bf6fe')
            .style('stroke', 'black')
            .attr('cx', (d,i) => i * 20 + 100)
            .attr('cy', d => this.props.size[1] - yScale(d) + 100)
            .attr('r', d => yScale(d)/100)
    }
    render() {
        return <svg ref={node => this.node = node}
                    width={1920} height={580}>
        </svg>
    }
}
export default Bubble