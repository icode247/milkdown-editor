## React Hook Example

Here is an example of a custom React hook that implements a state for counting the number of clicks:

```
import { useState } from 'react';

function useClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return [count, increment];
}

export default useClickCounter;
```

And here is an example of how you can use this hook in a component:

```
import React from 'react';
import useClickCounter from './useClickCounter';

function ClickCounter() {
  const [count, increment] = useClickCounter();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default ClickCounter;
```