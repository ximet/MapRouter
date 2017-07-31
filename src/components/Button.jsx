import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

export const Button = (props) => (
  <RaisedButton 
    label={props.label} 
    onTouchTap={props.onTouchTap}
    disabled={props.disabled}
    fullWidth={props.fullWidth}
  />
);

Button.propTypes = {
    label: PropTypes.string,
    onTouchTap: PropTypes.func,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
};

Button.defaultProps = {
    onTouchTap: () => {},
    label: 'Default',
    disabled: false,
    fullWidth: true
};