import moment from 'moment';
/*@ngInject*/

class HomeController {
  constructor(Api, $timeout) {
    this._Api = Api;
    this._getApiResponse(0);
    this._$timeout = $timeout;

    this.today = moment();
    this.currentIcon = 'sky is clear';
    this.isLoading = true;
  }

  _getApiResponse(index) {
    this._Api.apiCall().then(
      (response) => {
        this.setCurrent(response[index]);
        this.futureForecast = response.slice(1, 4);
        this.hasChanged = true;
        this.isLoading = false;
      }
    );
  }

  setCurrent(response) {
    const timeoutDelay = this.isLoading ? 0 : 400;
    this.active = response;
    this.hasChanged = false;
    this._$timeout(() => {
      this.currentMax = Math.round(response.temp.max);
      this.currentMin = Math.round(response.temp.min);
      this.currentIcon = response.weather[0].description;
      this.hasChanged = true;
    }, timeoutDelay);
  }
}

export default HomeController;
