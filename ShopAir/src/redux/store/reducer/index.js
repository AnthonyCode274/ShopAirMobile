import types from '../../type';

var defaultState = {
  dataIsLoading: true,
  apiData: [],
  /* apiData: {
    authorsName: [],
    authorsImg: []
  }*/
};

export default function (state = defaultState, action) {
  //console.log(action, "ACTION");
  switch (action.type) {
    case types.DATA_IS_LOADING:
      return {
        ...state,
        dataIsLoading: action.isLoading,
      };

    case types.STORE_ADD_API_DATA:
      return {
        ...state,
        apiData: [...state.apiData, ...action.apiData],
        /*authorsName: action.authorsName,
        authorsImg: action.authorsImg*/
      };
    default:
      return state;
  }
}
