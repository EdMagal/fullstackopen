// step 5

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  const Header = (props) => {
    return <h1>{props.courseName}</h1>;
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
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    </div>
  );
};

export default App;
