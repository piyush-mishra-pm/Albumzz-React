import React from "react";
import { connect } from "react-redux";
import { createAlbum } from "../../actions";
import AlbumForm from "./AlbumForm";

class AlbumCreate extends React.Component {
  onCreateAlbumFormSubmit = (formValues) => {
    console.log("form submission:", formValues);
    this.props.createAlbum(formValues);
  };

  render() {
    return (
      <div>
        <h1>Create Album</h1>
        <AlbumForm onAlbumFormSubmit={this.onCreateAlbumFormSubmit} />
      </div>
    );
  }
}

export default connect(null, { createAlbum })(AlbumCreate);
