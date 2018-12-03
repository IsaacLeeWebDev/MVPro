// STRETCH GOAL:

import React from 'react';
import {
  Row, Col, Well, Button,
} from 'react-bootstrap';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
  }

  completeTicket() {

  }

  render() {
    return (
      <Row>
        <Col>
          <Well>
            <h4>{props.ticket.title}</h4>
            <Row>
              <p>Started: {String(props.ticket.createdAt)} </p>
              <p>Deadline: {String(props.ticket.deadline)}</p>
              <p>Task: {props.ticket.body} </p>
              <p>Completion State: {} </p>
              <a className="btn"> Edit </a>
            </Row>
            <Row>
              <a className="btn">Set as Backlogged </a>
              <a className="btn">Set as In-Progress </a>
              <a className="btn" onClick={() => }>Set as Committed </a>
              <a className="btn btn-delete"> Abandon this ticket</a>
            </Row>
          </Well>
        </Col>
      </Row>
    );
  }

}


export default Ticket;

/*

Stretch Gaols: -------------------------

> Ticket T-Shirt size
  - xs: 1 line change, ~2mins, 1 pt
  - s: change a few lines in a few places ~5mins 5pts
  - m: draft a single file, implementation of a small task that is new to you ~30 mins 30pts
  - l: complete a toy-problem, implement a new kind of component ~1hr 60pts
  - xl: complete a feature/component that's familiar to you ~3hrs
  - 2xl: complete a whole service: 1 day

> Display what directory (or directories) and file(s) must be created/edited in order to complete a given ticket

> Mark tickets as "Stretch Goals"
> Blocked Tickets should have "How to Unblock" instructions
> Timers on Tickets
  - In-progress-by timers
  - In-progress for ___hours ___minutes ___seconds
  - committed-by timers

> Punctuality State
  - Committed Early
  - Committed On-Time
  - Committed Late
*/