import { createContext, useContext, useReducer, useEffect } from "react";

const PollContext = createContext();

const initialState = JSON.parse(localStorage.getItem("votes")) || {
  OptionA: 0,
  OptionB: 0,
};

// Reducer function
const pollReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return { ...state, [action.option]: state[action.option] + 1 };
    case "RESET":
      return { OptionA: 0, OptionB: 0 };
    default:
      return state;
  }
};

// Context Provider
export const PollProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pollReducer, initialState);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(state));
  }, [state]);

  return (
    <PollContext.Provider value={{ votes: state, dispatch }}>
      {children}
    </PollContext.Provider>
  );
};

// Custom hook to use the context
export const usePoll = () => useContext(PollContext);
