// Packages
import React from 'react';
import $ from 'jquery';
import {
  Button, Radio, Row, Col, Form, FormGroup, FormControl, ControlLabel, Well
} from 'react-bootstrap';
// Components
import Column_Form_List from 'Column_Form_List.jsx';

const Project_Form_Step_3 = props => (
  <Form>
    <Row>
      <FormGroup controlId="primaryRecordName">
        <h3 componentClass={ControlLabel}> Name of your primary record:</h3>
        <Col sm={6}>
          <FormControl id="primaryRecordName" className="form_field" type="text" />
        </Col>
      </FormGroup>
    </Row>
    <h3>Primary Record Columns</h3>
    <Column_Form_List />
  </Form>
);

export default Project_Form_Step_3;


/*

    - [ ] Primary Record:
      - [ ] Add columns
        - [X] Name:
        - [X] Datatype: (one value, or secondary record)
          - [ ] if secondary record
            - [ ] recurse Add columns
            - [ ] How is secondary record created?
            - [ ] Submiting a form which belongs to a unique view
            - [ ] Triggering a non-form-related event
      - [ ] How is primary record created?
        - [ ] Submiting a form which belongs to a unique view
        - [ ] Triggering a non-form-related event
      - [ ] Should app have a homepage? (+1 view)
        - [ ] views.push('homepage_view)')
      - [ ] Where is the primary record displayed?
        - [ ] On the homepage
        - [ ] in a list, like a feed or list of profiles
          - [ ] views.push(list_name)
        - [ ] in its own view, like a map search result
          - [ ] views.push(list_item_name)
        - [ ] list & view but not homepage
          - [ ] views.push(list_name, list_item_name)
        - [ ] in a wizard
          - [ ] How many views/pages in the wizard?
          - [ ] views.concat([...wizard-pages/views])

*/