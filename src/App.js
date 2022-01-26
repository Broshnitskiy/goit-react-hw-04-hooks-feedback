import React, { Component } from 'react';
import { Statistics } from './components/statistics/Statistics';
import { FeedbackOptions } from './components/feedbackOptions/FeedbackOptions';
import { Section } from './components/section/Section';
import { Notification } from './components/notification/Notification';
import { GlobalStyle } from './components/GlobalStyles';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateCounter = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = total => {
    return total ? Math.round((this.state.good * 100) / total) : 0;
  };

  render() {
    const stateKeys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.updateCounter}
          />
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
