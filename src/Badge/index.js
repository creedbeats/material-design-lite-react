import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class Badge extends Component {
  render() {
    const {
      Component = 'span',
      children,
      overlap = false,
      icon = false,
      background = true,
      disabled = false,
      contact = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-badge', {
      'mdl-chip--contact': contact,
      'mdl-badge--overlap': overlap,
      'material-icons': icon,
      'mdl-badge--no-background': !background
    }, this.props.className);

    return (
      <Component {...rest} className={classes}>
        {children}
      </Component>
    );
  }
}

export default upgradeElement(Badge);
