/* eslint-disable no-console */
'use strict';


import converterTempl from '!!file-loader?name=templates/[name].[ext]!./pages/converter/сonverter.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('converter', {
          url: '/converter',
          templateUrl: converterTempl,
          controller: 'converterController',
          resolve: {
            asyncPreloading: resolverProvider.converterPagePrealoading
          }
        });


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

