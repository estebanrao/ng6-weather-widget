/*@ngInject*/

let ApiFactory = function ($http, $q) {

  const APP_ID = '54c55f2df642a52192aa495ccf01198e';
  const UNITS = 'imperial';
  const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk&appid=${APP_ID}&units=${UNITS}&cnt=4`;

  const apiCall = () => {
    return $http.get(API_URL).then(_transformResponse, _transformErrorResponse);
  };

  const _transformResponse = (response) => {
    const list = response.data.list;
    return list.slice(0, 4);
  }

  const _transformErrorResponse = (error) => {
    return $q.reject(error);
  }

  return { apiCall };
};

export default ApiFactory;
