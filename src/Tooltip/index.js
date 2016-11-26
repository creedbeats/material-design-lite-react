import React, {Component} from 'react';
import classNames from 'classnames';

export default class Tooltip extends Component {
  render() {
    const {
      children,
      large = false,
      left = false,
      right = false,
      top = false,
      bottom = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-tooltip', {
      'mdl-tooltip--large': large,
      'mdl-tooltip--left': left,
      'mdl-tooltip--right': right,
      'mdl-tooltip--top': top,
      'mdl-tooltip--bottom': bottom
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}
