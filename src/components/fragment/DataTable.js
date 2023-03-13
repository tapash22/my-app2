import React from "react";

function DataTable(props) {
  return (
    <React.Fragment>
      <td style={{ background:'white',color:'black',padding:'10px',fontSize:'20px',boxShadow:'0 0 5px red'}}>{props.post.name}</td>
      <td style={{ background:'white',color:'black',padding:'10px',fontSize:'20px',boxShadow:'0 0 5px red'}} >{props.post.age}</td>
    </React.Fragment>
  );
}
export default DataTable;
