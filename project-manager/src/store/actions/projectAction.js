export const createProject = (project) => {
  //With thunk we can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make async call to database

    dispatch({ type: 'CREATE_PROJECT', project });
  };
};