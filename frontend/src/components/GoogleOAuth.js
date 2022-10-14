import React, { Component } from "react";
import { G_OAUTH_CLIENT_ID } from "../KEYS";
import jwt_decode from "jwt-decode";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleOAuth extends Component {

  componentDidMount() {
    // GoogleAPI JS present in windows scope, but need to load oAuth too.

    window.google.accounts.id.initialize({
      client_id: G_OAUTH_CLIENT_ID,
      callback: this.authCallback,
    });
    // Renders Google icon, and user details on sign in button.
    // Do not remove signInDiv button, as this link will then break (until page refreshed).
    // Simply hide the signInDiv if it is not required.
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }

  // Whhen Google Sign in Finished. Then sign in verified user and update state, 
  // else sign out user and also update state.
  authCallback = (response) => {
    const signedInObject = this.getSignedInObject(response);
    if(signedInObject.isSignedIn){
      this.props.signIn(signedInObject.userId);
      document.getElementById("signInDiv").hidden = true;
    }else{
      this.props.signOut();
    }
  };

  getSignedInObject(response) {
    const decodedJWT = jwt_decode(response.credential);
    return {
      userId: decodedJWT.sub,
      isSignedIn: decodedJWT.email_verified,
    };
  }

  onSignOutClicked = () => {
    this.props.signOut();
    document.getElementById("signInDiv").hidden = false;
  };

  renderSignInSignOutButton() {
    // If already signed in, then show signout button. Else if not signed in, then show sign In button (which google API populates)
    return (
      <React.Fragment>
        <div id="signInDiv"></div>{" "}
        {this.props.isSignedIn && (
          <div
            id="signOutDiv"
            className="ui red google button"
            onClick={this.onSignOutClicked}
          >
            Sign Out
          </div>
        )}
      </React.Fragment>
    );
  }

  render() {
    return this.renderSignInSignOutButton();
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.oAuth.isSignedIn, userId: state.oAuth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
