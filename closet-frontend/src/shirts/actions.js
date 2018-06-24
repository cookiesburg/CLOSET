export const GET_SHIRTS = 'GET_SHIRTS';
export const GET_SHIRT = 'GET_SHIRT';

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
