import * as React from 'react';

export type SlotContextType = {
  slots: Record<string, React.ReactNode>;
  fillers: Record<string, React.ReactNode>;
  addSlot: (name: string, children: React.ReactNode) => void;
  removeSlot: (name: string) => void;
  addFiller: (name: string, children: React.ReactNode) => void;
  removeFiller: (name: string) => void;
};

export const SlotContext = React.createContext<SlotContextType>({
  slots: {},
  fillers: {},
  addSlot: _name => {},
  removeSlot: _name => {},
  addFiller: _name => {},
  removeFiller: _name => {},
});

export default SlotContext;
