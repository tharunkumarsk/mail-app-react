import React from "react";
import { requestInboxData } from "../actions/inboxMail.js";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeComposeMail } from "../actions/compose.js";
import profile from "./../img/profile.png";

export class Mail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMail: this.props.mail
    };
    this.handleCompose = this.handleCompose.bind(this);
  }

  handleCompose(e) {
    this.props.storeComposeMail(this.props.inboxData);
  }

  converttime(time) {
    var currentTime = new Date(time)
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    var date = month + "/" + day + "/" + year;
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var time = hours + ":" + minutes + ":" + seconds+ ' ' + ampm;
    var data = {
      date:date,
      time:time
    };

    return data;
  }
  render() {
    let mail_body_id = this.props.mail;
    if (mail_body_id == 0) {
      var mailbody = (
        <div className="emptymail">
          <p>
            <strong></strong>
          </p>
        </div>
      );
    } else {
      var mailbody = (
        <div key={this.props.inboxData.id} className="mailbody">
          <h3>{this.props.inboxData.subject}</h3>
          <hr />
          <div className="profile-from">
            <img src={profile} alt="profile" className="profile" />
            &nbsp;&nbsp;
            <div>
              <strong>
                {" "}
                <span>{this.props.inboxData.from}</span>
              </strong>
              <br />
              <span>
                <strong>
                  {this.converttime(this.props.inboxData.time).date}
                </strong>
              </span>
              &nbsp;
              <span>
                <strong>
                  {this.converttime(this.props.inboxData.time).time}
                </strong>
              </span>
            </div>
          </div>
          <hr />
          To:{" "}
          <strong>
            <span>{this.props.inboxData.to}</span>
          </strong>
          <hr />
          <div>
            <p>
              <i>{this.props.inboxData.body}</i>
            </p>
            <hr />
          </div>
          <NavLink className="composebtn" to="/composemail" onClick={this.handleCompose}>
            <button
              type="submit"
              className={"" + (this.props.folder == "draft" ? "" : " visible")}
            >
              Edit
            </button>
          </NavLink>
        </div>
      );
    }
    return (
      <div>
        {this.props.mail !== 0 && (
          <div>
            <a className="card-link" href="#" onClick={this.handleCompose}>
              &lt;--&nbsp;Reply
            </a>
            <a className="card-link pull-right" href="#">
              --&gt; Forward
            </a>
          </div>
        )}

        <div className="col-lg-4 col-sm-4 col-xs-4 text-alg-center mailbodycontainer">
          <div className="viewMail">{mailbody}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ storeComposeMail }, dispatch);

export default connect(null, mapDispatchToProps)(Mail);
