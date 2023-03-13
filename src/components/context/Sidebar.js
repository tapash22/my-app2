import React from "react";
import ButtonContext from "./ButtonContext";
import Navigation from "./Navigation";

class Sidebar extends React.Component{

    render(){
        return(
            <div>
                <ButtonContext.Provider value='data show from sideber'>
                <Navigation />
                </ButtonContext.Provider>
                
            </div>
        )
    }
}

export default Sidebar;