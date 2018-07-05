import { GET_USER, EDIT_USER } from './actions';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: data,
      };
    case EDIT_USER:
      return {
        ...state,
        user: data,
      };
    default:
      return state;
  }
}
