function Button (props){

    return (
        <div>
            <button style={{color:'white', background:'red',padding:'10px',width:'100px'}}>{props.name} </button>
        </div>
    )

}

export default Button;