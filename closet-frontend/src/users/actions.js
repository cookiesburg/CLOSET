export const GET_USER = 'GET_USER';

export function getUser(id) {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/api/v1/users/${id}`);
    const user = await res.json();
    return dispatch({
      type: 'GET_USER',
      data: user,
    });
  };
}
