import React from "react";
import Cat from "./Cat";
class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    mouseMoveHandler = (event) =>{
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    };

    render(){
        return (
            <div onMouseMove={this.mouseMoveHandler} style={{height:'100vh', width:'100vw', background:'red'}}>
                <h2>mouse move </h2>
                <div>
                    mouse pointer position x is {this.state.x} and y is {this.state.y}
                </div>
                <Cat mouse={this.state} />
            </div>
        )
    }
}

export default MouseTracker;