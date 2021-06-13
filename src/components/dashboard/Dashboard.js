import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ projects, auth, notifications }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div>
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
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
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: 'projects',
      orderBy: ['createdAt', 'desc'],
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc'],
    },
  ])
)(Dashboard);
