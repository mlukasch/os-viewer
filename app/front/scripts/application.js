;(function(angular) {

  var customComponents = require('components');

  angular.module('Application', [
    'ngBabbage',
    'angular.filter',
    'ui.bootstrap',
    'hc.marked',
    'authClient.services'
  ]);

  customComponents.babbageGeoView(angular.module('ngBabbage'));

})(angular);