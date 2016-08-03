import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import data from '../data';

var $modal = $('.modal');
var $modalClose = $('.modal-close');

const App = React.createClass({

  getInitialState: function () {
    return {
      accNo: 0,
      displayText: ''
    }
  },

  handleAccNoChange: function (e) {
    this.setState({accNo: e.target.value});
  },
  eligibilityService: function (accNo) {
    switch (data[accNo]) {
      case undefined:
        return 'Invalid account number exception';
      case 'SPORTS':
      case 'MUSIC':
      case 'MOVIES':
        return 'CUSTOMER_ELIGIBLE';
      case 'NEWS':
      case 'KIDS':
        return 'CUSTOMER_INELIGIBLE';
      default:
        return 'Technical failure exception';
    }
  },

  rewardsService: function (e) {
    var output = this.eligibilityService(this.state.accNo);
    var reward;
    switch (output) {
      case 'CUSTOMER_ELIGIBLE':
        switch (data[this.state.accNo]) {
          case 'SPORTS':
            reward = 'CHAMPIONS_LEAGUE_FINAL_TICKET';
            break;
          case 'MUSIC':
            reward = 'KARAOKE_PRO_MICROPHONE';
            break;
          case 'MOVIES':
            reward = 'PIRATES_OF_THE_CARIBBEAN_COLLECTION';
            break;
        }
        this.state.displayText = "You are eligible to receive the following reward: " + reward;
        break;
      case 'Invalid account number exception':
        this.state.displayText = "The account number you have entered is invalid. Please try again.";
        break;
      default:
        this.state.displayText = "It doesn't look like you're eligible for any rewards right now.";
        break;
    }
    
    $('#display-area').text(this.state.displayText);
    $('.modal-background').css({'display': 'block'});
    $('#rewardsModal').fadeIn(500);

    return true;
  },

  closeModal: function () {
    $('.modal-background').css({'display': 'none'});
    $('#rewardsModal').fadeOut(500);

  },

  render: function () {
    return (
      <section className="hero is-info is-large">
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={5000}
                                 transitionEnter={false} transitionLeave={false}>
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    <img src="images/Sky_Logo_2004_Transparent.png" alt="Logo"/>
                  </a>
                </div>
        <span className="nav-toggle">
          <span/>
          <span/>
          <span/>
        </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item">
                    Home
                  </a>
                  <a className="nav-item">
                    Offers
                  </a>
                  <a className="nav-item is-active">
                    My Account
                  </a>
                </div>
              </div>
            </header>
          </div>
          <div className="hero-body">
            <div className="container form-container">
              <h1 className="title">
                Rewards Service
              </h1>
              <h2 className="subtitle">
                Enter your account number to see which rewards you are eligible for.
              </h2>
              <br/>
              <p className="control has-addons">
                <input className="input" type="text" placeholder="Enter account number"
                       onChange={this.handleAccNoChange}/>
                <a className="button is-blue is-outlined" onClick={this.rewardsService}>Submit</a>
              </p>
            </div>
            <div className="modal-window" id="rewardsModal">
              <div className="modal-background"></div>
              <div className="modal-card">
                <section className="modal-card-body">
                  <p id="display-area">{this.state.displayText}</p>
                  <a className="button is-info" onClick={this.closeModal}>Back</a>
                </section>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li><a>Contact</a></li>
                  <li><a>About Us</a></li>
                  <li><a>Terms and Conditions</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </ReactCSSTransitionGroup>
      </section>
    )
  }
});


ReactDOM.render(<App />, document.getElementById('app'));