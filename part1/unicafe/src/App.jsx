import { useState } from "react";

// step 4

const Feedback = (props) => {
  const { good, setGood, neutral, setNeutral, bad, setBad } = props;
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
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
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>All {all} </p>
          <p>Average {average}</p>
          <p>Positive {positive}</p>
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
