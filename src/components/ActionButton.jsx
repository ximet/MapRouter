import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';

export const ActionButton = (props) => (
  <FloatingActionButton 
    onTouchTap={props.onTouchTap}
    disabled={props.disabled}
    secondary={props.secondary}
    iconClassName={props.iconClassName}
  />
);

ActionButton.propTypes = {
    onTouchTap: PropTypes.func,
    disabled: PropTypes.bool,
    secondary: PropTypes.bool,
    iconClassName: PropTypes.string,
};

ActionButton.defaultProps = {
    onTouchTap: () => {},
    disabled: false,
    secondary: true,
    iconClassName: 'add'
};