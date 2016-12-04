import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

export class CardText extends Component {
  render() {
    const {
      children,
      border = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-card__supporting-text', {
      'mdl-card--border': border
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}

export default upgradeElement(CardText);
