import React, {Component} from 'react';
import classNames from 'classnames';

export default class Button extends Component {

  componentDidMount() {
    componentHandler.upgradeElement(this.element);
  }

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
      ...rest
    } = this.props;

    const classes = classNames('mdl-button mdl-js-button', {
      'mdl-button--fab': fab,
      'mdl-button--colored': colored,
      'mdl-js-ripple-effect': ripple,
      'mdl-button--raised': raised,
      'mdl-button--accent': accent,
      'mdl-button--primary': primary,
      'mdl-button--icon': icon,
      'mdl-button--fab mdl-button--mini-fab': miniFab || miniFAB
    }, this.props.className);

    return (
      <button
        {...rest}
        ref={(element) => {
          this.element = element;
        }}
        className={classes}
        >
        {children}
      </button>
    );
  }
}
