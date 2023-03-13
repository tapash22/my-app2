import React from 'react';

class SinglePost extends React.Component{

    render(){
        return(
            <div style={{ background:'white', display:'block', padding:'10px', margin:'10px', boxShadow:'0 0 5px red'}}>
                <div style={{ fontSize:'20px', fontWeight:'500', textAlign:'center' , color:'black' , textTransform:'uppercase'}}>{this.props.title}</div>
                <div style={{ fontSize:'15px', fontWeight:'300', textAlign:'center' , color:'black'}}>{this.props.des}</div>

                <div>
                    <input type="text" value={this.props.title} onChange={this.props.changeTitle}  style={{ border:'1px solid red'}} />
                </div>
            </div>
        )
    }

}

export default  SinglePost;