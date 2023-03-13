import React from "react";

class RefTextInput extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = (value) =>{
        this.inputRef.current.focus();
        this.inputRef.current.value = value;
    }

    render(){
        return(
            <div>
                <h2>Ref text input</h2>
                <div>
                    <input type='text' ref={this.inputRef} style={{border:'1px solid red',padding:'10px',}} />
                </div>
                <div>
                    <button onClick={this.focusInput.bind(this,'calling from children')} style={{padding:'10px',background:'red',color:'white'}}>Focus input</button>
                </div>
            </div>
        )
    }
}

export default RefTextInput;