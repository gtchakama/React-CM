import React from "react";
import { Link } from "react-router-dom";

class View extends React.Component {
  render() {
    const contact = this.props.location.state.contact;
    return (
      <div className="App-header ">
        <div>
          <h1 className="Home-h2">View Contact</h1>
          <h2>Name : {contact.name}</h2>
          <h2>Email : {contact.email}</h2>

          <h2>Phone : {contact.phone}</h2>

          <Link
            to={{
              pathname: "/edit",
              state: {
                contact,
              },
            }}
          >
            <button>Edit</button>
          </Link>
          <br />
          <br />
          <button onClick={this.props.history.goBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default View;
