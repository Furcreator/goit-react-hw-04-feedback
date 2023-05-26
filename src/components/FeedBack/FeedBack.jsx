import FeedbackButton from 'components/FeedbackButton/FeedbackButton';
import React, { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';


const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClickBtn = e => {
    switch (e.target.value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };
  const countTotal = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((good / countTotal()) * 100);
  };

  return (
    <>
      <Section title="Make you feedback">
        <FeedbackButton
          onClickBtn={handleClickBtn}
          options={['good', 'neutral', 'bad']}
        ></FeedbackButton>
      </Section>
      <Section title="Statistics">
        {countTotal() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            percentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

export default Feedback;
Feedback.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
};
