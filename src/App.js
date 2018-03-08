import React, { Component } from 'react'
import './App.css'
import Bubble from './Bubble'
import CallRestAPI from './CallRestAPI'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            countData:null
        }
    }
    callBack = (callData) =>{
        this.setState({countData:callData});
    };

    componentWillMount(){
        console.log("Before Component mounted = " + JSON.stringify(this.state.countData))
    }

    componentDidMount(){
        console.log("After component mounted = " + JSON.stringify(this.state.countData))
    }

    render() {
        console.log("During rendering = " + JSON.stringify(this.state.countData));
        if(this.state.countData !== null){
            return (
                <div className='App'>

                    <div>
                        <CallRestAPI callbackFromParent={this.callBack}/>
                        <Bubble  data = {this.state.countData.map(p => parseInt(p))} size={[500,500]}/>
                    </div>
                </div>
            )
        }else{
            return(
                <CallRestAPI callbackFromParent={this.callBack}/>
            )
        }

    }

}

export default App;
