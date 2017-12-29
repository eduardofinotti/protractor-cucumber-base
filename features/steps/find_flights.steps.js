var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var FindingFlightsSteps = function() {

  var RevenuePage = require('/Users/eduardofinotti/Documents/protractor_barbara_duvida/protractor-cucumber-example/features/pages/revenue_page.js');

  this.World = function MyWorld() {
    this.page = new RevenuePage();
  };

  this.Given('I go to JetBlue index page', function (callback) {
    this.page.get();
    //callback();
  });

}

module.exports = FindingFlightsSteps;