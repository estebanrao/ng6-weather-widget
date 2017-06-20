import angular from 'angular';
import Api from './api/api';
import parseDate from './parse-date/parse-date';
import getIcon from './get-icon/get-icon';

let commonModule = angular.module('app.common', [
  Api,
  parseDate,
  getIcon
])

.name;

export default commonModule;
