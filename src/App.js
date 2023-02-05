import * as React from "react";
import Button from "./Button";
import Clicky from "./anothabutton";

const App = ({ value = 0 }) => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button type="button" onClick={handleClick} data-testid="counter-button">
        Click Me
      </Button>

      <pre data-testid="counter-result">{value + count}</pre>

      <pre data-testid="counter-starting-value">{value}</pre>
    </div>
  );
};

export default App;
