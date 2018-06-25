export const GET_SHIRTS = 'GET_SHIRTS';
export const GET_SHIRT = 'GET_SHIRT';
export const ADD_BRAND_FILTER = 'ADD_BRAND_FILTER';
export const REMOVE_BRAND_FILTER = 'REMOVE_BRAND_FILTER';
export const CHANGE_PRICE_FILTER = 'CHANGE_PRICE_FILTER';

export function getShirts() {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/shirts');
    const shirts = await res.json();
    return dispatch({
      type: 'GET_SHIRTS',
      data: shirts,
    });
  };
}

export function getShirt(id) {
  return async function (dispatch) {
    const res = await fetch('http://localhost:3001/api/v1/${id}');
    const shirt = await res.json();
    return dispatch({
      type: 'GET_SHIRT',
      data: shirt,
    });
  };
}

export const addBrandFilter = (brandType) => {
  return {
    type: 'ADD_BRAND_FILTER',
    data: brandType,
  }
}

export const removeBrandFilter = (brandType) => {
  return {
    type: 'REMOVE_BRAND_FILTER',
    data: brandType,
  }
}

export const changeMaxPrice = (price) => {
  console.log(price, 'in action');
  return {
    type: 'CHANGE_PRICE_FILTER',
    data: price,
  }
}
