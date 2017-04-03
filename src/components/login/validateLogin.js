export default function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Please enter an email.";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password.trim()) {
    errors.password = 'Please enter a password.';
  }

  return errors;
}
