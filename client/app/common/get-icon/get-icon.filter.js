let getIconFilter = function () {

  return function(weatherDescription) {
    if (weatherDescription == 'sky is clear') {
      return 'icon-Sun';
    } else if (weatherDescription == 'mist') {
      return 'icon-Cloud-Fog-Alt';
    } else if (weatherDescription.indexOf('thunderstorm') !== -1) {
      return 'icon-Cloud-Lightning';
    } else if (weatherDescription.indexOf('snow') !== -1 || weatherDescription.indexOf('sleet') !== -1) {
      return 'icon-Cloud-Snow-Alt';
    } else if (weatherDescription.indexOf('clouds') !== -1) {
      return 'icon-Cloud';
    } else if (weatherDescription.indexOf('rain') !== -1 || weatherDescription.indexOf('drizzle') !== -1) {
      return 'icon-Cloud-Rain';
    } else {
      return 'icon-Sun';
    }
  }

};

export default getIconFilter;
