import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class Checkbox extends Component {
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

export default upgradeElement(Checkbox);
