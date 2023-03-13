import React from "react";
import RefTextInput from "./RefTextInput";

class ParentInputText extends React.Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.componentRef.current.focusInput('calling from parents'));
    }

    render(){
        return(
            <div>
                <h2>parent input text</h2>
                <RefTextInput ref={this.componentRef} />
            </div>
        )
    }
}

export default ParentInputText;