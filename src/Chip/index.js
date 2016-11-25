import React, {Component} from 'react';
import classNames from 'classnames';

export default class Chip extends Component {
  render() {
    const {
      children,
      colored = false,
      ripple = false,
      fab = false,
      FAB = false,
      raised = false,
      accent = false,
      primary = false,
      icon = false,
      miniFab = false,
      miniFAB = false,
      disabled = false
    } = this.props;

    const outerClasses = classNames('mdl-chip', {
      'mdl-chip--contact': contact,
    }, this.props.className);

    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
}
