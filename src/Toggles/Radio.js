import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class Radio extends Component {
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

export default upgradeElement(Radio);
