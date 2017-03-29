import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const FormField = ({ attrValue, children, error, onChange, type, value }) => (
  <Form.Field error={!!error}>
    <label htmlFor={attrValue}>{children}</label>
    <Input
      icon={error ? "warning" : null}
      id={attrValue}
      name={attrValue}
      onChange={onChange}
      placeholder={children}
      type={type}
      value={value}
    />
    <span>{error}</span>
  </Form.Field>
);

export default FormField;
