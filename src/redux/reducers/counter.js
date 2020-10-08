const initialState = { count: 1 };

const counterReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

export default counterReducer;
