import React from 'react';
import { connect } from "react-redux";

import { getAlbum } from "../../actions";

class AlbumEdit extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (!this.props.album) {
      return <div>Loading . . .</div>;
    }
    return (
      <div>
        <h1>Album Edit</h1>
        <p>Title: {this.props.album.title}</p>
        <p>Id: {this.props.album.id}</p>
        <p>userId: {this.props.album.userId}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // Router when navigates to Edit page, will itself supply
  // props containing match.params.id (from the path accessed).
  // These can be accesed through ownProps (since 'props' works inside Component,
  // and mapStateToProps is called outside it).
  return { album: state.albums[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getAlbum })(AlbumEdit);