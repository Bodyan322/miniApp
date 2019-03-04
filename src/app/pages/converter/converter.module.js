'use strict';

import './converter.scss';

import converterController from './converter.controller.js';

const converterModule = angular.module('converter-module', []);

converterModule.controller('converterController', converterController);


converterModule.config(function(currServProvider) {
  'ngInject';
  currServProvider.setURL('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
});

export default converterModule;