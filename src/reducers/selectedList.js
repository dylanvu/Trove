import { SELECT_LIST } from '../actions/selectList';

const selectedList = (state = {}, action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.list;
    default:
      return state;
  }
}

export default selectedList;
