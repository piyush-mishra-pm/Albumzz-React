import React from 'react';
import { connect } from "react-redux";
import { getAlbums } from "../../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }
  renderAlbumList() {
    return this.props.albums.map((album) => {
      return (
        <div className="item" key={album.id}>
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
  return { albums: Object.values(state.albums) };
};

export default connect(mapStateToProps, { getAlbums })(AlbumList);