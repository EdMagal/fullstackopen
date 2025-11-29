import { useState } from "react";

// step 4
const Button = (props) => {
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Feedback = (props) => {
  const { good, setGood, neutral, setNeutral, bad, setBad } = props;
  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive =
    ((good / (good + neutral + bad)) * 100 || 0).toFixed(2) + " %";

  return (
    <div>
      <h1>Statistics</h1>
      {all == 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own stat
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
