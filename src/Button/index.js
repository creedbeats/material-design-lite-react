import React, {Component} from 'react';
import classNames from 'classnames';

export default class Button extends Component {
  constructor(){
    super();

    const {
      children,
      colored = false,
      ripple = false,
      fab = false,
    } = this.props;

    this.props.className = classNames('mdl-button mdl-js-button', {
      'mdl-button--fab': fab || FAB,
      'mdl-button--colored': colored,
      'mdl-js-ripple-effect': ripple,
      'mdl-button--raised': raised,
      'mdl-button--accent': accent,
      'mdl-button--primary': primary,
      'mdl-button--icon': icon,
      'mdl-button--fab mdl-button--mini-fab': miniFab || miniFAB
    }, this.props.className);
  }

  render() {
    return (
      <button {...this.props}>
        {children}
      </button>
    );
  }
}
