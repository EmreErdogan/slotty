import * as React from 'react';

import { SlotContext, SlotContextType } from './SlotContext';

export type SlotProviderProps = {};

export class SlotProvider extends React.Component<
  SlotProviderProps,
  SlotContextType
> {
  constructor(props: SlotProviderProps) {
    super(props);

    this.state = {
      slots: {},
      fillers: {},
      addSlot: (name, children) => {
        this.setState(state => ({
          slots: { ...state.slots, [name]: children },
        }));
      },
      removeSlot: name => {
        this.setState(state => ({
          slots: { ...state.slots, [name]: null },
        }));
      },
      addFiller: (name, children) => {
        this.setState(state => ({
          fillers: { ...state.fillers, [name]: children },
        }));
      },
      removeFiller: name => {
        this.setState(state => ({
          fillers: { ...state.fillers, [name]: null },
        }));
      },
    };
  }

  render() {
    return (
      <SlotContext.Provider value={this.state}>
        {this.props.children}
      </SlotContext.Provider>
    );
  }
}

export default SlotProvider;
