// step 4

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <div>
        {props.parts.map((part) => (
          <p>
            {part.name} {part.exercises}
          </p>
        ))}
      </div>
    );
  };

  const Total = (props) => {
    const total = props.parts.reduce((sum, curr) => sum + curr.exercises, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    </div>
  );
};

export default App;
