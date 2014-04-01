'use strict';

angular.module('meanstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
