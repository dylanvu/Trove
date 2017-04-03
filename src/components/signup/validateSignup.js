export default function validateSignup(values) {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'Please enter your first name.';
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Please enter your last name.';
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email.";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password.trim()) {
    errors.password = 'Please enter a password.';
  }
  else if (values.password.length < 8) {
    errors.password = 'Your password must be at least 8 characters long.';
  }

  if (!values.passwordConfirmation.trim()) {
    errors.passwordConfirmation = 'Please enter a password confirmation.';
  }
  else if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match.';
  }

  return errors;
}
