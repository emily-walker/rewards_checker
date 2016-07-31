var path = require('path');
var expect = require('chai').expect;
var tech_test = require(path.join(__dirname, '..', './sky_tech_test.js'));

describe('tech_test object', function () {
  'use strict';
  it('Should be an object', () => {
    expect(tech_test).to.be.an('object');
  });
  it("Should have 4 keys", () => {
    expect(Object.keys(tech_test).length).to.eql(4);
  });
  it("Should have 3 functions", () => {
    var counter = 0;
    for (var key in tech_test) {
      if (typeof(tech_test[key]) === 'function') counter++;
    }
    expect(counter).to.eql(3);
  });
  it("Should have 1 object", () => {
    var counter = 0;
    for (var key in tech_test) {
      if (typeof(tech_test[key]) === 'object') counter++;
    }
    expect(counter).to.eql(1);
  });
});

describe("tech_test.data", () => {
  it("Should be an object", () => {
    expect(tech_test.data).to.be.an('object');
  });
  it("Should have 50 keys", () => {
    expect(Object.keys(tech_test.data).length).to.eql(50);
  });
});

describe("tech_test.checkAccNo", () => {
  it("Should be a function", () => {
    expect(tech_test.checkAccNo).to.be.a('function');
  });
  it("Should expect only 1 parameter", () => {
    expect(tech_test.checkAccNo.length).to.eql(1);
  });
  it("Should return invalid acc for 3", () => {
    expect(tech_test.checkAccNo(3)).to.eql(false);
  });
  it("Should return invalid acc for 6", () => {
    expect(tech_test.checkAccNo(6)).to.eql(false);
  });
  it("Should return invalid acc for 9", () => {
    expect(tech_test.checkAccNo(9)).to.eql(false);
  });
  it("SHould return valid for number 1", () => {
    expect(tech_test.checkAccNo(1)).to.eql(true);
  });
  it("SHould return valid for number 2", () => {
    expect(tech_test.checkAccNo(2)).to.eql(true);
  });
  it("SHould return valid for number 4", () => {
    expect(tech_test.checkAccNo(4)).to.eql(true);
  });
});

describe("tech_test.eligibilityService", () => {
  it("Should be a function", () => {
    expect(tech_test.eligibilityService).to.be.a('function');
  });
  it("Should expect only 1 parameter", () => {
    expect(tech_test.eligibilityService.length).to.eql(1);
  });
  it("Should return a string", () => {
    expect(typeof(tech_test.eligibilityService('hello'))).to.eql('string');
  });
  it("Should return football ticket when 'SPORTS' is entered", () => {
    expect(tech_test.eligibilityService('SPORTS')).to.eql('CHAMPIONS_LEAGUE_FINAL_TICKET');
  });
  it("Should return microphone when 'MUSIC' is entered", () => {
    expect(tech_test.eligibilityService('MUSIC')).to.eql('KARAOKE_PRO_MICROPHONE');
  });
  it("Should return movie collection when 'MOVIES' is entered", () => {
    expect(tech_test.eligibilityService('MOVIES')).to.eql('PIRATES_OF_THE_CARIBBEAN_COLLECTION');
  });
  it("Should return 'N/A' when 'KIDS' is entered", () => {
    expect(tech_test.eligibilityService('KIDS')).to.eql('N/A');
  });
  it("Should return 'N/A' when 'NEWS' is entered", () => {
    expect(tech_test.eligibilityService('NEWS')).to.eql('N/A');
  });
  it("Should return 'N/A' when any other data is entered", () => {
    expect(tech_test.eligibilityService('skdjhfksd hksdjn')).to.eql('N/A');
  });
});

describe("tech_test.rewardService", () => {
  it("Should be a function", () => {
    expect(tech_test.rewardService).to.be.a('function');
  });
  it("Should expect no parameters", () => {
    expect(tech_test.rewardService.length).to.eql(0);
  });
  it("Should return true when completed", () => {
    expect(tech_test.rewardService()).to.eql(true);
  });
});