import React, {Component} from 'react';
import classNames from 'classnames';

export class Checkbox extends Component {
  render() {
    const {
      children,
      id,
      ripple,
      className,
      ...rest
    } = this.props;

    const classes = classNames('mdl-checkbox mdl-js-checkbox', {
      'mdl-js-ripple-effect': ripple
    }, className);

    return (
      <label className={classes} htmlFor={id}>
        <input id={id} {...rest} type="checkbox" className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">{children}</span>
      </label>
    );
  }
}

export class Radio extends Component {
  render() {
    const {
      children,
      id,
      ripple,
      className,
      ...rest
    } = this.props;

    const classes = classNames('mdl-radio mdl-js-radio', {
      'mdl-js-ripple-effect': ripple
    }, className);

    return (
      <label className={classes} htmlFor={id}>
        <input id={id} {...rest} type="radio" className="mdl-radio__button" />
        <span className="mdl-radio__label">{children}</span>
      </label>
    );
  }
}

export class IconToggle extends Component {
  render() {
    const {
      children,
      id,
      ripple,
      className,
      ...rest
    } = this.props;

    const classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
      'mdl-js-ripple-effect': ripple
    }, className);

    return (
      <label className={classes} htmlFor={id}>
        <input id={id} {...rest} type="checkbox" className="mdl-icon-toggle__input" />
        <i className="mdl-icon-toggle__label material-icons">{children}</i>
      </label>
    );
  }
}

export class Switch extends Component {
  render() {
    const {
      children,
      id,
      ripple,
      className,
      ...rest
    } = this.props;

    const classes = classNames('mdl-switch mdl-js-switch', {
      'mdl-js-ripple-effect': ripple
    }, className);

    return (
      <label className={classes} htmlFor={id}>
        <input id={id} {...rest} type="checkbox" className="mdl-switch__input" />
        <span className="mdl-switch__label">{children}</span>
      </label>
    );
  }
}
