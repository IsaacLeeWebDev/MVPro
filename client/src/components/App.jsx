// Packages
import React from 'react';
import $ from 'jquery';
import {
  Grid, Row, Col, PageHeader
} from 'react-bootstrap';
import Nav from './Nav.jsx'

// Components
import Projects_List from './Projects_List.jsx';
import Project_Form from './Project_Form';
import Project_Dashboard from './Project_Dashboard';

// Fake Data
import projects from '../../../testProjects.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      view: 'Projects_List',
      currentProject: null,
    };
    this.changeView = this.changeView.bind(this);
  }
  // Component methods -----------------------------

  // Managing Views ---------------------------------
  componentDidMount() {
    $.ajax({
      url: '/projects',
      success: (data) => {
        this.setState({
          items: data
        })
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  changeView(viewNameString, projectId) {
    if (viewNameString === 'Projects_List') {
      this.setState({view:'Projects_List'});
    } else if (viewNameString === 'Project_Dashboard') {
      console.log('Current Project', projects[projectId]);
      this.setState({view:'Project_Dashboard', currentProject: projects[projectId]});
    } else if (viewNameString === 'Project_Form') {
      this.setState({view:'Project_Form'});
    }
  }

  renderView() {
    if (this.state.view === 'Projects_List') {
      return (<Projects_List projects={this.state.projects} changeView={this.changeView} />);
    } else if (this.state.view  === 'Project_Dashboard') {
      return (<Project_Dashboard currentProject={this.state.currentProject} changeView={this.changeView} />);
    } else if (this.state.view === 'Project_Form') {
      return (<Project_Form projects={this.state.projects} changeView={this.changeView} />);
    } else if (this.state.view === 'Ticket_Form') {
      return (<Ticket_Form project={this.state.currentProject} />)
    }
  }

  render () {
    return (
      <Grid>
        <PageHeader>Welcome to MVPro!</PageHeader>
        <Nav projects={this.state.projects} changeView={this.changeView} />
        {this.renderView()}
      </Grid>
    )
  }
}

export default App;

/*
Stretch Goals: -------------------------------------

  > Start work session button.
  > Commit reminders
  > Break reminders
  > animations from All projects to project dashboard

*/