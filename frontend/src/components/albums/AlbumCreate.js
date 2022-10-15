import React from 'react';
import { Field, reduxForm } from "redux-form";

class AlbumCreate extends React.Component {
  renderTitleInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.title}</label>
        <input {...formProps.input} />
      </div>
    );
  }

  onFormSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
      >
        <Field
          name="title"
          component={this.renderTitleInput}
          title="Album Title: "
        />
        <button className="ui button primary">Create Album</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "albumCreate",
})(AlbumCreate);