import React from "react";
import PropType from "prop-types";

class SingleUser extends React.Component{

    render(){
        return (
            <div style={{display:'block', margin:'10px', boxShadow:'0 0 5px red', padding:'10px'}}>
                <p>{this.props.id}</p>
                <h2>{this.props.name}</h2>
                <p>{this.props.age}</p>
            </div>
        )
    }
}

export default SingleUser;

SingleUser.propTypes = {
    id: PropType.number,
    name:PropType.string,
    age:PropType.number
}