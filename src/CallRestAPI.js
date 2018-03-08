import React, { Component } from 'react'
import axios from 'axios';


class CallRestAPI extends Component {
    constructor(props){
        super(props);

    }
    state = {
        persons: []

    };
    componentDidMount() {
        axios.get(`http://178.62.43.236/stack/tags/`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                this.props.callbackFromParent(persons.map(p => p.count));
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>

            </div>);
            // {/*<div>*/}
            //     {/*{ this.state.persons.map((person, index) =>*/}
            //         {/*<p key={index}>{person.name} {person.count}</p>*/}
            //     {/*)}*/}
            // {/*</div>*/}
    }
}

export default CallRestAPI