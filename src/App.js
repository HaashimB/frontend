import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`http://178.62.43.236/stack/post/`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div className="App">
                { this.state.persons.map(person => <p>{person.tags}</p>)}
            </div>

        );
    }
}


export default App;
