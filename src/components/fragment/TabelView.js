import React from "react";
import DataTable from "./DataTable";

class TabelView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts:[
                {
                    id:1,
                    name:'tapash',
                    age:20
                },
                {
                    id:2,
                    name:'tapash',
                    age:20
                },
                {
                    id:3,
                    name:'tapash',
                    age:20
                },
            ]
        }
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th style={{ background:'white',color:'black',padding:'10px',fontSize:'20px',boxShadow:'0 0 5px red'}}>
                                name
                            </th>
                            <th style={{ background:'white',color:'black',padding:'10px',fontSize:'20px',boxShadow:'0 0 5px red'}}>
                                age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((post)=> {
                                return (
                                    <tr key={post.id}>
                                        <DataTable post={post}/>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TabelView;