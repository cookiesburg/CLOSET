import { GET_SHIRTS, GET_SHIRT, ADD_BRAND_FILTER, REMOVE_BRAND_FILTER } from './actions';

const initialState = {
  shirts: [],
  shirtsLoaded: false,
  shirt: {},
  shirtLoaded: false,
  brands: [],
  filteredList: [],
  filter: false,
};

export default function (state = initialState, action) {
  const type = action.type;
  const data = action.data;
  switch (type) {
    case GET_SHIRTS:
      const brands = [...new Set(data.map(shirt => shirt.brand))];
      return {
        ...state,
        shirts: data,
        shirtsLoaded: true,
        brands: brands,
      };
    case GET_SHIRT:
      return {
        ...state,
        shirt: data,
        shirtLoaded: true,
      };
    case ADD_BRAND_FILTER:
      let addToList = state.shirts.filter(shirt => shirt.brand === data);
      console.log(addToList);
      return {
        ...state,
        filter: true,
        filteredList: [...state.filteredList, ...addToList],
      };
    case REMOVE_BRAND_FILTER:
      let updatedList = state.filteredList.filter(shirt => shirt.brand !== data);
      if (updatedList.length === 0) {
        return {
          ...state,
          filter: false,
        }
      }
      return {
        ...state,
        filteredList: updatedList,
      };
    default:
      return state;
  }
}
