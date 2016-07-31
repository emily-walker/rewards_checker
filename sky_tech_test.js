

var tech_test = {
  data: require('./data'),
  checkAccNo: function (accNo) {
    return accNo % 3 !== 0;
  },
  eligibilityService: function (package) {
    switch (package) {
      case 'SPORTS':
        return 'CHAMPIONS_LEAGUE_FINAL_TICKET';
        break;
      case 'MUSIC':
        return 'KARAOKE_PRO_MICROPHONE';
        break;
      case 'MOVIES':
        return 'PIRATES_OF_THE_CARIBBEAN_COLLECTION';
        break;
      default:
        return 'N/A'
    }
  },
  rewardsService: function () {
    for (var accNo in this.data) {
      if (!this.checkAccNo(accNo)) {
        console.log('Invalid account number exception: ' + accNo);
        //Filtered invalid account numbers
        continue;
      }
      console.log(this.eligibilityService(this.data[accNo]));
    }
  }
};

tech_test.rewardsService();

module.exports= tech_test;