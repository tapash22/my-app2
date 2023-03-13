import React from "react";
class ForwardingRefButton extends React.Component{
    // constructor(props){
    //     super(props);
    //     // console.log(props);
    // }

    render(){
        return (
            <div>
                <button style={{background:'red', borderRadius:'5px',color:'white', fontSize:'20px',padding:'5px'}} ref={this.props.buttonRef}>
                    click me
                </button>
                
            </div>
        )
    }
}

export default React.forwardRef((props,ref)=>{
    return <ForwardingRefButton buttonRef={ref}{...props} />
})