import React, {Component} from 'react';
import classNames from 'classnames';
import upgradeElement from '../upgrader';

class CardTitle extends Component {
  render() {
    const {
      children,
      border = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-card__title', {
      'mdl-card--border': border
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        <h2 className="mdl-card__title-text">
          {children}
        </h2>
      </div>
    );
  }
}

export default upgradeElement(CardTitle);
