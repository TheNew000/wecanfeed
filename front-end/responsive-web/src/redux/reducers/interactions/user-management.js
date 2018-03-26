// action types
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

// reducer with initial state
const initialState = {
  didRequest: false,
  error: null
};

export default function userManagementReducers(state = initialState, action) {
  let updatedState;

  switch (action.type) {
    case GET_USERS_REQUEST:
      updatedState = { ...state, fetching: true, error: null };
      break;
    case GET_USERS_SUCCESS:
      updatedState = { ...state, fetching: false, users: action.users };
      break;
    case GET_USERS_FAILURE:
      updatedState = { ...state, fetching: false, users: null, error: action.error };
      break;
    default:
      updatedState = state;
  }

  return updatedState;
}
