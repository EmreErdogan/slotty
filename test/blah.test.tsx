import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SlotProvider, Slot, Fill } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SlotProvider>
        <Slot name="test" />
        <Fill slot="test">Filled</Fill>
      </SlotProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
