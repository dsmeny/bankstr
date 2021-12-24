const bankReducer = (
  state = {
    withdraw: 0,
    deposit: 0,
    balance: 0,
  },
  action
) => {
  switch (action.type) {
    case "withdraw":
      return {
        ...state,
        withdraw: action.payload,
        balance: state.balance - action.payload,
      };
    case "deposit":
      return {
        ...state,
        deposit: action.payload,
        balance: state.balance + action.payload,
      };
    default:
      return state;
  }
};

export default bankReducer;
