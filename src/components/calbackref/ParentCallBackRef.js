import React from "react";
import CallBackRefInput from "./CallBackRefInput";

class ParentCallBackRef extends React.Component{
    constructor(props){
        super(props);
        this.textInput = null;
    }

    componentDidMount(){
        this.textInput.focus();
        this.textInput.value = 'call fom parent '

    }

    render(){
        return(
            <div>
                <CallBackRefInput  inputRef={(el) =>{
            this.textInput = el}}/>
            </div>
        )
    }
}

export default ParentCallBackRef;