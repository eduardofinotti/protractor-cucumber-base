var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var CalculatorSteps = function() {

  var RevenuePage = require('/Users/eduardofinotti/Documents/protractor_barbara_duvida/protractor-cucumber-example/features/pages/revenue_page.js');

  this.World = function MyWorld() {
    this.page = new RevenuePage();
  };

  this.Given('I go to receivable module', function (callback) {
    this.page.get();
    callback();
  });

  this.When('I click on the revenue tab', function (callback) {
    console.log('chegou 1')
    callback();
  });

  this.Then('I see the list of the revenues', function (callback) {
    console.log('chegou 2')
    callback();
  });
}
module.exports = CalculatorSteps;