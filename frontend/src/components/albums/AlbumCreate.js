import React from 'react';
import { Field, reduxForm } from "redux-form";

class AlbumCreate extends React.Component {
  renderInputError(meta) {
    if (meta.touched && meta.error) {
      return <div className="ui error message">{meta.error}</div>;
    }
  }

  renderTitleInput = (formProps) => {
    return (
      // CSS to highlight field's with error.
      <div className={`field ${formProps.meta.touched && formProps.meta.error ? "error" : ""}`}>
        <label>{formProps.title}</label>
        <input {...formProps.input} />
        {/* Show error only when input is touched and still error persists. */}
        {this.renderInputError(formProps.meta)}
      </div>
    );
  };

  onFormSubmit(formValues) {
    // todo: only console logginh right now. Not submititing.
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name="title" component={this.renderTitleInput} title="Album Title: " />
        <button className={`ui button ${this.props.valid ? "primary" : "disable"}`}>Create Album</button>
      </form>
    );
  }
}

// Errors after validation passed to meta property of that form-input's formProps.
const validateFormValues = (formValues) => {
  const errors = {};

  // If form is empty, then can't create Album.
  if (!formValues.title) {
    errors.title = "Empty Album title not allowed!";
  }

  // can append more errors for other cases:

  // finally return errors. If errors is empty object, then no redux form error.
  return errors;
};

export default reduxForm({
  form: "albumCreate",
  validate: validateFormValues,
})(AlbumCreate);