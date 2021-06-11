import React from 'react';

const ProjectDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            turpis erat, pellentesque ut pretium id, aliquam nec libero. Mauris
            viverra tristique sem, eu malesuada justo congue sed. Quisque
            tristique ante a mauris semper pellentesque non id turpis. Cras non
            volutpat sem.
          </p>
          <br></br>
          <div className="card-action-gret-lightedn-4 grey-text">
            <div>Posted by Divyanshu</div>
            <div>11th June, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
