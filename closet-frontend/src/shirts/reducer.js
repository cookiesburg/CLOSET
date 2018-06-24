import { GET_SHIRTS, GET_SHIRT } from './actions';

const initialState = {
  shirts: [],
  shirtsLoaded: false,
  shirt: {},
  shirtLoaded: false,
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_SHIRTS:
      return {
        ...state,
        shirts: data,
        shirtsLoaded: true,
      };
    case GET_SHIRT:
    console.log(data);
      return {
        ...state,
        shirt: data,
        shirtLoaded: true,
      };
    default:
      return state;
  }
}
