import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

export class Card extends Component {
  render() {
    const {
      children,
      shadow = 0,
      ...rest
    } = this.props;

    const classes = classNames('mdl-card', {
      'mdl-shadow--2dp': shadow
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}

export default upgradeElement(Card);
