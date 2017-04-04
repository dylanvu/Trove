import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const FormField = ({ attrValue, children, error, onChange, type, value }) => (
  <Form.Field error={!!error}>
    <Input
      icon={error ? "warning" : null}
      id={attrValue}
      name={attrValue}
      onChange={onChange}
      placeholder={children}
      type={type}
      value={value}
    />
    {error && <span>{error}</span>}
  </Form.Field>
);

FormField.propTypes = {
  attrValue: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
}

export default FormField;
