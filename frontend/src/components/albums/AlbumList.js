import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAlbums } from "../../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  renderCreateAlbumLink() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/albums/create" className="ui fluid green button massive">
            Create Album
          </Link>
        </div>
      );
    }
  }

  renderEditDeleteButtons(album) {
    // If not logged in, then userId is null and do not show Edit/Delete btns.
    // Can Edit/Delete only those which are created by logged in user.
    if (album.userId && album.userId === this.props.loggedInUserId) {
      return (
        <div className="right floated content">
          <Link to={`/albums/edit/${album.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/albums/delete/${album.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderAlbumList() {
    return this.props.albums.map((album) => {
      return (
        <div className="item" key={album.id}>
          {this.renderEditDeleteButtons(album)}
          <i className="large middle icon chevron circle right" />
          <div className="content">{album.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.albums);
    return (
      <div>
        <div>{this.renderCreateAlbumLink()}</div>
        <h1>AlbumList</h1>
        <div className="ui middle aligned divided list">{this.renderAlbumList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // Albums are stored in state as map of albumID -> albumObject.
  // But transforming that map to an array (and removing id as key) before
  // we put that in our component.
  return {
    albums: Object.values(state.albums),
    loggedInUserId: state.oAuth.userId,
    isSignedIn: state.oAuth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getAlbums })(AlbumList);