import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class MenuItem extends Component {
  render() {
    const {
      children,
      divider = false,
      ripple = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-menu__item', {
      'mdl-menu__item--full-bleed-divider': divider,
      'mdl-js-ripple-effect': ripple
    }, this.props.className);

    return (
      <li {...rest} className={classes}>
        {children}
      </li>
    );
  }
}

export default upgradeElement(MenuItem);
