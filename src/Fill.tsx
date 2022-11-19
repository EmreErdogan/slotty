import { useContext, useEffect } from 'react';

import { SlotContext } from './SlotContext';

export type FillProps = React.PropsWithChildren<{
  slot: string;
}>;

export const Fill: React.FC<FillProps> = ({ slot, children }) => {
  const { addFiller, removeFiller } = useContext(SlotContext);

  useEffect(() => {
    addFiller(slot, children);

    return () => {
      removeFiller(slot);
    };
  }, [slot, children, addFiller, removeFiller]);

  return null;
};
