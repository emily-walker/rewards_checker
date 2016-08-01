/*global describe it */
var path = require('path');
var expect = require('chai').expect;
var techTest = require(path.join(__dirname, '..', './sky_tech_test.js'));

describe('techTest object', function () {
  'use strict';
  it('Should be an object', () => {
    expect(techTest).to.be.an('object');
  });
  it('Should have 4 keys', () => {
    expect(Object.keys(techTest).length).to.eql(4);
  });
  it('Should have 3 functions', () => {
    var counter = 0;
    for (var key in techTest) {
      if (typeof (techTest[key]) === 'function') counter++;
    }
    expect(counter).to.eql(3);
  });
  it('Should have 1 object', () => {
    var counter = 0;
    for (var key in techTest) {
      if (typeof (techTest[key]) === 'object') counter++;
    }
    expect(counter).to.eql(1);
  });
});

describe('techTest.data', () => {
  it('Should be an object', () => {
    expect(techTest.data).to.be.an('object');
  });
  it('Should have 50 keys', () => {
    expect(Object.keys(techTest.data).length).to.eql(50);
  });
});

describe('techTest.checkAccNo', () => {
  it('Should be a function', () => {
    expect(techTest.checkAccNo).to.be.a('function');
  });
  it('Should expect only 1 parameter', () => {
    expect(techTest.checkAccNo.length).to.eql(1);
  });
  it('Should return invalid acc for 3', () => {
    expect(techTest.checkAccNo(3)).to.eql(false);
  });
  it('Should return invalid acc for 6', () => {
    expect(techTest.checkAccNo(6)).to.eql(false);
  });
  it('Should return invalid acc for 9', () => {
    expect(techTest.checkAccNo(9)).to.eql(false);
  });
  it('SHould return valid for number 1', () => {
    expect(techTest.checkAccNo(1)).to.eql(true);
  });
  it('SHould return valid for number 2', () => {
    expect(techTest.checkAccNo(2)).to.eql(true);
  });
  it('SHould return valid for number 4', () => {
    expect(techTest.checkAccNo(4)).to.eql(true);
  });
});

describe('techTest.eligibilityService', () => {
  it('Should be a function', () => {
    expect(techTest.eligibilityService).to.be.a('function');
  });
  it('Should expect only 1 parameter', () => {
    expect(techTest.eligibilityService.length).to.eql(1);
  });
  it('Should return a string', () => {
    expect(typeof (techTest.eligibilityService('hello'))).to.eql('string');
  });
  it('Should return football ticket when SPORTS is entered', () => {
    expect(techTest.eligibilityService('SPORTS')).to.eql('CHAMPIONS_LEAGUE_FINAL_TICKET');
  });
  it('Should return microphone when MUSIC is entered', () => {
    expect(techTest.eligibilityService('MUSIC')).to.eql('KARAOKE_PRO_MICROPHONE');
  });
  it('Should return movie collection when MOVIES is entered', () => {
    expect(techTest.eligibilityService('MOVIES')).to.eql('PIRATES_OF_THE_CARIBBEAN_COLLECTION');
  });
  it('Should return N/A when KIDS is entered', () => {
    expect(techTest.eligibilityService('KIDS')).to.eql('N/A');
  });
  it('Should return N/A when NEWS is entered', () => {
    expect(techTest.eligibilityService('NEWS')).to.eql('N/A');
  });
  it('Should return N/A when any other data is entered', () => {
    expect(techTest.eligibilityService('skdjhfksd hksdjn')).to.eql('N/A');
  });
});

describe('techTest.rewardService', () => {
  it('Should be a function', () => {
    expect(techTest.rewardsService).to.be.a('function');
  });
  it('Should expect 1 parameter', () => {
    expect(techTest.rewardsService.length).to.eql(1);
  });
  it('Should return true when completed', () => {
    expect(techTest.rewardsService()).to.eql(true);
  });
});
