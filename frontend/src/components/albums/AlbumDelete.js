import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { getAlbum, deleteAlbum } from "../../actions";

class AlbumDelete extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteAlbum(this.props.match.params.id)} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderModalContent() {
    return this.props.album
      ? `Sure you wanna delete this album?  
    ${this.props.album.title} `
      : "Loading . . .";
  }

  render() {
    return (
      <Modal
        header="Delete Album?"
        content={this.renderModalContent()}
        modalActions={this.renderActions()}
        onCloseModal={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { album: state.albums[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getAlbum, deleteAlbum })(AlbumDelete);