import React, {Component} from 'react';
import classNames from 'classnames';

export class Menu extends Component {
  render() {
    const {
      children,
      position = 'bottom-left',
      ...rest
    } = this.props;

    const classes = classNames('mdl-menu mdl-js-menu', {
      'mdl-menu--top-left	': position === 'top-left',
      'mdl-menu--top-right	': position === 'top-right',
      // 'mdl-menu--bottom-left	': position === 'bottom-left',
      'mdl-menu--bottom-right	': position === 'bottom-right',
    }, this.props.className);

    return (
      <ul {...rest} className={classes}>
        {children}
      </ul>
    );
  }
}

export class MenuItem extends Component {
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
