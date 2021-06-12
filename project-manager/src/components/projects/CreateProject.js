import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import { Redirect } from 'react-router-dom';

const CreateProject = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!props.auth.uid) return <Redirect to='/signin' />
  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.id === 'content') {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Cerate Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            id="title"
            onChange={handleChange}
          ></input>
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            value={content}
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    createProject: (project) => dispath(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
