import React, { useState } from 'react';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
    console.log(title, content);
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

export default CreateProject;
