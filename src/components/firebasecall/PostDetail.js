import axios from "axios";
import React from "react";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    this.getPostDetails();
  }

  componentDidUpdate() {
    if (this.state.post && this.state.post.id === this.props.id) {
      return;
    }
    this.getPostDetails();
  }

  getPostDetails = () => {
    axios
      .get(
        `https://react-course1-facd6-default-rtdb.firebaseio.com/posts/${this.props.id}.json`
      )
      .then((response) => {
        this.setState({
          post: { ...response.data, id: this.props.id },
        });
      });
  };

  render() {
    return (
      <div>
        <h2 className="text-3xl p-5 text-red-500 ">details post</h2>

        {this.state.post && (
          <div style={{background: 'red', color:'white',padding:'10px',margin:'10px',boxShadow:'0 0 5px green'}}>
            <div style={{ textAlign: "start" }}>Id: {this.state.post.id} </div>
            <div className="text-red" style={{ textAlign: "start" }}>
              Title :{this.state.post.title}{" "}
            </div>
            <p className="text-primary" style={{ textAlign: "start" }}>
              Description : {this.state.post.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetail;
