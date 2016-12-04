import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class Switch extends Component {
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

export default upgradeElement(Switch);
