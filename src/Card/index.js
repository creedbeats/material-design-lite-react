import React, {Component} from 'react';
import classNames from 'classnames';

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

export class CardTitle extends Component {
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

export class CardMedia extends Component {
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

export class CardActions extends Component {
  render() {
    const {
      children,
      border = false,
      ...rest
    } = this.props;

    const classes = classNames('mdl-card__actions', {
      'mdl-card--border': border
    }, this.props.className);

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    );
  }
}
