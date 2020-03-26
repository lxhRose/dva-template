import server from "./app-server";

export default {
  namespace: 'App',
  state: {
    loading: false
  },
  effects: {
    *elimination({ payload }, { call, put, select }) {
      yield put({
        type: 'changeLoading',
        payload: true
      });
      const response = yield call(server.elimination, payload);
      yield put({
        type: 'changeLoading',
        payload: false
      });
      return response;
    },
  },

  reducers: {
    changeLoading(state, { payload }) {
      return {
        ...state,
        loading: payload
      };
    }
  },
};
