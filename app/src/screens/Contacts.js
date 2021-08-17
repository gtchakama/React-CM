import React from "react";
import { Link, Redirect } from "react-router-dom";

class Contacts extends React.Component {
  state = {
    redirectTo: "",
    contactToBeViewed: {},
    search: "",
  };

  contactClicked = (contact) => {
    this.setState({
      redirectTo: "/view",
      contactToBeViewed: contact,
    });
  };

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectTo,
            state: {
              contact: this.state.contactToBeViewed,
            },
          }}
          push
        />
      );
    }

    console.log(this.props);

    let contactsToShow = [];

    if (this.state.search) {
      contactsToShow = this.props.contacts.filter((contact) => {
        if (
          contact.name.includes(this.state.search) ||
          contact.email.includes(this.state.search) ||
          contact.phone.includes(this.state.search)
        ) {
          return true;
        }
        return false;
      });
    } else {
      contactsToShow = this.props.contacts;
    }

    return (
      <div className="App-header ">
        <div>
          <h2 className="Home-h2">Contacts</h2>

          <input
            className="search"
            value={this.state.search}
            placeholder="search contacts"
            onChange={(e) => this.setState({ search: e.target.value })}
          />

          <table className="GeneratedTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone </th>
              </tr>
            </thead>
            {contactsToShow.map((contact) => (
              <tbody>
                <tr
                  key={contact.id}
                  onClick={() => this.contactClicked(contact)}
                >
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              </tbody>
            ))}
          </table>

          <Link to="/add">
            <button>New Contact</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Contacts;
