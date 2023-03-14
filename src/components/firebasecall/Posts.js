import axios from "axios";
import React from "react";
import Post from "./Post";
import PostDetail from "./PostDetail";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    axios
      .get(`https://react-course1-facd6-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        const posts = [];
        for (let key in response.data) {
          posts.push({ ...response.data[key], id: key });
        }

        this.setState({
          posts: posts,
        });
      });
  }

  postClickHandlar = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          post={post}
          postClick={this.postClickHandlar.bind(this, post.id)}
        />
      );
    });

    return (
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "70%" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "500", padding: "10px" }}>
            Post list
          </h2>
          <div style={{ display: "flex" }}>{posts}</div>
        </div>
        {this.state.selectedPostId && (
          <div style={{ width: "30%" }}>
            <PostDetail id={this.state.selectedPostId} />
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
