export const createProject = (project) => {
  //With thunk we can return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make async call to database
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Divyanshu',
        authorLastName: 'Meena',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => dispatch({ type: 'CREATE_PROJECT_ERROR', err }));
  };
};
