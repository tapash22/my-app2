import React from "react";

class CallBackRefInput extends React.Component{
    constructor(props){
        super(props);
        this.textInput = null;
        this.inputRef = (el) =>{
            this.textInput = el;
        }
    }

    componentDidMount(){
        // console.log(this.textInput);   
        // this.textInput.focus();
        // this.textInput.value = 'callback function';
    }

    render(){
        return (
            <div>
                <h2>
                    call from callback
                </h2>
                <input type='text' ref={this.props.inputRef} style={{border:'1px solid red'}} />
            </div>
        )
    }
}

export default CallBackRefInput;