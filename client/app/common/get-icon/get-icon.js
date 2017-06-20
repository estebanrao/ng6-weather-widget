import angular from 'angular';
import getIconFilter from './get-icon.filter';

let getIconModule = angular.module('getIcon', [])

.filter('getIcon', getIconFilter)

.name;

export default getIconModule;
