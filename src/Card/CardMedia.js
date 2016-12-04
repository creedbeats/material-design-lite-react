import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class CardMedia extends Component {
  render() {
    const {
      children,
      border = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-card__media', {
      'mdl-card--border': border
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}

export default upgradeElement(CardMedia);
