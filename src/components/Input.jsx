import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export const Input = (props) => (
  <TextField 
    errorText={props.errorText}
    onChange={props.onChange}
    value={props.value}
    type={props.type}
    disabled={props.disabled}
   />
);

Input.propTypes = {
    errorText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    onChange: () => {},
    errorText: '',
    value: '',
    type: 'text',
    disabled: false
};
