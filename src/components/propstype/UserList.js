import React from "react";
import SingleUser from "./SingleUser";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "tapash",
          age: 30,
        },
        {
          id: 2,
          name: "tapash2",
          age: 29,
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", width:'100%', height:'100%' }}>
        <div
          style={{
            boxShadow: "0 0 5px red",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "10px",
          }}
        >
          {this.state.users.map((user) => {
            return (
              <SingleUser
                key={user.id}
                name={user.name}
                id={user.id}
                age={user.age}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserList;
