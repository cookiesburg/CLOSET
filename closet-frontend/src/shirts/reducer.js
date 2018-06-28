import { GET_SHIRTS,
         GET_BRANDS,
         GET_SHIRT,
         ADD_BRAND_FILTER,
         REMOVE_BRAND_FILTER,
         CHANGE_PRICE_FILTER,
} from './actions';

const initialState = {
  shirts: [],
  brands: [],
  shirtsLoaded: false,
  shirt: {},
  shirtLoaded: false,
  filteredList: [],
  filter: false,
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
    case GET_BRANDS:
      return {
        ...state,
        brands: data,
      };
    case GET_SHIRT:
      return {
        ...state,
        shirt: data,
        shirtLoaded: true,
      };
    case ADD_BRAND_FILTER:
      let addToList = state.shirts.filter(shirt => shirt.brand_id === parseInt(data));
      return {
        ...state,
        filter: true,
        filteredList: [...state.filteredList, ...addToList],
      };
    case REMOVE_BRAND_FILTER:
    console.log(data, 'in removefilter reducer')
      let updatedList = state.filteredList.filter(shirt => shirt.brand_id !== parseInt(data));
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
    case CHANGE_PRICE_FILTER:
    console.log(data)
      let updatedListPrice = state.shirts.filter(shirt => shirt.price <= data);
      return {
        ...state,
        filter: true,
        filteredList: updatedListPrice,
      };
    default:
      return state;
  }
}
