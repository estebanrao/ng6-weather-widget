import moment from 'moment';

let parseDateFilter = function () {

  return function(date, index) {
    if(!moment(date).isValid()) {
      return date;
    } else {
      const myDate = moment(date).add(index + 1, 'days');
      return moment(myDate).format('ddd');
    }
  }

};

export default parseDateFilter;
