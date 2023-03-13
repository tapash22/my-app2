import React from "react";
import WithCategory from "./WithCategory";

class Category extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                {
                    this.props.categorys.map((category)=>{
                        return  <div>{category}</div>
                    })
                }
            </div>
        )
    }
}

export default WithCategory(3)(Category);