'use strict';

import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = props;
  }

  render() {
    return (
      <li>
        <div className="panel panel-default">
          <div className="panel-heading clearfix">
            <h3 className="panel-title pull-left">Card Title</h3>
              <a className="btn btn-default pull-right" href="#">
                <i className="fa fa-check"></i>
                Button
              </a>
          </div>
          <div className="panel-body">
            <p>{this.state.title}</p>
          </div>
          <div className="panel-footer">
            <small>Card footer...</small>
          </div>
        </div>

      </li>
    );
  }
}
