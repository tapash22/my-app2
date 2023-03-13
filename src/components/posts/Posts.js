import React from "react";
import SinglePost from "./SinglePost";

class Posts extends React.Component {
  // this is only use for  for this class state
  state = {
    posts: [
      {
        id:1,
        title: "post 1",
        des: "post 1 description",
      },
      {
        id:2,
        title: "post 2",
        des: "post 2 description",
      },
      {
        id:3,
        title: "post 3",
        des: "post 3 description",
      },
    ],
    postTitle: "post list",
    showPost: true,
  };

  //   use as attribute

  togglePost = () => {
    this.setState({
      showPost: !this.state.showPost,
    });
  };

  //change title from child component

  changePostTItle = (id,e)=>{
    let postIndex = this.state.posts.findIndex(post => post.id === id);
    let posts = [...this.state.posts];

    posts[postIndex].title = e.target.value;

    this.setState({
      posts,
    })
  }

  //onClick use as a function

  updateHandlerTitle(title, e) {
    e.preventDefault();
    console.log("call updatehandler title");
    console.log(this);
    this.setState({
      postTitle: title,
    });
  }

  //hide and show using as a methods
  getPosts() {
    if (!this.state.showPost) return null;

    let posts = this.state.posts.map((post, index) => {
      return (
        <SinglePost
          title={post.title}
          des={post.des}
          changeTitle= {this.changePostTItle.bind(this, post.id)} // pass method using props
          key={post.id}
        />
      );
    });
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin:'10px'
        }}

        //use map for multiple post to show
      >
        {posts}
      </div>
    );
  }

  //onClick use as class attribute

  //   titleHandler = (title,e) => {
  //     e.preventDefault();

  //     console.log("call this handler");
  //     this.setState({
  //       postTitle: title,
  //     });
  //   };

  render() {
    //use setTImeout for update date after spacific time

    // setTimeout(() => {
    //   console.log("execute this method");

    //   let posts = [...this.state.posts];

    //   posts[0].title = "new post 1";
    //   posts[1].title = "new post 2";
    //   // this is use for update this state with this method
    //   this.setState({
    //     posts,
    //   });
    // }, 3000);

    // let post = (

    // );

    return (
      <div>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "black",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          {this.state.postTitle}
        </h2>

        <button
          onClick={this.togglePost}
          style={{
            background: "red",
            color: "white",
            fontSize: "14px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {this.state.showPost ? "hide post" : "show post"}
        </button>
        {/* <button
          onClick={this.updateHandlerTitle.bind(this, 'update post title')}
          style={{
            background: "red",
            color: "white",
            fontSize: "14px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Update 
        </button> */}

        {/* {this.state.showPost ? post : null}   for ternarry operation use */}
        {this.getPosts()}

        {/* {
          this.state.showPost && post //and operatin use
        } */}
      </div>
    );
  }
}

export default Posts;
