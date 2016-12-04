import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class IconToggle extends Component {
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

export default upgradeElement(IconToggle);
