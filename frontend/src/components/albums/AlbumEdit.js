import React from 'react';
import { connect } from "react-redux";

import { getAlbum, editAlbum } from "../../actions";
import AlbumForm from "./AlbumForm";

class AlbumEdit extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
  }

  onEditAlarmSubmit = (formValues) => {
    // Only using properties we expect to change, not others like userId.
    console.log("form submission:", formValues);
    this.props.editAlbum(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.album) {
      return <div>Loading . . .</div>;
    }
    return (
      <div>
        <h1>Edit Album</h1>
        <p>Title: {this.props.album.title}</p>
        <AlbumForm onAlbumFormSubmit={this.onEditAlarmSubmit} initialValues={{ title: this.props.album.title }} />
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

export default connect(mapStateToProps, { getAlbum, editAlbum })(AlbumEdit);