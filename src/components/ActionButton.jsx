import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';

const getIcon = (iconClassName) => {
  switch (iconClassName) {
    case 'add': {
      return <Add />
      break;
    }

    default: {
      break;
    }
  }
}

export const ActionButton = (props) => (
  <FloatingActionButton 
    onTouchTap={props.onTouchTap}
    disabled={props.disabled}
    secondary={props.secondary}
  >
    { getIcon(props.iconClassName) }
  </FloatingActionButton>
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