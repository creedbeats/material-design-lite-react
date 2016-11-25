import React, {Component} from 'react';
import classNames from 'classnames';

export default class Badge extends Component {
  render() {
    const {
      Component = 'span',
      'data-badge': dataBadge = '4',
      children,
      overlap = false,
      icon = false,
      background = true,
      disabled = false,
      contact = false,
    } = this.props;

    const classes = classNames('mdl-badge', {
      'mdl-chip--contact': contact,
      'mdl-badge--overlap': overlap,
      'material-icon': icon,
      'mdl-badge--no-background': !background
    }, this.props.className);

    return (
      <Component className={classes} data-badge={dataBadge}>
        {children}
      </Component>
    );
  }
}
