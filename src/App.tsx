import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p onClick={() => setCount(count + 1)}>
        count: {count}
      </p>
    </div>
  );
};

export default App;
