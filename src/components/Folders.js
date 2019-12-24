import React from "react";
import ComposeMail from "../components/ComposeMail.js";
import { NavLink } from "react-router-dom";
import MailList from "../components/MailList.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeComposeMail } from "../actions/compose.js";
import { requestApiData, receiveApiData } from "../actions/inbox.js";

export class Folders extends React.Component {
  componentWillMount() {
    debugger;
    this.props.requestApiData();
    this.props.receiveApiData();
  }
  handleCompose() {}

  render() {
    return (
      <div className="folders vl">
        <NavLink className="composebtn outer" to="/composemail">
          <button className="btn composebtn">Compose</button>
        </NavLink>
        <div className="list-group">
          <br />
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/inbox"
          >
            Inbox
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/sent"
          >
            Sent Mail
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active"
            to="/draft"
          >
            Draft
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { storeComposeMail, requestApiData, receiveApiData },
    dispatch
  );
debugger;

export default connect(null, mapDispatchToProps, null, { pure: false })(
  Folders
);
