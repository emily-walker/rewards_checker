var techTest = {
  data: require('./data'),
  checkAccNo: function (accNo) {
    return accNo % 3 !== 0;
  },
  eligibilityService: function (tvPackage) {
    switch (tvPackage) {
      case 'SPORTS':
        return 'CHAMPIONS_LEAGUE_FINAL_TICKET';
      case 'MUSIC':
        return 'KARAOKE_PRO_MICROPHONE';
      case 'MOVIES':
        return 'PIRATES_OF_THE_CARIBBEAN_COLLECTION';
      default:
        return 'N/A';
    }
  },
  rewardsService: function () {
    for (var accNo in data) {
      if (!this.checkAccNo(accNo)) {
        console.log('Invalid account number exception: ' + accNo);
        continue;
      }
      console.log(this.eligibilityService(this.data[accNo]));
    }
    return true;
  }
};

module.exports = techTest;
