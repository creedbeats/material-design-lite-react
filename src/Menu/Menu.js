import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class Menu extends Component {
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

export default upgradeElement(Menu);
