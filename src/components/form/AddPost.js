import React from "react";

class AddPost extends React.Component {
  state = {
    title: "",
    description: "",
  };

// 


  submitHandlerPost = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }



  onChangeHandler(title, e){
    this.setState({
        [title] : e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "500" }}>add post</h2>
        <form onSubmit={this.submitHandlerPost}>
          <div style={{ display: "block", margin: "10px" }}>

            <input
              type="text"
              value={this.state.title}
              onChange={this.onChangeHandler.bind(this,'title')}
              style={{
                border: "1px solid red",
                borderRadius: "10px",
                padding: "10px",
              }}
            />
          </div>
          <div style={{ display: "block", margin: "10px" }}>
          

            <textarea
              type="text"
              value={this.state.description}
              onChange={this.onChangeHandler.bind(this,'description')}
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                padding: "10px",
              }}
            ></textarea>
          </div>
          <div style={{ margin: "10px" }}>
            <button
              type="submit "
              style={{
                background: "red",
                color: "white",
                padding: "10px",
                textTransform: "uppercase",
              }}
            >
              add post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
