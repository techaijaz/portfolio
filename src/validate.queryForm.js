function validate(values) {
  let errors = {};

  // name
  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 4) {
    errors.name = "Name should be grater than 3 characters";
  }
  // email
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!re.test(values.email)) {
    errors.email = "Email address is invaled";
  }
  //subject
  if (!values.subject) {
    errors.subject = "Subject field is required";
  }
  //message
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}

export default validate;
