import React, { Component } from "react";

class FormHandlingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      Address: "",
      Email: "",
      mobile: "",
      IsAccepted: false,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheck = (e) => {
    this.setState({ IsAccepted: this.state.IsAccepted === false });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("User First name :", this.state.Fname);
    console.log("User Last name :", this.state.Lname);
    console.log("User Address :", this.state.Address);
    console.log("User Email :", this.state.Email);
    console.log("User mobile :", this.state.mobile);
    console.log("IsAccepted", this.state.IsAccepted);
  };
  render() {
    return (
      <div>
        <h1>User Form With Class Component </h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <table>
            <tr>
              <td>First Name</td>
              <td>
                <input
                  type="text"
                  name="Fname"
                  value={this.state.Fname}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="First Name"
                />
                {this.state.Fname}
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <input
                  type="text"
                  name="Lname"
                  value={this.state.Lname}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Last Name"
                />
                {this.state.Lname}
              </td>
            </tr>
            <tr>
              <td>Address </td>
              <td>
                <input
                  type="text"
                  name="Address"
                  value={this.state.Address}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Address"
                />
                {this.state.Address}
              </td>
            </tr>
            <tr>
              <td>Email Id</td>
              <td>
                <input
                  type="text"
                  name="Email"
                  value={this.state.Email}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Email"
                />
                {this.state.Email}
              </td>
            </tr>
            <tr>
              <td>Mobile No.</td>
              <td>
                <input
                  type="text"
                  name="mobile"
                  value={this.state.mobile}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Mobile No."
                />
                {this.state.mobile}
              </td>
            </tr>
            <tr>
              <td>Read and Accept the term and condition</td>
              <td>
                <input
                  type="checkbox"
                  checked={this.state.IsAccepted}
                  onChange={(e) => {
                    this.handleCheck(e);
                  }}
                />
              </td>
            </tr>
          </table>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default FormHandlingClass;
