const initialState = {
  id: "",
  todo: {
    id: "",
    title: "",
    dice: "",
  },
};

const todosCaller = (state = initialState, action) => {
  switch (action.type) {
    case "CALL_EDIT":
      return action.payload;
    case "UPDATE_EDIT":
      return null;
    case "CALL_CREATE_LIST":
      return null;
    default:
      return null;
  }
};

export default todosCaller;
