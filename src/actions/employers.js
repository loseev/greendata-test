export const SAVE_CHANGES = 'employers/save-changes';
export const CHANGE_OPEN_MODE = 'employers/change-card-mode';
export const SET_CARD_DATA = 'employers/set-card-data';

const saveChanges = (employers) => ({
  type: SAVE_CHANGES,
  employers,
});

export const del = (id) => (dispatch, getState) => dispatch(saveChanges(
  getState().employers.filter((employer) => employer.id !== id),
));

const changeOpenMode = (mode = false) => ({
  type: CHANGE_OPEN_MODE,
  mode,
});

export const open = () => (dispatch) => dispatch(changeOpenMode(true));

export const close = () => (dispatch) => dispatch(changeOpenMode(false));

const setCardData = (employer) => ({
  type: SET_CARD_DATA,
  employer,
});

export const setEditableEmployer = (id) => (dispatch, getState) => dispatch(setCardData(
  getState().employers.find((employer) => employer.id === id),
));

export const change = (employer) => (dispatch, getState) => {
  const { employers, positions } = getState();
  const position = positions.find((pos) => pos.id === employer.position.id);

  dispatch(saveChanges(
    employers.map((empl) => (empl.id === employer.id ? { ...employer, position } : empl)),
  ));
};
