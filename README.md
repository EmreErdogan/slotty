# slotty

> Simple React slots

[![NPM](https://img.shields.io/npm/v/slotty.svg)](https://www.npmjs.com/package/slotty)

## Install

```bash
npm install save slotty
```

## Usage

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Slot, Fill, SlotProvider } from 'slotty';

const App = () => {
  const [fillSlot1, setFillSlot1] = React.useState(true);
  const [fillSlot2, setFillSlot2] = React.useState(true);

  return (
    <SlotProvider>
      <div className="App">
        <Slot name="title">
          <h1>Title</h1>
        </Slot>

        <Slot name="subtitle" />

        {fillSlot1 && (
          <Fill slot="title">
            <h1>Custom title</h1>
          </Fill>
        )}

        {fillSlot2 && (
          <Fill slot="subtitle">
            <h2>Custom subtitle</h2>
          </Fill>
        )}

        <hr />
        <button onClick={() => setFillSlot1(!fillSlot1)}>
          Filling slot 1: {fillSlot1 ? 'Yes' : 'No'}
        </button>
        <button onClick={() => setFillSlot2(!fillSlot2)}>
          Filling slot 2: {fillSlot2 ? 'Yes' : 'No'}
        </button>
      </div>
    </SlotProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

## License

MIT © [EmreErdogan](https://github.com/EmreErdogan)
