import { APPLY_OFFER } from '../constants/ActionTypes';

const initialState = {};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_OFFER:
      return {
        ...state,
        applied: true,
      };
    default:
      return state;
  }
};

export default offerReducer;
