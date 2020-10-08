const initialState = { count: 1 };

const counterReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "INCREMENTNEW":
      return state;

    default:
      return state;
  }
};

export default counterReducer;
