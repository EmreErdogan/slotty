import { useContext, useEffect } from 'react';

import { SlotContext } from './SlotContext';

export type SlotProps = React.PropsWithChildren<{
  name: string;
}>;

export const Slot: React.FC<SlotProps> = ({ name, children }) => {
  const { slots, fillers, addSlot, removeSlot } = useContext(SlotContext);

  useEffect(() => {
    addSlot(name, children);

    return () => {
      removeSlot(name);
    };
  }, [name, children, addSlot, removeSlot]);

  return (fillers[name] || slots[name] || null) as any;
};
