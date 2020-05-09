import { ActionType } from './ActionsTypes';


const increment = (number) =>{
  return async dispatch => {

    dispatch({
      type: ActionType.INCREMENT,
      payload: number + 1
    });
  };

}
const decrement = (number) =>{
  return async dispatch => {

    dispatch({
      type: ActionType.DECREMENT,
      payload: number - 1
    });
  };

}

export { 
  increment,
  decrement
}
