import { Form, Field } from 'react-final-form'

const SearchForm = props => {
  const validate = (formValues) => {
    const errors = {};

    if (!formValues.location) {
      errors.location = 'You must enter a location.';
    }

    return errors;
  }

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="">
        <label className='form-label my-3'>{label}</label>
        <input className='form-control mb-1' {...input} />
        {renderError(meta)}
      </div>
    );
  }

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="alert alert-danger" role="alert">
          <p className="text-muted my-0">{error}</p>
        </div>
      );
    }
  }

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  }

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className=''>
          <Field name='location' component={renderInput} label='Enter Location' />
          <button className="btn btn-outline-primary">Search</button>
        </form>
      )}
    />
  );
}

export default SearchForm;