export const GET_USER = 'GET_USER';
export const EDIT_USER = 'EDIT_USER';

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
export function editUser(altUser) {
  return async function (dispatch) {
     const res = await fetch(`http://localhost:3001/api/v1/users/${altUser.id}`, {
       method: 'PUT',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({'user': {
         'id':altUser.id,
         'name':altUser.name,
         'neck':altUser.neck,
         'l_sleeve':altUser.l_sleeve,
         'w_sleeve':altUser.w_sleeve,
         'chest':altUser.chest,
         'sldr':altUser.sldr,
         'mid':altUser.mid,
         'cuff':altUser.cuff,
         'length':altUser.length,
       }}),
     });
     const user = await res.json();
     console.log(user);
     return dispatch({
       type: 'EDIT_USER',
       data: user,
     });
   };
}
