import React from 'react';
/*
  App Component
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const users = [];
    for (let i=1; i<10; i++) {
      users.push({
        id: i,
        username: 'John ' + i,
        job: 'Employee ' + i,
      });
    }
    this.state = {
      users: users,
    };
  }
  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => {
            return(
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                  <a href={'/user-edit/' + user.id}>
                    Edit
                  </a>
                </td>
                <td>
                  <button data-id={user.id}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
