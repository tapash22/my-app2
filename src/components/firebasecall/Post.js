 function Post (props){

    return (
        <a href="#" onClick={props.postClick} style={{background: 'red', color:'white',padding:'10px',margin:'10px',boxShadow:'0 0 5px green'}}>

            <div style={{ textAlign:'start'}}>Id: {props.post.id} </div>
            <div style={{ textAlign:'start'}}>Title : {props.post.title}</div>
            <div style={{ textAlign:'start'}}>Description : {props.post.description}</div>
        
        </a>
    )

 }

 export default Post;