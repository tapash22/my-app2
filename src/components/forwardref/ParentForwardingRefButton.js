import React from "react";
import ForwardingRefButton from "./ForwardingRefButton";

class ParentForwardingRefButton extends React.Component{
    constructor(props){
        super(props);
        this.buttonRef = React.createRef();
    }
    componentDidMount(){
        this.buttonRef.current.innerHTML = 'forward to parrent'
    }

    render(){
        return (
            <div>
                <ForwardingRefButton ref={this.buttonRef} />
            </div>
        )
    }
}

export default ParentForwardingRefButton;