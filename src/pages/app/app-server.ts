import request from '../../utils/request';

const elimination = (params) => {
  return request('/nus/issue/delete', {
    method: "POST",
    params
  });
}

export default {
  elimination
}
