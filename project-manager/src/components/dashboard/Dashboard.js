import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

const Dashboard = ({projects}) => {
  return (
    <div>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

//This function is calleb whenever the store state changes
const mapStateToProps = (state) => {
  return {
    //State has a project object (rootReducer), which has projects object (projectsReducer)
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
